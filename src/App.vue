<template>
  <div id="app">
    <app-navigation></app-navigation>
    <header class="p-1">
      
      <h1 class="text-center font-bold tracking-wider text-blue-500 ">
        <span class="title">Top</span>
        <span class="text-black title">News</span>
      </h1>
      <!-- <img class="center" src="@/assets/images/logo.png" alt=""> -->
    </header>
 
    <router-view></router-view>



  </div>
</template>

<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

html{
    background-color: #f3f3ed;
  
 }
  h1{
    font-size: 2em !important;
  }

  header{
        // background-color: #FFD32F;
  }

  .title{
    border-bottom: 2px solid black;
    border-top: 2px solid black;
  }

  .center {
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
// const axios = require("axios");

export default {
  data() {
    return {
      articles: [],
      // imageLink: article.urlToImage ,
    };
  },

  created() {
    // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=83921d95a9924c19badb5f8a2e6ed8c1"
    //   )
    //   .then((response) => {
    //     this.articles = response.data.articles;
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>




    <!-- <router-view />
    <li :key="article.id" v-for="article in articles" v-text=" article.urlToImage ">
      
    </li>

    <img :key="article.id" v-for="article in articles" :src="article.urlToImage" alt=""> -->
<!-- 
    <h1 :key="article.id" v-for="article in articles">{{ article.description }} asdsd</h1> -->
