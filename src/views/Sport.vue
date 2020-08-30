<template>
  <div class="sport">
    <!-- <div class="flex flex-row sm:container sm:mx-auto px-2"> -->

    <div class="flex-auto text-center border-solid border-b-2 border-gray-600 border-opacity-50">
      <div class="flex flex-row sm:container sm:mx-auto px-2">
        <h1 class="px-4">Sport</h1>
      </div>
      <div class="flex flex-row sm:container sm:mx-auto px-2 py-2">
        <h2 class="px-4 cursor-pointer" @click="fetchFoodbal">Foodbal</h2>
        <h2 class="px-4 cursor-pointer" @click="fetchFormula">Formula 1</h2>
        <h2 class="px-4 cursor-pointer" @click="fetchRugby">Rugby</h2>
        <h2 class="px-4 cursor-pointer" @click="fetchGolf">Golf</h2>
        <h2 class="px-4 cursor-pointer" @click="fetchAthletics">Athletics</h2>
      </div>
    </div>
    <!-- </div> -->

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

.text-center {
  text-align: center;
}

.display-center {
  margin-left: auto;
  margin-right: auto;
}

.isActive {
  // font-weight: bold;
  color: red;
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const axios = require("axios");
const apiKey = "83921d95a9924c19badb5f8a2e6ed8c1";
let newsCountry = "en";

export default {
  data() {
    return {
      articles: [],
      sport: "",
    };

    // currentDate: ''
  },
  methods: {
    fetchCurrentNews() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=sport&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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

    fetchFoodbal() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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
    fetchFormula() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=Formula1&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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
    fetchRugby() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=rugby&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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
    fetchGolf() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=golf&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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
    fetchAthletics() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=athletics&sortBy=publishedAt&language=${newsCountry}&pageSize=20&apiKey=${apiKey}`
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


