<template>
  <div class="avg-hashrate-component">
    <b-input-group :prepend="entry" class="mb-2 mr-sm-2 mb-sm-0" v-if="need === 1">
      <b-form-input
          id="inline-form-input-username"
          :value="element"
          disabled
      >
      </b-form-input>
    </b-input-group>
    <b-input-group :prepend="prepend" class="mb-2 mr-sm-2 mb-sm-0" v-else-if="need === 2">
      <b-form-input
          id="inline-form-input-username"
          :value="element"
          disabled
      >
      </b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "AvgHashrate",
  props: ['element', 'entry', 'prepend', 'need']
}
</script>

<style scoped>

</style>