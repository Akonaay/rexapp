<template>
  <div>
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/includes/Navbar.vue";
export default {
  name: "main-app",
  components: {
    Navbar
  }
};
</script>

<style scoped></style>
