<template>
  <div id="service-main">
    <!-- Title -->
    <div class="h4 box">News Page</div>

    <!-- Add New News Panel -->
    <div class="field is-grouped is-grouped-right">
      <vs-collapse accordion>
        <vs-collapse-item>
          <div slot="header">
            <strong>Add News</strong>
          </div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
          <br />
          <br />
          <div class="container">
            <!-- Add New News -->
            <form autocomplete="off" @submit.prevent="add">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input is-small" type="name" v-model="title" placeholder="Title" />
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <textarea
                    class="textarea is-small has-icons-left has-icons-right"
                    v-model="description"
                    placeholder="News Description"
                  ></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input type="file" @change="onFileSelected" name="image" />
                </p>
              </div>

              <div class="field">
                <p class="control">
                  <input
                    type="submit"
                    class="button is-link is-small is-right rounded"
                    value="Submit"
                  />
                  <input
                    type="reset"
                    class="button is-info is-small is-right rounded"
                    value="Reset"
                  />
                </p>
              </div>
            </form>
          </div>
        </vs-collapse-item>
      </vs-collapse>
    </div>
    <!-- Add New News Panel -->

    <!-- News Table -->
    <div>
      <table class="table table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in news" :key="i.id">
            <td>{{ i.title }}</td>
            <td class>{{ i.description.substring(0,60) + "..." }}</td>
            <td>{{ i.image }}</td>
            <td>
              <router-link
                :to="`/dashboard/news/edit/` + i.id"
                class="button is-rounded is-small"
              >Edit</router-link>
            </td>
            <td>
              <button class="button is-rounded is-small" @click="deleteById(i)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- News Table -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardServicesList",
  data() {
    return {
      news: [],
      title: "",
      description: "",
      image: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    add() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("description", this.description);
      data.append("image", this.image, this.image.name);
      axios
        .post("/api/news", data, {
          "Content-Type": "application/json"
        })
        .then(response => {
          this.title = "";
          this.description = "";
          this.image = null;
          this.fetchNews();
        });
    },
    fetchNews() {
      axios.get("api/news").then(response => (this.news = response.data.news));
    },
    deleteById(newsItem) {
      let conf = window.confirm("Are you sure delete this Data?");
      if (conf) {
        axios
          .delete("/api/news/" + newsItem.id)
          .then(response => {
            if (response.status === 200) {
              this.message = "Data success has deleted";
            }
            return this.fetchNews();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    this.fetchNews();
  }
};
</script>

<style lang="scss" scoped>
</style>
