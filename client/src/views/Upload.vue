<template>
  <div id="upload">
    <h1>Getting started with Davi</h1>
    <form-wizard color="#a56ff2" @on-complete="onComplete">
      <h2 slot="title"></h2>
      <tab-content title="Personal details">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </tab-content>
      <tab-content title="Journey Info">
        <v-container fluid>
          <v-row>
            <h3>My billing status</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="billing"
                :items="options_billing"
                label="Billing"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <h3>My insurance is provided by</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="carrier"
                :items="options_carrier"
                label="Carrier"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <h3>and the type of plan is</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="plan"
                :items="options_plan"
                label="Plan"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <h3>With an income of</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="income"
                :items="options_income"
                label="Income"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </tab-content>
      <tab-content title="How do you feel?">
        <h1>Tell us how you feel about your healthcare financial standing?</h1>
        <v-container fluid>
          <v-subheader>Confidence Level</v-subheader>
          <v-slider
            v-model="energy_level"
            :tick-labels="labels_energy"
            :max="10"
            thumb-label="always"
            step="1"
            ticks="always"
            tick-size="4"
          ></v-slider>
        </v-container>
      </tab-content>
      <tab-content
        v-if="billing === 'Yes, I have received my bill.'"
        title="Upload Docs"
      >
        <h1>Upload your EOB document here</h1>
        <br />
        <vue-dropzone
          v-on:vdropzone-success="setEOB"
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
        ></vue-dropzone>
        <h1>Upload your Medical Bill here</h1>
        <br />
        <vue-dropzone
          v-on:vdropzone-success="setBill"
          ref="myVueDropzone2"
          id="dropzone2"
          :options="dropzone2Options"
        ></vue-dropzone>
        <br />
        <v-btn @click="removeAllFiles" large color="primary"
          >Remove All Files</v-btn
        >
        <v-btn @click="uploadEOB" large color="primary">Upload EOB</v-btn>
        <v-btn @click="uploadBill" large color="primary">Upload BILL</v-btn>
        <br />
        <br />
        <VueCamera />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import VueCamera from "@mrjeffapp/vuejs-camera";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import axios from "axios";

export default {
  name: "upload",
  components: {
    vueDropzone: vue2Dropzone,
    VueCamera: VueCamera,
    FormWizard,
    TabContent
  },
  data: function() {
    return {
      bill: null,
      eob: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage:
          "<i class='fa fa-cloud-upload'></i>Explanation of Benefits"
        // maxFilesize: 2, // MB
        // maxFiles: 4,
        // chunking: true,
        // chunkSize: 500, // Bytes
        // thumbnailWidth: 150, // px
        // thumbnailHeight: 150,
        // addRemoveLinks: true
      },
      dropzone2Options: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>Medical Bill"
        // maxFilesize: 2, // MB
        // maxFiles: 4,
        // chunking: true,
        // chunkSize: 500, // Bytes
        // thumbnailWidth: 150, // px
        // thumbnailHeight: 150,
        // addRemoveLinks: true
      },
      form: {
        first: "first", //Andrew
        last: "last", //Kim
        email: "email", //example@test.com
        insurance: "Aetna", //provider
        financial: "Savings",
        billing: "Pre/Post", //used to show upload steps,
        mood: "Sad",
        hospital_name: "Langone Center NYU"
      },
      files: {
        file_type: "EOB" //EOB or Bill
      },
      lastname: "Last Name",
      firstname: "First Name",
      email: "Email",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      billing: "",
      carrier: "",
      plan: "",
      income: "",
      options_carrier: [
        { text: "Un-insured", value: "un-insured" },
        { text: "COBRA", value: "COBRA" },
        { text: "Medicare", value: "Medicare" },
        { text: "Unitedhealth", value: "Unitedhealth" },
        { text: "Wellpoint", value: "Wellpoint" },
        { text: "Kaiser", value: "Kaiser" },
        { text: "Humana", value: "Humana" },
        { text: "Aetna", value: "Aetna" },
        { text: "BlueCross", value: "Bluecross" },
        { text: "Cigna", value: "Cigna" },
        { text: "Highmark", value: "Highmark" }
      ],
      options_income: [
        "$0 to $9,525",
        "$9,526 to $38,700",
        "$38,701 to $82,500",
        "$82,501 to $157,500",
        "$157,501 to $200,000",
        "$200,001 to $500,000",
        "$500,001 or more"
      ],
      options_billing: [
        "Yes, I have received my bill.",
        "No, I have not received my bill."
      ],
      options_plan: [
        "Medicare",
        "Advantage",
        "BlueCross BlueShield of California - Medicare",
        "Amerigroup - Medicare"
      ],
      labels_energy: ["Low", "", "", "", "", "", "", "", "", "", "High"],
      energy_level: 5,
      pleasant_level: 5
    };
  },
  created: function() {
    // this.postAxios();
  },
  methods: {
    onComplete: function() {
      this.$router.push("matching");
    },
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.$refs.myVueDropzone2.removeAllFiles();
    },
    getAcceptedFiles() {
      this.$refs.myVueDropzone.getAcceptedFiles();
      this.$refs.myVueDropzone2.getAcceptedFiles();
    },
    setBill(file, response) {
      this.bill = file;
      console.log(file, response);
    },
    setEOB(file, response) {
      this.eob = file;
      console.log(file, response);
    },
    uploadEOB() {
      var form = new FormData();
      form.append("file", this.eob);
      axios
        .post("https://trydavi.com/api/drive/upload/eob", form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return error;
        })
        .finally(function() {
          // always executed
        });
    },
    uploadBill() {
      var form = new FormData();
      form.append("file", this.bill);
      axios
        .post("https://trydavi.com/api/drive/upload/bill", form, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
          return error;
        })
        .finally(function() {
          // always executed
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#upload {
  .wizard-header {
    display: none !important;
  }
  .wizard-tab-container {
    width: 50% !important;
    margin: auto !important;
  }
  .vue-form-wizard .wizard-tab-content {
    width: 45% !important;
    margin: auto !important;

    .row {
      justify-content: space-between;
    }
  }
}
</style>
