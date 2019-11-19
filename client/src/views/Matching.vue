<template>
  <div id="matching">
    <h1>Congratulations, you have been matched with</h1>
    <br />
    <v-container>
      <v-row>
        <v-col v-for="expert in experts" :key="expert.id">
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-avatar color="grey">
                <img :src="require(`@/assets/${expert.pic}`)" :key="id" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  expert.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  expert.company
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text
              >A heart attack can be overwhelming for you and your family. I
              bring professional and personal experience to help you discover
              your blindspots, understand your options, gain confidence and save
              you time.</v-card-text
            >

            <div class="more-info">
              <div>
                <h4>Location:</h4>
                <p>{{ expert.loc }}</p>
              </div>
              <div>
                <h4>Telephone:</h4>
                <p>{{ expert.tel }}</p>
              </div>
              <div>
                <h4>Website:</h4>
                <p>{{ expert.site }}</p>
              </div>
              <div>
                <h4>Email:</h4>
                <p>{{ expert.email }}</p>
              </div>
              <div>
                <h4>Rating:</h4>
                <p>{{ expert.rating }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <h1>Below is Myrna's availability.</h1>
    <h1>Highlight your availability for a 15 minute consultation.</h1>
    <br />
    <Schedule />
    <br />
    <br />
    <v-btn @click="onSchedule" large color="primary">Schedule Now</v-btn>
  </div>
</template>

<script>
import Schedule from "@/views/Schedule";

export default {
  components: { Schedule },
  data: function() {
    return {
      show: false,
      experts: [
        {
          name: "Myrna Cortez",
          pic: "Myrna_Cortez.jpg",
          company: "ProMediClaim, Inc.",
          loc: "Evanston , IL 60201",
          tel: "(847)332-1090 ",
          site: "http://www.promediclaim.com",
          email: "myrna@promediclaim.com",
          rating: "4.27"
        }
      ]
    };
  },
  methods: {
    onSchedule(expert) {
      this.$router.push({ path: "complete", params: { expert } });
    }
  },
  getImgUrl(pic) {
    return require("../assets/" + pic);
  }
};
</script>

<style lang="scss" scoped>
#matching {
  padding-bottom: 5rem;
}

.more-info {
  padding: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    p {
      padding-left: 1rem;
    }
  }
}
</style>
