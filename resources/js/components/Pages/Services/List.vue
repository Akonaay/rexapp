<template>
  <div id="services-list">
    <!-- Services Banner -->
    <section class="bg-serv-page position-relative">
      <div class="serve-overlay py-5">
        <div class="container text-white">
          <h6 class="sub-title-1">What we offer</h6>
          <h3 class="hny-title two">Featured Practice Areas</h3>
        </div>
      </div>
    </section>

    <!-- Part 2 Service offered -->
    <div class="container mt-lg-5 mt-4 mb-3">
      <div class="row text-center mt-lg-3 mt-3">
        <div
          class="col-lg-3 col-md-4 col-sm-6 w3l-team-main"
          v-for="service in services"
          :key="service.id"
        >
          <div class="column">
            <router-link :to="`/practice-areas/${service.id}`" class="alink">
              <img
                :src="`/storage/service_icons/${service.icon}`"
                alt
                class="img-responsive rounded"
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
    </div>

    <!-- Footer  -->
    <Footer class="sticky-bottom" />
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import { mapActions, mapGetters } from "vuex";
import Footer from "./../../includes/Footer";
export default {
  name: "services-list",
  components: { VueTyper, Footer },
  data() {
    return {};
  },
  mounted() {
    return this.getServicesAction();
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

<style scoped></style>
