<template>
  <div class="navbar-component">
    <b-navbar toggleable="lg" type="light" variant="info" fixed>
      <b-navbar-brand>
        <router-link to="/">
          Cyril LAMIRAND
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/etherum">
              Etherum
            </router-link>
          </b-nav-item>
          <b-nav-item>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-form-checkbox v-model="checked" name="check-button" switch>
            Mode sombre
          </b-form-checkbox>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>

</style>