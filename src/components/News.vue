<template>
  <div class="flex flex-row flex-wrap md:container mx-auto">
    <div class="container flex flex-col items-center sm:mx-auto bg-gray-700 mt-4"
    :key="article.id" v-for="article in articles"
    >
      <img class="flex content-center" :src="article.urlToImage" alt />
      <h2 class="flex text-center">{{ article.title }}</h2>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 400px;
}

h2{
    font-size: 20px;
}
</style>

<script>
const axios = require("axios");



export default {
  data() {

    return {
      articles: [],
    };
  },

  created() {

    const apiKey = '83921d95a9924c19badb5f8a2e6ed8c1';
    let number = 6;

    axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2020-07-25&to=2020-07-30&sortBy=publishedAt&language=pl&pageSize=${number}&apiKey=${apiKey}`
        
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