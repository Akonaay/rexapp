<template>
  <div>
    <!-- About Banner -->
    <section class="bg-about position-relative">
      <div class="serve-overlay py-5">
        <div class="container text-white">
          <h6 class="sub-title-1">Communication Bridge</h6>
          <h3 class="hny-title two">Get To Know Us</h3>
        </div>
      </div>
    </section>

    <!-- Short story  -->
    <div class="container py-lg-3">
      <div class="title-section">
        <h3 class="main-title-w3">Who we are</h3>
        <div class="title-line"></div>
      </div>
      <div class="row w3-services-grids mt-4">
        <div class="col-lg-5 w3-services-left-grid">
          <h6 class="sub-title">Background</h6>
          <h3 class="hny-title">Our Story</h3>

          <p class="text-justify">
            Rex&Regina Attorneys at Law is a firm of dully
            practising advocates, lawyers and legal advisers in
            Tanzania. The Firm is recognised in Tanzania and
            internationally through its team for its professionalism
            and for providing excellent legal services.
          </p>

          <div class="more mt-4">
            <a
              href="/practice-areas"
              class="button is-fullwidth is-primary is-rounded text-decoration-none"
            >Know more</a>
          </div>
        </div>
        <div class="col-lg-7 w3-services-right-grid mt-lg-0 mt-5 pl-lg-5">
          <div class="row mt-lg-5 w3-icon-grid-gap1">
            <div class="col-md-6 mt-3 col-sm-6 w3-icon-grid1">
              <a href="#vision">
                <span class="fa fa-tint text-primary" aria-hidden="true"></span>
                <h3>Vision</h3>
                <div class="clearfix"></div>
              </a>
              <p>
                Provide our clients with skilled legal advice in
                a timely and efficient manner.
              </p>
            </div>
            <div class="col-md-6 mt-3 col-sm-6 w3-icon-grid1">
              <a href="#mission">
                <span class="fa fa-balance-scale text-primary" aria-hidden="true"></span>
                <h3>Mission</h3>
                <div class="clearfix"></div>
              </a>
              <p>
                Provide our clients with skilled legal advice in
                a timely and efficient manner.
              </p>
            </div>
            <!-- <div class="col-md-6 col-sm-6 w3-icon-grid1">
              <a href="#animation">
                <span class="fa fa-hourglass text-primary" aria-hidden="true"></span>
                <h3>Animation</h3>
                <div class="clearfix"></div>
              </a>
              <p>
                Lorem ipsum dolor sit amet, init sed adipisci
                ngelit. In euismod faucibus.
              </p>
            </div>
            <div class="col-md-6 col-sm-6 w3-icon-grid1">
              <a href="#photoshop">
                <span class="fa fa-photo text-primary" aria-hidden="true"></span>
                <h3>Photoshop</h3>
                <div class="clearfix"></div>
              </a>
              <p>
                Lorem ipsum dolor sit amet, init sed adipisci
                ngelit. In euismod faucibus.
              </p>
            </div>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->
    <section class="w3l-team-main">
      <div class="team">
        <div class="container py-lg-5">
          <div class="row team-row">
            <div class="col-lg-6 col-md-4 team-left">
              <div class="title-content text-left" id="partner">
                <h6 class="sub-title"></h6>
                <h3 class="hny-title">The Partners</h3>
                <p class="text-justify">
                  The best asset of Rex is the quality of its Partners and the entire team that forms part of the Firm.
                  <br />
                  <br />The Partners are supported energetic team of Legal Officers and Associates
                </p>
              </div>
            </div>
            <!-- end team member -->

            <div class="col-lg-3 col-md-4 team-wrap">
              <div class="team-info text-left">
                <div class="column position-relative">
                  <a href="#url">
                    <img src="/images/3619-2.jpg" alt class="img-fluid team-image rounded" />
                  </a>
                </div>
                <div class="column">
                  <h3 class="name-pos">
                    <a href="#url" class="text-decoration-none">Ezekiel Kihali</a>
                  </h3>
                  <p>Partner</p>
                  <div class="social">
                    <div class="social-left">
                      <a href="#linkedin" class="linkedin">
                        <span class="fa fa-linkedin" aria-hidden="true"></span>
                      </a>
                      <a href="#twitter" class="twitter">
                        <span class="fa fa-twitter" aria-hidden="true"></span>
                      </a>
                    </div>
                    <div class="social-right">
                      <a href="#email" class="email">
                        <span class="fa fa-envelope-o"></span>
                      </a>
                      <a href="tel:+255 22 221 4145" class="phone">
                        <span class="fa fa-phone"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end team member -->

            <div class="col-lg-3 col-md-4 team-wrap">
              <div class="team-info text-left">
                <div class="column position-relative">
                  <a href="#url">
                    <img src="/images/3656-2.jpg" alt class="img-fluid team-image rounded" />
                  </a>
                </div>
                <div class="column">
                  <h3 class="name-pos">
                    <a href="#url" class="text-decoration-none">Thomas Okello</a>
                  </h3>
                  <p>Partner</p>
                  <div class="social">
                    <div class="social-left">
                      <a href="#linkedin" class="linkedin">
                        <span class="fa fa-linkedin" aria-hidden="true"></span>
                      </a>
                      <a href="#twitter" class="twitter">
                        <span class="fa fa-twitter" aria-hidden="true"></span>
                      </a>
                    </div>
                    <div class="social-right">
                      <a href="#email" class="email">
                        <span class="fa fa-envelope-o"></span>
                      </a>
                      <a href="#phone" class="phone">
                        <span class="fa fa-phone"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end team member -->
          </div>
        </div>
      </div>
    </section>

    <!-- Footer  -->
    <Footer />
  </div>
</template>

<script>
import Footer from "./../includes/Footer";
export default {
  name: "about",
  components: { Footer },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
