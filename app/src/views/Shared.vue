<template>
  <div>
    <h1>Using a Shared Object</h1>
    <div class="row">
      <div class="col">
        <SharedComponent />
      </div>
      <div class="col">
        <SharedComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SharedComponent from "../Components/SharedComponent";

export default {
  components: { SharedComponent }
};
</script>  
