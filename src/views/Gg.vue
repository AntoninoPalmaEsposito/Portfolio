<template>
    <div class="md:hidden h-screen bg-black">

        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw] z-[-30]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[10px] left-[10px]">
        </div>


        <!-- BODY carta -->
        <div :class="{'top-[-5px]': !scroll , 'top-[1000px]': scroll }" class="absolute   left-[0px]   h-screen duration-[4s]        w-screen" >

            <img src="../assets/corpo2.png" alt="" class=" absolute   left-[0px]">

            <button @click="tscroll" class="relative right-[-380px] top-[20px] w-[100px] h-[50px] rounded-[50px] bg-slate-400"></button>
            





        </div>




















    </div>
</template>


<script>
export default {
data() {
    return {
        scroll: false

    }
},

methods: {

tscroll() {
    this.scroll = !this.scroll
}


}

}

</script>









<style>
</style>