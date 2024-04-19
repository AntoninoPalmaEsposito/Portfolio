<template>

  <!-- container/input mouse -->
  <div @wheel="handleMouseWheel" class="hidden md:block w-screen bg-black">



    <div class="relative">

      <!-- palloncino -->
      <div><img src="../assets/palloncino.png" alt=""
          class="absolute bottom-[-300px] animazione z-50 right-[120px] w-[80px]  "></div>






      <div class="relative">
        <!-- nav carta -->
        <div class=" h-[200px] mb-[-24px] "><img src="../assets/nav.png" alt="" class="h-[130%] w-screen">
        </div>

        <!-- ind -->
        <div class="absolute w-screen  right-0 top-0 z-20   pt-[30px] ">



          <!-- list -->
          <div class="relative flex justify-center scale-90 navi  w-screen  pb-[25px]">

            <div class="absolute flex items-center scr w-screen justify-between ml-[-80px]  top-[0px] ">

              <!-- logo -->
              <button @click="homE">
                <div class=" logi  w-[185px]"><img src="../assets/logo.png" alt="" class="w-[200px] "></div>
              </button>

              <ul class=" listi flex  items-end mx-auto w-[1300px] ">
                <!-- lg home -->
                <div class="flex flex-col margi items-center justify-center mb-[-2px] ml-[70px]  ">
                  <li class="hover:scale-125"><button @click="homE"><img src="../assets/home.png" alt=""
                        class="w-[135px]  "></button>
                  </li>
                  <div :class="{ 'opacity-100 , delay-500': homest }" class=" w-[180px]  opacity-0 duration-1000"><img
                      src="../assets/sottol.png" alt="" class="w-[180px] ">
                  </div>
                </div>

                <!-- lg devp -->
                <div class="flex flex-col items-center justify-center  px-[30px]">
                  <li class="hover:scale-125"><button @click="devProfile"><img src="../assets/devProfile.png" alt=""
                        class="w-[260px]   "></button>
                  </li>
                  <div :class="{ 'opacity-100 , delay-500': devPst }" class=" w-[180px]  opacity-0 duration-1000"><img
                      src="../assets/sottol.png" alt="" class="w-[180px] ">
                  </div>
                </div>

                <!-- lg proj -->
                <div class="flex flex-col items-center justify-center px-[25px] mb-[5px] ">
                  <li class="hover:scale-125"><button @click="projecT"><img src="../assets/project.png" alt=""
                        class="w-[220px]  "></button></li>
                  <div :class="{ 'opacity-100 , delay-500': projectst }" class=" w-[180px]  opacity-0 duration-1000">
                    <img src="../assets/sottol.png" alt="" class="w-[180px] ">
                  </div>
                </div>

                <!-- lg contacts -->
                <div class="flex flex-col items-center justify-center px-[25px] mb-[3px] ">
                  <li class="hover:scale-125"><button @click="contactS"><img src="../assets/contacts.png" alt=""
                        class="w-[260px] "></button></li>
                  <div :class="{ 'opacity-100 , delay-500': contactst }" class=" w-[180px]  opacity-0 duration-1000">
                    <img src="../assets/sottol.png" alt="" class="w-[180px] ">
                  </div>
                </div>


              </ul>

            </div>

          </div>

        </div>


        <!-- body carta -->
        <div class="absolute top-[-50px]">



          <div :id="customId" :class="scendi" class=" z-10 w-screen h-screen  translate-y-6  absolute top-[60px] ">

            <!-- contenitore Body -->
            <div
              class="absolute w-screen conthome ml-[-30px] resp h-screen top-[100px] z-40 p-[50px] flex flex-col items-center  ">

              <!-- aereoplano -->
              <div><img src="../assets/aereoplano.png" alt=""
                  class="absolute bottom-[-400px] animazione5  left-[-400] z-50  w-[200px]  "></div>

              <!-- welcome -->
              <img v-if="wel" src="../assets/welcome.png" alt="" :class="{ 'animazione3': aanimazione3 }"
                class="w-[250px] wel absolute top-[315px] left-[43%] z-40 ">

              <!-- firma -->
              <div><img src="../assets/firma.png" alt=""
                  class="absolute top-[630px] firma  z-60 right-[70px] w-[200px]  "></div>

              <!-- main carta -->
              <!-- section sup -->

              <div class="flex justify-center items-start b1 mt-[-15px]">
                <img src="../assets/disegno.png" alt="" class=" ml-[4%] w-[500px] mt-[15px] ">

                <div class=" mt-[5px] text-[20px] font-semibold  w-[650px] my-auto   ml-[50px] ">
                  <span class="  text-[23px] text-nowrap font-bold leading-[80px]">Mi chiamo Antonino, non sono
                    solo un Web Developer!</span> <br>
                  Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                  ho studiato arte illustrativa, grafica e progettazione architettonica. Successivamente, mi sono
                  iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                  programmazione.
                </div>

              </div>

              <!-- section inf -->
              <div class="flex justify-center items-center b2">
                <div class=" font-semibold  text-[20px] w-[800px] my-auto pl-[65px] mt-[90px]">
                  Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi ha
                  fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze.
                  Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte altre
                  passioni.
                  Adoro il disegno a mano libera, progettare oggetti di design e nel tempo libero mi trasformo in un
                  tatuatore!
                </div>
                <img src="../assets/sedia.png" alt="" class="w-[400px] mt-[-30px] ml-[50px] ">
              </div>





              <!-- scroll dis -->
              <div v-if="scrolle" class="flex justify-center items-center animazione2 absolute top-[700px] left-[45%]">
                <img src="../assets/scrolldis.png" alt="" class="w-[125px] mt-[-50px]">
                <img src="../assets/frecciadis.png" alt="" class="w-[40px] mt-[-30px] animate-bounce duration-1000">

              </div>




            </div>

            <!-- bg white body -->
            <div class="absolute">
              <img src="../assets/corpo.png" alt="" class="w-screen h-[1100px]">
              <div class="h-screen w-screen bg-white"></div>
            </div>

          </div>
        </div>

      </div>

      <!-- 2 homeview -->
      <div class=" h-[85vh] w-screen flex items-center mt-[-40px]  bg-black  px-[20px]">



        <!-- opacity container -->
        <div :id="bluu" :class="opacity" class="w-[89%] pt-[80px]  pb-[100px]  h-[740px] opacity-[0] duration-1000  ">


          <!-- DEV PROFILE -->
          <div v-if="devP" class="flex flex-col items-center scale-90  ml-[17%] mt-[-30px] ">

            <div class="flex  items-start cdev1 ">

              <!-- section sup -->
              <div
                class="relative flex justify-center  ml-0 items-center h-[340px] w-[280px] mt-[30px] rounded-[40px] mr-[25px] z-[0] bg-[rgba(255,255,255,0.2)] ">

                <img src="../assets/pc.png" alt="" class="absolute z-[1] h-[220px]  hover:animate-bounce">
              </div>


              <div class=" w-[800px]    text-[23px] font-semibold text-white mt-[20px]">
                <span class="font-extrabold  text-[80px]  leading-7">Credo</span>
                fortemente nell'organizzazione. <br>
                Un’analisi accurata porta a un codice più pulito, uno sviluppo più veloce e al rispetto di scadenze
                prefissate. <br>
                Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato.
                Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide. <br> <br>
                <div class="mt-[-15px]">
                  Sono un umano socievole che apprezza il senso di comunità all’interno del team.
                  Credo fermamente nell’importanza della formazione continua e valorizzo l’aiuto reciproco
                </div>
              </div>
            </div>


            <div class="relative w-[100%] px-[70px] text-[25px] font-semibold text-white ">
              <div>
              </div>

            </div>

            <!-- section inf -->
            <div :class="{ 'mt-[-10px]': competenze, 'mt-[15px]': !competenze }" class="duration-500 ">
              <div class="flex flex-col mr-[5vw]  cdev2 mt-[70px] scale-[0.9]">
                <h1 :class="{ 'text-white': competenze, 'text-[#ffffff4e]': !competenze }"
                  class="font-extrabold  text-[40px] duration-500  mt-[-20px]">Competenze</h1>
                <div @mouseover="competenze = true" @mouseleave="competenze = false"
                  class="flex flex-col  justify-center items-center">
                  <div :class="{ 'bg-white , mb-[10px]': competenze, 'bg-[#ffffff4e] , mb-[20px]': !competenze }"
                    class="h-[7px] w-[1400px] rounded-[50px] duration-500 "></div>


                  <div class="flex">
                    <ul class="flex ">

                      <div @mouseenter="html = true" @mouseleave="html = false">
                        <li class="h-[90px] w-[90px] flex  duration-500 justify-center items-center "><img
                            src="../assets/htmlI.png" alt="" class="h-[60px]">
                        </li>
                        <div :class="{ 'opacity-100': html, 'opacity-0': !html }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">HTML</div>
                      </div>

                      <div @mouseenter="css = true" @mouseleave="css = false">
                        <li class="h-[90px] w-[90px] flex duration-500 justify-center items-center "><img
                            src="../assets/cssI.png" alt="" class="h-[60px]">
                        </li>
                        <div :class="{ 'opacity-100': css, 'opacity-0': !css }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">CSS</div>
                      </div>

                      <div @mouseenter="js = true" @mouseleave="js = false">
                        <li class="h-[90px] w-[90px] flex flex-col duration-500 justify-center items-center "><img
                            src="../assets/javascriptI.png" alt="" class="h-[60px]">
                        </li>
                        <div :class="{ 'opacity-100': js, 'opacity-0': !js }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">JS</div>
                      </div>

                      <div @mouseenter="tailwind = true" @mouseleave="tailwind = false">
                        <li class="h-[90px] w-[90px] flex flex-col duration-500 justify-center items-center "><img
                            src="../assets/tailwindI.png" alt="" class="h-[45px]">
                        </li>
                        <div :class="{ 'opacity-100': tailwind, 'opacity-0': !tailwind }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">TAILWIND</div>
                      </div>

                      <div @mouseenter="vue = true" @mouseleave="vue = false">
                        <li class="h-[90px] w-[90px] flex flex-col duration-500 justify-center items-center "><img
                            src="../assets/vueI.png" alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': vue, 'opacity-0': !vue }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">VUE.JS</div>
                      </div>

                      <div @mouseenter="vsc = true" @mouseleave="vsc = false">
                        <li class="h-[90px] w-[90px] flex flex-col duration-500 justify-center items-center "><img
                            src="../assets/vsI.png" alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': vsc, 'opacity-0': !vsc }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">VSC</div>
                      </div>

                      <div @mouseenter="github = true" @mouseleave="github = false" class="mr-[-10px]">
                        <li class="h-[90px] w-[90px]  duration-500 flex flex-center justify-center items-center ">
                          <img src="../assets/gitI.jpg" alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': github, 'opacity-0': !github }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">GITHUB</div>
                      </div>


                    </ul>

                    <ul class="flex">

                      <div @mouseenter="figma = true" @mouseleave="figma = false" class="">
                        <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/figmaI.png"
                            alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': figma, 'opacity-0': !figma }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">FIGMA</div>
                      </div>

                      <div @mouseenter="adobe = true" @mouseleave="adobe = false" class="">
                        <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/adobeI.png"
                            alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': adobe, 'opacity-0': !adobe }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">ADOBE</div>
                      </div>

                      <div @mouseenter="api = true" @mouseleave="api = false" class="ml-[10px]">
                        <li class="h-[90px] w-[90px]  flex justify-center items-center "><img src="../assets/apil.png"
                            alt="" class="h-[50px]">
                        </li>
                        <div :class="{ 'opacity-100': api, 'opacity-0': !api }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">API REST</div>
                      </div>

                      <div @mouseenter="google = true" @mouseleave="google = false" class="">
                        <li class="h-[90px] w-[160px] flex justify-center items-center "><img src="../assets/google.png"
                            alt="" class="h-[60px] ">
                        </li>
                        <div :class="{ 'opacity-100': google, 'opacity-0': !google }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">GOOGLE.A</div>
                      </div>

                      <div @mouseenter="postman = true" @mouseleave="postman = false" class="">
                        <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/postman.png"
                            alt="" class="h-[60px] ">
                        </li>
                        <div :class="{ 'opacity-100': postman, 'opacity-0': !postman }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">POSTMAN</div>
                      </div>

                      <div @mouseenter="npm = true" @mouseleave="npm = false" class="">
                        <li class="h-[90px] w-[140px] flex justify-center items-center "><img src="../assets/npm.png"
                            alt="" class="h-[35px] ">
                        </li>
                        <div :class="{ 'opacity-100': npm, 'opacity-0': !npm }"
                          class="text-white text-center font-semibold duration-500 text-[19px] ">NPM</div>
                      </div>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <!-- PROJECT -->
          <div v-if="project" class="flex justify-center cpro  ml-[300px]  items-center text-white">

            <!-- TESTO -->
            <div class="flex flex-col mrt text-[40px] justify-center w-[400px] h-[600px] ">

              <!-- p1 -->
              <div class="flex  items-center ">
                <button @click="cp11"
                  :class="{ 'text-[rgba(255,255,255,0.26)]': !cp1, 'text-white border-solid border-b-4': cp1 }"
                  class="text-center mb-[15px]   font-bold">DRIBBBLE</button>
              </div>
              <!-- p2 -->
              <div class="flex  items-center">
                <button @click="cp22"
                  :class="{ 'text-[rgba(255,255,255,0.26)]': !cp2, 'text-white border-solid border-b-4': cp2 }"
                  class="text-center mb-[15px]  font-bold">L'IMPICCATO</button>
              </div>
              <!-- p3 -->
              <div class="flex  items-center">
                <button @click="cp33"
                  :class="{ 'text-[rgba(255,255,255,0.26)]': !cp3, 'text-white border-solid border-b-4': cp3 }"
                  class="text-center mb-[15px] text-nowrap  font-bold">P-COMMERCE</button>
              </div>
              <!-- p4 -->
              <div class="flex  items-center">
                <button @click="cp44"
                  :class="{ 'text-[rgba(255,255,255,0.26)]': !cp4, 'text-white border-solid border-b-4': cp4 }"
                  class="text-center  font-bold">BLOG</button>
              </div>




            </div>

            <!-- CONTENUTO -->
            <div class="flex justify-center pr-[50px] ml-[-30px] scale-[0.85] items-center w-[600px] h-[600px] ">

              <!-- Cp1 -->
              <a href="https://dribbble-replica-html-css.vercel.app/" @mouseover="over1 = true"
                @mouseleave="over1 = false" :class="{ 'hidden': !cp1, 'flex': cp1 }" class="flex flex-col">
                <div :class="{ 'border-solid border-4': over1 }"
                  class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(132,132,247)] rounded-[60px]">
                  <!-- img cont -->
                  <img src="/public/p1.jpg" alt="" class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(132,132,247)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                  </div>
                  <div class=" bg-[rgb(132,132,247)]  mt-[-40px] w-[520px] h-[100px]"></div>

                  <!-- text e bottom -->
                  <div :class="{ 'text-white': over1, 'text-[rgb(230,230,251)]': !over1 }"
                    class=" w-[470px]  mt-[-80px] font-semibold text-[18px] ">
                    Ho scelto di prendere spunto da uno dei siti più famosi tra i creativi: Dribbble. <br>
                    Ho voluto analizzare il suo stile e le sue animazioni, dato che è un sito all’avanguardia nel design
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
                <span class=" text-[rgba(255,255,255,0.26)] text-[25px] ml-[50px] font-semibold mt-[10px]"><span
                    :class="{ 'text-white border-white': over1, 'border-[rgba(255,255,255,0.26)]': !over1 }"
                    class="border-solid duration-200 border-b-2   ">Visita!</span></span>
              </a>

              <!-- Cp2 -->
              <a href="https://impiccato-game.vercel.app/" @mouseover="over2 = true" @mouseleave="over2 = false"
                :class="{ 'hidden': !cp2, 'flex': cp2 }" class="flex flex-col">
                <div :class="{ 'border-solid border-4': over2 }"
                  class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(250,128,128)] rounded-[60px]">
                  <!-- img cont -->
                  <img src="/public/p2.jpg" alt="" class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(250,128,128)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                  </div>
                  <div class=" bg-[rgb(250,128,128)]  mt-[-40px] w-[520px] h-[100px]"></div>

                  <!-- text e bottom -->
                  <div :class="{ 'text-white': over2, 'text-[rgb(245,218,218)]': !over2 }"
                    class=" w-[470px]  mt-[-80px] font-semibold text-[18px] ">
                    Mi sono divertito a ricreare il gioco dell’impiccato, sfidandomi direttamente contro il computer.
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

                <span class=" text-[rgba(255,255,255,0.26)] text-[25px] ml-[50px] font-semibold mt-[10px]"><span
                    :class="{ 'text-white border-white': over2, 'border-[rgba(255,255,255,0.26)]': !over2 }"
                    class="border-solid duration-200 border-b-2   ">Visita!</span></span>
              </a>

              <!-- Cp3 -->
              <a href="https://penta-e-commerce.vercel.app/" @mouseover="over3 = true" @mouseleave="over3 = false"
                :class="{ 'hidden': !cp3, 'flex': cp3 }" class="flex flex-col">
                <div :class="{ 'border-solid border-4': over3 }"
                  class="relative flex flex-col  items-center w-[550px] z-10 duration-100  h-[550px] bg-[rgb(77,190,97)] rounded-[60px]">
                  <!-- img cont -->
                  <img src="/public/p3.jpg" alt="" class="w-[520px] h-[350px] mt-[15px] rounded-[50px] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(77,190,97)] to-[rgba(255,255,255,0)] absolute top-0  w-[540px] h-[330px] rounded-t-[50px]  ">
                  </div>
                  <div class=" bg-[rgb(77,190,97)]  mt-[-40px] w-[520px] h-[100px]"></div>

                  <!-- text e bottom -->
                  <div :class="{ 'text-white': over3, 'text-[rgb(222,246,226)]': !over3 }"
                    class=" w-[470px]  mt-[-100px] font-semibold text-[18px] ">
                    Per questo progetto, insieme al mio team, abbiamo dato vita a un e-commerce. <br>
                    Abbiamo creato un file JSON locale per popolare gli articoli e abbiamo adottato Pinia per gestire
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

                <span class=" text-[rgba(255,255,255,0.26)] text-[25px] ml-[50px] font-semibold mt-[10px]"><span
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

          </div>







          <!-- CONTACTS -->
          <div v-if="contacts" class="flex justify-center  scale-90 cont pt-[80px] duration-1000 ml-[250px]   text-white">
            <!-- info1 -->
            <div class="flex flex-col justify-center  pr-[100px] ">

              <div class="text-[50px]  font-bold ">RESIDENZA</div>
              <div class="text-[25px] mt-[-7px] font-semibold  text-[rgb(253,175,154)]">Bari (BA)</div>

              <div class="text-[50px] font-bold mt-[30px] ">EMAIL</div>
              <div class="text-[25px] mt-[-7px] font-semibold pr-[30px] text-[rgb(195,154,253)]">ape.develop3@gmail.com
              </div>

              <div class="text-[50px] mt-[30px] font-bold ">NUMERO</div>
              <div class="text-[25px] mt-[-7px] font-semibold  text-[rgb(154,253,180)]">+39 3426398488</div>

            </div>

            <!-- info2 -->
            <div class="flex flex-col justify-center  ">

              <div class="text-[50px]  font-bold ">LINKEDIN</div>
              <a href="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
                class="text-[25px] hover:text-[35px] mt-[-7px] font-semibold  text-[rgb(248,253,154)] underline">Guarda
                i miei post!</a>

              <div class="text-[50px] font-bold mt-[30px] ">GITHUB</div>
              <a href="https://github.com/AntoninoPalmaEsposito"
                class="text-[25px] hover:text-[35px] mt-[-7px] font-semibold underline text-[rgb(154,241,253)]">Scopri
                le mie repository!</a>

              <div class="text-[50px] font-bold mt-[30px] ">INSTAGRAM</div>
              <a href="https://www.instagram.com/tonystark______?igsh=Nnhjaml1bXN5MjBr"
                class="text-[25px] hover:text-[35px] mt-[-7px] font-semibold underline text-[rgb(253,154,200)]">
                Visita il mio profilo!</a>



            </div>


          </div>



          <!-- TNX -->
          <div v-if="tnx" class="h-[500px] tnx flex flex-col  justify-center items-center mt-[-30px] ml-[13%]  ">
            <div class="flex flex-col scale-95">
              <div class=" text-[80px] font-bold text-nowrap text-white pb-[10px]">
                Grazie per la visita!
              </div>
              <div class=" text-white text-[30px] text-nowrap ml-[20px] font-semibold">Torna a trovarmi, aggiornerò il
                mio portfolio <br>
                con nuovi progetti interessanti ;) </div>
            </div>
          </div>
        </div>



        <!-- SCROLLBAR -->
        <div class=" flex flex-col  tnx items-center ml-[20px] scale-90 ">
          <div :class="{ 'bg-white': bar, 'bg-[rgba(255,255,255,0.26)]': nobar }"
            class="w-[18px] h-[80px] rounded-[300px] duration-500 mb-[40px]"></div>

          <div :class="{ 'bg-white': bar2, 'bg-[rgba(255,255,255,0.26)]': nobar2 }"
            class="w-[18px] h-[80px] rounded-[300px]  duration-500 mb-[40px]"></div>
          <div :class="{ 'bg-white': bar3, 'bg-[rgba(255,255,255,0.26)]': nobar3 }"
            class="w-[18px] h-[80px] rounded-[300px]  duration-500 mb-[30px]"></div>
          <div :class="{ 'text-white': bar4, 'text-[rgba(255,255,255,0.26)]': nobar4 }"
            class="text-[35px] font-extrabold duration-500">TNX</div>
        </div>


      </div>


    </div>




  </div>





