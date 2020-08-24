<template>
  <div class="container mt-3">
    <h3 class="box">Dashboard</h3>
    <vs-tabs alignment="left" position="left">
      <vs-tab label="Services">
        <div>
          <ServicesList />
        </div>
      </vs-tab>
      <vs-tab label="News">
        <div>
          <NewsList />
        </div>
      </vs-tab>
      <vs-tab label="User Profile">
        <div>
          <UsersMain />
        </div>
      </vs-tab>
      <vs-tab label="Customer Quotes">
        <div>
          <QuotesMain />
        </div>
      </vs-tab>
      <vs-tab label="Events">
        <div class>Events Page</div>
      </vs-tab>
    </vs-tabs>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import ServicesList from "./../dashboard/Services/Main.vue";
import NewsList from "./../dashboard/News/Main.vue";
import UsersMain from "./../dashboard/Profile/Main.vue";
import QuotesMain from "./../dashboard/Quotes/Main.vue";
export default {
  name: "dashboard",
  components: {
    ServicesList,
    NewsList,
    UsersMain,
    QuotesMain,
  },
  data() {
    return {
      title: "",
      description: "",
      image: null,
      name: "",
      body: "",
      icon: null,
      news: [],
      services: [],
    };
  },

  methods: {
    onFileSelected(event) {
      let imageTrigger = event.target.files[0];
      this.image = imageTrigger;
    },
    onServiceFileSelected(event) {
      let iconTrigger = event.target.files[0];
      this.icon = iconTrigger;
    },
    async add() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("description", this.description);
      data.append("image", this.image, this.image.name);

      await axios
        .post("/api/news", data)
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async addServices() {
      const data = new FormData();
      data.append("title", this.name);
      data.append("description", this.body);
      data.append("icon", this.icon, this.icon.name);

      await axios
        .post("/api/services/new", data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteNews(n) {
      axios
        .delete("/api/news/" + n.id)
        .then((response) => {
          let index = this.news.indexOf(n);
          this.news.splice(index, 1);
          console.log(response.data);
        })
        .then((error) => {
          console.log(error.toString);
        });
    },
    deleteService(s) {
      axios
        .delete("/api/services/" + s.id)
        .then((response) => {
          let index = this.services.indexOf(s);
          this.services.splice(index, 1);
          console.log(response.data);
        })
        .then((error) => {
          console.log(error.toString);
        });
    },
    editNews() {
      axios
        .delete("/api/services/" + s.id)
        .then((response) => {
          let index = this.services.indexOf(s);
          this.services.splice(index, 1);
          console.log(response.data);
        })
        .then((error) => {
          console.log(error.toString);
        });
    },
  },
  mounted() {
    axios.get("api/news").then((response) => (this.news = response.data.news));
    axios
      .get("api/services")
      .then((response) => (this.services = response.data.services));
  },
};
</script>

<style lang="scss">
</style>
