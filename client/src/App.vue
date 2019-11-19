<template>
  <v-app id="app">
    <header class="site-header">
      <div class="container">
        <div
          class="row justify-content-center align-items-center position-relative"
        >
          <div class="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
            <div class="brand">
              <router-link to="/"
                ><img src="@/assets/footer-logo.png" alt=""
              /></router-link>
            </div>
          </div>

          <!-- Menu Block -->
          <div
            class="col-sm-1 col-6 col-lg-7 col-xl-6 offset-xl-1 position-static order-lg-2"
          >
            <div class="main-navigation">
              <ul class="main-menu">
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#how-it-works'"
                    >How it Works</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#who-its-for'"
                    >Who it's For</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#pricing'"
                    >Pricing</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="mobile-menu"></div>
          </div>

          <!-- <div class="col-sm-8 col-lg-3 col-xl-3 d-none d-sm-block order-lg-3">
            <div class="header-btns">
              <div class="btn-2">
                <router-link to="/upload">Get Started</router-link>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </header>
    <router-view />
    <div class="footer-section">
      <div class="container">
        <div class="row margin-decrese">
          <div class="col-xl-4 col-lg-5 col-margin">
            <div class="single-footer">
              <div class="footer-title">
                <router-link to="/"
                  ><img src="@/assets/footer-logo.png" alt=""
                /></router-link>
              </div>
              <div class="footer-text">
                <p>
                  We at Davi Health envision a world where people focus on their
                  health, not their stressful medical bills.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 offset-lg-1 col-margin">
            <div class="single-footer">
              <div class="footer-title">
                <h6>Navigate</h6>
              </div>
              <ul class="footer-list">
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#how-it-works'"
                    >How it Works</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#who-its-for'"
                    >Who it's For</router-link
                  >
                </li>
                <li class="menu-item">
                  <router-link to="/" v-scroll-to="'#pricing'"
                    >Pricing</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 offset-lg-1 col-margin">
            <div class="single-footer">
              <div class="footer-title">
                <h6>Company</h6>
              </div>
              <ul class="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    clickLogo() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style.css";
@import "./assets/settings.css";
@import "./assets/meanmenu.css";

:root {
  --orange: #ffc776;
  --dark-green: #005450;
  --green: #068466;
  --lime: #abcc76;
  --sky: #8aced4;
  --pastel-blue: #9ab4dd;
  --dark-oragen: #b57931;
  --light-grey: #f4f4f4;
}

body {
  margin: 0;
}

#app {
  font-family: "Karla", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .logo {
    width: 10rem;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//overrides

.vue-form-wizard .wizard-card-footer {
  width: 50% !important;
  margin: auto !important;
}

.theme--light.v-calendar-events .v-event-timed {
  background-color: #424242b8 !important;
}

.brand-anchor {
  display: inline-block !important;
  padding-right: 1rem !important;
}
</style>
