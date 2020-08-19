<template>
  <div class="mt-3">
    <!-- breadcrumb -->
    <div class="container">
      <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/practice-areas" class="text-decoration-none">Go Back</router-link>
          </li>
          <li class="is-active">
            <router-link to="/practice-areas" aria-current="page">
              {{
              service.title
              }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="box">
        <div class="row">
          <h3 class="col-sm-4 mb-3 title">{{ service.title }}</h3>
          <p class="text-justify col-sm-8">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <!-- News  -->
    <section class="site-section bg-light mb-4" id="blog-section">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4 mb-3 position-relative">
            <div class="text-center">
              <h1 class="h4">Recent News</h1>
            </div>
          </div>

          <div class="col-md-6 mb-lg-0 col-lg-4" v-for="i in news.slice(0, 3)" :key="i.id">
            <div class="blog_entry">
              <router-link :to="`/resources/${i.id}`" class="text-decoration-none">
                <img :src="`/storage/news_images/${i.image}`" alt="Image" class="img-fluid" />
              </router-link>
              <div class="p-4 bg-white">
                <h3>
                  <router-link :to="`/resources/${i.id}`" class="text-decoration-none">{{ i.title }}</router-link>
                </h3>
                <span class="date">{{ moment(i.created_at).format("LL") }}</span>
                <p>{{ i.description }}</p>
                <p class="more">
                  <router-link :to="`/resources/${i.id}`" class="text-decoration-none more-link">
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
export default {
  name: "service-view",
  components: { Footer },
  data() {
    return {
      service: {},
      news: [],
      moment: moment,
    };
  },
  mounted() {
    axios.get("/api/news").then((response) => (this.news = response.data.news));
  },
  created() {
    axios.get(`/api/services/${this.$route.params.id}`).then((response) => {
      this.service = response.data.service;
    });
  },
};
</script>

<style lang="scss" scoped></style>
