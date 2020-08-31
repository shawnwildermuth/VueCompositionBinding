<template>
  <div class="card">
    <div>Countries: {{ countries.length }}</div>
    <div class="row" v-for="i in countries" :key="i.name" >
      <div class="col">{{ i.name }} ({{ i.region }})</div>
      <div class="col">
        <img :src="i.flag" :alt="i.name" style="float: right; max-height: 30px;" />
      </div>
      <div class="col">
        <button @click="removeItem(i)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { load, removeItem, countries } from "../shared/data";
import { onMounted, computed } from "vue";

export default {
  setup() {

    onMounted(async () => await load());

    return {
      countries,
      removeItem
    };
  },
};
</script>