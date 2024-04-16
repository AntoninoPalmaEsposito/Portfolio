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
            <div class="mt-[100px] text-white">

                <!-- Dev Profile -->
                <div v-if="devp1" :class="{ 'opacitys2': !devp, 'opacitys': devp }" class="w-screen flex flex-col   ">

                    <!-- h1 -->
                    <div class="font-bold  text-[25px] px-[30px]  leading-7"><span
                            class="text-[60px] font-extrabold">Credo</span> fortemente nell'organizzazione.</div>

                    <div class="flex ">

                        <!-- card -->
                        <div
                            class=" flex justify-around py-[6vw] border-r-[1px] border-b-[1px]  border-[rgb(119,119,119)]  items-center mt-[20px] mx-[25px] w-screen    rounded-[10vw]  bg-[rgba(255,255,255,0.2)] ">




                            <img src="../assets/pc.png" alt="" class=" w-[35vw] ml-[2vw]">

                            <div class="flex">

                                <div
                                    class="h-[44vw] border-l-[1px] border-t-[1px] border-[rgb(119,119,119)] flex flex-col py-[10px] items-center  w-[22vw] rounded-[100px] duration-500 bg-black">

                                    <div v-if="img1" class="my-auto flex flex-col items-center"><img
                                            src="../assets/htmlI.png" alt=""
                                            :class="{ ' mt-[80%] opp': cimg1, ' opp2': !cimg1 }" class="  ">
                                        <div v-if="cimg1" class="text-[3vw] text-center mt-[3px]">HTML</div>
                                    </div>

                                    <div v-if="img2" class="my-auto flex flex-col items-center"><img
                                            src="../assets/cssI.png" alt="" :class="{ '  opp': cimg2, ' opp2': !cimg2 }"
                                            class="  ">
                                        <div v-if="cimg2" class="text-[3vw] text-center mt-[3px]">CSS</div>
                                    </div>


                                    <div v-if="img3" class="my-auto flex flex-col items-center"><img
                                            src="../assets/javascriptI.png" alt=""
                                            :class="{ '  opp': cimg3, ' opp2': !cimg3 }" class="  ">
                                        <div v-if="cimg3" class="text-[3vw] text-center mt-[3px]">JS</div>
                                    </div>

                                    <div v-if="img4" class="my-auto flex flex-col items-center"><img
                                            src="../assets/tailwindI.png" alt=""
                                            :class="{ '  opp': cimg4, ' opp2': !cimg4 }" class="  ">
                                        <div v-if="cimg4" class="text-[3vw] text-center mt-[3px]">TAILWIND</div>
                                    </div>


                                    <div v-if="img5" class="my-auto flex flex-col items-center"><img
                                            src="../assets/vueI.png" alt="" :class="{ '  opp': cimg5, ' opp2': !cimg5 }"
                                            class="  ">
                                        <div v-if="cimg5" class="text-[3vw] text-center mt-[3px]">VUE.JS</div>
                                    </div>

                                    <div v-if="img6" class="my-auto flex flex-col items-center"><img
                                            src="../assets/vsI.png" alt="" :class="{ '  opp': cimg6, ' opp2': !cimg6 }"
                                            class="  ">
                                        <div v-if="cimg6" class="text-[3vw] text-center mt-[3px]">VSC</div>
                                    </div>

                                    <div v-if="img7" class="my-auto flex flex-col items-center"><img
                                            src="../assets/gitI.jpg" alt="" :class="{ '  opp': cimg7, ' opp2': !cimg7 }"
                                            class="  ">
                                        <div v-if="cimg7" class="text-[3vw] text-center mt-[3px]">GITHUB</div>
                                    </div>

                                    <div v-if="img8" class="my-auto flex flex-col items-center"><img
                                            src="../assets/figmaI.png" alt=""
                                            :class="{ '  opp': cimg8, ' opp2': !cimg8 }" class="  ">
                                        <div v-if="cimg8" class="text-[3vw] text-center mt-[3px]">FIGMA</div>
                                    </div>

                                    <div v-if="img9" class="my-auto flex flex-col items-center"><img
                                            src="../assets/adobeI.png" alt=""
                                            :class="{ '  opp': cimg9, ' opp2': !cimg9 }" class="  ">
                                        <div v-if="cimg9" class="text-[3vw] text-center mt-[5px]">ADOBE</div>
                                    </div>

                                    <div v-if="img10" class="my-auto flex flex-col items-center"><img
                                            src="../assets/apil.png" alt=""
                                            :class="{ '  opp': cimg10, ' opp2': !cimg10 }" class="  ">
                                        <div v-if="cimg10" class="text-[3vw] text-center mt-[3px]">API REST</div>
                                    </div>

                                    <div v-if="img11" class="my-auto flex flex-col items-center"><img
                                            src="../assets/google.png" alt=""
                                            :class="{ '  opp': cimg11, ' opp2': !cimg11 }" class="">
                                        <div v-if="cimg11" class="text-[3vw] text-center ">GOOGLE.A</div>
                                    </div>

                                    <div v-if="img12" class="my-auto flex flex-col items-center"><img
                                            src="../assets/postman.png" alt=""
                                            :class="{ '  opp': cimg12, ' opp2': !cimg12 }" class="  ">
                                        <div v-if="cimg12" class="text-[3vw] text-center mt-[3px]">POSTMAN</div>
                                    </div>

                                    <div v-if="img13" class="my-auto  flex flex-col items-center"><img
                                            src="../assets/npm.png" alt=""
                                            :class="{ '  opp ': cimg13, ' opp2': !cimg13 }" class="  ">
                                        <div v-if="cimg13" :class="{ 'mb-[80%]': cimg13 }"
                                            class="text-[3vw] text-center mb-[3px]">NPM</div>
                                    </div>

                                </div>

                                <div class="flex flex-col justify-around  pl-[4vw] items-center">

                                    <button @click="meno"><img src="../assets/fsu.png" alt=""
                                            :class="{ 'opacity-35': !fsu, 'opacity-95': fsu }"
                                            class="w-[8vw] duration-1000"></button>

                                    <button @click="più"><img src="../assets/fgiu.png" alt=""
                                            :class="{ 'opacity-35': !fgiu, 'opacity-95': fgiu }"
                                            class="w-[8vw] duration-1000"></button>

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
                <div v-if="project1" :class="{ 'opacitys2': !project, 'opacitys': project }"
                    class="w-screen mt-[-4vw]  flex flex-col items-center ">


                    <!-- CONTENUTO -->
                    <div class="flex justify-center items-center  ">

                        <!-- Cp1 -->
                        <a href="https://dribbble-replica-html-css.vercel.app/" @mouseover="over1 = true"
                            @mouseleave="over1 = false" :class="{ 'hidden': !cp1, 'flex': cp1 }" class="flex flex-col ">

                            <!-- visita -->
                            <span
                                class=" text-[rgba(255,255,255,0.26)] text-[4vw] font-semibold ml-[8vw] mb-[2vw]"><span
                                    :class="{ 'text-white border-white': over1, 'border-[rgba(255,255,255,0.26)]': !over1 }"
                                    class="border-solid duration-200 border-b-2   ">Visita!</span></span>


                            <!-- container -->
                            <div
                                class="relative flex flex-col  items-center w-[85vw] z-10 duration-100 p-[1.5vw]  h-[80vw] bg-[rgb(132,132,247)] rounded-[10vw]">

                                <!-- img cont -->
                                <img src="/public/p1.jpg" alt=""
                                    class="w-[85vw] h-[47vw]  rounded-[8.5vw] object-cover">

                                <div
                                    class="bg-gradient-to-t from-[rgb(132,132,247)] to-[rgba(255,255,255,0)] absolute top-0  w-[85vw] h-[48.5vw]   ">
                                </div>


                                <!-- text e bottom -->
                                <div class=" w-[85vw] px-[4vw] z-[0] font-semibold mt-[-4vw] text-[3.5vw] text-white leading-[4vw] ">
                                    Ho scelto di prendere spunto da uno dei siti più famosi tra i creativi: Dribbble.

                                    Ho voluto analizzare il suo stile e le sue animazioni, dato che è un sito
                                    all’avanguardia nel design
                                    e nel clean-code.
                                </div>

                                <!-- skils -->
                                <div class="flex item-end pt-[3vw] w-[85vw] px-[6vw] ">
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
                    <div class="flex flex-col items-center   justify-center w-[100vw] h-[45vw] ">

                        <!-- p1 -->
                        <div class="flex  items-center justify-center">
                            <button @click="cp11"
                                :class="{ 'text-[rgba(255,255,255,0.26)] text-[4.5vw] ': !cp1, 'text-white text-[7vw] underline underline-offset-4 mb-[1vw]': cp1 }"
                                class="text-center   font-extrabold">DRIBBBLE</button>
                        </div>
                        <!-- p2 -->
                        <div class="flex  items-center ">
                            <button @click="cp22"
                                :class="{ 'text-[rgba(255,255,255,0.26)] text-[4.5vw] ': !cp2, 'text-white text-[7vw] underline underline-offset-4 mb-[1vw]': cp2 }"
                                class="text-center   font-extrabold">L'IMPICCATO</button>
                        </div>
                        <!-- p3 -->
                        <div class="flex  items-center ">
                            <button @click="cp33"
                                :class="{ 'text-[rgba(255,255,255,0.26)] text-[4.5vw]': !cp3, 'text-white text-[7vw] underline underline-offset-4 mb-[1vw]': cp3 }"
                                class="text-center   font-extrabold">P-COMMERCE</button>
                        </div>
                        <!-- p4 -->
                        <div class="flex  items-center ">
                            <button @click="cp44"
                                :class="{ 'text-[rgba(255,255,255,0.26)] text-[4.5vw]': !cp4, 'text-white text-[7vw] underline underline-offset-4 mb-[1vw]': cp4 }"
                                class="text-center   font-extrabold">BLOG</button>
                        </div>

                    </div>

                </div>



                <!-- Contacts -->
                <div v-if="contacts1" :class="{ 'opacitys2': !contacts, 'opacitys': contacts }"
                    class="w-screen flex flex-col px-[25px]   ">

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
            over4: false,
            devp1: true,
            project1: false,
            contacts1: false,
            constimg: 0,
            constimg2: 2,
            constimg3: 3,
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

                    this.fgiu = true
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

                    this.cimg1 = true



                } else if (this.constimg == 1) {
                    this.img1 = true
                    this.img2 = true
                    this.img3 = true

                    this.cimg1 = false
                    this.cimg2 = true

                    this.fsu = true

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

                    this.fgiu = false
                }

            }
        },



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