</template>

<script>

export default {
  data() {
    return {
      ctt: 60,
      opacitys: 0,
      customId: 'my-custom-id',
      devP: true,
      project: false,
      contacts: false,
      tnx: false,
      tran1: false,
      tran2: false,
      tran3: false,
      aanimazione3: false,
      wel: true,
      scrolle: false,
      bluu: 'bluer',
      bar: false,
      bar2: false,
      bar3: false,
      bar4: false,
      nobar: true,
      nobar2: true,
      nobar3: true,
      nobar4: true,
      homest: true,
      devPst: false,
      projectst: false,
      contactst: false,
      competenze: false,
      cp1: true,
      cp2: false,
      cp3: false,
      cp4: false,
      over1: false,
      over2: false,
      over3: false,
      over4: false,
      html: false,
      css: false,
      js: false,
      tailwind: false,
      vue: false,
      github: false,
      vsc: false,
      figma: false,
      adobe: false,
      api: false,
      google: false,
      postman: false,
      npm: false


    };
  },

  mounted() {

    /* welcome style */
    setTimeout(() => {
      this.aanimazione3 = true;
    }, 3000);

    setTimeout(() => {
      this.wel = false;
    }, 6000);

    /* scroll */
    setTimeout(() => {
      this.scrolle = true;
    }, 6000);


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

    homE() {
      this.ctt = 60;
      this.opacitys = 0;
      this.bar = false;
      this.bar2 = false;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = true;
      this.nobar3 = true;
      this.nobar4 = true;

      this.devP = true
      this.project = false
      this.contacts = false
      this.tnx = false

      this.homest = true
      this.devPst = false
      this.projectst = false
      this.contactst = false

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    devProfile() {
      this.ctt = 960;
      this.opacitys = 1;
      this.bar = true;
      this.bar2 = false;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = false;
      this.nobar2 = true;
      this.nobar3 = true;
      this.nobar4 = true;

      this.devP = true
      this.project = false
      this.contacts = false
      this.tnx = false

      this.homest = false
      this.devPst = true
      this.projectst = false
      this.contactst = false

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    projecT() {
      this.ctt = 2410;
      this.opacitys = 1;
      this.bar = false;
      this.bar2 = true;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = false;
      this.nobar3 = true;
      this.nobar4 = true;

      this.devP = false
      this.project = true
      this.contacts = false
      this.tnx = false

      this.homest = false
      this.devPst = false
      this.projectst = true
      this.contactst = false

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    contactS() {
      this.ctt = 3810;
      this.opacitys = 1;
      this.bar = false;
      this.bar2 = false;
      this.bar3 = true;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = true;
      this.nobar3 = false;
      this.nobar4 = true;

      this.devP = false
      this.project = false
      this.contacts = true
      this.tnx = false

      this.homest = false
      this.devPst = false
      this.projectst = false
      this.contactst = true

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    /* gestione evento */
    handleMouseWheel(event) {

      if (event.deltaY > 0) {
        this.scendi();
        this.opacity();
        console.log(this.ctt)


      } else if (event.deltaY < 0) {
        this.sali();
        this.opacitysali();
        console.log(this.ctt)
      }
    },


    /* transition down */
    scendi() {

      if (this.ctt >= 0 && this.ctt <= 5210) {
        this.ctt += 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]');
        element.classList.add(`duration-1000`);
        element.style.top = `${this.ctt}px`;

        console.log(`top-[${this.ctt}px]`);
        return `top-[${this.ctt}px]`;
      }
    },

    /* transition upp */
    sali() {

      if (this.ctt > 80) {
        this.ctt -= 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
        element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
        element.classList.add(`duration-1000`);

        console.log(`top-[${this.ctt}px]`);
        return `top-[${this.ctt}px]`;
      }
    },

    opacity() {
      console.log(`opacity-[${this.opacitys}]`);


      if (this.ctt > 410 && this.ctt < 1810) {
        this.homest = false
        this.devPst = true
        this.projectst = false
        this.contactst = false
      }
      if (this.ctt >= 1810 && this.ctt < 3210) {
        this.homest = false
        this.devPst = false
        this.projectst = true
        this.contactst = false
      }
      if (this.ctt >= 3210 && this.ctt < 4610) {
        this.homest = false
        this.devPst = false
        this.projectst = false
        this.contactst = true
      }


      /* devP */

      /* A. */
      if (this.ctt > 410 && this.ctt <= 860) { /* +450 */
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar = false
          this.bar = true


        } else {
          this.nobar = true
          this.bar = false

        }

        /* B */
      } else if (this.ctt > 860 && this.ctt <= 1160) { /* +300 */
        this.opacitys = 1;

        this.nobar = false
        this.bar = true

        /* C */
      } else if (this.ctt > 1160 && this.ctt <= 1610) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar = false
          this.bar = true

        } else {
          this.nobar = true
          this.bar = false

        }

        /* D */
      } else if (this.ctt > 1560 && this.ctt < 1810) { /* +200 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        /* E */
      } else if (this.ctt == 1810) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;


      } /* project */

      /* A. */
      else if (this.ctt > 1810 && this.ctt <= 2260) { /* +450 */
        this.devP = false
        this.project = true
        this.contacts = false
        this.tnx = false
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar2 = false
          this.bar2 = true

        } else {
          this.nobar2 = true
          this.bar2 = false

        }

        /* B */
      } else if (this.ctt > 2260 && this.ctt <= 2560) { /* +300 */
        this.opacitys = 1;
        this.nobar2 = false
        this.bar2 = true

        /* C */
      } else if (this.ctt > 2560 && this.ctt <= 3010) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar2 = false
          this.bar2 = true

        } else {
          this.nobar2 = true
          this.bar2 = false

        }

        /* D */
      } else if (this.ctt > 3010 && this.ctt < 3210) { /* +200 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        /* E */
      } else if (this.ctt == 3210) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

      } /* contacts */

      /* A. */
      else if (this.ctt > 3210 && this.ctt <= 3660) { /* +450 */
        this.devP = false
        this.project = false
        this.contacts = true
        this.tnx = false
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar3 = false
          this.bar3 = true

        } else {
          this.nobar3 = true
          this.bar3 = false

        }

        /* B */
      } else if (this.ctt > 3660 && this.ctt <= 3960) { /* +300 */
        this.opacitys = 1;

        this.nobar3 = false
        this.bar3 = true

        /* C */
      } else if (this.ctt > 3960 && this.ctt <= 4410) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar3 = false
          this.bar3 = true

        } else {
          this.nobar3 = true
          this.bar3 = false

        }

        /* D */
      } else if (this.ctt > 4410 && this.ctt < 4610) { /* +200 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        /* E */
      } else if (this.ctt == 4610) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

      } /* tnx */

      /* A. */
      else if (this.ctt > 4610 && this.ctt <= 5060) { /* +450 */
        this.devP = false
        this.project = false
        this.contacts = false
        this.tnx = true
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar4 = false
          this.bar4 = true
        } else {
          this.nobar4 = true
          this.bar4 = false
        }

        /* B */
      } else if (this.ctt > 5060 && this.ctt <= 5210) { /* +300 - 50 */
        this.opacitys = 1;
        this.nobar4 = false
        this.bar4 = true
      }

    },



    opacitysali() {
      console.log(`opacity-[${this.opacitys}]`);

      if (this.ctt <= 410) {
        this.homest = true
        this.devPst = false
        this.projectst = false
        this.contactst = false
      }
      if (this.ctt > 410 && this.ctt < 1810) {
        this.homest = false
        this.devPst = true
        this.projectst = false
        this.contactst = false
      }
      if (this.ctt > 410 && this.ctt < 1810) {
        this.homest = false
        this.devPst = true
        this.projectst = false
        this.contactst = false
      }
      if (this.ctt >= 1810 && this.ctt < 3210) {
        this.homest = false
        this.devPst = false
        this.projectst = true
        this.contactst = false
      }
      if (this.ctt >= 3210 && this.ctt < 4610) {
        this.homest = false
        this.devPst = false
        this.projectst = false
        this.contactst = true
      }


      /* dev P */
      if (this.ctt <= 410) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

      } /* E. */
      else if (this.ctt > 410 && this.ctt <= 860) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar = false
          this.bar = true
        } else {
          this.nobar = true
          this.bar = false
        }


      } /* D. */
      else if (this.ctt > 860 && this.ctt <= 1160) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        this.nobar = false
        this.bar = true


      } /* C. */
      else if (this.ctt > 1160 && this.ctt <= 1610) { /* -450 */
        this.devP = true
        this.project = false
        this.contacts = false
        this.tnx = false
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar = false
          this.bar = true
        } else {
          this.nobar = true
          this.bar = false
        }

      } /* B. */
      else if (this.ctt == 1660) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

      } /* A. */
      else if (this.ctt > 1660 && this.ctt <= 1810) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

      } /* project */

      /* E. */
      else if (this.ctt > 1810 && this.ctt <= 2260) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar2 = false
          this.bar2 = true
        } else {
          this.nobar2 = true
          this.bar2 = false
        }

      } /* D. */
      else if (this.ctt > 2260 && this.ctt <= 2560) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        this.nobar2 = false
        this.bar2 = true


      } /* C. */
      else if (this.ctt > 2560 && this.ctt <= 3010) { /* -450 */
        this.devP = false
        this.project = true
        this.contacts = false
        this.tnx = false
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar2 = false
          this.bar2 = true
        } else {
          this.nobar2 = true
          this.bar2 = false
        }

      } /* B. */
      else if (this.ctt == 3060) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

      } /* A. */
      else if (this.ctt > 3060 && this.ctt <= 3210) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

      }
      /* contacts */

      /* E. */
      else if (this.ctt > 3210 && this.ctt <= 3660) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar3 = false
          this.bar3 = true
        } else {
          this.nobar3 = true
          this.bar3 = false
        }

      } /* D. */
      else if (this.ctt > 3660 && this.ctt <= 3960) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        this.nobar3 = false
        this.bar3 = true

      } /* C. */
      else if (this.ctt > 3960 && this.ctt <= 4410) { /* -450 */
        this.opacitys += 0.1;
        this.devP = false
        this.project = false
        this.contacts = true
        this.tnx = false
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.add('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar3 = false
          this.bar3 = true
        } else {
          this.nobar3 = true
          this.bar3 = false
        }

      } /* B. */
      else if (this.ctt == 4460) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;

      } /* A. */
      else if (this.ctt > 4460 && this.ctt <= 4610) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

      } /* tnx */
      else if (this.ctt > 4610 && this.ctt <= 5060) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

        if (this.opacitys >= 0.7) {
          this.nobar4 = false
          this.bar4 = true
        } else {
          this.nobar4 = true
          this.bar4 = false
        }

      }
    },


  },
};


