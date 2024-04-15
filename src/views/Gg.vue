<template>
    <div class="relative md:hidden  h-screen bg-black z-[20]">



        <!-- BODY bg -->
        <div
            class="w-screen relative flex flex-col items-center pt-[15px] text-white  font-semibold text-[5.7vw] z-[-1] ">

            <!-- NAV bg -->
            <div class="flex justify-end pr-[5vw] w-screen">

                <div class="flex items-end">

                    <div class="relative top-[34px] h-[40vw]  rounded-[50px] mr-[9vw] w-[4.3px] bg-[rgb(109,109,109)]">
                    </div>

                    <ul class="flex flex-col items-start scale-110 w-[35vw]">

                        <li class="mb-[-10px] ml-[-7px]"><button @click="tscroll"
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

                        <div class="w-[47vw] h-[4px] mt-[4vw] ml-[-18vw] rounded-[50px] bg-[rgb(109,109,109)]"></div>


                    </ul>

                </div>

            </div>


            <!-- container section -->
            <div class="mt-[120px] text-white">

                <!-- Dev Profile -->
                <div v-if="devp" :class="{ 'opacity-0': !devp, 'opacity-1': devp }"
                    class="w-screen duration-1000 flex flex-col   ">

                    <!-- h1 -->
                    <div class="font-bold  text-[25px] px-[30px]  leading-7"><span
                            class="text-[60px] font-extrabold">Credo</span> fortemente nell'organizzazione.</div>

                    <div class="flex ">

                        <!-- card -->
                        <div
                            class=" flex justify-around py-[6vw]  items-center mt-[20px] mx-[25px] w-screen    rounded-[20px]  bg-[rgba(255,255,255,0.2)] ">




                            <img src="../assets/pc.png" alt="" class=" w-[35vw] ml-[2vw]">

                            <div class="flex">

                            <div class="h-[44vw] flex flex-col items-center  w-[22vw] rounded-[100px] bg-black">
                                <div class="my-auto">a</div>
                                <div class="my-auto">b</div>
                                <div class="my-auto">c</div>
                            </div>

                            <div class="flex flex-col justify-around pl-[7vw] pr-[3vw] items-center">
                                <div>O</div>
                                <div>O</div>

                            </div>

                        </div>


                        </div>

                    </div>


                    <div class="mt-[10px]">
                        <!-- text -->
                        <div class="text-[20px] px-[30px]">Un’analisi accurata porta a un codice più pulito, uno
                            sviluppo
                            più veloce e al rispetto
                            di scadenze
                            prefissate.
                        </div>


                        <div class="text-[20px] px-[30px]">
                            Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato.
                            Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide.</div>

                    </div>


                </div>



                <!-- Project -->
                <div v-if="project" class="w-screen mt-[-60px] flex flex-col items-center ">


                    <!-- CONTENUTO -->
                    <div class="flex justify-center scale-[0.6] items-center ">

                        <!-- Cp1 -->
                        <a href="https://dribbble-replica-html-css.vercel.app/" @mouseover="over1 = true"
                            @mouseleave="over1 = false" :class="{ 'hidden': !cp1, 'flex': cp1 }" class="flex flex-col">

                            <span
                                class=" text-[rgba(255,255,255,0.26)] text-[40px] ml-[50px] font-semibold mb-[20px]"><span
                                    :class="{ 'text-white border-white': over1, 'border-[rgba(255,255,255,0.26)]': !over1 }"
                                    class="border-solid duration-200 border-b-4   ">Visita!</span></span>

                            <div :class="{ 'border-solid border-4': over1 }"
                                class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(132,132,247)] rounded-[60px]">
                                <!-- img cont -->
                                <img src="/public/p1.jpg" alt=""
                                    class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                                <div
                                    class="bg-gradient-to-t from-[rgb(132,132,247)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                                </div>
                                <div class=" bg-[rgb(132,132,247)]  mt-[-40px] w-[520px] h-[100px]"></div>

                                <!-- text e bottom -->
                                <div :class="{ 'text-white': over1, 'text-[rgb(230,230,251)]': !over1 }"
                                    class=" w-[470px]  mt-[-80px] font-semibold text-[18px] ">
                                    Ho scelto di prendere spunto da uno dei siti più famosi tra i creativi: Dribbble.
                                    <br>
                                    Ho voluto analizzare il suo stile e le sue animazioni, dato che è un sito
                                    all’avanguardia nel design
                                    e nel clean-code.
                                </div>

                                <div class="flex  items-center w-[470px] mt-[15px]  h-[50px]">
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 font-bold rounded-[20px]  border-solid border-2 border-white mr-[20px]">
                                        HTML
                                    </div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 border-solid border-2 border-white font-bold rounded-[20px]">
                                        CSS</div>

                                </div>
                            </div>

                        </a>

                        <!-- Cp2 -->
                        <a href="https://impiccato-game.vercel.app/" @mouseover="over2 = true"
                            @mouseleave="over2 = false" :class="{ 'hidden': !cp2, 'flex': cp2 }" class="flex flex-col">
                            <div :class="{ 'border-solid border-4': over2 }"
                                class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(250,128,128)] rounded-[60px]">
                                <!-- img cont -->
                                <img src="/public/p2.jpg" alt=""
                                    class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                                <div
                                    class="bg-gradient-to-t from-[rgb(250,128,128)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                                </div>
                                <div class=" bg-[rgb(250,128,128)]  mt-[-40px] w-[520px] h-[100px]"></div>

                                <!-- text e bottom -->
                                <div :class="{ 'text-white': over2, 'text-[rgb(245,218,218)]': !over2 }"
                                    class=" w-[470px]  mt-[-80px] font-semibold text-[18px] ">
                                    Mi sono divertito a ricreare il gioco dell’impiccato, sfidandomi direttamente contro
                                    il computer.
                                    <br>
                                    E tu, vieni a fare una partita?
                                </div>

                                <div class="flex  items-center w-[470px] mt-[15px]  h-[50px]">
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 font-bold rounded-[20px]  border-solid border-2 border-white mr-[20px]">
                                        HTML
                                    </div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 mr-[20px] border-solid border-2 border-white font-bold rounded-[20px]">
                                        TAILWIND</div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 border-solid border-2 border-white font-bold rounded-[20px]">
                                        JAVASCRIPT</div>
                                </div>

                            </div>

                            <span
                                class=" text-[rgba(255,255,255,0.26)] text-[25px] ml-[50px] font-semibold mt-[10px]"><span
                                    :class="{ 'text-white border-white': over2, 'border-[rgba(255,255,255,0.26)]': !over2 }"
                                    class="border-solid duration-200 border-b-2   ">Visita!</span></span>
                        </a>

                        <!-- Cp3 -->
                        <a href="https://penta-e-commerce.vercel.app/" @mouseover="over3 = true"
                            @mouseleave="over3 = false" :class="{ 'hidden': !cp3, 'flex': cp3 }" class="flex flex-col">
                            <div :class="{ 'border-solid border-4': over3 }"
                                class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(77,190,97)] rounded-[60px]">
                                <!-- img cont -->
                                <img src="/public/p3.jpg" alt=""
                                    class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                                <div
                                    class="bg-gradient-to-t from-[rgb(77,190,97)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                                </div>
                                <div class=" bg-[rgb(77,190,97)]  mt-[-40px] w-[520px] h-[100px]"></div>

                                <!-- text e bottom -->
                                <div :class="{ 'text-white': over3, 'text-[rgb(222,246,226)]': !over3 }"
                                    class=" w-[470px]  mt-[-100px] font-semibold text-[18px] ">
                                    Per questo progetto, insieme al mio team, abbiamo dato vita a un e-commerce. <br>
                                    Abbiamo creato un file JSON locale per popolare gli articoli e abbiamo adottato
                                    Pinia per gestire
                                    gli stati tra elementi e pagine. Ti va di fare acquisti?
                                </div>

                                <div class="flex justify-center  items-center w-[550px] mt-[10px]  h-[50px]">
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 font-bold rounded-[20px]  border-solid border-2 border-white mr-[10px]">
                                        HTML
                                    </div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 mr-[10px] border-solid border-2 border-white font-bold rounded-[20px]">
                                        TAILWIND</div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 mr-[10px] border-solid border-2 border-white font-bold rounded-[20px]">
                                        JAVASCRIPT</div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 mr-[10px] border-solid border-2 border-white font-bold rounded-[20px]">
                                        VUE.JS</div>
                                    <div
                                        class="py-[5px] px-[10px] bg-slate-300 text-slate-500 border-solid border-2 border-white font-bold rounded-[20px]">
                                        PINIA</div>
                                </div>

                            </div>

                            <span
                                class=" text-[rgba(255,255,255,0.26)] text-[25px] ml-[50px] font-semibold mt-[10px]"><span
                                    :class="{ 'text-white border-white': over3, 'border-[rgba(255,255,255,0.26)]': !over3 }"
                                    class="border-solid duration-200 border-b-2   ">Visita!</span></span>
                        </a>

                        <!-- Cp4 -->
                        <div :class="{ 'hidden': !cp4, 'flex': cp4 }" class="flex flex-col ">
                            <div class="text-[70px] font-bold text-[rgba(255,255,255,0.26)] text-nowrap ">COMING <span
                                    class="text-nowrap  text-[20px] ml-[-10px] text-green-400">10/04/24</span></div>
                            <div class="loader ml-[50px] bg-red-200"></div>

                        </div>
                    </div>



                    <!-- TESTO -->
                    <div class="flex flex-col items-center mt-[-300px] text-[30px] justify-center w-[400px] h-[600px] ">

                        <!-- p1 -->
                        <div class="flex  items-center ">
                            <button @click="cp11"
                                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp1, 'text-white border-solid border-b-4': cp1 }"
                                class="text-center mb-[5px]   font-bold">DRIBBBLE</button>
                        </div>
                        <!-- p2 -->
                        <div class="flex  items-center">
                            <button @click="cp22"
                                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp2, 'text-white border-solid border-b-4': cp2 }"
                                class="text-center mb-[5px]  font-bold">L'IMPICCATO</button>
                        </div>
                        <!-- p3 -->
                        <div class="flex  items-center">
                            <button @click="cp33"
                                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp3, 'text-white border-solid border-b-4': cp3 }"
                                class="text-center mb-[5px] text-nowrap  font-bold">P-COMMERCE</button>
                        </div>
                        <!-- p4 -->
                        <div class="flex  items-center">
                            <button @click="cp44"
                                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp4, 'text-white border-solid border-b-4': cp4 }"
                                class="text-center  font-bold">BLOG</button>
                        </div>

                    </div>

                </div>



                <!-- Contacts -->
                <div v-if="contacts" class="w-screen flex flex-col px-[25px]   ">

                    <div class="text-[35px]  font-bold ">RESIDENZA</div>
                    <div class="text-[20px] mt-[-10px] mb-[20px]  font-semibold  text-[rgb(253,175,154)]">Bari (BA)
                    </div>

                    <div class="text-[35px]  font-bold ">EMAIL</div>
                    <div class="text-[20px] mb-[20px] mt-[-10px] font-semibold   text-[rgb(195,154,253)]">
                        ape.develop3@gmail.com</div>

                    <div class="text-[35px]  font-bold ">NUMERO</div>
                    <div class="text-[20px] mb-[20px] mt-[-10px] font-semibold   text-[rgb(154,253,180)]">+39 3426398488
                    </div>

                    <div class="text-[35px]  font-bold ">LINKEDIN</div>
                    <a href="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
                        class="text-[20px]  font-semibold underline mb-[20px]  text-[rgb(248,253,154)]">Guarda i miei
                        post!</a>

                    <div class="text-[35px]  font-bold ">GITHUB</div>
                    <a href="https://github.com/AntoninoPalmaEsposito"
                        class="text-[20px] mb-[20px]  font-semibold underline  text-[rgb(154,241,253)]">Scopri
                        le mie repository!</a>

                    <div class="text-[35px]  font-bold ">INSTAGRAM</div>
                    <a href="https://www.instagram.com/tonystark______?igsh=Nnhjaml1bXN5MjBr"
                        class="text-[20px]  font-semibold underline mb-[20px]  text-[rgb(253,154,200)]">Visita il mio
                        profilo!</a>





                </div>
            </div>



        </div>














        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-4px] z-[-1]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[15px] left-[20px]">
        </div>



        <!-- BODY carta -->
        <div :class="{ 'top-[-10px]': scroll, 'top-[140vh]': !scroll }"
            class="absolute  left-[0px] flex flex-col items-center  h-screen duration-[4s] z-[-1]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">



            <!-- nav scroll -->
            <div class="flex justify-end mt-[45px] mb-[15px]  w-screen px-[35px]">
                <button @click="tscroll" class=" nav flex flex-col scale-90 items-end  ">
                    <div class="h-[6px] navc w-[45px] mb-[8px] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>
                    <div class="h-[6px] navc w-[45px] mb-[8px] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>
                    <div class="h-[6px] navc w-[45px] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>

                </button>
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
            contacts: false,
            cp1: true,
            cp2: false,
            cp3: false,
            cp4: false,
            over1: false,
            over2: false,
            over3: false,
            over4: false

        }
    },

    methods: {

        cp11() {
            this.cp1 = !this.cp1
            if (this.cp1) {
                this.cp2 = false
                this.cp3 = false
                this.cp4 = false
            }
        },
        cp22() {
            this.cp2 = !this.cp2
            if (this.cp2) {
                this.cp1 = false
                this.cp3 = false
                this.cp4 = false
            }
        },
        cp33() {
            this.cp3 = !this.cp3
            if (this.cp3) {
                this.cp1 = false
                this.cp2 = false
                this.cp4 = false
            }
        },
        cp44() {
            this.cp4 = !this.cp4
            if (this.cp4 == true) {
                this.cp1 = false
                this.cp2 = false
                this.cp3 = false
            }
        },

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

.nav {
    animation-name: navbounce;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes navbounce {
    from {
        scale: 0.9;
    }

    to {
        scale: 1.1;
    }
}

.navc {
    animation-name: navbounce2;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes navbounce2 {
    from {
        background-color: rgba(0, 0, 0, 0.52);
    }

    to {
        background-color: rgba(0, 0, 0, 0.749);
    }
}
</style>