<template>
  <div>
    <div id="login" class="mt-1">
      <div class>
        <div class>
          <form autocomplete="off" @submit.prevent="register">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input is-small"
                  type="name"
                  v-model="form.name"
                  placeholder="Name"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
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
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
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
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input is-small"
                  type="password"
                  v-model="form.confirm_password"
                  placeholder="Confirm Password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success is-small">Register</button>
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
  name: "UserAdd",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      errors: {},
      status: null
    };
  },
  methods: {
    ...mapActions({
      registerUser: "profile/createUser"
    }),
    register() {
      this.registerUser(this.form)
        .then(() => {
          this.$router.replace("/dashboard");
          this.form = "";
        })
        .then(response => {
          this.errors = response.data.errors;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
