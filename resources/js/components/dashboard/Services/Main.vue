<template>
  <div id="service-main">
    <div class="h4">Service Page</div>
    <div class="field is-grouped is-grouped-right">
      <vs-collapse accordion>
        <vs-collapse-item>
          <div slot="header">
            <strong>Add</strong>
          </div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque rhoncus eros tortor, non fringilla lectus cursus et.
          Fusce vel nisi ante. Aliquam sit amet lectus pharetra,
          luctus mi sed, aliquet felis. Mauris a tortor viverra,
          ornare tellus in, consectetur leo.
          <br />
          <br />
          <div class="container">
            <form @submit.prevent="add">
              <div class="field">
                <label class="label is-small">Title</label>
                <div class="control">
                  <input
                    class="input is-small"
                    v-model="title"
                    type="text"
                    placeholder="News Title"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label is-small">Description</label>
                <div class="control">
                  <textarea class="textarea is-small" v-model="description" placeholder="Textarea"></textarea>
                </div>
              </div>
              <div class="field">
                <div class="is-right">
                  <input type="file" multiple @change="onFileIconSelected" placeholder="Icon" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input type="submit" class="button is-link is-small is-right" value="Submit" />
                  <input type="reset" class="button is-link is-small is-right" value="Reset" />
                </div>
              </div>
            </form>
          </div>
        </vs-collapse-item>
      </vs-collapse>
    </div>
    <div class>
      <table class="table table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Icon</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in services" :key="i.id">
            <td>{{ i.title }}</td>
            <td class>{{ i.description.substring(0, 60) + "..." }}</td>
            <td>{{ i.icon }}</td>
            <td>{{ i.cover_image }}</td>
            <td>
              <router-link :to="`/dashboard/edit/` + i.id" class="button is-rounded is-small">Edit</router-link>
            </td>
            <td>
              <button class="button is-rounded is-small" @click="deleteById(i)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashboardServicesList",
  data() {
    return {
      services: [],
      title: "",
      description: "",
      icon: null,
      message: null
    };
  },
  methods: {
    onFileIconSelected(event) {
      this.icon = event.target.files[0];
    },
    add() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("description", this.description);
      data.append("icon", this.icon, this.icon.name);
      axios
        .post("/api/services/new", data, {
          "Content-Type": "application/json"
        })
        .then(response => {
          this.title = "";
          this.description = "";
          this.icon = null;
          this.fetchServices();
        });
    },
    fetchServices() {
      axios
        .get("api/services")
        .then(response => (this.services = response.data.services));
    },
    deleteById(service) {
      let conf = window.confirm("Are you sure delete this Data?");
      if (conf) {
        axios
          .delete("/api/services/" + service.id)
          .then(response => {
            if (response.status === 200) {
              this.message = "Data success has deleted";
            }
            return this.fetchServices();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    this.fetchServices();
  }
};
</script>

<style lang="scss" scoped></style>
