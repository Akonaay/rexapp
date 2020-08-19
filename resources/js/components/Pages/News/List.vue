<template>
  <div>
    <!-- About Banner -->
    <section class="bg-blog position-relative">
      <div class="serve-overlay py-5">
        <div class="container text-white">
          <h6 class="sub-title-1"></h6>
          <h3 class="hny-title two">Resources</h3>
        </div>
      </div>
    </section>

    <!-- blog -->
    <section class="site-section bg-light mt-5 mb-4" id="blog-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-lg-0 col-lg-4" v-for="i in news" :key="i.id">
            <div class="blog_entry">
              <router-link :to="`/resources/${i.id}`" class="text-decoration-none">
                <img :src="`/storage/news_images/${i.image}`" alt="Image" class="img-fluid" />
              </router-link>
              <div class="p-2 bg-white">
                <h4>
                  <router-link :to="`/resources/${i.id}`" class="text-decoration-none">{{ i.title }}</router-link>
                </h4>
                <p class="mt-2 mb-2">
                  <span class="fa fa-calendar text-secondary"></span>
                  {{ moment(i.created_at).format("LL") }}
                </p>

                <p>{{ i.description }}</p>
                <p>
                  <router-link :to="`/resources/${i.id}`" class="text-decoration-none">
                    <button class="button is-warning mt-3">Read More &rarr;</button>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer  -->
    <Footer />
  </div>
</template>

<script>
import moment from "moment";
import Footer from "./../../includes/Footer";
import axios from "axios";
export default {
  name: "news-list",
  components: {
    Footer,
  },
  data() {
    return {
      news: [],
      moment: moment,
    };
  },
  mounted() {
    axios.get("api/news").then((response) => (this.news = response.data.news));
  },
};
</script>

<style lang="scss" scoped></style>
