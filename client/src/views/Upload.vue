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
          <v-row>
            <h3>My billing status</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select v-model="billing" :items="options_billing" label="Billing"></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <h3>My insurance is provided by</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select v-model="carrier" :items="options_carrier" label="Carrier"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select v-model="plan" :items="options_plan" label="Plan"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <h3>With an income of</h3>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select v-model="income" :items="options_income" label="Income"></v-select>
            </v-col>
          </v-row>
        </v-container>
      </tab-content>
      <tab-content title="How do you feel?">
        Tell us about how you are feeling right now...
        <v-container fluid>
          <v-subheader>Energy Level</v-subheader>
          <v-slider
            v-model="energy_level"
            :tick-labels="labels_energy"
            :max="10"
            thumb-label="always"
            step="1"
            ticks="always"
            tick-size="4"
          ></v-slider>

          <v-subheader>Pleasantness Level</v-subheader>
          <v-slider
            v-model="pleasant_level"
            :tick-labels="labels_pleasantness"
            :max="10"
            thumb-label="always"
            step="1"
            ticks="always"
            tick-size="4"
          ></v-slider>
        </v-container>
        <div class="meter-container">
          <div class="quadrant quadrant-one">
            <div style="background-color:#fd0100">Enraged</div>
            <div style="background-color:#fc2700">Panicked</div>
            <div style="background-color:#ff4400">Stressed</div>
            <div style="background-color:#ff5b00">Jittery</div>
            <div style="background-color:#fd7b03">Shocked</div>
            <!-- row -->
            <div style="background-color:#ee0808">Livid</div>
            <div style="background-color:#ed2805">Furious</div>
            <div style="background-color:#e93e08">Frustrated</div>
            <div style="background-color:#ec5408">Tense</div>
            <div style="background-color:#ed6a09">Stunned</div>
            <!-- row -->
            <div style="background-color:#dd1112">Fuming</div>
            <div style="background-color:#de2610">Frightened</div>
            <div style="background-color:#dd390d">Angry</div>
            <div style="background-color:#dd390d">Nervous</div>
            <div style="background-color:#dd5b10">Restless</div>
            <!-- row -->
            <div style="background-color:#d0181a">Anxious</div>
            <div style="background-color:#cf2919">Apprehensive</div>
            <div style="background-color:#d03717">Worried</div>
            <div style="background-color:#d03717">Irritated</div>
            <div style="background-color:#ce4e18">Annoyed</div>
            <!-- row -->
            <div style="background-color:#c11e19">Repulsed</div>
            <div style="background-color:#c22921">Troubled</div>
            <div style="background-color:#c43121">Concerned</div>
            <div style="background-color:#be3b1d">Uneasy</div>
            <div style="background-color:#c2441c">Peeved</div>
          </div>
          <div class="quadrant quadrant-two">
            <div style="background-color:#fcb700">Surprised</div>
            <div style="background-color:#fdc300">Upbeat</div>
            <div style="background-color:#fbce00">Festive</div>
            <div style="background-color:#f5db02">Exhilarated</div>
            <div style="background-color:#f4e600">Ecstatic</div>
            <!-- row -->
            <div style="background-color:#fab609">Hyper</div>
            <div style="background-color:#f8be05">Cheerful</div>
            <div style="background-color:#f4cb07">Motivated</div>
            <div style="background-color:#f4d407">Inspired</div>
            <div style="background-color:#f2df07">Elated</div>
            <!-- row -->
            <div style="background-color:#f3b610">Energized</div>
            <div style="background-color:#fd0100">Lively</div>
            <div style="background-color:#fd0100">Enthusiastic</div>
            <div style="background-color:#fd0100">Optimistic</div>
            <div style="background-color:#fd0100">Excited</div>
            <!-- row -->
            <div style="background-color:#fd0100">Pleased</div>
            <div style="background-color:#fd0100">Happy</div>
            <div style="background-color:#fd0100">Focused</div>
            <div style="background-color:#fd0100">Proud</div>
            <div style="background-color:#fd0100">Thrilled</div>
            <!-- row -->
            <div style="background-color:#fd0100">Pleasant</div>
            <div style="background-color:#fd0100">Joyful</div>
            <div style="background-color:#fd0100">Hopeful</div>
            <div style="background-color:#fd0100">Playful</div>
            <div style="background-color:#fd0100">Blissful</div>
          </div>
          <div class="quadrant quadrant-three">
            <div style="background-color:#fd0100">Disgusted</div>
            <div style="background-color:#fd0100">Glum</div>
            <div style="background-color:#fd0100">Disappointed</div>
            <div style="background-color:#fd0100">Down</div>
            <div style="background-color:#fd0100">Apathetic</div>
            <!-- row -->
            <div style="background-color:#fd0100">Pessimistic</div>
            <div style="background-color:#fd0100">Morose</div>
            <div style="background-color:#fd0100">Discouraged</div>
            <div style="background-color:#fd0100">Sad</div>
            <div style="background-color:#fd0100">Bored</div>
            <!-- row -->
            <div style="background-color:#fd0100">Alienated</div>
            <div style="background-color:#fd0100">Miserable</div>
            <div style="background-color:#fd0100">Lonely</div>
            <div style="background-color:#fd0100">Disheartened</div>
            <div style="background-color:#fd0100">Tired</div>
            <!-- row -->
            <div style="background-color:#fd0100">Despondent</div>
            <div style="background-color:#fd0100">Depressed</div>
            <div style="background-color:#fd0100">Sullen</div>
            <div style="background-color:#fd0100">Exhausted</div>
            <div style="background-color:#fd0100">Fatigued</div>
            <!-- row -->
            <div style="background-color:#fd0100">Despair</div>
            <div style="background-color:#fd0100">Hopeless</div>
            <div style="background-color:#fd0100">Desolate</div>
            <div style="background-color:#fd0100">Spent</div>
            <div style="background-color:#fd0100">Drained</div>
          </div>
          <div class="quadrant quadrant-four">
            <div style="background-color:#fd0100">Ease</div>
            <div style="background-color:#fd0100">Easygoing</div>
            <div style="background-color:#fd0100">Content</div>
            <div style="background-color:#fd0100">Loving</div>
            <div style="background-color:#fd0100">Fulfilled</div>
            <!-- row -->
            <div style="background-color:#fd0100">Calm</div>
            <div style="background-color:#fd0100">Secure</div>
            <div style="background-color:#fd0100">Satisfied</div>
            <div style="background-color:#fd0100">Grateful</div>
            <div style="background-color:#fd0100">Touched</div>
            <!-- row -->
            <div style="background-color:#fd0100">Relaxed</div>
            <div style="background-color:#fd0100">Chill</div>
            <div style="background-color:#fd0100">Restful</div>
            <div style="background-color:#fd0100">Blessed</div>
            <div style="background-color:#fd0100">Balanced</div>
            <!-- row -->
            <div style="background-color:#fd0100">Mellow</div>
            <div style="background-color:#fd0100">Thoughtful</div>
            <div style="background-color:#fd0100">Peaceful</div>
            <div style="background-color:#fd0100">Comfy</div>
            <div style="background-color:#fd0100">Carefree</div>
            <!-- row -->
            <div style="background-color:#fd0100">Sleepy</div>
            <div style="background-color:#fd0100">Complacent</div>
            <div style="background-color:#fd0100">Tranquil</div>
            <div style="background-color:#fd0100">Cozy</div>
            <div style="background-color:#fd0100">Serene</div>
          </div>
        </div>
        <div>Energy, Pleasantness (axes)</div>
      </tab-content>
      <tab-content title="Upload Docs">
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        <button @click="removeAllFiles">Remove All Files</button>
        <VueCamera />
      </tab-content>
      <!-- <tab-content title="Capture Bill">
      </tab-content>-->
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
      options_billing: ["Pre", "Post"],
      options_plan: ["PPO", "HMO"],
      labels_energy: ["Low", "", "", "", "", "", "", "", "", "", "High"],
      labels_pleasantness: [
        "Unpleasant",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Pleasant"
      ],
      energy_level: 5,
      pleasant_level: 5
    };
  },
  created: function() {
    this.getAxios();
  },
  methods: {
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
    getAxios() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json", {
          params: {
            ID: 12345
          }
        })
        .then(function(response) {
          return response;
          // console.log(response);
        })
        .catch(function(error) {
          return error;
          // console.log(error);
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
  //  background-color: var(--dark-green);

  .meter-container {
    width: 50rem;
    height: 50rem;
    border: 1px solid black;
    margin: auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    .quadrant {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .quadrant-one {
    }
    .quadrant-two {
    }
    .quadrant-three {
    }
    .quadrant-four {
    }
  }
}
</style>