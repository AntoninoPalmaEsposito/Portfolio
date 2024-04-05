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
        <div class="absolute w-screen top-0 z-20 flex items-center justify-start pt-[30px] ">

          <!-- container logo -->
          <div>
            <div class="pl-[40px] xl:pl-[80px] "><img src="../assets/logo.png" alt=""
                class="w-[80px] md:w-[120px] lg:w-[140px] xl:w-[160px]"></div>
          </div>

          <!-- list -->
          <div class="relative flex flex-col max-w-[70%] mx-auto pr-[40px] xl:pr-[180px] pb-[25px]">
            <ul class="flex justify-center items-center">
              <li><button @click="homE"><img src="../assets/home.png" alt=""
                    class="w-[135px]  mr-[50px] pr-[20px]"></button></li>
              <li><button @click="devProfile"><img src="../assets/devProfile.png" alt=""
                    class="w-[240px] mr-[50px] pr-[20px]"></button></li>
              <li><button @click="projecT"><img src="../assets/project.png" alt=""
                    class="w-[210px] mr-[50px] pr-[20px]"></button></li>
              <li><button @click="contactS"><img src="../assets/contacts.png" alt="" class="w-[230px] "></button></li>
            </ul>

            <div :class="{ 'ml-[-40px]': homest, 'ml-[17%]': devPst, 'ml-[42%]': projectst, 'ml-[66%]': contactst, }"
              class="absolute top-[70px] ml-[-40px] duration-1000"><img src="../assets/sottol.png" alt=""
                class="w-[180px]"></div>
          </div>

        </div>


        <!-- body carta -->
        <div class="absolute top-[-50px]">



          <div :id="customId" :class="scendi" class=" z-10 w-screen h-screen  translate-y-6  absolute top-[60px] ">

            <!-- contenitore Body -->
            <div class="absolute w-screen h-screen top-[100px] z-40 p-[50px] flex flex-col">

              <!-- aereoplano -->
              <div><img src="../assets/aereoplano.png" alt=""
                  class="absolute bottom-[-100px] animazione5 left-[-100] z-50  w-[200px]  "></div>

              <!-- welcome -->
              <img v-if="wel" src="../assets/welcome.png" alt="" :class="{ 'animazione3': aanimazione3 }"
                class="w-[200px] lg:w-[250px] animazione2 absolute top-[33%] left-[43%] z-40 ">

              <!-- firma -->
              <div><img src="../assets/firma.png" alt=""
                  class="absolute bottom-[180px]  z-60 right-[50px] w-[150px] xl:w-[200px]  "></div>

              <!-- main carta -->
              <!-- section sup -->

              <div class="flex justify-center items-start">
                <img src="../assets/disegno.png" alt="" class="w-[400px] ml-[5%] lg:w-[450px] xl:w-[500px] ">

                <div
                  class="text-[18px] mt-[20px] lg:text-[20px] font-semibold  w-[650px] my-auto ml-[15px]  xl:ml-[50px] ">
                  <span class="mt-[20px]  text-[23px] xl:text-[25px] font-semibold underline">Sono Antonino, non
                    solo un front-end Developer!</span> <br>
                  Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                  ho studiato arte illustrativa, grafica e progettazione architettonica. Successivamente, mi sono
                  iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                  programmazione.
                </div>

              </div>

              <!-- section inf -->
              <div class="flex justify-center items-center">
                <div
                  class="text-[18px] font-semibold  lg:text-[20px] w-[800px] my-auto pl-[13px] xl:pl-[40px] mt-[90px]">
                  Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi ha
                  fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze.
                  Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte altre
                  passioni.
                  Adoro il disegno a mano libera, progettare oggetti di design e nel tempo libero mi trasformo in un
                  tatuatore!
                </div>
                <img src="../assets/sedia.png" alt=""
                  class="w-[300px] lg:w-[350px] xl:w-[400px] xl:mt-[-40px] xl:ml-[50px] ">
              </div>





              <!-- scroll dis -->
              <div v-if="scrolle"
                class="flex justify-center items-center animazione2 absolute bottom-[170px] xl:bottom-[200px] left-[45%]">
                <img src="../assets/scrolldis.png" alt="" class="w-[100px] lg:w-[125px] mt-[70px] xl:mt-[-70px]">
                <img src="../assets/frecciadis.png" alt=""
                  class="w-[30px] lg:w-[40px] mt-[90px] xl:mt-[-50px] animate-bounce duration-1000">

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
      <div
        class=" h-[85vh] w-screen flex items-center mt-[-40px] bg-black  px-[20px]">



        <!-- opacity container -->
        <div :id="bluu" :class="opacity" class="w-[89%] pt-[80px]  pb-[100px]  h-[740px] opacity-[0] duration-1000  ">


          <!-- DEV PROFILE -->
          <div v-if="devP" class="flex flex-col items-center ml-[15%] mt-[40px] 2xl:mt-0 ">

            <div class="flex  items-start  ">

              <!-- section sup -->
              <div
                class="relative flex justify-center scale-[0.85] lg:scale-90 xl:scale-100 ml-[150px] lg:ml-0 items-center h-[300px] w-[250px] mt-[-15px] xl:mt-[0px] rounded-[20px] mr-[4px] lg:mr-[10px] xl:mr-[25px] z-[0] bg-[rgba(255,255,255,0.2)] ">
                <div
                  class="absolute top-[-10px] lg:top-[-13px] xl:top-[-25px] 2xl:top-[-35px] right-1  blur-[5px] z-[0] font-extrabold md:text-[60px] lg:text-[70px] xl:text-[80px]  2xl:text-[90px] text-white">
                  Cr
                </div>
                <img src="../assets/pc.png" alt="" class="absolute z-[1] h-[220px]  hover:animate-bounce">
              </div>


              <div
                class=" w-[800px] pr-[25%] lg:pr-[130px] 2xl:pr-[0px] text-[20px]  lg:text-[23px] font-semibold text-white mt-[20px] 2xl:text-[25px]">
                <span
                  class="font-extrabold  md:text-[60px] lg:text-[70px] xl:text-[80px]  2xl:text-[90px]  ml-[-23px] leading-7 z-[1]">edo</span>
                fortemente nell'organizzazione. <br>
                Un’analisi accurata porta a un codice più pulito, uno sviluppo più veloce e al rispetto di scadenze
                prefissate. <br>
                Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato.
                Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide. <br>
                Sono un umano socievole che apprezza il senso di comunità all’interno del team.
                Credo fermamente nell’importanza della formazione continua e valorizzo l’aiuto reciproco
              </div>
            </div>


            <div class="relative w-[100%] px-[70px] text-[25px] font-semibold text-white ">
              <div>
              </div>

            </div>

            <!-- section inf -->
            <div
              class="flex flex-col mr-[5vw] mt-[60px] lg:mt-[75px] xl:mt-[60px] 2xl:mt-[70px] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:scale-[0.9]">
              <h1 class="font-extrabold text-white text-[60px] text-end mt-[-20px]">Competenze</h1>
              <div @mouseover="competenze = true" @mouseleave="competenze = false"
                class="flex flex-col  justify-center items-center">
                <div :class="{ 'bg-white': competenze, 'bg-[#ffffff4e]': !competenze }"
                  class="h-[7px] w-[1400px] rounded-[50px] duration-500 mb-[20px]"></div>


                <div class="flex">
                  <ul class="flex">
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/htmlI.png"
                        alt="" class="h-[60px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/cssI.png" alt=""
                        class="h-[60px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/javascriptI.png"
                        alt="" class="h-[60px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/tailwindI.png"
                        alt="" class="h-[45px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/vueI.png" alt=""
                        class="h-[50px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/vsI.png" alt=""
                        class="h-[50px]">
                    </li>
                    <li class="h-[90px] w-[90px] mr-[-10px] flex justify-center items-center "><img
                        src="../assets/gitI.jpg" alt="" class="h-[50px]">
                    </li>
                  </ul>

                  <ul class="flex">

                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/figmaI.png"
                        alt="" class="h-[50px]">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/adobeI.png"
                        alt="" class="h-[50px]">
                    </li>

                    <li class="h-[90px] w-[90px] ml-[10px] flex justify-center items-center "><img
                        src="../assets/apil.png" alt="" class="h-[50px]">
                    </li>
                    <li class="h-[90px] w-[160px] flex justify-center items-center "><img src="../assets/google.png"
                        alt="" class="h-[60px] ">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/postman.png"
                        alt="" class="h-[60px] ">
                    </li>
                    <li class="h-[90px] w-[140px] flex justify-center items-center "><img src="../assets/npm.png" alt=""
                        class="h-[35px] ">
                    </li>
                    <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/reactI.png"
                        alt="" class="h-[50px]">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <!-- PROJECT -->
          <div v-if="project" class="flex justify-center   ml-[150px] lg:ml-[250px]  items-center text-white">

            <!-- TESTO -->
            <div class="flex flex-col   text-[35px] lg:text-[40px] justify-center w-[400px] h-[600px] ">

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
            <div
              class="flex justify-center pr-[50px] scale-[0.7] lg:scale-[0.8] xl:scale-[0.95] items-center w-[600px] h-[600px] ">

              <!-- Cp1 -->
              <a href="https://dribbble-replica-html-css.vercel.app/" @mouseover="over1 = true" @mouseleave="over1 = false"
                :class="{ 'hidden': !cp1, 'flex': cp1 }" class="flex flex-col">
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
          <div v-if="contacts" class="flex justify-center scale-75 lg:scale-90 xl:scale-100 mt-[20px]  ml-[20%] xl:ml-[400px] h-[500px] duration-1000  text-white">
            <!-- info1 -->
            <div class="flex flex-col justify-center w-[400px] h-[500px]">

              <div class="text-[50px]  font-bold ">RESIDENZA</div>
              <div class="text-[25px] mt-[-7px] font-semibold  text-[rgb(253,175,154)]">Bari (BA)</div>

              <div class="text-[50px] font-bold mt-[30px] ">EMAIL</div>
              <div class="text-[25px] mt-[-7px] font-semibold pr-[30px] text-[rgb(195,154,253)]">ape.develop3@gmail.com</div>

              <div class="text-[50px] mt-[30px] font-bold ">NUMERO</div>
              <div class="text-[25px] mt-[-7px] font-semibold  text-[rgb(154,253,180)]">39+ 3426398488</div>

            </div>

            <!-- info2 -->
            <div class="flex flex-col justify-center mt-[-2px] w-[400px] h-[500px]">

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
          <div v-if="tnx" class="h-[500px] flex flex-col  justify-center items-center mt-[-30px] ml-[16%]  ">
            <div class="flex flex-col scale-[0.8] lg:scale-90 2xl:scale-95">
            <div class=" text-[80px] font-bold text-nowrap text-white pb-[10px]">
              Grazie per la visita! 
            </div>
            <div class=" text-white text-[30px] text-nowrap ml-[20px] font-semibold">Torna a trovarmi, aggiornerò il mio portfolio <br>
               con nuovi progetti interessanti ;) </div>
              </div>
          </div>
        </div>



        <!-- SCROLLBAR -->
        <div class=" flex flex-col   items-center ml-[20px] scale-75 2xl:scale-90 ">
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
      over4: false


    };
  },

  mounted() {

    /* welcome style */
    setTimeout(() => {
      this.aanimazione3 = true;
    }, 5000);

    setTimeout(() => {
      this.wel = false;
    }, 10000);

    /* scroll */
    setTimeout(() => {
      this.scrolle = true;
    }, 10000);


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

body::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body {
  overflow-y: hidden;

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
  animation-duration: 5s;
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
  animation-delay: 25s;
}

@keyframes palloncino {
  from {
    bottom: -100px;
  }

  to {
    bottom: 1500px;
  }
}

.animazione5 {
  animation-name: aereoplano;
  animation-duration: 6s;
  animation-delay: 18s;
  animation-timing-function: linear;
}

@keyframes aereoplano {
  from {
    bottom: 600px;
    left: -200px;
  }

  to {
    bottom: -100px;
    left: 900px;
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