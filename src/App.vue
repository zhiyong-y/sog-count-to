<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SogCountTo :startVal="0" :endVal="999" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SogCountTo from "../plugins/sog-count-to/src/SogCountTo.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    SogCountTo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
