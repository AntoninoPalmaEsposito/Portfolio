<template>
    <div class="relative md:hidden  h-screen bg-black z-[20]">



        <!-- BODY bg -->
        <div
            class="w-screen relative flex flex-col items-center pt-[10px] text-white  font-semibold text-[5.7vw] z-[-1] ">

            <!-- NAV bg -->
            <div class="flex justify-end pr-[5vw] w-screen">
                <ul class="flex flex-col items-start w-[35vw]">

                    <li class="mb-[-20px] ml-[-7px]"><button @click="tscroll"
                            :class="{ 'opacity-[0.45]': !scroll, 'opacity-1': scroll }" class="duration-500"><img
                                src="../assets/freccia.png" alt="" class="w-[11vw]"></button></li>

                    <li><button @click="devpp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !devp, 'text-white text-[6.5vw] border-solid border-b-4': devp }"
                            class="duration-500 ">Dev. Profile</button></li>

                    <li><button @click="projectp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !project, 'text-white text-[6.5vw] border-solid border-b-4': project }"
                            class="duration-500">Project</button></li>

                    <li><button @click="contactsp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !contacts, 'text-white text-[6.5vw] border-solid border-b-4': contacts }"
                            class="duration-500">Contacts</button></li>

                </ul>
            </div>


            <!-- container section -->
            <div class="mt-[130px] text-white">

                <!-- Dev Profile -->
                <div v-if="devp" :class="{ 'opacity-0': !devp, 'opacity-1': devp }"
                    class="w-screen duration-1000 flex flex-col   ">

                    <div class="font-bold  text-[30px] px-[25px]  leading-7"><span
                            class="text-[70px] font-extrabold">Credo</span> fortemente nell'organizzazione.</div>

                    <div class=" mt-[10px] scale-90 p-[30px]  w-screen rounded-[40px] z-[0] bg-[rgba(255,255,255,0.2)] ">
                        <div class="flex mb-[30px]">
                            <img src="../assets/pc.png" alt="" class=" h-[170px] mr-[30px]  hover:animate-bounce">

                            <div class="text-[20px]">Un’analisi accurata porta a un codice più pulito, uno sviluppo più veloce e al rispetto
                                di scadenze
                                prefissate.
                               </div>

                        </div>

                        <div class="text-[20px]">
                                Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato.
                                Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide.</div>


                    </div>

                </div>



                <!-- Project -->
                <div v-if="project" class="w-screen  mt-[100px] h-[400px] bg-green-400"></div>

                <!-- Contacts -->
                <div v-if="contacts" class="w-screen  mt-[100px] h-[400px] bg-yellow-300"></div>
            </div>



        </div>














        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px] z-[-1]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[15px] left-[20px]">
        </div>



        <!-- BODY carta -->
        <div :class="{ 'top-[-10px]': scroll, 'top-[100vh]': !scroll }"
            class="absolute  left-[0px] flex flex-col items-center  h-screen duration-[4s] z-[-1]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">



            <!-- nav scroll -->
            <div class="flex justify-end mt-[40px] w-screen px-[50px]">
                <button @click="tscroll" class=" w-[100px] h-[50px] rounded-[50px]  bg-[rgba(0,0,0,0.52)]"></button>
            </div>


            <!-- sect 1 -->
            <div class="px-[25px] pt-[50px] leading-[35px] font-extrabold text-[32px] text-[rgba(0,0,0,0.52)]">Mi
                chiamo Antonino <br> e non sono solo un Web Developer!</div>

            <!-- img 1 home -->
            <img src="../assets/disegno.png" alt="" class="px-[16px] w-screen pt-[15px]">

            <!-- 1 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.52)] text-[20px] px-[25px] pt-[20px]">
                Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                ho studiato arte illustrativa, grafica e progettazione architettonica. <br> Successivamente, mi sono
                iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                programmazione.
            </div>

            <div class="bg-white">

                <!-- img 2 home -->
                <img src="../assets/sedia.png" alt="" class="px-[20px] mr-[5%] w-[85%] pt-[20px]">

                <!-- 2 descrizione -->
                <div class="font-semibold text-[rgba(0,0,0,0.52)] text-[20px] px-[25px] pt-[20px] pb-[70px]">
                    Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi
                    ha
                    fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze. <br>
                    Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte
                    altre
                    passioni. <br>
                    Adoro il disegno a mano libera, progettare oggetti di design e nel tempo libero mi trasformo in un
                    tatuatore!
                </div>

            </div>

        </div>




















    </div>
</template>


<script>
export default {
    data() {
        return {
            scroll: true,
            home: false,
            devp: false,
            project: false,
            contacts: false

        }
    },

    methods: {

        tscroll() {
            this.scroll = !this.scroll
            if (this.scroll) {
                this.devp = false
                this.project = false
                this.contacts = false
            } else {
                this.devp = true
                this.project = false
                this.contacts = false
            }

        },

        devpp() {
            this.scroll = false
            this.devp = true
            this.project = false
            this.contacts = false
        },

        projectp() {
            this.scroll = false
            this.devp = false
            this.project = true
            this.contacts = false
        },

        contactsp() {
            this.scroll = false
            this.devp = false
            this.project = false
            this.contacts = true
        },
    }

}

</script>









<style>
body {
    background-color: black;

}
</style>