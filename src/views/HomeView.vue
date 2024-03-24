<template>

  <!-- container/input mouse -->
  <div @wheel="handleMouseWheel" class=" w-screen bg-black">

    <div class="relative">

      <!-- palloncino -->
      <div><img src="../assets/palloncino.png" alt=""
          class="absolute bottom-[-300px] animazione z-50 right-[120px] w-[80px]  "></div>






      <div class="relative">
        <!-- nav carta -->
        <div class=" h-[200px] mb-[-24px] "><img src="../assets/nav.png" alt="" class="h-[130%] w-screen ">
        </div>

        <!-- ind -->
        <div class="absolute w-screen top-0 z-20 flex items-center justify-start pt-[30px] ">

          <!-- container logo -->
          <div>
            <div class="pl-[40px] xl:pl-[80px] "><img src="../assets/logo.png" alt=""
                class="w-[80px] md:w-[120px] lg:w-[140px] xl:w-[160px]"></div>
          </div>

          <!-- list -->
          <ul class="flex justify-center items-center max-w-[70%]  mx-auto pr-[40px] xl:pr-[180px] pb-[25px]">
            <li><img src="../assets/home.png" alt="" class="w-[120px]  mr-[50px] pr-[20px]"></li>
            <li><img src="../assets/devProfile.png" alt="" class="w-[240px] mr-[50px] pr-[20px]"></li>
            <li><img src="../assets/project.png" alt="" class="w-[200px] mr-[50px] pr-[20px]"></li>
            <li><img src="../assets/contacts.png" alt="" class="w-[230px] "></li>
          </ul>
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
      <div class=" h-[85vh] w-screen ">
        <div :id="bluu" :class="opacity" class="opacity-[0] duration-1000">

          <!-- Dev. profile -->
          <div v-if="devP" class="h-[500px] absolute  top-0 p-[300px] ">

            <div class="flex justify-center items-center">
              <div class=" text-[25px] font-semibold text-white">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
                provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
                voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
                voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi
              </div>

              <div class="h-[400px] w-[20px] bg-slate-500 rounded-[50px]"></div>
            </div>

            <div class="flex justify-center items-center mx-auto mt-[-50px]">
              <div class="h-[180px] w-[180px] border-solid border-2 border-indigo-600 rounded-3xl mr-[40px]"></div>
              <div class="h-[180px] w-[180px] border-solid border-2 border-indigo-600 rounded-3xl mx-[40px]"></div>
              <div class="h-[180px] w-[180px] border-solid border-2 border-indigo-600 rounded-3xl mx-[40px]"></div>
              <div class="h-[180px] w-[180px] border-solid border-2 border-indigo-600 rounded-3xl ml-[40px]"></div>


            </div>
          </div>


          <!-- project -->
          <div v-if="project" class="h-[500px] absolute  top-0 p-[300px] ">
            <div class=" text-[25px] font-semibold text-red-400">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
                provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
                voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
                voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
                voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil
                commodi
              </div>
          
          </div>


          <!-- contacts -->
          <div v-if="contacts" class="h-[500px] absolute  top-0 p-[300px] ">
            <div class=" text-[25px] font-semibold text-green-200">
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
      bluu: 'bluer'


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
      console.log(`top-[${this.ctt}px]`);

      if (this.ctt >= 0 && this.ctt <= 5310) {
        this.ctt += 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]');
        element.classList.add(`duration-1000`);
        element.style.top = `${this.ctt}px`;
        return `top-[${this.ctt}px]`;
      }
    },

    /* transition upp */
    sali() {
      console.log(`top-[${this.ctt}px]`);

      if (this.ctt > 80) {
        this.ctt -= 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
        element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
        element.classList.add(`duration-1000`);
        return `top-[${this.ctt}px]`;
      }
    },

    opacity() {
      console.log(`opacity-[${this.opacitys}]`);

      /* devP */

      /* A. */
      if (this.ctt > 410 && this.ctt <= 860) { /* +450 */
        this.opacitys += 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

      /* B */
      } else if (this.ctt > 860 && this.ctt <= 1160) { /* +300 */
        this.opacitys = 1;

      /* C */
      } else if (this.ctt > 1160 && this.ctt <= 1610) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

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

      /* B */
      } else if (this.ctt > 2260 && this.ctt <= 2560) { /* +300 */
        this.opacitys = 1;

      /* C */
      } else if (this.ctt > 2560 && this.ctt <= 3010) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

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

      /* B */
      } else if (this.ctt > 3660 && this.ctt <= 3960) { /* +300 */
        this.opacitys = 1;

      /* C */
      } else if (this.ctt > 3960 && this.ctt <= 4410) { /* +450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;

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

      /* B */
      } else if (this.ctt > 5060 && this.ctt <= 5310) { /* +300 - 50 */
        this.opacitys = 1;
      }

    },



    opacitysali() {
      console.log(`opacity-[${this.opacitys}]`);

       /* dev P */
       if (this.ctt <= 410) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* E. */
        else if (this.ctt > 410 && this.ctt <= 860) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* D. */
        else if (this.ctt > 860 && this.ctt <= 1160) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
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
        return `opacity-[${this.opacitys}]`
        
      } /* B. */
        else if (this.ctt == 1660) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* A. */
        else if (this.ctt > 1660 && this.ctt <= 1810) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* project */

        /* E. */
        else if (this.ctt > 1810 && this.ctt <= 2260) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* D. */
        else if (this.ctt > 2260 && this.ctt <= 2560) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
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
        return `opacity-[${this.opacitys}]`
        
      } /* B. */
        else if (this.ctt == 3060) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* A. */
        else if (this.ctt > 3060 && this.ctt <= 3210) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } 
       /* contacts */

        /* E. */
        else if (this.ctt > 3210 && this.ctt <= 3660) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* D. */
        else if (this.ctt > 3660 && this.ctt <= 3960) { /* -300 */
        this.opacitys = 1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
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
        return `opacity-[${this.opacitys}]`
        
      } /* B. */
        else if (this.ctt == 4460) {
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.classList.remove('duration-1000');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* A. */
        else if (this.ctt > 4460 && this.ctt <= 4610) { /* -150 */
        this.opacitys = 0;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
      } /* tnx */
        else if (this.ctt > 4610 && this.ctt <= 5060) { /* -450 */
        this.opacitys -= 0.1;
        const blurr = document.getElementById(this.bluu);
        blurr.classList.remove('opacity-[0]');
        blurr.style.opacity = `${this.opacitys}`;
        return `opacity-[${this.opacitys}]`
        
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