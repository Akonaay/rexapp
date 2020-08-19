<template>
  <div id="wrapper">
    <div class="container">User List</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersList",
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("api/auth/register")
        .then(response => (this.users = response.data.user));
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style lang="scss" scoped>
</style>
