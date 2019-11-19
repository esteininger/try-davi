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
                  v-model="fullname"
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
      <tab-content title="Upload Bill">
        <h1>Upload your Medical Bill here</h1>
        <br />
        <vue-dropzone
          v-on:vdropzone-success="setBill"
          ref="myVueDropzone2"
          id="dropzone2"
          :options="dropzone2Options"
        ></vue-dropzone>
        <br />
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
      files: {
        file_type: "EOB" //EOB or Bill
      },
      phonenumber: "Phone Number",
      fullname: "First & Last",
      email: "Email",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Name must be less than 20 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
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
    sendPatientInfo() {
      const patientInfo = {
        patientUUID: this.patientUUID,
        fullname: this.fullname,
        email: this.email,
        phonenumber: this.phonenumber
      };
      return patientInfo;
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
