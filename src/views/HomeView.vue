<template>

  <!-- container/input mouse -->
  <div class="hidden md:block w-screen bg-black">

    <div class="relative">

      

      <div class="relative">
        <!-- nav carta -->
        <div class=""><img src="../assets/nav.png" alt="" class="w-screen mt-[-1vw]">
        </div>

        <!-- nav container -->
        <div class="absolute w-screen flex justify-start items-center right-0 top-0 z-20   pt-[3vw] ">


          <!-- logo -->
          <button @click="homE" class="hover:scale-125 duration-500">
            <div class=""><img src="../assets/logo.png" alt="" class="w-[8vw] ml-[3vw] mt-[-0.5vw] "></div>
          </button>


          <!-- container list nav -->
          <ul class="flex items-center justify-center ml-[15vw]">

            <!-- lg home -->
            <div class="flex flex-col items-center justify-center mr-[1.5vw] ">

              <li class="hover:scale-125 duration-500">
                <button @click="homE">
                  <img src="../assets/home.png" alt="" class="h-[3.2vw] z-20 ">
                </button>
              </li>

              <div :class="{ 'opacity-100 , delay-500': homest }" class="opacity-0 duration-1000"><img
                  src="../assets/sottol.png" alt="" class="w-[8vw]">
              </div>
            </div>


            <!-- lg devp -->
            <div class="flex flex-col items-center justify-center mr-[3vw]">

              <li :class="{'devclass1':devclass11}" class="hover:scale-125 duration-500">
                <button @click="devProfile">
                  <img src="../assets/devProfile.png" alt="" class="h-[3vw]   ">
                </button>
              </li>

              <div :class="{ 'opacity-100 , delay-500': devPst }" class=" opacity-0 duration-1000"><img
                  src="../assets/sottol.png" alt="" class="w-[8vw] ">
              </div>
            </div>


            <!-- lg proj -->
            <div class="flex flex-col items-center justify-center mr-[2.8vw]">

              <li  class="hover:scale-125 duration-500">
                <button @click="projecT">
                  <img src="../assets/project.png" alt="" class="h-[2.6vw] mt-[-0.3vw] ">
                </button>
              </li>

              <div :class="{ 'opacity-100 , delay-500': projectst }" class=" opacity-0 duration-1000">
                <img src="../assets/sottol.png" alt="" class="w-[8vw]">
              </div>
            </div>


            <!-- lg contacts -->
            <div class="flex flex-col items-center justify-center">

              <li class="hover:scale-125 duration-500">
                <button @click="contactS">
                  <img src="../assets/contacts2.png" alt="" class="h-[2.3vw] mt-[-0.1vw] ">
                </button>
              </li>

              <div :class="{ 'opacity-100 , delay-500': contactst }" class="opacity-0 duration-1000">
                <img src="../assets/sottol.png" alt="" class="w-[8vw]">
              </div>
            </div>


          </ul>

          <!-- linguage -->
          <button @click="linguage"
            class="h-[1.7vw] font-bold w-[5vw]  flex items-center mt-[-4.5vw] ml-[19vw] duration-100">
            <div :class="{ ' text-[rgba(0,0,0,0.6)]': linguage1, ' text-[rgba(0,0,0,0.75)] text-[1.3vw]': !linguage1 }"
              class="w-[50%] h-[100%]  text-center flex items-center border-r-[0.15vw] border-[rgba(0,0,0,0.75)]  justify-center text-[0.9vw] ">
              IT</div>

            <div :class="{ 'text-[rgba(0,0,0,0.6)]': !linguage1, 'text-[rgba(0,0,0,0.75)] text-[1.3vw]': linguage1 }"
              class="w-[50%] h-[100%] text-center flex items-center justify-center text-[0.9vw] ">EN</div>

          </button>
        </div>



        <!-- body carta -->
        <div :id="customId"
          :class="scendi, { 'ease-in duration-[3s]': velocitàb, 'ease-out duration-[4s]': !velocitàb }"
          class="absolute top-[0vw] mt-[-0.25vw] z-10 w-screen   translate-y-6 ">

          <!-- bg white body immagine-->

          <img src="../assets/corpo3.png" alt="" class="relative w-screen h-[47.1vw]">
          <div class="bg-white w-screen eig2">
          </div>






          <!-- contenitore Body -->
          <div class="absolute bg-white w-screen top-[8vw] z-40 flex flex-col items-center justify-center px-[20vw]">

            <!-- freccia su -->
            <button @click="homE" v-if="ffsu" class="absolute top-[0vw] right-[9vw] ">
              <img src="../assets/fsun.png" alt="" class="opacity-60 w-[2.5vw]">
            </button>

            <!-- section sup -->
            <div class="flex justify-center items-start mt-[3vw] text-[rgba(0,0,0,0.77)]">
              <img src="../assets/disegno.png" alt="" class="w-[26vw] mt-[-0.5vw]">

              <div class="text-[1.05vw] font-semibold">

                <span v-if="!linguage1" class="  text-[2.2vw] font-extrabold leading-[1.8vw] text-[rgba(0,0,0,0.56)]">
                  Mi chiamo Antonino e non sono solo un Web Developer
                  <img src="../assets/freccian.png" alt="" class="w-[1vw] inline-block  animate-bounce opacity-60">
                </span>

                <span v-if="linguage1" class="  text-[2.2vw] font-extrabold leading-[1.8vw] text-[rgba(0,0,0,0.56)]">
                  My name is Antonino and I am not only a Web Developer
                  <img src="../assets/freccian.png" alt="" class="w-[1vw] inline-block  animate-bounce opacity-60">
                </span>

                <br>
                <div v-if="!linguage1" class="mt-[0.7vw]">
                  Fin da giovane ho coltivato una grande passione per l’arte. Ho frequentato l’istituto artistico, dove
                  ho studiato arte illustrativa, grafica e progettazione architettonica. Successivamente, mi sono
                  iscritto alla facoltà di architettura, ma nel corso degli anni ho sviluppato un forte interesse per la
                  programmazione.
                </div>

                <div v-if="linguage1" class="mt-[0.7vw]">
                  From a young age I have cultivated a great passion for art. I attended art school, where I studied
                  illustrative art, graphics and architectural design. Later, I enrolled in the Faculty of Architecture,
                  but over the years I developed a strong interest in programming.
                </div>
              </div>

            </div>

            <!-- section inf -->
            <div class="flex justify-between items-center text-[rgba(0,0,0,0.77)] mt-[-1vw]">

              <div v-if="!linguage1" class=" font-semibold  text-[1.05vw] w-[50vw] ml-[1vw] mt-[-4vw]">
                Ho poi realizzato che la carriera di architetto non era la mia strada ideale. Questa esperienza mi ha
                fornito abilità nel lavorare in gruppo e un grande rispetto per le scadenze.
                Nel tempo libero oltre a fantasticare su come sbalordire gli altri con nuove homepage, ho molte altre
                passioni.
                Adoro il disegno a mano libera, progettare oggetti di design e nel tempo libero mi trasformo in un
                tatuatore!
              </div>

              <div v-if="linguage1" class=" font-semibold  text-[1.05vw] w-[50vw] ml-[1vw] mt-[-4vw]">
                I then realised that a career as an architect was not my ideal path. This experience gave me skills
                in working in a team and a great respect for deadlines. In my spare time, apart from fantasising
                about how to astound others with new homepages, I have many other passions. I love freehand drawing,
                designing objects and in my spare time I turn myself into a tattoo artist!
              </div>

              <img src="../assets/sedia.png" alt="" class="w-[18vw] ml-[2vw]">

            </div>

            <!-- firma -->
            <div>
              <img src="../assets/firma.png" alt="" class="w-[10vw] mt-[-5vw] ">
            </div>



            <!-- aereoplano -->
            <div class><img src="../assets/aereoplano.png" alt=""
                  class="animazione5  z-50   "></div>


            <!-- scroll dis -->
            <!-- <div v-if="scrolle" class="flex justify-center items-center animazione2 absolute top-[700px] left-[45%]">
                <img src="../assets/scrolldis.png" alt="" class="w-[125px] mt-[-50px]">
                <img src="../assets/frecciadis.png" alt="" class="w-[40px] mt-[-30px] animate-bounce duration-1000">
              </div> -->

            <!-- palloncino -->
            <div v-if="pallo"><img src="../assets/palloncino.png" alt=""
          class=" animazione z-50 "></div>




          </div>



        </div>


      </div>

      <!-- 2 homeview -->
      <div :id="bluu" :class="opacity"
        class="w-[93.5vw] pl-[13vw] h-[34vw] mt-[-2vw] flex justify-between opacity-[0] duration-1000 bg-black ">


        <!-- DEV PROFILE -->
        <div v-if="devP" :class="{ 'opacitys2z': !devPz, 'opacitysz': devPz }" class="flex flex-col items-center ">

          <div class="flex  items-start mt-[4vw]">

            <!-- section sup sin -->
            <div
              class="relative flex justify-center items-center h-[14.9vw] w-[13.5vw] rounded-[2.5vw] z-[0] bg-[rgba(255,255,255,0.2)] ">

              <img src="../assets/pc.png" alt="" class="absolute z-[1] h-[9.5vw] mt-[-0.8vw]">
            </div>


            <!-- sect sup des -->
            <div class=" text-white ml-[2vw] mt-[-1.5vw]">

              <!-- Vision -->
              <div class="font-extrabold text-[3.2vw]">Vision:</div>

              <!-- text -->
              <div v-if="!linguage1" class="w-[45vw] text-[1.1vw]">
                Credo fortemente nell'organizzazione.
                Un’analisi accurata porta a un codice più pulito, uno
                sviluppo
                più veloce e al rispetto
                di scadenze
                prefissate &#9200 <br>
                Sono appassionato di UX/UI Design e mi impegno costantemente per rimanere aggiornato. <br>
                Non amo i progetti ripetitivi, ma sono sempre alla ricerca di nuove sfide &#128293 <br> <br>
                Sono un umano socievole che apprezza il senso di comunità all’interno del team.
                Credo fermamente nell’importanza della formazione continua e valorizzo l’aiuto reciproco
                &#9749
              </div>

              <div v-if="linguage1" class="w-[45vw] text-[1.1vw]">
                I strongly believe in organisation.
                Thorough analysis leads to cleaner code, faster development and adherence to set deadlines
                &#9200 <br>
                I am passionate about UX/UI Design and constantly strive to stay up-to-date. I don't like
                repetitive projects, but I am always looking for new challenges &#128293 <br> <br>
                I am a sociable human being who values a sense of community within the team. I firmly
                believe in the importance of continuous training and value mutual help
                &#9749
              </div>

            </div>
          </div>




          <!-- section inf -->
          <div :class="{ 'mt-[-0.3vw]': competenze, 'mt-[1.5vw]': !competenze }" class="duration-500 ">
            <div class="flex flex-col  mt-[4vw] ">
              <h1 v-if="!linguage1" :class="{ 'text-white': competenze, 'text-[#ffffff4e]': !competenze }"
                class="font-extrabold  text-[2vw] duration-500 mb-[0.3vw] mt-[-1vw]">Competenze</h1>

                <h1 v-if="linguage1" :class="{ 'text-white': competenze, 'text-[#ffffff4e]': !competenze }"
                class="font-extrabold  text-[2vw] duration-500 mb-[0.3vw] mt-[-1vw]">Skills</h1>

              <div @mouseover="competenze = true" @mouseleave="competenze = false"
                class="flex flex-col  justify-center items-center">
                <div :class="{ 'bg-white , mb-[0vw]': competenze, 'bg-[#ffffff4e] , mb-[0.3vw]': !competenze }"
                  class="h-[0.30vw] w-[73vw] rounded-[50px] duration-500 "></div>


                <div class="flex">
                  <ul class="flex items-center">

                    <div @mouseenter="html = true" @mouseleave="html = false">
                      <li class="h-[4.8vw] w-[4.8vw] flex  duration-500 justify-center items-center "><img
                          src="../assets/htmlI.png" alt="" class="h-[2.6vw]">
                      </li>
                      <div :class="{ 'opacity-100': html, 'opacity-0': !html }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw]">HTML</div>
                    </div>

                    <div @mouseenter="css = true" @mouseleave="css = false">
                      <li class="h-[4.8vw] w-[4.8vw] flex duration-500 justify-center items-center "><img
                          src="../assets/cssI.png" alt="" class="h-[2.6vw]">
                      </li>
                      <div :class="{ 'opacity-100': css, 'opacity-0': !css }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">CSS</div>
                    </div>

                    <div @mouseenter="js = true" @mouseleave="js = false">
                      <li class="h-[4.8vw] w-[4.8vw] flex flex-col duration-500 justify-center items-center "><img
                          src="../assets/javascriptI.png" alt="" class="h-[2.6vw]">
                      </li>
                      <div :class="{ 'opacity-100': js, 'opacity-0': !js }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">JS</div>
                    </div>

                    <div @mouseenter="tailwind = true" @mouseleave="tailwind = false">
                      <li class="h-[4.8vw] w-[4.8vw] flex flex-col duration-500 justify-center items-center "><img
                          src="../assets/tailwindI.png" alt="" class="h-[2vw]">
                      </li>
                      <div :class="{ 'opacity-100': tailwind, 'opacity-0': !tailwind }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">TAILWIND
                      </div>
                    </div>

                    <div @mouseenter="vue = true" @mouseleave="vue = false">
                      <li class="h-[4.8vw] w-[4.8vw] flex flex-col duration-500 justify-center items-center "><img
                          src="../assets/vueI.png" alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': vue, 'opacity-0': !vue }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">VUE.JS</div>
                    </div>

                    <div @mouseenter="vsc = true" @mouseleave="vsc = false">
                      <li class="h-[4.8vw] w-[4.5vw] flex flex-col duration-500 justify-center items-center "><img
                          src="../assets/vsI.png" alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': vsc, 'opacity-0': !vsc }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">VSC</div>
                    </div>

                    <div @mouseenter="github = true" @mouseleave="github = false" class="mr-[-10px]">
                      <li class="h-[4.8vw] w-[4.8vw]  duration-500 flex flex-center justify-center items-center ">
                        <img src="../assets/gitI.jpg" alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': github, 'opacity-0': !github }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">GITHUB</div>
                    </div>


                  </ul>

                  <ul class="flex">

                    <div @mouseenter="figma = true" @mouseleave="figma = false" class="">
                      <li class="h-[4.8vw] w-[4.8vw] flex justify-center items-center "><img src="../assets/figmaI.png"
                          alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': figma, 'opacity-0': !figma }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">FIGMA</div>
                    </div>

                    <div @mouseenter="adobe = true" @mouseleave="adobe = false" class="">
                      <li class="h-[4.8vw] w-[4.5vw] flex justify-center items-center "><img src="../assets/adobeI.png"
                          alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': adobe, 'opacity-0': !adobe }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">ADOBE</div>
                    </div>

                    <div @mouseenter="api = true" @mouseleave="api = false" class="ml-[10px]">
                      <li class="h-[4.8vw] w-[4.5vw]  flex justify-center items-center "><img src="../assets/apil.png"
                          alt="" class="h-[2.3vw]">
                      </li>
                      <div :class="{ 'opacity-100': api, 'opacity-0': !api }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">API REST
                      </div>
                    </div>

                    <div @mouseenter="google = true" @mouseleave="google = false" class="">
                      <li class="h-[4.8vw] w-[6.5vw] flex justify-center items-center "><img src="../assets/google.png"
                          alt="" class="h-[2.3vw] ">
                      </li>
                      <div :class="{ 'opacity-100': google, 'opacity-0': !google }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">GOOGLE.A
                      </div>
                    </div>

                    <div @mouseenter="postman = true" @mouseleave="postman = false" class="">
                      <li class="h-[4.8vw] w-[4.5vw] flex justify-center items-center "><img src="../assets/postman.png"
                          alt="" class="h-[2.3vw] ">
                      </li>
                      <div :class="{ 'opacity-100': postman, 'opacity-0': !postman }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">POSTMAN
                      </div>
                    </div>

                    <div @mouseenter="npm = true" @mouseleave="npm = false" class="">
                      <li class="h-[4.8vw] w-[7vw] flex justify-center items-center "><img src="../assets/npm.png"
                          alt="" class="h-[1.7vw] ">
                      </li>
                      <div :class="{ 'opacity-100': npm, 'opacity-0': !npm }"
                        class="text-white text-center font-semibold duration-500 text-[0.9vw] mt-[-0.7vw] ">NPM</div>
                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!-- PROJECT -->
        <div v-if="project" :class="{ 'opacitys2z': !projectz, 'opacitysz': projectz }"
          class="flex justify-center items-center text-white ml-[14.5vw] mt-[1vw]">

          <!-- TESTO -->
          <div class="flex flex-col text-[2.1vw] justify-center w-[21vw] h-[20vw] ">

            <!-- p1 -->
            <div class="flex  items-center ">
              <button @click="cp11"
                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp1z, 'text-white border-solid border-b-[0.2vw]': cp1z }"
                class="text-center mb-[0.5vw]   font-extrabold">DRIBBBLE</button>
            </div>
            <!-- p2 -->
            <div class="flex  items-center">
              <button @click="cp22"
                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp2z, 'text-white border-solid border-b-[0.2vw]': cp2z }"
                class="text-center mb-[0.5vw]  font-extrabold">L'IMPICCATO</button>
            </div>
            <!-- p3 -->
            <div class="flex  items-center">
              <button @click="cp33"
                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp3z, 'text-white border-solid border-b-[0.2vw]': cp3z }"
                class="text-center mb-[0.5vw] text-nowrap  font-extrabold">P-COMMERCE</button>
            </div>
            <!-- p4 -->
            <div class="flex  items-center">
              <button @click="cp44"
                :class="{ 'text-[rgba(255,255,255,0.26)]': !cp4z, 'text-white border-solid border-b-[0.2vw]': cp4z }"
                class="text-center mb-[0.5vw]  font-extrabold">BLOG</button>
            </div>

          </div>

          <!-- CONTENUTO -->
          <div class="flex justify-center items-center z-[0]">

            <!-- Cp1 -->
            <a href="https://dribbble-replica-html-css.vercel.app/" @mouseover="over1 = true" v-if="cp1"
              @mouseleave="over1 = false" class="flex flex-col items-center">
              <div :class="{ 'border-white border-[0.25vw]': over1, 'opacitys2z': !cp1z, 'opacitysz': cp1z }"
                class="rounded-[3.23vw] duration-100">
                <div
                  class="relative flex flex-col  items-center w-[25vw] z-10 duration-100  h-[25vw] bg-[rgb(132,132,247)] rounded-[3vw]">
                  <!-- img cont -->
                  <img src="/public/p1.jpg" alt="" class="w-[24vw] h-[15vw] mt-[0.5vw] rounded-[2.6vw] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(132,132,247)] to-[rgba(255,255,255,0)] absolute top-0  w-[24vw] h-[13.5vw] ">
                  </div>
                  <div class=" bg-[rgb(132,132,247)]  mt-[-2vw] w-[24vw] h-[5vw]"></div>

                  <!-- text e bottom -->
                  <div v-if="!linguage1" :class="{ 'text-white': over1, 'text-[rgb(230,230,251)]': !over1 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] ">
                    Ho scelto di prendere spunto da uno dei siti più famosi tra i creativi: Dribbble. <br>
                    Ho voluto analizzare il suo stile e le sue animazioni, dato che è un sito all’avanguardia nel design
                    e nel clean-code.
                  </div>

                  <div v-if="linguage1" :class="{ 'text-white': over1, 'text-[rgb(230,230,251)]': !over1 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] mb-[1.5vw] ">
                    I chose to take my cue from one of the most popular sites among creatives: Dribbble. <br>
                    I wanted to analyse its style and animations, as it is a site at the forefront of
                    design and clean-code.
                  </div>

                  <div class="flex justify-end items-center w-[17vw] mt-[0.22vw]  h-[2.4vw] ml-[4vw] text-[0.7vw]">
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 font-bold rounded-[2vw]  border-solid border-[0.15vw] border-white mr-[1.3vw]">
                      HTML
                    </div>
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw]">
                      CSS</div>

                  </div>
                </div>
              </div>
              <div v-if="!linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over1, 'border-[rgba(255,255,255,0.26)]': !over1 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visita!</span>
              </div>

              <div v-if="linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over1, 'border-[rgba(255,255,255,0.26)]': !over1 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visit!</span>
              </div>
            </a>


            <!-- Cp2s -->
            <a href="https://impiccato-game.vercel.app/" @mouseover="over2 = true" @mouseleave="over2 = false"
              v-if="cp2" class="flex flex-col items-center">
              <div :class="{ 'border-white border-[0.25vw]': over2, 'opacitys2z': !cp2z, 'opacitysz': cp2z }"
                class="rounded-[3.23vw] duration-100">
                <div
                  class="relative flex flex-col  items-center w-[25vw] z-10 duration-100  h-[25vw] bg-[rgb(250,128,128)] rounded-[3vw]">
                  <!-- img cont -->
                  <img src="/public/p2.jpg" alt="" class="w-[24vw] h-[15vw] mt-[0.5vw] rounded-[2.6vw] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(250,128,128)] to-[rgba(255,255,255,0)] absolute top-0  w-[24vw] h-[13.5vw] ">
                  </div>
                  <div class=" bg-[rgb(250,128,128)]  mt-[-2vw] w-[24vw] h-[5vw]"></div>

                  <!-- text e bottom -->
                  <div v-if="!linguage1" :class="{ 'text-white': over2, 'text-[rgb(245,218,218)]': !over2 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] ">
                    Mi sono divertito a ricreare il gioco dell’impiccato, sfidandomi direttamente contro il computer.
                    <br>
                    E tu, vieni a fare una partita?
                  </div>

                  <div v-if="linguage1" :class="{ 'text-white': over2, 'text-[rgb(245,218,218)]': !over2 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] ">
                    I had fun recreating the game of hangman, challenging myself directly against the
                                    computer.
                                    <br> And you, are you coming for a game?
                  </div>

                  <div class="flex justify-end items-center w-[17vw] mt-[3vw]  h-[2.4vw] ml-[4vw] text-[0.7vw]">
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 font-bold rounded-[2vw]  border-solid border-[0.15vw] border-white mr-[1.3vw]">
                      HTML
                    </div>
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw] mr-[1.3vw]">
                      TAILWIND</div>
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw] ">
                      JAVASCRIPT</div>

                  </div>
                </div>
              </div>
              <div v-if="!linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over2, 'border-[rgba(255,255,255,0.26)]': !over2 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visita!</span>
              </div>

              <div v-if="linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over2, 'border-[rgba(255,255,255,0.26)]': !over2 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visit!</span>
              </div>
            </a>


            <!-- Cp3 -->
            <a href="https://penta-e-commerce.vercel.app/" @mouseover="over3 = true" @mouseleave="over3 = false"
              v-if="cp3" class="flex flex-col items-center">
              <div :class="{ 'border-white border-[0.25vw]': over3, 'opacitys2z': !cp3z, 'opacitysz': cp3z }"
                class="rounded-[3.23vw] duration-100">
                <div
                  class="relative flex flex-col  items-center w-[25vw] z-10 duration-100  h-[25vw] bg-[rgb(77,190,97)] rounded-[3vw]">
                  <!-- img cont -->
                  <img src="/public/p3.jpg" alt="" class="w-[24vw] h-[15vw] mt-[0.5vw] rounded-[2.6vw] object-cover">

                  <div
                    class="bg-gradient-to-t from-[rgb(77,190,97)] to-[rgba(255,255,255,0)] absolute top-0  w-[24vw] h-[13.5vw] ">
                  </div>
                  <div class=" bg-[rgb(77,190,97)]  mt-[-2vw] w-[24vw] h-[5vw]"></div>

                  <!-- text e bottom -->
                  <div v-if="!linguage1" :class="{ 'text-white': over3, 'text-[rgb(222,246,226)]': !over3 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] ">
                    Per questo progetto, insieme al mio team, abbiamo dato vita a un e-commerce. <br>
                    Abbiamo creato un file JSON locale per popolare gli articoli e abbiamo adottato Pinia per gestire
                    gli stati tra elementi e pagine. Ti va di fare acquisti?
                  </div>

                  <div v-if="linguage1" :class="{ 'text-white': over3, 'text-[rgb(222,246,226)]': !over3 }"
                    class=" w-[23.5vw]  mt-[-4.5vw] font-semibold text-[0.95vw] ">
                    For this project, together with my team, we created an e-commerce.  We created a
                                    local JSON file to populate the articles and adopted Pinia to manage the states
                                    between elements and pages. <br> Feel like shopping?
                  </div>

                  <div class="flex justify-end items-center w-[17vw] mt-[0.4vw]  h-[2.4vw] ml-[4vw] text-[0.7vw]">
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 font-bold rounded-[2vw]  border-solid border-[0.15vw] border-white mr-[1.3vw]">
                      HTML
                    </div>
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw] mr-[1.3vw]">
                      TAILWIND</div>

                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw] mr-[1.3vw]">
                      VUE.JS</div>
                    <div
                      class="py-[0.2vw] px-[0.5vw] bg-slate-300 text-slate-500 border-solid border-[0.15vw] border-white font-bold rounded-[2vw] ">
                      PINIA</div>

                  </div>
                </div>
              </div>
              <div v-if="!linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over3, 'border-[rgba(255,255,255,0.26)]': !over3 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visita!</span>
              </div>

              <div v-if="linguage1"
                class=" text-[rgba(255,255,255,0.26)] text-[1.35vw] w-[20vw] flex flex-start  font-semibold mt-[0.4vw]">
                <span :class="{ 'text-white border-white': over3, 'border-[rgba(255,255,255,0.26)]': !over3 }"
                  class="border-solid duration-200 border-b-[0.15vw]   ">Visit!</span>
              </div>
            </a>


            <!-- Cp4 -->
            <div :class="{ 'hidden': !cp4, 'flex': cp4, 'opacitys2z': !cp4z, 'opacitysz': cp4z }"
              class="border-[rgba(255,255,255,0.26)] border-[0.25vw] rounded-[3vw] flex items-center justify-center mt-[-2.3vw]">

              <div class="flex flex-col items-center justify-center w-[25vw] h-[24.7vw]">
                <div class="text-[3vw] font-bold text-[rgba(255,255,255,0.26)] text-nowrap ">COMING</div>
                <div class="text-nowrap font-semibold text-[1vw] text-green-400 mt-[-0.4vw]">15/05/24</div>
                <div class="loader2 bg-red-200 mt-[0.3vw]"></div>
              </div>

            </div>




          </div>

        </div>







        <!-- CONTACTS -->
        <div v-if="contacts" :class="{ 'opacitys2z': !contactsz, 'opacitysz': contactsz }"
          class="flex justify-center mt-[-3vw] ml-[18vw]  text-white">
          <!-- info1 -->
          <div class="flex flex-col justify-center mr-[5vw]">

            <div v-if="!linguage1" class="text-[3vw]  font-extrabold t1 ">RESIDENZA</div>
            <div v-if="linguage1" class="text-[3vw]  font-extrabold t1 ">RESIDENCE</div>
            <div v-if="!linguage1" class="text-[1.20vw] mt-[-0.6vw]   text-white">Torino / Bari / Taranto</div>
            <div v-if="linguage1" class="text-[1.20vw] mt-[-0.6vw]   text-white">Turin / Bari / Taranto</div>

            <div class="text-[3vw]  mt-[1vw] font-extrabold t3">EMAIL</div>
            <div class="text-[1.20vw] mt-[-0.6vw]   text-white">ape.develop3@gmail.com
            </div>

            <div v-if="!linguage1" class="text-[3vw] mt-[1vw] font-extrabold t5">NUMERO</div>
            <div v-if="linguage1" class="text-[3vw] mt-[1vw] font-extrabold t5">NUMBER</div>
            <div class="text-[1.20vw] mt-[-0.6vw]   text-white">+39 3426398488</div>

          </div>

          <!-- info2 -->
          <div class="flex flex-col justify-center  ">

            <div class="text-[3vw]  font-extrabold t1">INSTAGRAM</div>
            <a v-if="!linguage1" href="https://www.instagram.com/tonystark______?igsh=Nnhjaml1bXN5MjBr"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">
              Visita il mio profilo!</a>
              <a v-if="linguage1" href="https://www.instagram.com/tonystark______?igsh=Nnhjaml1bXN5MjBr"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">
              Visit my profile!</a>

            <div class="text-[3vw] mt-[1vw] font-extrabold t3 ">LINKEDIN</div>
            <a v-if="!linguage1" href="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">Guarda
              i miei post!</a>
              <a v-if="linguage1" href="https://www.linkedin.com/in/antonino-palma-esposito-6a9b382b8/"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">Look at my posts!</a>

            <div class="text-[3vw] mt-[1vw] font-extrabold t5">GITHUB</div>
            <a v-if="!linguage1" href="https://github.com/AntoninoPalmaEsposito"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">Scopri
              le mie repository!</a>
              <a v-if="linguage1" href="https://github.com/AntoninoPalmaEsposito"
              class="text-[1.20vw] mt-[-0.6vw]  hover:text-[1.5vw] duration-200 text-white underline underline-offset-[0.3vw]">Check out my repositories!</a>





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



        <!-- SCROLLBAR -->
        <div v-if="bartender" class=" flex flex-col justify-center ">
          <button @click="devProfile" :class="{ 'bg-white': bar, 'bg-[rgba(255,255,255,0.26)]': nobar }"
            class="w-[0.8vw] h-[3.8vw] rounded-[300px] duration-500 mb-[1.8vw] hover:scale-125"></button>

          <button @click="projecT" :class="{ 'bg-white': bar2, 'bg-[rgba(255,255,255,0.26)]': nobar2 }"
            class="w-[0.8vw] h-[3.8vw] rounded-[300px]  duration-500 mb-[1.8vw] hover:scale-125"></button>

          <button @click="contactS" :class="{ 'bg-white': bar3, 'bg-[rgba(255,255,255,0.26)]': nobar3 }"
            class="w-[0.8vw] h-[3.8vw] rounded-[300px]  duration-500 mb-[4vw] hover:scale-125"></button>
          <!-- <div :class="{ 'text-white': bar4, 'text-[rgba(255,255,255,0.26)]': nobar4 }"
            class="text-[35px] font-extrabold duration-500">TNX</div> -->
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
      devPz: true,
      projectz: false,
      contactsz: false,
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
      cp1z: true,
      cp2z: false,
      cp3z: false,
      cp4z: false,
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
      npm: false,
      ffsu: false,
      velocitàb: true,
      linguage1: false,
      devclass11: false,
      pallo: false,
      bartender:false


    };
  },

  mounted() {

    setTimeout(() => {
      this.pallo = true;
    }, 30000);

    setTimeout(() => {
      this.pallo = false;
    }, 49000);

    /* welcome style */
    setTimeout(() => {
      this.aanimazione3 = true;
    }, 3000);

    setTimeout(() => {
      this.devclass11 = true;
    }, 8000);

    setTimeout(() => {
      this.wel = false;
    }, 6000);

    /* scroll */
    setTimeout(() => {
      this.scrolle = true;
    }, 6000);


  },


  methods: {

    linguage() {
      this.linguage1 = !this.linguage1
    },

    cp11() {
      this.cp1z = true
      this.cp2z = false
      this.cp3z = false
      this.cp4z = false
      setTimeout(() => {
        this.cp1 = true
        this.cp2 = false
        this.cp3 = false
        this.cp4 = false
      }, 500);


    },
    cp22() {
      this.cp2z = true
      this.cp1z = false
      this.cp3z = false
      this.cp4z = false
      setTimeout(() => {
        this.cp2 = true
        this.cp1 = false
        this.cp3 = false
        this.cp4 = false
      }, 500);


    },
    cp33() {
      this.cp1z = false
      this.cp2z = false
      this.cp4z = false
      this.cp3z = true
      setTimeout(() => {
        this.cp3 = true
        this.cp1 = false
        this.cp2 = false
        this.cp4 = false
      }, 500);


    },
    cp44() {
      this.cp1z = false
      this.cp2z = false
      this.cp3z = false
      this.cp4z = true
      setTimeout(() => {
        this.cp4 = true
        this.cp1 = false
        this.cp2 = false
        this.cp3 = false
      }, 500);


    },

    homE() {
      setTimeout(() => {
        this.ffsu = false;
      }, 3000);

      this.velocitàb = false


      this.ctt = 0;
      this.opacitys = 0;
      

      setTimeout(() => {
        
        this.devP = false
        this.project = false
      this.contacts = false
      this.tnx = false
      this.bartender = false
      
      }, 500);

      this.bar = false;
      this.bar2 = false;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = true;
      this.nobar3 = true;
      this.nobar4 = true;

      

      this.homest = true
      this.devPst = false
      this.projectst = false
      this.contactst = false
      
      

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); 
      element.style.top = `${this.ctt}px`; 
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    devProfile() {
      setTimeout(() => {
        this.ffsu = true;
      }, 3000);

      this.velocitàb = true

      this.ctt = 50;
      this.opacitys = 1;
     

      setTimeout(() => {
        this.devP = true
        this.project = false
        this.contacts = false

        this.bar = true;
      this.bar2 = false;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = false;
      this.nobar2 = true;
      this.nobar3 = true;
      this.nobar4 = true;

      this.bartender = true
      }, 500);

      this.devPz = true
      this.projectz = false
      this.contactsz = false


      this.homest = false
      this.devPst = true
      this.projectst = false
      this.contactst = false

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}vw`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    projecT() {
      setTimeout(() => {
        this.ffsu = true;
      }, 3000);

      this.velocitàb = true

      this.ctt = 50;
      this.opacitys = 1;
      this.bar = false;
      this.bar2 = true;
      this.bar3 = false;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = false;
      this.nobar3 = true;
      this.nobar4 = true;

      setTimeout(() => {
        this.devP = false
        this.project = true
        this.contacts = false

        this.bartender = true
      }, 500);

      this.devPz = false
      this.projectz = true
      this.contactsz = false

      this.homest = false
      this.devPst = false
      this.projectst = true
      this.contactst = false

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}vw`; // Imposta la posizione in pixel
      element.classList.add(`duration-1000`);
      const blurr = document.getElementById(this.bluu);
      blurr.classList.remove('opacity-[0]');
      blurr.style.opacity = `${this.opacitys}`;

      console.log(`top-[${this.ctt}px]`);

    },

    contactS() {
      setTimeout(() => {
        this.ffsu = true;
      }, 3000);

      this.velocitàb = true

      this.ctt = 50;
      this.opacitys = 1;
      this.bar = false;
      this.bar2 = false;
      this.bar3 = true;
      this.bar4 = false;

      this.nobar = true;
      this.nobar2 = true;
      this.nobar3 = false;
      this.nobar4 = true;

      setTimeout(() => {
        this.devP = false
        this.project = false
        this.contacts = true

        this.bartender = true
      }, 500);

      this.devPz = false
      this.projectz = false
      this.contactsz = true

      this.homest = false
      this.devPst = false
      this.projectst = false
      this.contactst = true

      const element = document.getElementById(this.customId);
      element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
      element.style.top = `${this.ctt}vw`; // Imposta la posizione in pixel
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


body {
  overflow-x: hidden;
}

.devclass1 {
  animation-name: devcla;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: 4;
}

@keyframes devcla {
  from {
    scale: 1;
  }

  to {
    scale: 1.15;
  }
}


.eig2 {
  height: calc(100vh - 47.1vw);
  position: absolute;
  overflow-y: hidden;
}

.loader {
  height: 2vw;
  width: 38vw;
  border-radius: 20px;
  --c: no-repeat linear-gradient(#02ab6a 0 0);
  background: var(--c), var(--c), #c8d0ce;
  background-size: 60% 100%;
  animation: l16 3s infinite;
}

.loader2 {
  height: 0.3vw;
  width: 7vw;
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
  position: absolute;
  bottom: -3vw;
  right: 9vw;
  width: 4vw;
  animation-name: palloncino;
  animation-duration: 20s;
  animation-delay: 0s;
  opacity: 1;
}

@keyframes palloncino {
  0% {
    bottom: -3vw;
    right: 9vw;
    opacity: 0;
  
  }

  10% {
    opacity: 1;
  }

  100% {
    bottom: 100vw;
    right: 9vw;
  }
}


.animazione5 {
  position: absolute;
  width: 9vw;
  top: -5vw;
  left: -10vw;
  animation-name: aereoplano;
  animation-duration: 8s;
  animation-delay: 15s;
  animation-timing-function: linear;
}

@keyframes aereoplano {
  from {
    top: -4.8vw;
  left: -10vw;
  }

  to {
    top: 35vw;
  left: 101vw;
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