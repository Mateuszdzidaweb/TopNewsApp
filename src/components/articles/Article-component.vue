<template>
  <div class="flex flex-wrap w-full h-auto"
  :class="{'noResults': articles.length === 0}">
    <form class="flex flex-row lg:container lg:mx-auto p-2 h-16"
    @submit.prevent="fetchSearchNews">
      <input
        id="input"
        class = "w-64 h-10"
        type="text"
        v-model="searchTopic"
        placeholder=" Search.."
        name="search"
      />
      <input class="h-10 px-2"
       type="submit" @click="fetchCurrentNews"/>
    </form>
    <h1 class="mt-top center self-top h-10"
    v-if="articles.length === 0">No results found</h1>
    <div
      class="container flex flex-col items-center ml-2 mr-2"
      :key="article.id"
      v-for="article in articles.slice(0, articlesToShow)"
    >
      <img class="flex content-center" :src="article.urlToImage" alt />
      <h2 class="flex text-center mt-top py-4">{{ article.title| truncate(70) }}</h2>
    </div>
    <button
      @click="articlesToShow += 3"
      :class="{'hide': articlesToShow >= articles.length }"
      class="flex center items-center h-4"
    >Load More</button>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 300px;
  max-height: auto !important;
  margin-left: auto;
  margin-right: auto;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.hide {
  display: none;
}

.noResults{
  height: 300px !important;
}

h2 {
  font-size: 20px;
}

#input{
  width: 18em;
}
</style>

<script>
const axios = require("axios");

const apiKey = '83921d95a9924c19badb5f8a2e6ed8c1';
// let pageSize = 50;

// const input = document.getElementById('input');
// let searchTopic = this.searchTopic;

export default {
  data() {
    return {
      articles: [],
      articlesToShow: 9,
      searchTopic: "",
    };
  },

  methods: {
    fetchSearchNews() {
      // alert(this.searchTopic);
      if(this.searchTopic !== ''){
      axios.get(
          `https://newsapi.org/v2/everything?q=${this.searchTopic}&from=2020-07-25&to=2020-07-30&sortBy=publishedAt&language=pl&pageSize=20&apiKey=83921d95a9924c19badb5f8a2e6ed8c1`
        )
        .then((response) => {
          this.articles = response.data.articles;
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
          `https://newsapi.org/v2/everything?q=sport&from=2020-07-25&to=2020-07-30&sortBy=publishedAt&language=pl&pageSize=20&apiKey=${apiKey}`
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