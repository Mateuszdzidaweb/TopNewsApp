<template>
  <div class="flex flex-wrap w-full h-auto" :class="{'noResults': articles.length === 0}">
    <!-- <p>{{searchTopic}}</p> -->
    <!-- 
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
    -->
    <h1 class="mt-top center self-top h-10" v-if="articles.length === 0">No results found</h1>
    <div
      class="container flex flex-col items-center ml-2 mr-2"
      :key="article.id"
      v-for="article in articles.slice(0, articlesToShow)"
    >
      <a :href="article.url" target="_blank">
        <div>
          <img class="flex content-center cursor-pointer imageSize" :src="article.urlToImage || defaultImage"  alt />
          <h2 class="flex text-center cursor-pointer mt-top py-4">{{ article.title| truncate(70) }}</h2>
        </div>
      </a>
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

.noResults {
  height: 300px !important;
}

h2 {
  font-size: 20px;
}

#input {
  width: 18em;
}

.imageSize {
  max-height: 200px;
  min-height: 180px;
}
</style>

<script>
// const axios = require("axios");

// const apiKey = '83921d95a9924c19badb5f8a2e6ed8c1';
// let pageSize = 50;

// const input = document.getElementById('input');
// let searchTopic = this.searchTopic;

export default {
  props: {
    articles: {},
  },

  data() {
    return {
      // articles: [],
      articlesToShow: 9,
      searchTopic: "",
      defaultImage: require('../articles/default-image.jpg')
    };
  },

  methods:{

  },
};
</script>