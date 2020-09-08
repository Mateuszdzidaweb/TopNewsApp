<template>
  <div class="home">
    <div
      class="flex-auto text-center border-solid border-b-2 border-gray-600 border-opacity-50 SportHeader"
    >
      <div class="hidden md:flex flex-row lg:container lg:mx-auto py-3 px-2">
        <h1 class="Heading">Business</h1>
      </div>
    </div>

    <div class="home flex flex-row justify-between xl:container xl:mx-auto mb-5 py-5">
      <app-article v-if="!Spinner" :articles="articles"></app-article>
      <div class="mt-top center self-top h-10">
        <i v-if="Spinner" class="fas fa-spinner fa-spin"></i>
      </div>
      <app-moreNews class="hidden md:block"></app-moreNews>
    </div>
  </div>
</template>


<style lang="scss">
.fa-spinner {
  font-size: 40px;
}

.Heading {
  border-bottom: 1px solid black;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  .fa-spinner {
    font-size: 40px;
    margin-top: 20px;
  }
}
</style>


<script>
const axios = require("axios");
const apiKey = "83921d95a9924c19badb5f8a2e6ed8c1";
let newsCountry = "gb";

export default {
  data() {
    return {
      articles: [],
      Spinner: false,
    };
  },
  methods: {
    fetchCurrentNews() {
      this.Spinner = true;
      setTimeout(() => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=${newsCountry}&category=business&apiKey=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 600);
    },
  },

  created() {
    this.fetchCurrentNews();
  },
};
</script>


