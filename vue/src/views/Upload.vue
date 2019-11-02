<template>
  <div id="upload">
    <h1>Upload</h1>
    <form-wizard>
      <tab-content title="Personal details">
        <v-form v-model="valid">
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
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </tab-content>
      <tab-content title="Journey Info">
        <v-container fluid>
          <v-row align="center">
            <h3>I am</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Standard"></v-select>
            </v-col>
            <h3>insured</h3>
          </v-row>
          <v-row>
            <h3>with</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Standard"></v-select>
            </v-col>
            <h3>savings</h3>
          </v-row>
          <v-row>
            <h3>billing</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Standard"></v-select>
            </v-col>
            <h3>pre post</h3>
          </v-row>
          <v-row>
            <h3>In a range of</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Standard"></v-select>
            </v-col>
            <h3>much</h3>
          </v-row>
        </v-container>
      </tab-content>
      <tab-content title="Last step">Yuhuuu! This seems pretty damn simple</tab-content>
      <tab-content title="Last step">
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        <button @click="removeAllFiles">Remove All Files</button>
      </tab-content>
      <tab-content title="Last step">
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
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
        // maxFilesize: 2, // MB
        // maxFiles: 4,
        // chunking: true,
        // chunkSize: 500, // Bytes
        // thumbnailWidth: 150, // px
        // thumbnailHeight: 150,
        // addRemoveLinks: true
      },
      items: ["andrew", "kim"]
    };
  },
  methods: {
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    }
  }
};
</script>

<style lang="scss" scoped>
#upload {
  //  background-color: var(--dark-green);
}
</style>