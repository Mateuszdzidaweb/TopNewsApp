<template>
  <div>
    <div class="flex flex-wrap w-5/5">
    <h1 class="display-center px-2">Most Popular</h1>
      <div
        class="container flex flex-row items-center ml-2 mr-2 mt-4"
        :key="article.id"
        v-for="article in articles"
      >
      <a class="display flex" :href="article.url" target="_blank">
        <img
          class="topNewsImg flex content-center"
          :src="article.urlToImage"
          :alt = 'articles.name'
        />
        <p class="article-title mx-2">{{ article.title| truncate(50) }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.topNewsImg{
    width: 150px;
    height: auto;
}

.article-title {
  font-size: 16px;
}

.display-center{
    margin-left: auto;
    margin-right: auto;
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
    const apiKey = "83921d95a9924c19badb5f8a2e6ed8c1";
    let number = 9;

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=pl&sortBy=popularity&pageSize=${number}&apiKey=${apiKey}`
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