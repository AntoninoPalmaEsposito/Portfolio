<template>
    <div class="relative md:hidden  h-screen bg-black z-[20]">



        <!-- BODY bg -->
        <div
            class="w-screen relative flex flex-col items-center pt-[17px] text-white  font-semibold text-[5.7vw] z-[-1] ">

            <!-- NAV bg -->
            <div class="flex justify-end pr-[5vw] w-screen">
                <ul class="flex flex-col items-start w-[35vw]">

                    <li><button @click="tscroll" class="duration-500 text-[rgba(255,255,255,0.45)]">Home</button></li>

                    <li><button @click="devpp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !devp, 'text-white text-[6.5vw] border-solid border-b-4': devp }"
                            class="duration-500">Dev. Profile</button></li>

                    <li><button @click="projectp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !project, 'text-white text-[6.5vw] border-solid border-b-4': project }"
                            class="duration-500">Project</button></li>

                    <li><button @click="contactsp"
                            :class="{ 'text-[rgba(255,255,255,0.45)]': !contacts, 'text-white text-[6.5vw] border-solid border-b-4': contacts }"
                            class="duration-500">Contacts</button></li>

                </ul>
            </div>


<!-- Dev Profile -->
<div v-if="devp" :class="{'opacity-0':!devp , 'opacity-1':devp}" class="w-screen duration-1000 mt-[100px] h-[400px]  bg-red-400"></div>

<!-- Project -->
<div v-if="project" class="w-screen  mt-[100px] h-[400px] bg-green-400"></div>

<!-- Contacts -->
<div v-if="contacts" class="w-screen  mt-[100px] h-[400px] bg-yellow-300"></div>



        </div>


        











        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[10px] left-[10px]">
        </div>



        <!-- BODY carta -->
        <div :class="{ 'top-[-10px]': scroll, 'top-[100vh]': !scroll }"
            class="absolute  left-[0px] flex flex-col items-center  h-screen duration-[4s] z-[-1]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">

            

            <!-- nav scroll -->
            <div class="flex justify-end mt-[30px] w-screen px-[30px]">
                <button @click="tscroll" class=" w-[100px] h-[50px] rounded-[50px]  bg-[rgba(0,0,0,0.52)]"></button>
            </div>

            <!-- sect 1 -->
            <div class="px-[17px] pt-[100px] leading-[35px] font-extrabold text-[32px] text-[rgba(0,0,0,0.52)]">Mi
                chiamo Antonino <br> e non sono solo un Web Developer!</div>

            <!-- img 1 home -->
            <img src="../assets/disegno.png" alt="" class="px-[5px] w-screen pt-[30px]">

            <!-- 1 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.74)] text-[20px] px-[17px] pt-[40px]">
                Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                ho studiato arte illustrativa, grafica e progettazione architettonica. <br> Successivamente, mi sono
                iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                programmazione.
            </div>

            <div class="bg-white">

            <!-- img 2 home -->
            <img src="../assets/sedia.png" alt="" class="px-[20px] mr-[5%] w-[85%] pt-[20px]">

            <!-- 2 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.74)] text-[20px] px-[17px] pt-[20px] pb-[70px]">
                Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi ha
                fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze. <br>
                Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte altre
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