</script>




<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cdev1 {
  margin-top: 20px;
  margin-bottom: -20px;
}

@media screen and (max-width: 1640px) {
  .resp {
    scale: 0.8;
  }

  .tnx {
    scale: 0.9;
  }

  .cont {
    scale: 0.9;
    padding-top: 40px;
    margin-left: 210px;
  }

  .cdev1 {
    scale: 0.9;
  }

  .cpro {
    scale: 0.8;
    margin-top: -30px;
    margin-left: 220px;
  }

  .cdev2 {
    scale: 0.8;
    margin-top: 40px;
    margin-left: 20px;
  }

  .navi {
    scale: 0.85;
    margin-left: -30px;
  }

  .logi {
    margin-left: -60px;
    margin-right: 80px;
  }


  .conthome {
    margin-top: -80px;

  }

  .firma {
    right: -100px;
  }
}

@media screen and (max-width: 1430px) {
  .resp {
    scale: 0.75;
  }

  .animazione {
    scale: 0.85;
    right: 80px;
  }

  .tnx {
    scale: 0.8;
  }

  .cont {
    scale: 0.75;
    padding-top: 60px;
    margin-left: 190px;
  }

  .cpro {
    scale: 0.7;
    margin-top: -40px;
    margin-left: 200px;
  }

  .cdev2 {
    scale: 0.7;
    margin-top: -20px;
    margin-left: 20px;
  }

  .cdev1 {
    scale: 0.8;
    margin-top: 15px;
    margin-left: -30px;
  }

  .logi {
    margin-left: -80px;
    margin-right: 70px;
  }

  .navi {
    scale: 0.8;
    margin-left: -30px;
  }

  .conthome {
    margin-top: -100px;
  }

  .resp2 {
    scale: 0.9;
  }



  .firma {
    right: -150px;
  }

}

