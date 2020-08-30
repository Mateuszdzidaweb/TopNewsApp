<template>
  <div class="home">
    <div class="flex flex-row lg:container lg:mx-auto py-5 px-2">
      <h1 class>{{getCurrentDate()}}</h1>
    </div>

    <form class="flex flex-row lg:container lg:mx-auto p-2 h-16" @submit.prevent="fetchSearchNews">
      <input
        id="input"
        class="w-64 h-10"
        type="text"
        v-model="searchTopic"
        placeholder=" Search.."
        name="search"
      />
      <input class="h-10 px-2" type="submit" @click="fetchCurrentNews"  value="Search"/>
    </form>

    <div class="home flex flex-row justify-between xl:container xl:mx-auto mb-5 py-5">
      <app-article :articles="articles"></app-article>
      <app-moreNews></app-moreNews>
    </div>
  </div>
</template>


<style lang="scss">
.home {
  //  background: linear-gradient(to bottom left, #cc0000 0%, #ffffff 107%);
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const axios = require("axios");
const apiKey = "83921d95a9924c19badb5f8a2e6ed8c1";
let newsCountry = 'gb'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      articles: [],
      searchTopic: "",
    };

    // currentDate: ''
  },
  methods: {
    getCurrentDate() {
      // Get Current Day Name
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let dayName = days[new Date().getDay()];
      // Get Current Month Name
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let monthDay = monthNames[new Date().getMonth()];
      // Get Current Day Number
      let date = new Date();
      let day = date.getDate();

      // Display Current Date
      return "Today: " + dayName + ", " + day + " " + monthDay;
    },
    fetchSearchNews() {
      // alert(this.searchTopic);

      if (this.searchTopic !== "") {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=${this.searchTopic}&sortBy=publishedAt&language=en&pageSize=20&apiKey=83921d95a9924c19badb5f8a2e6ed8c1`
          )
          .then((response) => {
            this.articles = response.data.articles;
                        
            if(response.data.articles == null){

              return '../articles/default-image.jpg';
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchCurrentNews() {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${newsCountry}&apiKey=${apiKey}`
        )
        .then((response) => {
          this.articles = response.data.articles;
          console.log(response);
          // alert("this is submit response");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.fetchCurrentNews();
  },
};
</script>


