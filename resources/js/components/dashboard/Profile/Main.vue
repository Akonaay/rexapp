<template>
  <div>
    <div class="h4 box">User Management</div>
    <div>
      <div class="field is-grouped is-grouped-right">
        <vs-collapse accordion>
          <vs-collapse-item>
            <div slot="header">
              <strong>Create User</strong>
            </div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
            <br />
            <br />
            <div class="container">
              <UserAdd />
            </div>
          </vs-collapse-item>
        </vs-collapse>
      </div>
    </div>
    <div>
      <UserList />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserList from "./List";
import UserAdd from "./Add";
export default {
  name: "UserProfileMain",
  components: {
    UserList,
    UserAdd
  }
};
</script>

<style lang="scss" scoped>
</style>
