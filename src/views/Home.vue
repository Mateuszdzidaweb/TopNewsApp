<template>  
    <div class="home">
      <div class="flex flex-row lg:container lg:mx-auto py-5 px-2">
      <h1 class="">{{getCurrentDate()}}</h1>
      </div>
        <!-- <form id="search" class="flex flex-row lg:container lg:mx-auto p-2" action="">
           <input id="input" class="p-1 w-64" type="text" placeholder=" Search.." name="search">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form> -->
      <div class="home flex flex-row  justify-between xl:container xl:mx-auto mb-5 py-5 ">
        <!-- <div class="lg:flex lg:justify-between"> -->
          <!-- <div class="md:flex-1 bg-black content-between" style="max-width: 800px"> -->
                  <app-article></app-article>
                  <app-moreNews></app-moreNews>
          <!-- </div> -->
        <!-- </div> -->


      <!-- <div class="flex items-start content-around bg-blue-300 mt-5 w-3/3 "> -->
   
      <!-- </div> -->
    </div>
   
    </div>
</template>


<style lang="scss">

.home{
//  background: linear-gradient(to bottom left, #cc0000 0%, #ffffff 107%);
}

</style>


<script>

  // const input = document.getElementById('#input');
  // let topic = input.value;

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data(){

    
    return{
      currentDate: null
    }
    
    // currentDate: ''
  },
  methods:{
    getCurrentDate(){
      // Get Current Day Name
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let dayName = days[new Date().getDay()];
       // Get Current Month Name
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
     let monthDay = monthNames[new Date().getMonth()];
    // Get Current Day Number
      let date = new Date();
      let day = date.getDate();
     
      // Display Current Date
      return 'Today: '+ dayName + ', ' + day + ' ' + monthDay;
    }
  },
  created(){
    this.getCurrentDate();
  }

};
</script>


