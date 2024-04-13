<template>
    <div class="relative md:hidden h-screen bg-black z-[20]">

        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[10px] left-[10px]">
        </div>


        <!-- BODY carta -->
        <div :class="{ 'top-[-5px]': !scroll, 'top-[1000px]': scroll }"
            class="absolute  left-[0px] flex flex-col items-center  h-screen duration-[4s]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">

          

            <!-- nav scroll -->
            <div class="flex justify-end mt-[30px] w-screen px-[30px]">
            <button @click="tscroll" class=" w-[100px] h-[50px] rounded-[50px] bg-slate-400"></button>
            </div>

           




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









<style></style>