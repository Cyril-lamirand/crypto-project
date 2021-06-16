<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
<script>
import Navbar from "./components/layouts/Navbar"
export default {
  components: {Navbar}
}
</script>