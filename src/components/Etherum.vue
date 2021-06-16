<template>
  <div class="etherum-component">
    <div class="pt-5">
      {{ personalInfo }}
    </div>
    <hr/>
    <div class="d-flex align-items-center">
      <h2>Etherum</h2>
      <div class="pl-3">
        <div v-if="personalInfo.data.status === true">
          <span><font-awesome-icon icon="circle" class="green"/></span>
        </div>
        <div v-else>
          <span><font-awesome-icon icon="circle" class="red"/></span>
        </div>
      </div>
    </div>
    <hr/>
    <b-row>
      <b-col cols="12" lg="6">
        <Input
            idOne="input-group-1"
            label="Porte-monnaie"
            idTwo="input-1"
            type="text"
            :value="this.personalInfo.data.data.account"
        />
      </b-col>
      <b-col cols="12" lg="6">
        <Input
          idOne="input-group-2"
          label="Balance"
          idTwo="input-2"
          type="text"
          :value="this.personalInfo.data.data.balance"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="6">
        <Input
            idOne="input-group-3"
            label="Hashrate"
            idTwo="input-3"
            type="text"
            :value="this.personalInfo.data.data.hashrate"
        />
      </b-col>
      <b-col cols="12" lg="6">
        <Input
            idOne="input-group-4"
            label="Balance non confirmé"
            idTwo="input-4"
            type="text"
            :value="this.personalInfo.data.data.unconfirmed_balance"
        />
      </b-col>
    </b-row>
    <label>Average Hashrate</label>
    <b-row>
      <b-col cols="6" md="4" lg="2" v-for="(element, entry) in personalInfo.data.data.avgHashrate" v-bind:key="entry">
        <InputAndLabel
            :element="element"
            :entry="entry"
            :need=1
        />
      </b-col>
      <b-col cols="6" md="4" lg="2">
        <b-input-group prepend="hM" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
              id="inline-form-input-username"
              value="0.0"
              disabled
          >
          </b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <label class="mt-3">Workers</label>
    <b-row>
      <b-col cols="12" lg="6" v-for="(element, entry) in personalInfo.data.data.workers" v-bind:key="entry">
        {{ element }}


        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{{ element.id }}</h5>
            </div>
            <InputAndLabel
                :element="element.uid"
                prepend="Uid"
                :need=2
            />
            <InputAndLabel
                :element="element.hashrate"
                prepend="Hashrate"
                :need=2
            />
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </b-col>
    </b-row>




  </div>
</template>

<script>
import axios from 'axios';
import InputAndLabel from "./layouts/InputAndLabel"
import Input from "./layouts/Input"

export default {
  name: "Etherum",
  components: {Input, InputAndLabel},
  data () {
    return {
      personalInfo: null,
      address : "0x30e68be7130338b32ca687ef5b1eb3faedeeb94a",

    }
  },
  mounted () {
    axios
      .get('https://api.nanopool.org/v1/eth/user/' + this.address)
      .then(response => (
          this.personalInfo = response
        )
      )
  }
}
</script>

<style scoped>

.green{
  color: #42b983;
  font-size: 25px;
}

.red{
  color: red;
}

</style>