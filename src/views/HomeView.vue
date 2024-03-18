<template>

  <!-- container/input mouse -->
  <div @wheel="handleMouseWheel" class=" w-screen bg-black">

<div class="relative">
  <div><img src="../assets/palloncino.png" alt="" class="absolute bottom-[-100px] z-50 right-[50px] w-[80px]  animazione"></div>
    <div class="relative">

      <!-- nav carta -->
      <div class=" h-[200px] mb-[-24px] "><img src="../assets/nav.png" alt="" class="w-screen">
      </div>

      <!-- ind -->
      <div class="absolute w-screen top-0 z-20 flex items-center pt-[30px] ">

        <!-- container logo -->
        <div>
          <div class="ml-[80px]"><img src="../assets/logo.png" alt="" class="w-[180px]"></div>
        </div>

        <!-- list -->
        <ul class="flex justify-center items-center ml-[260px] pb-[25px]">
          <li><img src="../assets/home.png" alt="" class="w-[120px] mx-[20px]"></li>
          <li><img src="../assets/devProfile.png" alt="" class="w-[240px] mx-[20px]"></li>
          <li><img src="../assets/project.png" alt="" class="w-[200px] mx-[20px]"></li>
          <li><img src="../assets/contacts.png" alt="" class="w-[230px] mx-[20px]"></li>
        </ul>
      </div>

      <!-- nav coperta -->
      <!-- <div :class="transizionee"
        class="absolute top-0 left-0 bg-white duration-[0.8s]  shadow-[5px_0_15px_0_white]  h-[300px] w-screen z-20 ">
      </div> -->


      <!-- body carta -->
      <div class="absolute top-[-50px]">
        <div :id="customId" :class="scendi" class=" z-10 w-screen h-screen  translate-y-6  absolute top-[60px] ">

          <!-- contenitore Body -->
          <div class="absolute w-screen h-screen top-[100px] z-40 p-[50px] flex flex-col">

            <div class="flex justify-center items-start">
<img src="../assets/disegno.png" alt="" class="w-[500px] ">
          <div class="text-[20px] w-[650px] my-auto ml-[50px] mt-[30px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque amet aut nemo deserunt a blanditiis ut, perspiciatis id enim tenetur debitis eos tempore, earum facere beatae, veniam adipisci. Consequuntur placeat ipsam praesentium. Laborum libero nam a quasi Lorem ipsum dolor sit amet consectetur ad.</div>
</div>

<div class="flex justify-center items-center">

          <div class="text-[20px] w-[800px] my-auto ml-[100px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque amet aut nemo deserunt a blanditiis ut, perspiciatis id enim tenetur debitis eos tempore, earum facere beatae, veniam adipisci. Consequuntur placeat ipsam praesentium. Laborum libero nam a quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas tempora perspiciatis? Deserunt molestias voluptatibus possimus quis quidem obcaecati nemo perspiciatis corpo.</div>
          <img src="../assets/sedia.png" alt="" class="w-[400px] mt-[-40px] ml-[50px] ">
</div>







          </div>

<!-- bg body -->
          <div class="absolute">
            <img src="../assets/corpo.png" alt="" class="w-screen">
            <div class="h-screen w-screen bg-white"></div>
          </div>

        </div>
      </div>

    </div>


    <div class="flex items-center justify-center h-[1000px] w-screen">

      <div v-if="project" class="w-[50%] text-[15px] text-white p-[50px]">
        Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
        provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
        voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil commodi
        excepturi autem nesciunt odio dolor cum iusto maiores ut illum molestias officiis unde provident ipsum. Illo
        voluptatibus delectus tempora, consequatur quod, id ullam dolorem voluptas ut, voluptatum ducimus eaque
        obcaecati! Quae rerum laudantium voluptatibus ducimus, magni harum, rem et cum atque ipsa tempore recusandae
        eligendi aliquid totam quibusdam distinctio voluptatum voluptatem quas esse in. Illo, facilis.lorem300 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa voluptates obcaecati ipsum consequuntur porro
        non
      </div>

      <div v-if="about" class="w-[50%] text-[15px] text-red-400 p-[50px]">
        Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione,
        provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt
        voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil commodi
        excepturi autem nesciunt odio dolor cum iusto maiores ut illum molestias officiis unde provident ipsum. Illo
        voluptatibus delectus tempora, consequatur quod, id ullam dolorem voluptas ut, voluptatum ducimus eaque
        obcaecati! Quae rerum laudantium voluptatibus ducimus, magni harum, rem et cum atque ipsa tempore recusandae
        eligendi aliquid totam quibusdam distinctio voluptatum voluptatem quas esse in. Illo, facilis.lorem300 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa voluptates obcaecati ipsum consequuntur porro
        non
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
      customId: 'my-custom-id',
      project: true,
      about: false,
      tran1: false,
      tran2: false,
      tran3: false
    };
  },

  computed: {
    /*  transizionee() {
       const classes = [];
       if (this.tran1) {
         classes.push('w-[1365px]');
        
       }
       if (this.tran2) {
         classes.push('w-[610px]');
       
       }
       if (this.tran3) {
         classes.push('w-[0px]');
        
       }
       return classes;
     } */




  },

  methods: {

    /* gestione evento */
    handleMouseWheel(event) {

      if (event.deltaY > 0) {
        this.scendi();
        console.log(this.ctt)

      } else if (event.deltaY < 0) {
        this.sali();
        console.log(this.ctt)
      }
    },

    /* transition down */
    scendi() {
      /* if (this.ctt >= 0 && this.ctt < 50) {
        this.tran1 = true
        this.tran2 = false
        this.tran3 = false
      } else if (this.ctt >= 50 && this.ctt < 100) {
        this.tran1 = false
        this.tran2 = true
        this.tran3 = false
      } else if (this.ctt >= 100) {
        this.tran1 = false
        this.tran2 = false
        this.tran3 = true
      } */




      console.log(`top-[${this.ctt}px]`);

      if (this.ctt >= 0 && this.ctt <= 750) {
        this.ctt += 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]');
        element.classList.add(`duration-1000`);
        element.style.top = `${this.ctt}px`;
        return `top-[${this.ctt}px]`;

      }

      else if (this.ctt > 750) {

        this.project = false
        this.about = true

      }


    },


    /* transition upp */
    sali() {


      /* if (this.ctt <= 50) {
        this.tran1 = false
        this.tran2 = false
        this.tran3 = false
      } else if (this.ctt >= 50 && this.ctt <= 100) {
        this.tran1 = true
        this.tran2 = false
        this.tran3 = false
      } else if (this.ctt > 100 && this.ctt <= 150) {
        this.tran1 = false
        this.tran2 = true
        this.tran3 = false

      } else if (this.ctt > 150) {
        this.tran1 = false
        this.tran2 = false
        this.tran3 = true

      } */

      console.log(`top-[${this.ctt}px]`);
      if (this.ctt > 800) {
        this.project = true
        this.about = false
      }

      if (this.ctt > 80) {

        this.ctt -= 50;
        console.log(this.ctt)
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
        element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
        element.classList.add(`duration-1000`);
        return `top-[${this.ctt}px]`;

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

.animazione {
  animation-name: palloncino;
 
  animation-duration: 15s;
}

@keyframes palloncino {
  from {
    bottom: -100px;
  }
  to {
    bottom: 1500px;
  }
}
</style>