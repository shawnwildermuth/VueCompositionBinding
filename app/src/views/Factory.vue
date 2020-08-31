<template>
  <div>
    <h1>Using a factory</h1>
    <div class="row">
      <div class="col">
        <FactoryComponent />
      </div>
      <div class="col">
        <FactoryComponent />
      </div>
    </div>
  </div>
</template>

<script>
import FactoryComponent from "../Components/factoryComponent";

export default {
  components: { FactoryComponent }
};
</script>  
