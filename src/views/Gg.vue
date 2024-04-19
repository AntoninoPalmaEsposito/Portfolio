<template>
    <div class="relative md:hidden  h-screen bg-black z-[20]">



        <!-- BODY bg -->
        <div
            class="w-screen relative flex flex-col items-center pt-[4vw] text-white  font-semibold text-[5.7vw] z-[-1] ">

            <!-- NAV bg -->
            <div class="flex justify-end pr-[3vw]  w-screen">

                <div class="flex items-end">

                    <div class="relative top-[7vw] h-[40vw]  rounded-[50px] mr-[6vw] w-[1vw] bg-[rgb(109,109,109)]">
                    </div>

                    <ul class="flex flex-col items-start w-[40vw]">

                        <li class=""><button @click="tscroll"
                                :class="{ 'opacity-[0.45]': !scroll, 'opacity-1': scroll }" class="duration-500"><img
                                    src="../assets/freccia.png" alt="" class="w-[8.5vw]"></button></li>

                        <li><button @click="devpp"
                                :class="{ 'text-[rgba(255,255,255,0.45)] ': !devp, 'text-white text-[7vw] mb-[2vw]  underline underline-offset-[2vw] ': devp }"
                                class="duration-500 text-start text-nowrap mt-[-1vw]">Dev. Profile</button></li>

                        <li><button @click="projectp"
                                :class="{ 'text-[rgba(255,255,255,0.45)]': !project, 'text-white text-[7vw] mb-[2vw] underline underline-offset-[2vw]': project }"
                                class="duration-500 text-start">Projects</button></li>

                        <li><button @click="contactsp"
                                :class="{ 'text-[rgba(255,255,255,0.45)]': !contacts, 'text-white text-[7vw] mb-[2vw] underline underline-offset-[2vw]': contacts }"
                                class="duration-500 text-start">Contacts</button></li>

                        <div class="w-[48vw] h-[1vw] mt-[4vw] ml-[-18vw] rounded-[50px] bg-[rgb(109,109,109)]"></div>


                    </ul>

                </div>

            </div>


            <!-- container section -->
            <div class="mt-[25vw] text-white">

                <!-- Dev Profile -->
                <div v-if="devp1" :class="{ 'opacitys2': !devp, 'opacitys': devp }" class="w-screen flex flex-col   ">

                    <!-- h1 -->
                    <div class="text-[7vw] px-[12vw] font-semibold  leading-[7vw]"> <span
                            class="text-[14vw] font-extrabold">Vision: </span></div>

                    <div class="flex ">

                        <!-- card -->
                        <div
                            class=" flex justify-around py-[6vw]     items-center mt-[4vw] mx-[6.3vw] w-screen    rounded-[10vw]  bg-[rgba(255,255,255,0.29)] ">




                            <img src="../assets/pc.png" alt="" class=" w-[35vw] ml-[2vw]">

                            <div class="flex">

                                <div
                                    class="h-[44vw]   flex flex-col py-[10px] items-center  w-[22vw] rounded-[100px] duration-500 bg-black">

                                    <div v-if="img1" class="my-auto flex flex-col items-center"><img
                                            src="../assets/htmlI.png" alt=""
                                            :class="{ ' mt-[9vw] opp': cimg1, ' opp2': !cimg1 }" class="  ">
                                        <div v-if="cimg1" class="text-[3vw] text-center mt-[0.5vw]">HTML</div>
                                    </div>

                                    <div v-if="img2" class="my-auto flex flex-col items-center"><img
                                            src="../assets/cssI.png" alt="" :class="{ '  opp': cimg2, ' opp2': !cimg2 }"
                                            class="  ">
                                        <div v-if="cimg2" class="text-[3vw] text-center mt-[0.5vw]">CSS</div>
                                    </div>


                                    <div v-if="img3" class="my-auto flex flex-col items-center"><img
                                            src="../assets/javascriptI.png" alt=""
                                            :class="{ '  opp': cimg3, ' opp2': !cimg3 }" class="  ">
                                        <div v-if="cimg3" class="text-[3vw] text-center mt-[0.5vw]">JS</div>
                                    </div>

                                    <div v-if="img4" class="my-auto flex flex-col items-center "><img
                                            src="../assets/tailwindI.png" alt=""
                                            :class="{ '  opp': cimg4, ' opp2': !cimg4 }" class="  ">
                                        <div v-if="cimg4" class="text-[3vw] text-center mt-[0.5vw]">TAILWIND</div>
                                    </div>


                                    <div v-if="img5" class="my-auto flex flex-col items-center"><img
                                            src="../assets/vueI.png" alt="" :class="{ '  opp': cimg5, ' opp2': !cimg5 }"
                                            class="  ">
                                        <div v-if="cimg5" class="text-[3vw] text-center mt-[0.5vw]">VUE.JS</div>
                                    </div>

                                    <div v-if="img6" class="my-auto flex flex-col items-center"><img
                                            src="../assets/vsI.png" alt="" :class="{ '  opp': cimg6, ' opp2': !cimg6 }"
                                            class="  ">
                                        <div v-if="cimg6" class="text-[3vw] text-center mt-[0.5vw]">VSC</div>
                                    </div>

                                    <div v-if="img7" class="my-auto flex flex-col items-center"><img
                                            src="../assets/gitI.jpg" alt="" :class="{ '  opp': cimg7, ' opp2': !cimg7 }"
                                            class="  ">
                                        <div v-if="cimg7" class="text-[3vw] text-center mt-[0.5vw]">GITHUB</div>
                                    </div>

                                    <div v-if="img8" class="my-auto flex flex-col items-center"><img
                                            src="../assets/figmaI.png" alt=""
                                            :class="{ '  opp': cimg8, ' opp2': !cimg8 }" class="  ">
                                        <div v-if="cimg8" class="text-[3vw] text-center mt-[0.5vw]">FIGMA</div>
                                    </div>

                                    <div v-if="img9" class="my-auto flex flex-col items-center"><img
                                            src="../assets/adobeI.png" alt=""
                                            :class="{ '  opp': cimg9, ' opp2': !cimg9 }" class="  ">
                                        <div v-if="cimg9" class="text-[3vw] text-center mt-[0.5vw]">ADOBE</div>
                                    </div>

                                    <div v-if="img10" class="my-auto flex flex-col items-center"><img
                                            src="../assets/apil.png" alt=""
                                            :class="{ '  opp': cimg10, ' opp2': !cimg10 }" class="  ">
                                        <div v-if="cimg10" class="text-[3vw] text-center mt-[0.5vw]">API REST</div>
                                    </div>

                                    <div v-if="img11" class="my-auto flex flex-col items-center"><img
                                            src="../assets/google.png" alt=""
                                            :class="{ '  opp': cimg11, ' opp2': !cimg11 }" class="">
                                        <div v-if="cimg11" class="text-[3vw] text-center mt-[0.5vw]">GOOGLE.A</div>
                                    </div>

                                    <div v-if="img12" class="my-auto flex flex-col items-center"><img
                                            src="../assets/postman.png" alt=""
                                            :class="{ '  opp': cimg12, ' opp2': !cimg12 }" class="  ">
                                        <div v-if="cimg12" class="text-[3vw] text-center mt-[0.5vw]">POSTMAN</div>
                                    </div>

                                    <div v-if="img13" class="my-auto  flex flex-col items-center"><img
                                            src="../assets/npm.png" alt=""
                                            :class="{ '  opp ': cimg13, ' opp2': !cimg13 }" class="  ">
                                        <div v-if="cimg13" :class="{ 'mb-[9vw]': cimg13 }"
                                            class="text-[3vw] text-center mt-[0.5vw]">NPM</div>
                                    </div>

                                </div>

                                <div class="flex flex-col justify-around  pl-[4vw] items-center">

                                    <button @click="meno"><img src="../assets/fsu.png" alt=""
                                            :class="{ 'opacity-35': fsu, 'opacity-100': !fsu }"
                                            class="w-[8vw] duration-1000"></button>

                                    <button @click="più"><img src="../assets/fgiu.png" alt=""
                                            :class="{ 'opacity-35': fgiu, 'opacity-100': !fgiu }"
                                            class="w-[8vw] duration-1000"></button>

                                </div>

                            </div>


                        </div>

                    </div>


                    <div class="mt-[5vw]">
                        <!-- text -->
                        <div class="text-[4vw] px-[6.5vw]">
                            Credo fortemente nell'organizzazione. <br>
                            Un’analisi accurata porta a un codice più pulito, uno
                            sviluppo
                            più veloce e al rispetto
                            di scadenze
                            prefissate &#9200
                        </div>


                        <div class="text-[4vw] px-[6.5vw] mt-[3vw]">
                            Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato.
                            Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide &#128293</div>

                        <div class="text-[4vw] px-[6.5vw] pt-[3vw]">
                            Sono un umano socievole che apprezza il senso di comunità all’interno del team. <br>
                            Credo fermamente nell’importanza della formazione continua e valorizzo l’aiuto reciproco
                            &#9749
                        </div>
                    </div>


                </div>



                <!-- Project -->
                <div v-if="project1" :class="{ 'opacitys2': !project, 'opacitys': project }"
                    class="w-screen mt-[-4vw]  flex flex-col items-center ">


                    <!-- CONTENUTO -->
                    <div class="flex justify-center items-center  ">

                        <!-- Cp1 -->
                        <a v-if="cp1" href="https://dribbble-replica-html-css.vercel.app/"
                            :class="{ 'p1': c1, 'p2': !c1 }" class="flex flex-col">

                            <!-- visita -->
                            <span class="text-[5vw]  font-semibold ml-[8vw] mb-[2vw]"><span
                                    class="border-solid border-b-2 text-[rgba(255,255,255,0.38)] border-[rgba(255,255,255,0.38)]  ">Visita!</span></span>

                            <!-- container -->
                            <div
                                class="relative flex flex-col  items-center w-[85vw] z-10 duration-100 p-[1.5vw]  h-[80vw] bg-[rgb(132,132,247)]    rounded-[10vw]">

                                <!-- img -->
                                <img src="/public/p1.jpg" alt=""
                                    class="w-[85vw] h-[43vw]  rounded-[8.5vw] object-cover">

                                <!-- img cont -->
                                <div
                                    class="bg-gradient-to-t from-[rgb(132,132,247)] to-[rgba(255,255,255,0)] absolute top-0  w-[82vw] h-[44.5vw]   ">
                                </div>

                                <!-- text e bottom -->
                                <div
                                    class=" w-[85vw] pt-[4.8vw]  px-[4vw] z-[0] font-semibold mt-[-3vw] text-[3.5vw] text-white leading-[4vw] ">
                                    Ho scelto di prendere spunto da uno dei siti più famosi tra i creativi: Dribbble.
                                    Ho voluto analizzare il suo stile e le sue animazioni, dato che è un sito
                                    all’avanguardia nel design
                                    e nel clean-code.
                                </div>

                                <!-- skils -->
                                <div class="flex item-end scale-90 mt-[2vw] w-[85vw] px-[4vw] ">

                                    <div
                                        class="px-[1.5vw] bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw]">
                                        HTML
                                    </div>

                                    <div
                                        class="px-[1.5vw] ml-[4vw] bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw]">
                                        CSS
                                    </div>

                                </div>
                            </div>
                        </a>

                        <!-- Cp2s -->
                        <a v-if="cp2" href="https://impiccato-game.vercel.app/" :class="{ 'p1': c2, 'p2': !c2 }"
                            class="flex flex-col ">

                            <!-- visita -->
                            <span class="text-[5vw] font-semibold ml-[8vw] mb-[2vw]"><span
                                    class="border-solid border-b-2  text-[rgba(255,255,255,0.38)] border-[rgba(255,255,255,0.38)]">Visita!</span></span>

                            <!-- container -->
                            <div
                                class="relative flex flex-col  items-center w-[85vw] z-10 duration-100 p-[1.5vw]  h-[80vw] bg-[rgb(250,128,128)]   rounded-[10vw]">

                                <!-- img -->
                                <img src="/public/p2.jpg" alt=""
                                    class="w-[85vw] h-[43vw]  rounded-[8.5vw] object-top object-cover">

                                <!-- img cont -->
                                <div
                                    class="bg-gradient-to-t from-[rgb(250,128,128)] to-[rgba(255,255,255,0)] absolute top-0  w-[82vw] h-[44.5vw]   ">
                                </div>

                                <!-- text e bottom -->
                                <div
                                    class=" w-[85vw] pt-[4.8vw]  px-[4vw] z-[0] font-semibold mt-[-3vw] text-[3.5vw] text-white leading-[4vw] ">
                                    Mi sono divertito a ricreare il gioco dell’impiccato, sfidandomi direttamente contro
                                    il computer.
                                    E tu, vieni a fare una partita?
                                </div>

                                <!-- skils -->
                                <div class="flex item-end scale-90 pt-[10vw] w-[85vw] px-[4vw] ">

                                    <div
                                        class="px-[1.5vw] bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw]">
                                        HTML
                                    </div>

                                    <div
                                        class="px-[1.5vw] ml-[4vw] bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw]">
                                        TAILWIND
                                    </div>

                                    <div
                                        class="px-[1.5vw] ml-[4vw] bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw]">
                                        JAVASCRIPT
                                    </div>

                                </div>
                            </div>
                        </a>

                        <!-- Cp3s -->
                        <a v-if="cp3" href="https://penta-e-commerce.vercel.app/" :class="{ 'p1': c3, 'p2': !c3 }"
                            class="flex flex-col ">

                            <!-- visita -->
                            <span class="  text-[5vw] font-semibold ml-[8vw] mb-[2vw]"><span
                                    class="border-solid border-b-2 text-[rgba(255,255,255,0.38)] border-[rgba(255,255,255,0.38)] ">Visita!</span></span>

                            <!-- container -->
                            <div
                                class="relative flex flex-col  items-center w-[85vw] z-10 duration-100 p-[1.5vw]  h-[80vw] bg-[rgb(77,190,97)]  rounded-[10vw]">

                                <!-- img -->
                                <img src="/public/p3.jpg" alt=""
                                    class="w-[85vw] h-[43vw]  rounded-[8.5vw]  object-center object-cover">

                                <!-- img cont -->
                                <div
                                    class="bg-gradient-to-t from-[rgb(77,190,97)] to-[rgba(255,255,255,0)] absolute top-0  w-[82vw] h-[44.5vw]   ">
                                </div>

                                <!-- text e bottom -->
                                <div
                                    class=" w-[85vw] pt-[4.8vw]  px-[4vw] z-[0] font-semibold mt-[-3vw] text-[3.5vw] text-white leading-[4vw] ">
                                    Per questo progetto, insieme al mio team, abbiamo dato vita a un e-commerce.
                                    Abbiamo creato un file JSON locale per popolare gli articoli e abbiamo adottato
                                    Pinia per gestire
                                    gli stati tra elementi e pagine. Ti va di fare acquisti?
                                </div>

                                <!-- skils -->
                                <div class="flex justify-center pt-[2.5vw] w-[85vw] px-[5vw] ">

                                    <div
                                        class="px-[1.5vw] mr-[-1vw]  bg-slate-300  text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw] scale-[0.8]">
                                        HTML
                                    </div>

                                    <div
                                        class="px-[1.5vw]  bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw] scale-[0.8]">
                                        TAILWIND
                                    </div>

                                    <div
                                        class="px-[1.5vw]  bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw] scale-[0.8]">
                                        JS
                                    </div>

                                    <div
                                        class="px-[1.5vw]  bg-slate-300 text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw] scale-[0.8]">
                                        VUE.JS
                                    </div>

                                    <div
                                        class="px-[1.5vw]  bg-slate-300  text-slate-500 font-bold rounded-[3vw]  border-solid border-2 border-white text-[4vw] scale-[0.8]">
                                        PINIA
                                    </div>

                                </div>
                            </div>
                        </a>




                        <!-- Cp4 -->
                        <div v-if="cp4" :class="{ 'p1': c4, 'p2': !c4 }"
                            class="flex flex-col justify-center items-center w-[85vw] h-[80vw] mt-[9.6vw] border-2 border-[rgba(255,255,255,0.45)] rounded-[10vw]">
                            <div class="text-[10vw] font-bold text-[rgba(255,255,255,0.45)] text-nowrap ">COMING </div>
                            <span class=" font-bold text-[3.3vw] mt-[-1vw] text-green-400">01/05/24</span>
                            <div class="loader scale-[0.6] mt-[0.3vw] bg-red-200"></div>

                        </div>
                    </div>



                    <!-- TESTO2 -->
                    <div class="flex items-center justify-between w-screen px-[12vw] pt-[7vw]">
                        <button @click="indietro">
                            <img src="../assets/fsin.png" alt="" :class="{ 'opacity-35': fsin, 'opacity-100': !fsin }"
                                class="w-[9vw]">
                        </button>

                        <!-- pis1 -->
                        <div v-if="cp1" :class="{ 'p1': c1, 'p2': !c1 }" class="font-extrabold text-[7vw] mt-[-1vw]">
                            DRIBBBLE</div>

                        <!-- pis1 -->
                        <div v-if="cp2" :class="{ 'p1': c2, 'p2': !c2 }" class="font-extrabold text-[7vw] mt-[-1vw]">
                            L'IMPICCATO</div>

                        <!-- pis1 -->
                        <div v-if="cp3" :class="{ 'p1': c3, 'p2': !c3 }" class="font-extrabold text-[7vw] mt-[-1vw]">
                            P-COMMERCE</div>

                        <!-- pis1 -->
                        <div v-if="cp4" :class="{ 'p1': c4, 'p2': !c4 }" class="font-extrabold text-[7vw] mt-[-1vw]">
                            BLOG
                        </div>


                        <button @click="avanti">
                            <img src="../assets/fdes.png" alt="" :class="{ 'opacity-35': fdes, 'opacity-100': !des }"
                                class="w-[9vw]">
                        </button>

                    </div>

                    <!-- contatore -->
                    <div class="w-screen flex justify-center items-center text-[3.5vw]">{{ contatoretp }} / 4</div>

                </div>



                <!-- Contacts -->
                <div v-if="contacts1" :class="{ 'opacitys2': !contacts, 'opacitys': contacts }"
                    class="w-screen flex flex-col mt-[2vw] items-center   ">

                    <div class=" text-[11vw] t1 font-extrabold ">RESIDENZA</div>
                    <div class=" text-[4vw] mt-[-2vw] mb-[3vw]  font-normal   ">Bari (BA)
                    </div>

                    <div class=" text-[11vw] t2 font-extrabold  ">EMAIL</div>
                    <div class=" text-[4vw] mb-[3vw] mt-[-2vw] font-normal">
                        ape.develop3@gmail.com</div>

                    <div class=" text-[11vw] t3 font-extrabold  ">NUMERO</div>
                    <div class=" text-[4vw] mb-[3vw] mt-[-2vw] font-normal ">+39 3426398488
                    </div>

                    <div class=" text-[11vw] t4 font-extrabold  ">LINKEDIN</div>
                    <a href="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
                        class=" text-[4vw] underline underline-offset-[1vw] mb-[3vw] mt-[-2vw] font-normal">Guarda i
                        miei
                        post!</a>

                    <div class=" text-[11vw] t5 font-extrabold  ">GITHUB</div>
                    <a href="https://github.com/AntoninoPalmaEsposito"
                        class=" text-[4vw] mb-[3vw] mt-[-2vw] underline underline-offset-[1vw] font-normal">Scopri
                        le mie repository!</a>

                    <div class=" text-[11vw] t6 font-extrabold ">INSTAGRAM</div>
                    <a href="https://www.instagram.com/tonystark______?igsh=Nnhjaml1bXN5MjBr"
                        class=" text-[4vw]  underline underline-offset-[1vw] mt-[-2vw] font-normal">Visita il mio
                        profilo!</a>





                </div>
            </div>



        </div>














        <!-- NAV carta -->
        <div @click="tscroll" class="absolute top-0 left-[-0.8vw] z-[-1]">
            <img src="../assets/nav2.png" alt="" class="w-[50vw]">
            <img src="../assets/logo2.png" alt="" class="w-[25vw] absolute top-[3vw] left-[4vw]">
        </div>



        <!-- BODY carta -->
        <div :class="{ 'top-[-2vw]': scroll, 'top-[250vw]': !scroll }"
            class="absolute  left-[0px] flex flex-col items-center  h-screen duration-[4s] z-[-1]  w-screen ">

            <!-- img body -->
            <img src="../assets/corpo2.png" alt="" class=" absolute z-[-1]  left-[0px]">




            <!-- nav scroll -->
            <div class="flex justify-end mt-[12.5vw] mb-[4vw]  w-screen px-[7vw]">

                <!-- language -->
                <div class="h-[7.7vw] font-bold w-[20vw] rounded-[6px] flex border-2 mt-[-0.4vw] mr-[7vw]">
                    <div class="w-[50%] text-white rounded-l-[6px] text-center bg-[rgba(0,0,0,0.52)]">IT</div>
                    <div class="w-[50%] text-center text-[rgba(0,0,0,0.52)]">EN</div>
                </div>

                <button @click="tscroll" class=" flex flex-col items-end scale-110 ">
                    <div class="h-[1.2vw]  w-[9vw] mb-[1.6vw] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>
                    <div class="h-[1.2vw]  w-[9vw] mb-[1.6vw] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>
                    <div class="h-[1.2vw]  w-[9vw] rounded-[50px] bg-[rgba(0,0,0,0.52)]"></div>

                </button>
            </div>


            <!-- sect 1 -->
            <div
                class=" px-[5.5vw] pt-[14vw] w-screen leading-[8.5vw] font-extrabold text-[8.5vw]  text-[rgba(0,0,0,0.52)]">
                Mi
                chiamo Antonino e non sono solo un Web Developer <img src="../assets/freccian.png" alt=""
                    class="w-[4.5vw] inline-block ml-[1.5vw] animate-bounce mb-[-2vw] opacity-50"> </div>

            <!-- img 1 home -->
            <img src="../assets/disegno.png" alt="" class="px-[3.2vw] w-screen pt-[4vw]">

            <!-- 1 descrizione -->
            <div class="font-semibold text-[rgba(0,0,0,0.52)] text-[4vw] px-[5vw] pt-[2vw]">
                Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, <br>
                dove ho studiato arte illustrativa, grafica e progettazione architettonica. <br> Successivamente, mi
                sono
                iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                programmazione.
            </div>

            <div class="bg-white">

                <!-- img 2 home -->
                <img src="../assets/sedia.png" alt="" class="px-[4vw] mr-[5vw] w-[85vw] pt-[4vw]">

                <!-- 2 descrizione -->
                <div class="font-semibold text-[rgba(0,0,0,0.52)] text-[4vw] px-[5vw] pt-[2vw] pb-[14vw]">
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
            over4: false,
            devp1: true,
            project1: false,
            contacts1: false,
            constimg: 0,
            img1: true,
            img2: true,
            img3: false,
            img4: false,
            img5: false,
            img6: false,
            img7: false,
            img8: false,
            img9: false,
            img10: false,
            img11: false,
            img12: false,
            img13: false,
            cimg1: true,
            cimg2: false,
            cimg3: false,
            cimg4: false,
            cimg5: false,
            cimg6: false,
            cimg7: false,
            cimg8: false,
            cimg9: false,
            cimg10: false,
            cimg11: false,
            cimg12: false,
            cimg13: false,
            fsu: false,
            fgiu: true,
            contatorep: 0,
            contatoretp: '1',
            fsin: false,
            fdes: true,
            c1: true,
            c2: false,
            c3: false,
            c4: false


        }
    },

    methods: {

        meno() {
            if (this.constimg > 0) {
                this.constimg--
                console.log(this.constimg)

                if (this.constimg == 0) {
                    this.img1 = true
                    this.img2 = true
                    this.img3 = false

                    this.cimg1 = true
                    this.cimg2 = false
                    this.fsu = false
                    this.fgiu = true
                }
                else if (this.constimg == 1) {
                    this.img1 = true
                    this.img2 = true
                    this.img3 = true
                    this.img4 = false

                    this.cimg2 = true
                    this.cimg3 = false


                }
                else if (this.constimg == 2) {
                    this.img2 = true
                    this.img3 = true
                    this.img4 = true
                    this.img5 = false

                    this.cimg3 = true
                    this.cimg4 = false

                } else if (this.constimg == 3) {
                    this.img3 = true
                    this.img4 = true
                    this.img5 = true
                    this.img6 = false

                    this.cimg4 = true
                    this.cimg5 = false

                } else if (this.constimg == 4) {
                    this.img4 = true
                    this.img5 = true
                    this.img6 = true
                    this.img7 = false

                    this.cimg5 = true
                    this.cimg6 = false

                } else if (this.constimg == 5) {
                    this.img5 = true
                    this.img6 = true
                    this.img7 = true
                    this.img8 = false

                    this.cimg6 = true
                    this.cimg7 = false

                } else if (this.constimg == 6) {
                    this.img6 = true
                    this.img7 = true
                    this.img8 = true
                    this.img9 = false

                    this.cimg7 = true
                    this.cimg8 = false

                } else if (this.constimg == 7) {
                    this.img7 = true
                    this.img8 = true
                    this.img9 = true
                    this.img10 = false

                    this.cimg8 = true
                    this.cimg9 = false

                } else if (this.constimg == 8) {
                    this.img8 = true
                    this.img9 = true
                    this.img10 = true
                    this.img11 = false

                    this.cimg9 = true
                    this.cimg10 = false

                } else if (this.constimg == 9) {
                    this.img9 = true
                    this.img10 = true
                    this.img11 = true
                    this.img12 = false

                    this.cimg10 = true
                    this.cimg11 = false

                } else if (this.constimg == 10) {
                    this.img10 = true
                    this.img11 = true
                    this.img12 = true
                    this.img13 = false

                    this.cimg11 = true
                    this.cimg12 = false

                } else if (this.constimg == 11) {

                    this.img11 = true
                    this.img12 = true
                    this.img13 = true

                    this.cimg12 = true
                    this.cimg13 = false

                    this.fsu = false
                    this.fgiu = false
                }

            }

        },

        più() {
            if (this.constimg >= 0 && this.constimg < 12) {
                this.constimg++
                console.log(this.constimg)
                if (this.constimg == 0) {
                    this.img1 = true
                    this.img2 = true
                    this.img3 = false

                    this.fsu = false
                    this.fgiu = true



                } else if (this.constimg == 1) {
                    this.img1 = true
                    this.img2 = true
                    this.img3 = true

                    this.cimg1 = false
                    this.cimg2 = true

                    this.fsu = false
                    this.fgiu = false

                }
                else if (this.constimg == 2) {
                    this.img1 = false
                    this.img2 = true
                    this.img3 = true
                    this.img4 = true

                    this.cimg2 = false
                    this.cimg3 = true
                }
                else if (this.constimg == 3) {
                    this.img2 = false
                    this.img3 = true
                    this.img4 = true
                    this.img5 = true

                    this.cimg3 = false
                    this.cimg4 = true

                } else if (this.constimg == 4) {
                    this.img3 = false
                    this.img4 = true
                    this.img5 = true
                    this.img6 = true

                    this.cimg4 = false
                    this.cimg5 = true

                } else if (this.constimg == 5) {
                    this.img4 = false
                    this.img5 = true
                    this.img6 = true
                    this.img7 = true

                    this.cimg5 = false
                    this.cimg6 = true

                } else if (this.constimg == 6) {
                    this.img5 = false
                    this.img6 = true
                    this.img7 = true
                    this.img8 = true

                    this.cimg6 = false
                    this.cimg7 = true

                } else if (this.constimg == 7) {
                    this.img6 = false
                    this.img7 = true
                    this.img8 = true
                    this.img9 = true

                    this.cimg7 = false
                    this.cimg8 = true

                } else if (this.constimg == 8) {
                    this.img7 = false
                    this.img8 = true
                    this.img9 = true
                    this.img10 = true

                    this.cimg8 = false
                    this.cimg9 = true

                } else if (this.constimg == 9) {
                    this.img8 = false
                    this.img9 = true
                    this.img10 = true
                    this.img11 = true

                    this.cimg9 = false
                    this.cimg10 = true

                } else if (this.constimg == 10) {
                    this.img9 = false
                    this.img10 = true
                    this.img11 = true
                    this.img12 = true

                    this.cimg10 = false
                    this.cimg11 = true

                } else if (this.constimg == 11) {
                    this.img10 = false
                    this.img11 = true
                    this.img12 = true
                    this.img13 = true

                    this.cimg11 = false
                    this.cimg12 = true

                } else if (this.constimg == 12) {
                    this.img11 = false
                    this.img12 = true
                    this.img13 = true

                    this.cimg12 = false
                    this.cimg13 = true

                    this.fsu = true
                    this.fgiu = false
                }

            }
        },

        indietro() {
            if (this.contatorep > 0)

                this.contatorep--

            if (this.contatorep == 0) {
                this.fdes = true
                this.c1 = true
                this.c2 = false
                this.c3 = false
                this.c4 = false
                setTimeout(() => {
                    this.contatoretp = '1'
                    this.cp1 = true
                    this.cp2 = false
                    this.cp3 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 1) {
                this.c2 = true
                this.c1 = false
                this.c3 = false
                this.c4 = false
                setTimeout(() => {
                    this.contatoretp = '2'
                    this.cp2 = true
                    this.cp1 = false
                    this.cp3 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 2) {
                this.fsin = false
                this.c3 = true
                this.c2 = false
                this.c1 = false
                this.c4 = false
                setTimeout(() => {
                    this.contatoretp = '3'
                    this.cp3 = true
                    this.cp2 = false
                    this.cp1 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 3) {
                this.c4 = true
                this.c3 = false
                this.c2 = false
                this.c1 = false
                setTimeout(() => {
                    this.contatoretp = '4'
                    this.cp4 = true
                    this.cp3 = false
                    this.cp2 = false
                    this.cp1 = false
                }, 500);
            }
        },

        avanti() {
            if (this.contatorep < 3)

                this.contatorep++

            if (this.contatorep == 0) {
                this.c1 = false
                this.c2 = false
                this.c3 = false
                this.c4 = false

                setTimeout(() => {
                    this.contatoretp = '1'
                    this.cp1 = true
                    this.cp2 = false
                    this.cp3 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 1) {
                this.fdes = false
                this.c2 = true
                this.c1 = false
                this.c3 = false
                this.c4 = false
                setTimeout(() => {
                    this.contatoretp = '2'
                    this.cp2 = true
                    this.cp1 = false
                    this.cp3 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 2) {
                this.c3 = true
                this.c2 = false
                this.c1 = false
                this.c4 = false
                setTimeout(() => {
                    this.contatoretp = '3'
                    this.cp3 = true
                    this.cp2 = false
                    this.cp1 = false
                    this.cp4 = false
                }, 500);
            } else if (this.contatorep == 3) {
                this.fsin = true
                this.c4 = true
                this.c3 = false
                this.c2 = false
                this.c1 = false
                setTimeout(() => {
                    this.contatoretp = '4'
                    this.cp4 = true
                    this.cp3 = false
                    this.cp2 = false
                    this.cp1 = false
                }, 500);
            }

            console.log(this.contatorep)
        },




        tscroll() {
            this.scroll = !this.scroll
            if (this.scroll) {
                this.devp = false
                this.project = false
                this.contacts = false

                setTimeout(() => {
                    this.devp1 = false;
                }, 500);

                setTimeout(() => {
                    this.project1 = false;
                }, 500);

                setTimeout(() => {
                    this.contacts1 = false;
                }, 500);



            } else {
                this.devp = true
                this.project = false
                this.contacts = false

                setTimeout(() => {
                    this.devp1 = true;
                }, 500);

                setTimeout(() => {
                    this.project1 = false;
                }, 500);

                setTimeout(() => {
                    this.contacts1 = false;
                }, 500);
            }

        },

        devpp() {
            this.scroll = false
            this.devp = true
            this.project = false
            this.contacts = false

            setTimeout(() => {
                this.devp1 = true;
            }, 500);

            setTimeout(() => {
                this.project1 = false;
            }, 500);

            setTimeout(() => {
                this.contacts1 = false;
            }, 500);

        },

        projectp() {
            this.scroll = false
            this.devp = false
            this.project = true
            this.contacts = false

            setTimeout(() => {
                this.devp1 = false;
            }, 500);

            setTimeout(() => {
                this.project1 = true;
            }, 500);

            setTimeout(() => {
                this.contacts1 = false;
            }, 500);
        },

        contactsp() {
            this.scroll = false
            this.devp = false
            this.project = false
            this.contacts = true

            setTimeout(() => {
                this.devp1 = false;
            }, 500);

            setTimeout(() => {
                this.project1 = false;
            }, 500);

            setTimeout(() => {
                this.contacts1 = true;
            }, 500);
        },
    }

}

</script>









<style>
body {
    background-color: black;
}

.t1 {
    animation-name: t1;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t1 {

    0% {
        color: #e7f5d3;
    }

    25% {
        color: rgb(198, 245, 221);
    }

    50% {
        color: rgb(242, 206, 248);
    }

    75% {
        color: #f9dbca;
    }

    100% {
        color: #e7f5d3;
    }
}

.t2 {
    animation-name: t2;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t2 {

    0% {
        color: #dcf7b7;
    }

    25% {
        color: rgb(175, 248, 210);
    }

    50% {
        color: rgb(239, 180, 250);
    }

    75% {
        color: #fac9ac;
    }

    100% {
        color: #dcf7b7;
    }
}

.t3 {
    animation-name: t3;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t3 {

    0% {
        color: #d0f799;
    }

    25% {
        color: rgb(146, 247, 195);
    }

    50% {
        color: rgb(233, 153, 247);
    }

    75% {
        color: #f7b088;
    }

    100% {
        color: #d0f799;
    }
}

.t4 {
    animation-name: t4;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t4 {

    0% {
        color: #c3f878;
    }

    25% {
        color: rgb(116, 250, 181);
    }

    50% {
        color: rgb(231, 130, 249);
    }

    75% {
        color: #f6a06e;
    }

    100% {
        color: #c3f878;
    }
}

.t5 {
    animation-name: t5;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t5 {
    0% {
        color: #b9fc5c;
    }

    25% {
        color: rgb(84, 247, 163);
    }

    50% {
        color: rgb(227, 111, 247);
    }

    75% {
        color: #f48b4d;
    }

    100% {
        color: #b9fc5c;
    }
}

.t6 {
    animation-name: t6;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes t6 {
    0% {
        color: #aaf93c;
    }

    25% {
        color: rgb(55, 247, 148);
    }

    50% {
        color: rgb(223, 87, 247);
    }

    75% {
        color: #f67d36;
    }

    100% {
        color: #aaf93c;
    }
}


.p1 {
    animation-name: p1;
    animation-duration: 1s;
    filter: blur(0px);
    opacity: 1;

}

@keyframes p1 {
    from {
        opacity: 0;
        filter: blur(8px);

    }

    to {
        opacity: 1;
        filter: blur(0px);
    }
}

.p2 {
    animation-name: p2;
    animation-duration: 0.5s;
    opacity: 1;
    filter: blur(8px);
}

@keyframes p2 {
    from {
        opacity: 1;
        filter: blur(0px);


    }

    to {
        opacity: 0;
        filter: blur(8px);

    }
}


.devclass {

    opacity: 1;
    animation-name: devc;
    animation-duration: 2s;
    animation-delay: 2s;
}

@keyframes devc {
    from {
        opacity: 0;
        display: none;

    }

    to {
        opacity: 1;
        display: flex;
    }
}

.devclass2 {
    display: none;
    opacity: 1;
    animation-name: devc2;
    animation-duration: 2s;
}

@keyframes devc2 {
    from {
        opacity: 1;
        display: flex;

    }

    to {
        opacity: 0;
        display: none;
    }
}



.borderv {
    animation-name: bvisit;
    animation-duration: 2s;
    border-color: rgba(255, 255, 255, 0.164);

    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes bvisit {
    from {
        border-color: rgba(255, 255, 255, 0.164);

    }

    to {
        border-color: rgb(255, 255, 255);
    }
}

.visita {
    animation-name: visit;
    animation-duration: 2s;
    color: rgba(255, 255, 255, 0.164);

    animation-direction: alternate;
    animation-iteration-count: infinite;

}

@keyframes visit {
    from {
        color: rgba(255, 255, 255, 0.164);

    }

    to {
        color: rgb(255, 255, 255);
    }
}

.opp {
    animation-name: opa;
    animation-duration: 1s;
    width: 11vw;
    filter: blur(0px);

}

@keyframes opa {
    from {
        opacity: 0;
        width: 6vw;
        filter: blur(2px);

    }

    to {
        opacity: 1;
        width: 11vw;
        filter: blur(0px);
    }
}

.opp2 {
    animation-name: opa2;
    animation-duration: 1s;
    opacity: 0.5;
    width: 6vw;
    filter: blur(2px);
}

@keyframes opa2 {
    from {
        opacity: 0;
        width: 11vw;
        filter: blur(0px);


    }

    to {
        opacity: 0.5;
        width: 6vw;
        filter: blur(2px);

    }
}


.opacitys {
    animation-name: opacitysc;
    animation-duration: 1s;
}

@keyframes opacitysc {
    from {
        opacity: 0;
        filter: blur(10px);

    }

    to {
        opacity: 1;
        filter: blur(0);
    }
}

.opacitys2 {
    animation-name: opacitysc2;
    animation-duration: 0.5s;
}

@keyframes opacitysc2 {
    from {
        opacity: 1;
        filter: blur(0);

    }

    to {
        opacity: 0;
        filter: blur(10px);
    }
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