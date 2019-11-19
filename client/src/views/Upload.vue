<template>
  <div id="upload">
    <form-wizard color="#187777" @on-complete="onComplete">
      <h2 slot="title"></h2>
      <tab-content title="Personal details">
        <v-form>
          <v-container class="mt-12 mb-12">
            <v-row>
              <v-col cols="12" md="4" class="mx-auto">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="mx-auto">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="mx-auto">
                <v-text-field
                  v-model="phonenumber"
                  :rules="nameRules"
                  :counter="20"
                  label="Phone Number"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </tab-content>
      <tab-content title="Upload Docs">
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
        <!-- <v-btn @click="removeAllFiles" large color="primary"
          >Remove All Files</v-btn
        > -->
        <v-btn @click="uploadEOB" large color="primary">Upload EOB</v-btn>
        <v-btn @click="uploadBill" large color="primary">Upload BILL</v-btn>
        <br />
        <br />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import axios from "axios";

export default {
  name: "upload",
  components: {
    vueDropzone: vue2Dropzone,
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
      phonenumber: "Phone Number",
      firstname: "Full Name",
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
      pleasant_level: 5,
      axiosConfig: {
        headers: {
          "cache-control": "no-cache",
          "Content-Type": "multipart/form-data"
        },
        crossDomain: true,
        processData: false
      }
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
        .post(
          "https://trydavi.com/api/drive/upload/eob",
          form,
          this.axiosConfig
        )
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
        .post(
          "https://trydavi.com/api/drive/upload/bill",
          form,
          this.axiosConfig
        )
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
