<template>
  <div id="app">
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Main,
    Footer,
  },
});
</script>

<style lang="scss">
@import "./style.scss";
</style>
