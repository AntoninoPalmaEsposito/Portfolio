<template>
    <div class="relative md:hidden  h-screen bg-black z-[20]">



        <!-- BODY bg -->
        <div class="w-screen flex flex-col items-center pt-[20px] text-white pr-[25vw] font-semibold text-[25px]">

            <!-- NAV bg -->
            <div class="flex justify-end w-screen">
            <ul class="flex flex-col items-start">

                <li>Home</li>
                <li>Dev. Profile</li>
                <li>Project</li>
                <li>Contacts</li>


            </ul>
    </div>









    </div>



        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[10px] left-[10px]">
        </div>



        <!-- BODY carta -->
        <div :class="{ 'top-[-5px]': !scroll, 'top-[100vh]': scroll }"
            class="absolute bg-black left-[0px] flex flex-col items-center  h-screen duration-[4s] z-[-1]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">

            <!-- nav scroll -->
            <div class="flex justify-end mt-[30px] w-screen px-[30px]">
                <button @click="tscroll" class=" w-[100px] h-[50px] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></button>
            </div>

            <!-- sect 1 -->
            <div class="px-[30px] pt-[100px] leading-[35px] font-extrabold text-[32px] text-[rgba(0,0,0,0.52)]">Mi
                chiamo Antonino <br> e non sono solo un Web Developer!</div>

            <!-- img 1 home -->
            <img src="../assets/disegno.png" alt="" class="px-[20px] w-screen pt-[30px]">

            <!-- 1 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.74)] text-[20px] px-[30px] pt-[40px]">
                Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                ho studiato arte illustrativa, grafica e progettazione architettonica. <br> Successivamente, mi sono
                iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                programmazione.
            </div>

            <!-- img 2 home -->
            <img src="../assets/sedia.png" alt="" class="px-[20px] mr-[5%] w-[85%] pt-[20px]">

            <!-- 2 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.74)] text-[20px] px-[30px] pt-[20px] pb-[70px]">
                Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi ha
                fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze. <br>
                Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte altre
                passioni. <br>
                Adoro il disegno a mano libera, progettare oggetti di design e nel tempo libero mi trasformo in un
                tatuatore!
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