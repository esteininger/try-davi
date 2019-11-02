<template>
  <div id="upload">
      <h1>Upload</h1>
      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
      <button @click="removeAllFiles">Remove All Files</button>

      <br>
      <br>
      <VueCamera />

  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import VueCamera from '@mrjeffapp/vuejs-camera'


export default {
    name: 'upload',
  components: {
    vueDropzone: vue2Dropzone,
    VueCamera: VueCamera
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" },
            // maxFilesize: 2, // MB
            // maxFiles: 4,
            // chunking: true,
            // chunkSize: 500, // Bytes
            // thumbnailWidth: 150, // px
            // thumbnailHeight: 150,
            // addRemoveLinks: true
      }
    }
  },
  methods: {
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    }
  }
}
</script>

<style lang="scss" scoped>
 #upload{
    //  background-color: var(--dark-green);
 }
</style>