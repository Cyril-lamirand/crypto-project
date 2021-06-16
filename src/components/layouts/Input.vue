<template>
  <div class="input-component">
    <b-form-group
        :id="idOne"
        :label="label"
        :label-for="idTwo"
    >
      <b-form-input
          :id="idTwo"
          :type="type"
          :value="value"
          disabled
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: [
      "idOne",
      "label",
      "idTwo",
      "type",
      "value"
  ]
}
</script>

<style scoped>

</style>