<template>
  <div id="wrapper">
    <!-- Intro  -->
    <section id="intro">
      <div class="intro-content">
        <h2>
          Making
          <span>your ideas</span>
          <br />happen!
        </h2>
        <div>
          <a href="/our-firm" class="btn-get-started scrollto">Get Started</a>
          <a href="/practice-areas" class="btn-projects scrollto">Our Expertise</a>
        </div>
      </div>

      <carousel :autoplay="true" :nav="false" :items="1" id="intro-carousel">
        <img class="item" src="/images/intro-carousel/1.jpg" />

        <img class="item" src="/images/intro-carousel/2.jpg" />

        <img class="item" src="/images/intro-carousel/3.jpg" />

        <img class="item" src="/images/intro-carousel/4.jpg" />
      </carousel>
    </section>
    <!-- End Intro -->

    <!-- Practice Areas -->
    <div class="mt-4 mb-3 container">
      <h6 class="sub-title"></h6>
      <h3 class="hny-title">Practice Areas</h3>

      <div class="row text-center mt-lg-3 mt-3">
        <div
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xs-3 w3l-team-main"
          v-for="service in services.slice(0, 4)"
          :key="service.id"
        >
          <div class="column">
            <router-link :to="`/practice-areas/${service.id}`" class="alink">
              <img
                :src="`/storage/service_icons/${service.icon}`"
                alt
                class="img-responsive hover rounded"
              />
            </router-link>

            <h4 class="mt-4 hover">
              <router-link
                class="alink text-decoration-none"
                :to="`/practice-areas/${service.id}`"
              >{{ service.title }}</router-link>
            </h4>
          </div>
        </div>
      </div>
      <!-- View all btn -->
      <div class="row mt-3">
        <div class="col-md-12 col-lg-12 col-sm-12 d-flex justify-content-end">
          <a href="/practice-areas" class="text-decoration-none">
            <button class="button is-warning is-rounded is-fullwidth">More &rarr;</button>
          </a>
        </div>
      </div>
    </div>
    <!-- Practice Areas -->

    <!-- News & Resources  -->
    <section class="site-section bg-light mb-4" id="blog-section">
      <div class="container">
        <h6 class="sub-title"></h6>
        <h3 class="hny-title">Recent News</h3>
        <div class="row mt-3">
          <div class="col-md-4 mb-2 mb-lg-0 col-lg-4" v-for="i in news.slice(0, 3)" :key="i.id">
            <div class="blog_entry">
              <router-link :to="`/resources/${i.id}`" class="text-decoration-none">
                <img :src="`/storage/news_images/${i.image}`" alt="Image" class="img-fluid" />
              </router-link>
              <div class="p-2 bg-white">
                <h4>
                  <router-link class="text-decoration-none" :to="`/resources/${i.id}`">{{ i.title }}</router-link>
                </h4>
                <p class="text text-right">
                  <span class="fa fa-calendar mt-2 mb-2"></span>
                  {{ moment(i.created_at).format("LL") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- News & Resources  -->

    <!-- freelance hire me -->
    <section class="w3l-grid-quote py-5">
      <div class="container py-lg-3">
        <h6>We're available for freelance projects.</h6>
        <h3>Let's work together indeed!</h3>
        <a href="/contact" class="secondary-btn-style btn-secondary btn">Get quotes</a>
        <!-- <a href="#!" class="btn btn-style text-primary ml-2">Hire me</a> -->
      </div>
    </section>

    <!-- Footer  -->
    <section class="w3l-footers-1">
      <div class="footer bg-secondary">
        <div class="container">
          <div class="footer-content">
            <div class="row">
              <div class="col-lg-8 footer-left">
                <p class="m-0">© Rex&Regina Attorneys at Law</p>
              </div>
              <div class="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                <ul class="social m-0 p-0">
                  <li>
                    <a href="/storage/profile/profile.pdf" download>
                      <span class="fa fa-file"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <span class="fa fa-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import carousel from "vue-owl-carousel2";
import { mapActions, mapGetters } from "vuex";
import { VueTyper } from "vue-typer";
export default {
  name: "home",
  data() {
    return {
      news: [],
      moment: moment,
    };
  },
  components: {
    carousel,
    VueTyper,
  },
  mounted() {
    this.getServicesAction();
    axios.get("api/news").then((response) => (this.news = response.data.news));
  },
  methods: {
    ...mapActions({
      getServicesAction: "services/getServices",
    }),
  },
  computed: {
    ...mapGetters({
      services: "services/servicesList",
    }),
  },
};
</script>