@media screen and (max-width: 1270px) {
  .resp {
    scale: 0.7;
  }

  .animazione {
    scale: 0.7;
    right: 40px;
  }

  .tnx {
    scale: 0.7;
  }

  .cont {
    scale: 0.6;
    height: 450px;
    margin-left: 130px;
  }

  .cpro {
    scale: 0.55;
    margin-top: -40px;
    margin-left: 200px;
  }

  .cdev1 {
    scale: 0.6;
    margin-top: 20px;
    margin-left: -50px;
  }

  .mrt {
    margin-right: 80px;
  }

  .cdev2 {
    scale: 0.56;
    margin-top: -85px;
    margin-left: 20px;
  }

  .navi {

    margin-right: 25%;
    margin-top: -20px;
    margin-left: -40px;
  }

  .resp2 {
    scale: 0.95;
  }

  .conthome {
    padding: 0;
    margin-top: -150px;
    scale: 0.6;
    margin-left: 0;
  }

  .b1 {
    width: 1200px;
  }

  .b2 {
    width: 1200px;
  }

  .firma {
    right: -200px;
  }

  .resp3 {
    scale: 0.6;
    margin-top: -20px;
  }

  .scr {
    width: auto;
    scale: 0.7;
    margin-left: 100px;
  }

  .logi {
    margin-left: -170px;
    margin-right: 130px;
  }

  .wel {
    top: 270px;
  }
}

