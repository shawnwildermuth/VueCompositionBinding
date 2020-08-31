<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Using Factory</router-link> |
      <router-link to="/shared">Using Shared</router-link> |
      <router-link to="/vuex">Using Vuex</router-link>
    </div>
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>
