<template>
  <!-- begin landing page -->
  <div class="site-wrapper">
    <!-- Hero Area  -->
    <section class="hero-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2">
            <div class="hero-image">
              <img src="@/assets/updated.svg" alt="" />
            </div>
          </div>
          <div class="col-lg-5 order-lg-1">
            <div class="hero-content">
              <h1>Remove the stress from your medical bills</h1>
              <p>
                Davi assigns you a medical billing expert to reduce your owed
                medical bills, saving you money and stress.
              </p>
              <!-- <p>
                The medical industry counts on you not understanding what you
                are being billed for and they use it against you
              </p> -->
              <div class="hero-form" id="cta-form">
                <div class="form-group">
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
            You should focus on health and recovery, let our patient advocates
            navigate the billing on your behalf.
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
                  Through our HIPAA-compliant, secure, online form, our experts
                  comb through your bills to find errors.
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
                <h3>3. Avoid Debt</h3>
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
              ><button class="submit-btn">
                Consult Now
              </button></router-link
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
                <a href="/start">Start Saving →</a>
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
                <div class="col-lg-4 col-xl-4">
                  <div class="testimonial-content">
                    <h2>20,000 no longer worry about their medical bills.</h2>
                    <p>
                      Davi experts are focused on reducing medical billing costs
                      so you, and your loved ones can focus on what's important:
                      <strong>recovery</strong>.
                    </p>
                  </div>
                </div>

                <div class="col-lg-8 col-xl-8">
                  <div class="masonry-with-columns">
                    <div class="testimonial-card">
                      <div class="card-content">
                        <p>
                          Advocates are experts in medical billing who know how
                          to read medical bills and understand common costs for
                          procedures. They can spot potential errors or
                          overcharging and help you reduce the amount you owe.
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
                          For medical bills in collections, know that debt
                          collectors generally buy debts for pennies on the
                          dollar. That gives you some good leverage to
                          negotiate.
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
          <div class="col-lg-8 margin-auto">
            <div class="section-title text-center">
              <h2>Simple Pricing</h2>
              <p>
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
                      Save Now
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
          <div class="col-lg-10 col-xl-8 margin-auto">
            <div class="footer-newsletter-content margin-auto">
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

<style lang="scss" scoped>
.justify-content-center {
  justify-content: center;
}
</style>
