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
          <progressive-img
            class="topNewsImg flex content-center"
            :src="article.image || defaultImage"
            :alt="articles.name"
          />
          <p class="article-title mx-2">{{ article.title| truncate(50) }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.article-title {
  font-size: 16px;
}

.display-center {
  margin-left: auto;
  margin-right: auto;
}

.progressive-image {
  min-width: 50px;
}
</style>


<script>
const axios = require("axios");
const apiKey = "77ef20c213b11a5bd4c4e1491a0c7043";
let newsCountry = "gb";

export default {
  data() {
    return {
      articles: [],
      defaultImage: require("@/assets/images/no-image-found.png"),
    };
  },

  created() {
    axios
      .get(
         `https://gnews.io/api/v3/search?q=health&country=${newsCountry}&lang=en&max=9&token=${apiKey}`
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