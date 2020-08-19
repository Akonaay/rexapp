<template>
  <div>
    <div class="container">
      <form @submit.prevent="updateServices(service)">
        <div class="field">
          <label class="label is-small">Title</label>
          <div class="control">
            <input
              class="input is-small"
              v-model="service.title"
              type="text"
              placeholder="News Title"
            />
          </div>
        </div>
        <div class="field">
          <label class="label is-small">Description</label>
          <div class="control">
            <textarea
              class="textarea is-small"
              v-model="service.description"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <div class="is-right">
            <input type="file" multiple />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input type="submit" class="button is-link is-small is-right" value="Update" />
            <input type="reset" class="button is-link is-small is-right" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      service: {},
      message: ""
    };
  },
  methods: {
    getServiceById: function(id) {
      axios
        .get("/api/services/" + id)
        .then(response => {
          this.service = response.data.service;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateServices(service) {
      axios
        .put("/api/services/" + service.id, service)
        .then(response => {
          if (response.status === 200) {
            this.$router.push("/dashboard");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getServiceById(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
</style>
