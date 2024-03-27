<template>

  <!-- container/input mouse -->
  <div @wheel="handleMouseWheel" class=" w-screen">

    

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
          <div class="flex flex-col max-w-[70%] mx-auto pr-[40px] xl:pr-[180px] pb-[25px]">
            <ul class="flex justify-center items-center">
              <li><button @click="homE"><img src="../assets/home.png" alt=""
                    class="w-[135px]  mr-[50px] pr-[20px]"></button></li>
              <li><button @click="devProfile"><img src="../assets/devProfile.png" alt=""
                    class="w-[240px] mr-[50px] pr-[20px]"></button></li>
              <li><button @click="projecT"><img src="../assets/project.png" alt=""
                    class="w-[210px] mr-[50px] pr-[20px]"></button></li>
              <li><button @click="contactS"><img src="../assets/contacts.png" alt="" class="w-[230px] "></button></li>
            </ul>

            <div
              :class="{ 'ml-[-40px]': homest, 'ml-[200px]': devPst, 'ml-[480px]': projectst, 'ml-[760px]': contactst, }"
              class="ml-[-40px] duration-1000"><img src="../assets/sottol.png" alt="" class="w-[180px]"></div>
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
                <img src="../assets/disegno.png" alt="" class="w-[400px] lg:w-[450px] xl:w-[500px] ">
                <div class="text-[18px] lg:text-[20px]  w-[650px] my-auto ml-[15px] xl:ml-[50px] mt-[60px] ">Lorem,
                  ipsum dolor sit amet consectetur
                  adipisicing elit. Eaque amet aut nemo deserunt a blanditiis ut, perspiciatis id enim tenetur debitis
                  eos tempore, earum facere beatae, veniam adipisci. Consequuntur placeat ipsam praesentium. Laborum
                  libero nam a quasi Lorem ipsum dolor sit amet consectetur ad.</div>
              </div>

              <!-- section inf -->
              <div class="flex justify-center items-center">
                <div class="text-[18px]  lg:text-[20px] w-[800px] my-auto pl-[13px] xl:pl-[40px] mt-[90px]">Lorem, ipsum
                  dolor sit amet consectetur
                  adipisicing elit. Eaque amet aut nemo deserunt a blanditiis ut, perspiciatis id enim tenetur debitis
                  eos tempore, earum facere beatae, veniam adipisci. Consequuntur placeat ipsam praesentium. Laborum
                  libero nam a quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas tempora
                  perspiciatis? Deserunt molestias voluptatibus possimus quis quidem obcaecati nemo perspiciatis corpo.
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
      <div class=" h-[85vh] w-screen flex items-center mt-[-40px] bg-black">
        
          
  


        <!-- opacity container -->
        <div :id="bluu" :class="opacity" class="w-[89%] pt-[80px] pr-[100px] pb-[100px] pl-[390px] h-[740px] opacity-[0] duration-1000 ">

          <!-- Dev. profile -->
          <div v-if="devP" class="flex flex-col  ">

         
            

            <div class="flex justify-center items-start ">

              <!-- CARD SX -->
              
              <div class="relative flex justify-center items-center h-[250px] w-[250px] mb-[25px] rounded-[20px] mr-[25px] z-[0] bg-[rgba(255,255,255,0.2)]" >
                <div class="absolute top-[-35px] right-1  blur-[5px] z-[0] font-extrabold text-[90px] text-white">Lo</div>
             <img src="../assets/pc.png" alt="" class="absolute z-[1] h-[220px] hover:animate-bounce">
              </div>
            

              <div class=" w-[800px] text-[25px] font-semibold text-white mt-[20px]">
                <span class="font-extrabold text-[90px] ml-[-23px] leading-7 z-[1]">rem </span>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
                provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus inciduntLorem ipsum, dolor sit amet consectetur
              </div>
            </div>


            <div class="relative w-[100%] px-[70px] text-[25px] font-semibold text-white ">
              <div>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
                provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incisse  
              </div>
                <div class="absolute top-[40px] right-[115px]  font-extrabold text-[90px]">ipsum</div>
            </div>
            
          
            

            <div class="absolute bottom-[50px] flex flex-col  justify-center items-center  left-[14%]  px-[15px] ">
              <div class="h-[7px] w-[1400px] bg-[#e75cff] rounded-[50px] mb-[20px]"></div>


              <div class="flex">
              <ul class="flex">
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/htmlI.png" alt="" class="h-[60px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/cssI.png" alt="" class="h-[60px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/javascriptI.png" alt="" class="h-[60px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/tailwindI.png" alt="" class="h-[45px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/vueI.png" alt="" class="h-[50px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/vsI.png" alt="" class="h-[50px]">
                </li>
                <li class="h-[90px] w-[90px] mr-[-10px] flex justify-center items-center "><img src="../assets/gitI.jpg" alt="" class="h-[50px]">
                </li>
              </ul>

              <ul class="flex">
                
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/figmaI.png" alt="" class="h-[50px]">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/adobeI.png" alt="" class="h-[50px]">
                </li>
                
                <li class="h-[90px] w-[90px] ml-[10px] flex justify-center items-center "><img src="../assets/apil.png" alt="" class="h-[50px]">
                </li>
                <li class="h-[90px] w-[160px] flex justify-center items-center "><img src="../assets/google.png" alt="" class="h-[60px] ">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/postman.png" alt="" class="h-[60px] ">
                </li>
                <li class="h-[90px] w-[140px] flex justify-center items-center "><img src="../assets/npm.png" alt="" class="h-[35px] ">
                </li>
                <li class="h-[90px] w-[90px] flex justify-center items-center "><img src="../assets/reactI.png" alt="" class="h-[50px]">
                </li>
              </ul>
            </div>
            </div>
          </div>

          <!-- project -->
          <div v-if="project" class="h-[500px] absolute  top-0 p-[300px] ">
            <div class=" text-[25px] font-semibold text-red-300">
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
              provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
              vo
            </div>
          </div>

          <!-- contacts -->
          <div v-if="contacts" class="h-[500px] absolute   top-0 p-[300px] ">
            <div class=" text-[25px] font-semibold duration-1000 text-yellow-300">
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
              provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt

            </div>
          </div>

          <!-- tnx -->
          <div v-if="tnx" class="h-[500px] absolute  top-0 p-[300px] ">
            <div class=" text-[40px] font-semibold text-white">
              Lorem ipsum, dolor sit amet
            </div>

          </div>
        </div>
        <!-- ml-[180px] mt-[160px] -->
        <!-- scrollbar -->
        <div class="flex flex-col items-center ml-[20px] ">
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
      contactst: false


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

      if (this.ctt <= 410 ) {
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