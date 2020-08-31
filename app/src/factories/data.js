import axios from "axios";
import { ref } from "vue";

export default function () {

  const countries = ref([]);

  async function load() {
    let result = await axios.get("https://restcountries.eu/rest/v2/all");
    countries.value.splice(0, countries.value.length, ...result.data);
  }

  function removeItem(item) {
    let index = countries.value.indexOf(item);
    if (index > -1) {
      countries.value.splice(index, 1);
    }
  }

  return {
    countries,
    load,
    removeItem
  };
}