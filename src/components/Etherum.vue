<template>
  <div class="etherum-component">
    {{ personalInfo }}
    <hr/>
    <p>
      {{ personalInfo.data.data.account }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Etherum",
  data () {
    return {
      personalInfo: null,
      address : "0x30e68be7130338b32ca687ef5b1eb3faedeeb94a"
    }
  },
  mounted () {
    axios
        .get('https://api.nanopool.org/v1/eth/user/' + this.address)
        .then(response => (this.personalInfo = response))
  }
}
</script>

<style scoped>

</style>