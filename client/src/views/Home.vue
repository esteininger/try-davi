<template>
  <!-- begin landing page -->
  <div class="site-wrapper">
    <!-- Hero Area  -->
    <section class="hero-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 order-lg-2">
            <div class="hero-image">
              <img src="@/assets/updated.svg" alt="" />
            </div>
          </div>
          <div class="col-lg-7 order-lg-1">
            <div class="hero-content">
              <h1>Remove the stress from your medical bills</h1>
              <p>
                Davi assigns you a medical billing expert to reduce your owed
                medical bills, saving you money and stress.
              </p>
              <div class="hero-form" id="cta-form">
                <div class="form-group">
                  <select type="text" class="form-control" id="cta-state">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <router-link to="/upload"
                    ><button id="cta-submit" class="submit-btn">
                      Get Started
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Area  -->
    <section class="feature-section" id="how-it-works">
      <div class="shape">
        <img src="@/assets/landing-1-shape.svg" alt="" />
      </div>
      <div class="container text-center">
        <div class="section-title text-center">
          <h2>Here’s How It Works</h2>
          <p>
            You should focus on health and recovery, let our medical billing
            experts navigate the industry for you.
          </p>
        </div>
        <div class="row mb-d-30">
          <div class="col-md-6 col-lg-4 mb--30">
            <div class="feature-card">
              <div class="card-icon">
                <i class="icon icon-users-mm"></i>
              </div>
              <div class="card-content">
                <h3>1. Send Bills</h3>
                <p>
                  Send copies of your bills to our experts through our
                  HIPAA-compliant, secure, online form.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb--30">
            <div class="feature-card">
              <div class="card-icon">
                <i class="icon icon-send"></i>
              </div>
              <div class="card-content">
                <h3>2. We Negotiate</h3>
                <p>
                  Get regular updates as our experts quickly coordinate all the
                  pieces to clarify and find savings.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb--30">
            <div class="feature-card">
              <div class="card-icon">
                <i class="icon icon-settings"></i>
              </div>
              <div class="card-content">
                <h3>3. Enjoy Savings</h3>
                <p>
                  Our modest fee is 40% of what you save, earned only when we
                  save you money.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-form" style="padding: 20px 0px 0 0;">
          <div class="form-group" style="display: contents;padding: 0;">
            <router-link to="/upload"
              ><button class="submit-btn">Get Started</button></router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features Area  -->
    <section class="content-section-01">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 offset-xl-1 col-sm-6">
            <div class="content-right-content">
              <p>
                "Can’t recommend Davi enough. Not only did they get me back
                $1,200, but they got me back invaluable time I’d have spent
                pulling my hair out on the phone."
              </p>
              <p>
                John Smith, Saved $1,200
              </p>
              <div class="content-link">
                <a href="/start"
                  >Start Saving <i class="icon icon-minimal-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-xl-5  col-sm-6 col-10">
            <div class="content-img">
              <img src="@/assets/things_to_say.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section-01" id="who-its-for">
      <div class="container">
        <div class="row justify-content-center">
          <div class="tesimonial-section">
            <div class="container">
              <div class="row">
                <div class="col-xl-4">
                  <div class="testimonial-content">
                    <h2>20,000 no longer worry about their medical bills.</h2>
                    <p>
                      Davi experts are focused on reducing medical billing costs
                      so you, and your loved ones can focus on what's important:
                      <strong>recovery</strong>.
                    </p>
                  </div>
                </div>

                <div class="col-xl-8">
                  <div class="masonry-with-columns">
                    <div class="testimonial-card">
                      <div class="card-content">
                        <p>
                          Emergency visits result in the most expensive bills in
                          healthcare. These are often over-inflated, but we have
                          ER billing veterans for that.
                        </p>
                      </div>

                      <div class="card-id">
                        <div class="id-img">
                          <img src="@/assets/folks/t5-nav-1.png" alt="" />
                        </div>
                        <div class="id-content">
                          <h6>Emergency</h6>
                          <span>Average saving: $800</span>
                        </div>
                      </div>
                    </div>
                    <div class="testimonial-card">
                      <div class="card-content">
                        <p>
                          Emergency visits result in the most expensive bills in
                          healthcare. These are often over-inflated, but we have
                          ER billing veterans for that.
                        </p>
                      </div>

                      <div class="card-id">
                        <div class="id-img">
                          <img src="@/assets/folks/t5-nav-1.png" alt="" />
                        </div>
                        <div class="id-content">
                          <h6>Emergency</h6>
                          <span>Average saving: $800</span>
                        </div>
                      </div>
                    </div>
                    <div class="testimonial-card">
                      <div class="card-content">
                        <p>
                          Emergency visits result in the most expensive bills in
                          healthcare. These are often over-inflated, but we have
                          ER billing veterans for that.
                        </p>
                      </div>

                      <div class="card-id">
                        <div class="id-img">
                          <img src="@/assets/folks/t5-nav-1.png" alt="" />
                        </div>
                        <div class="id-content">
                          <h6>Emergency</h6>
                          <span>Average saving: $800</span>
                        </div>
                      </div>
                    </div>
                    <div class="testimonial-card">
                      <div class="card-content">
                        <p>
                          Emergency visits result in the most expensive bills in
                          healthcare. These are often over-inflated, but we have
                          ER billing veterans for that.
                        </p>
                      </div>

                      <div class="card-id">
                        <div class="id-img">
                          <img src="@/assets/folks/t5-nav-1.png" alt="" />
                        </div>
                        <div class="id-content">
                          <h6>Emergency</h6>
                          <span>Average saving: $800</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing section -->
    <section class="pricing-section" id="pricing">
      <div class="shape">
        <img src="@/assets/landing-2-shape.svg" alt="" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2>Simple Pricing</h2>
              <p style="color: #f8f8f8;">
                Our modest fee is
                <span class="highlight">40% of your savings</span>, earned only
                when we do our job effectively. Davi lowers your bill or there
                is no cost to you. That’s why our Experts work so hard to get
                you results.
              </p>
              <div class="hero-form" style="padding: 0;">
                <div class="form-group" style="display: contents;">
                  <router-link to="/upload"
                    ><button class="submit-btn">
                      Get Started
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data section -->
    <section>
      <div class="footer-newsletter-section">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-8">
            <div class="footer-newsletter-content">
              <h2>We will never share your data</h2>
              <p>
                The only group that will ever have access to your data is us and
                the expert bill negotiator. Nobody else. Period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {
    getStarted() {
      this.$router.push("/upload");
    }
  }
};
</script>

<style lang="scss" scoped></style>
