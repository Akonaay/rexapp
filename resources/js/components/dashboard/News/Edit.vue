<template>
  <div>
    <div class="container">
      <form @submit.prevent="updateNews(newsItem)">
        <div class="field">
          <label class="label is-small">Title</label>
          <div class="control">
            <input
              class="input is-small"
              v-model="newsItem.title"
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
              v-model="newsItem.description"
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
      newsItem: {},
      message: ""
    };
  },
  methods: {
    getNewsById: function(id) {
      axios
        .get("/api/news/" + id)
        .then(response => {
          this.newsItem = response.data.news;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateNews(newsItem) {
      axios
        .put("/api/news/" + newsItem.id, newsItem)
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
    this.getNewsById(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
</style>
