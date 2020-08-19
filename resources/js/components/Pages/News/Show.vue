<template>
  <div class="mt-3">
    <div class="container">
      <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/resources" class="text-decoration-none">Go Back</router-link>
          </li>
        </ul>
      </nav>

      <div class="row d-flex justify-content-center py-3">
        <div class="col-md-5">
          <div class="newsimg">
            <img :src="`/storage/news_images/${i.image}`" class="img-fluid rounded" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="newsdesc">
            <h3 class="title text-justify">{{ i.title }}</h3>

            <p class="mt-1 mb-1">
              <span class="fa fa-calendar text-primary"></span>
              {{ moment(i.created_at).format("LL") }}
            </p>

            <p class="text-justify">{{ i.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer  -->
    <Footer />
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import Footer from "./../../includes/Footer";
export default {
  components: { Footer },
  data() {
    return {
      i: {},
      moment: moment,
    };
  },
  created() {
    axios.get(`/api/news/${this.$route.params.id}`).then((response) => {
      this.i = response.data.news;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
