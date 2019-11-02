<template>
  <div id="upload">
    <h1>Upload</h1>
    <form-wizard>
      <tab-content title="Personal details">My first tab content</tab-content>
      <tab-content title="Additional Info">My second tab content</tab-content>
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
      }
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