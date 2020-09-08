<template>
  <div>
    <div
      class="flex flex-row flex-wrap w-full h-auto"
      :class="{'noResults': articles.length === 0}"
    >
      <h1
        class="mt-top center self-top h-10"
        v-if="articles.length === 0 && visible"
      >No results found</h1>
      <div
        class="container md:flex flex-col items-center ml-2 mr-2"
        :key="article.id"
        v-for="article in articles.slice(0, articlesToShow)"
      >
        <a :href="article.url" target="_blank">
          <div class="articleContainer">
            <img
              class="flex flex-row content-center cursor-pointer imageSize"
              v-lazy="article.urlToImage || defaultImage"
              :blur="100"
              alt
            />
            <h2
              class="flex text-center cursor-pointer mt-top py-4 articleHeading"
            >{{ article.title| truncate(70) }}</h2>
          </div>
        </a>
      </div>

      <i v-if="isBusy" class="fas fa-spinner fa-spin"></i>
    </div>
    <button
      @click="articlesToShow += 3"
      :class="{'hide': articlesToShow >= articles.length }"
      class="mt-2 center items-center"
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
  max-width: 300px;
  min-height: 200px;
  max-height: 220px;
  min-width: 300px;
}

button {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  &:focus {
    box-shadow: none;
    outline: none;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    max-width: 100%;
    border-bottom: 1px solid gray;
  }

  .articleContainer {
    display: flex;
    flex-direction: row;
  }

  .imageSize {
    max-width: 180px;
    min-height: 100px;
    max-height: 130px;
    min-width: 180px;
  }
  .articleHeading {
    font-size: 13px;
    text-align: start !important;
    padding-left: 10px;
  }
  .progressive-image-wrapper {
    padding-bottom: 0px !important;
  }
  .progressive-image-main {
    width: 180px;
    height: 100px;
  }

  @media only screen and (min-width: 768px) {
    button {
      display: none !important;
    }

    .container {
      background-color: red;
    }
  }
}
</style>

<script>
export default {
  props: {
    articles: {},
  },

  data() {
    return {
      articlesToShow: 9,
      searchTopic: "",
      visible: false,
      defaultImage: require("@/assets/images/no-image-found.png"),
      isBusy: false,
      mobile: window.innerWidth <= 700,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 1010);
  },
};
</script>