@media screen and (max-width: 950px) {
  .logi {
    margin-left: 0px;
    margin-right: 0px;
  }



}

.loader {
  height: 10px;
  width: 200px;
  border-radius: 20px;
  --c: no-repeat linear-gradient(#02ab6a 0 0);
  background: var(--c), var(--c), #c8d0ce;
  background-size: 60% 100%;
  animation: l16 3s infinite;
}

@keyframes l16 {
  0% {
    background-position: -150% 0, -150% 0
  }

  66% {
    background-position: 250% 0, -150% 0
  }

  100% {
    background-position: 250% 0, 250% 0
  }
}


@media screen and (min-width: 768px) {
 
  body::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body {
  overflow-y: hidden;

}


}



.animazione2 {
  animation-name: welcome2;
  animation-duration: 5s;
  animation-direction: alternate;
}

@keyframes welcome2 {
  from {
    opacity: 0;
    filter: blur(10px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}

.animazione3 {
  animation-name: welcome3;
  animation-duration: 3s;
  animation-direction: reverse;
}

@keyframes welcome3 {
  from {
    opacity: 0;
    filter: blur(10px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}

.animazione {
  animation-name: palloncino;
  animation-duration: 15s;
  animation-delay: 22s;
}

@keyframes palloncino {
  from {
    bottom: -300px;
  }

  to {
    bottom: 1500px;
  }
}

.animazione5 {
  animation-name: aereoplano;
  animation-duration: 10s;
  animation-delay: 11s;
  animation-timing-function: linear;
}

@keyframes aereoplano {
  from {
    bottom: 800px;
    left: -600px;
  }

  to {
    bottom: -400px;
    left: 1800px;
  }
}

.animazioneBg {
  animation-name: bg;
  animation-duration: 3s;

}

@keyframes bg {
  from {
    opacity: 0;
    filter: blur(20px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}

.animazioneBgRevers {
  animation-name: bgr;
  animation-duration: 3s;

}

@keyframes bgr {
  from {
    opacity: 1;
    filter: blur(0px);
  }

  to {
    opacity: 0;
    filter: blur(20px);
  }
}
</style>