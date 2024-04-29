<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Gg from './views/Gg.vue';
import Welcome from './views/Welcome.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"



export default {
  components: {
    Welcome,
    HomeView,
    Gg,
    SpeedInsights
  }
}


</script>

<template>
  <Welcome/> 
  <HomeView />
  <Gg />

</template>

<style>
@font-face {
  font-family: 'Kabel Black Regular';
  src: url('./src/fonts/Kabel Black Regular.otf');
}
</style>
