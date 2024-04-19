<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Gg from './views/Gg.vue';
import { SpeedInsights } from "@vercel/speed-insights/vue"



export default {
  components: {
    HomeView,
    Gg,
    SpeedInsights
  }
}


</script>

<template>

  <HomeView />
  <Gg />

</template>

<style>

</style>
