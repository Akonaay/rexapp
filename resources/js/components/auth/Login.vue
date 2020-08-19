<template>
  <div id="login" class="mt-1">
    <!-- Login Banner -->
    <section class="bg-contact position-relative">
      <div class="serve-overlay py-5">
        <div class="container text-white">
          <h3 class="hny-title two">Admin Portal</h3>
        </div>
      </div>
    </section>

    <!-- Login Form -->
    <div class="container mt-3">
      <h6 class="sub-title"></h6>
      <h3 class="hny-title">Login</h3>
      <p class="text-center">{{ message }}</p>

      <div class="row justify-content-center mt-4">
        <div class="col-md-6 col-sm-6 col-xs-6">
          <form @submit.prevent="authenticate">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input is-small"
                  type="email"
                  v-model="form.email"
                  placeholder="Email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input is-small"
                  type="password"
                  v-model="form.password"
                  placeholder="Password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success is-small is-fullwidth-mobile">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    authenticate() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace("/dashboard");
          this.message = "Logged in!";
        })
        .catch((error) => {
          this.message = "Invalid credentials!";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
