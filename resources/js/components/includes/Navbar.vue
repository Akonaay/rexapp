<template>
  <div>
    <!-- Top bar -->
    <section id="topbar" class="d-none d-lg-block">
      <div class="container clearfix">
        <div class="contact-info float-left">
          <i class="fa fa-envelope-o"></i>
          <a href="mailto:info@rexreginalaw.com" class="text-decoration-none">info@rexreginalaw.com</a>
          <i class="fa fa-phone"></i> +255 22 221 4145
        </div>
        <div class="social-links float-right">
          <a href="#!" class="twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#!" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
    <!-- End Top bar -->

    <!-- Navbar Menu -->
    <div>
      <vs-navbar v-model="activeItem" class="nabarx">
        <div slot="title">
          <vs-navbar-title>
            <a class="navbar-item" href="/">
              <img src="/images/logo.svg" width="112" height="28" />
            </a>
          </vs-navbar-title>
        </div>
        <template v-if="!isAuthenticated">
          <!-- <vs-navbar-item index="0">
            <router-link to="/">Home</router-link>
          </vs-navbar-item>-->
          <vs-navbar-item index="0">
            <router-link to="/our-firm">Our Firm</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="1">
            <router-link to="/practice-areas">Practice Areas</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="2">
            <router-link to="/resources">Resources</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="3">
            <router-link to="/contact">Contact</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="4">
            <router-link to="/login">Admin</router-link>
          </vs-navbar-item>
        </template>
        <template v-else>
          <vs-navbar-item index="5">
            <router-link to="/dashboard">Dashboard</router-link>
          </vs-navbar-item>
          <vs-navbar-item index="6">
            <vs-dropdown>
              <a class="a-icon">{{ currentUserLogin.user.name }}</a>

              <vs-dropdown-menu>
                <vs-dropdown-item>
                  <a href="#" @click.prevent="signOut">Logout</a>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </vs-navbar-item>
        </template>
      </vs-navbar>
    </div>
    <!-- End Navbar Menu -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      activeItem: 0,
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      currentUserLogin: "auth/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/logout",
    }),
    signOut() {
      this.signOutAction().then(() => {
        $router.replace("/");
      });
    },
  },
};
</script>
