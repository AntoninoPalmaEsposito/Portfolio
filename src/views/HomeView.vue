<template>


  <div @wheel="handleMouseWheel" class=" w-screen bg-black">

    <div class="bg-slate-400 h-[200px] mb-[-24px] "></div>


    <div class="relative">

      <div :id="customId" :class="scendi"
        class=" w-screen h-[200px] bg-red-400 translate-y-6 duration-1000 absolute top-[0px] "> </div>

    </div>


    <div class="flex items-center justify-center h-[1000px] w-screen">

<div v-if="project" class="w-[50%] text-[15px] text-white p-[50px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione, provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil commodi excepturi autem nesciunt odio dolor cum iusto maiores ut illum molestias officiis unde provident ipsum. Illo voluptatibus delectus tempora, consequatur quod, id ullam dolorem voluptas ut, voluptatum ducimus eaque obcaecati! Quae rerum laudantium voluptatibus ducimus, magni harum, rem et cum atque ipsa tempore recusandae eligendi aliquid totam quibusdam distinctio voluptatum voluptatem quas esse in. Illo, facilis.lorem300 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa voluptates obcaecati ipsum consequuntur porro non 
</div>

<div v-if="about" class="w-[50%] text-[15px] text-red-400 p-[50px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, suscipit! Ullam iusto exercitationem saepe reprehenderit soluta dicta ratione, provident vitae tempora quos, atque nam sint illo distinctio laborum! Laudantium necessitatibus incidunt voluptatibus. Impedit sed libero temporibus blanditiis cumque maxime, laudantium nemo dignissimos nihil commodi excepturi autem nesciunt odio dolor cum iusto maiores ut illum molestias officiis unde provident ipsum. Illo voluptatibus delectus tempora, consequatur quod, id ullam dolorem voluptas ut, voluptatum ducimus eaque obcaecati! Quae rerum laudantium voluptatibus ducimus, magni harum, rem et cum atque ipsa tempore recusandae eligendi aliquid totam quibusdam distinctio voluptatum voluptatem quas esse in. Illo, facilis.lorem300 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa voluptates obcaecati ipsum consequuntur porro non 
</div>


</div>

  </div>









</template>

<script>
export default {
  data() {
    return {
      ctt: 0,
      customId: 'my-custom-id',
      project: true,
      about: false
    };
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

      console.log(`top-[${this.ctt}px]`);
      if (this.ctt <= 750) {
        this.ctt += 50;
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
        element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel
        return `top-[${this.ctt}px]`;
      } else if (this.ctt > 750){ 
        this.ctt += 50;
        this.project = false
        this.about = true
      }

      
    },
   

    /* transition upp */
    sali() {

      console.log(`top-[${this.ctt}px]`);
      if (this.ctt > 750) {
        this.project = true
      }

      if (this.ctt >= 50) {2
       
        this.ctt -= 50;
        console.log(this.ctt)
        const element = document.getElementById(this.customId);
        element.classList.remove('top-[0px]'); // Rimuovi la classe Tailwind
        element.style.top = `${this.ctt}px`; // Imposta la posizione in pixel

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


</style>