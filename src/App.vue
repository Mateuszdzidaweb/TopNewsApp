<template>
  <div id="app" class>
    <header class="p-3">
      <h1 class="text-center">News</h1>
    </header>
    <app-navigation></app-navigation>
    <router-view></router-view>



  </div>
</template>

<style lang="scss">
  h1{
    font-size: 2em !important;
  }
</style>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      articles: [],
      // imageLink: article.urlToImage ,
    };
  },

  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=83921d95a9924c19badb5f8a2e6ed8c1"
      )
      .then((response) => {
        this.articles = response.data.articles;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>




    <!-- <router-view />
    <li :key="article.id" v-for="article in articles" v-text=" article.urlToImage ">
      
    </li>

    <img :key="article.id" v-for="article in articles" :src="article.urlToImage" alt=""> -->
<!-- 
    <h1 :key="article.id" v-for="article in articles">{{ article.description }} asdsd</h1> -->
