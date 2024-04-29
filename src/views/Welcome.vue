<template>
<!-- WELCOME -->
<div v-if="wee" :class="{'opacity-0 blur-[1vw]':weeA, 'opacity-80':!weeA}" class="hidden md:flex justify-center items-center duration-[3s]  absolute bottom-0 bg-black  w-screen h-screen z-[80] ">
    <img v-if="wee1" src="../assets/welcomen.png" alt="" class="w-[20vw] well">
</div>

<!-- WELCOME mobile -->
<div v-if="wee" :class="{'opacity-0 blur-[1vw]':weeA, 'opacity-80':!weeA }" class="flex md:hidden justify-center items-center duration-[3s]  absolute bottom-[-200vw] bg-black   w-screen  z-[80] wellmobile">
    <img v-if="wee1" src="../assets/welcomen.png" alt="" class="w-[60vw] well mt-[-150vw]">
</div>





</template>




<script>
    
    export default {
  data() {
    return {
wee:true,
weeA:false,
wee1:false
    };
},

mounted() {
    setTimeout(() => {
      this.weeA = true;
    }, 6000);

    setTimeout(() => {
      this.wee = false;
    }, 9000);

    setTimeout(() => {
      this.wee1 = true;
    }, 1000);
},






    }



</script>


<style>

.wellmobile {
  height: 450vw;
}


.well {
  animation-name: welcome;
  animation-duration: 3s;
}

@keyframes welcome {
  from {
    opacity: 0;
    filter: blur(1vw);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}






</style>