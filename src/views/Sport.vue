<template>
  <div class="sport">
    <div
      class="flex-auto text-center border-solid border-b-2 border-gray-600 border-opacity-50 SportHeader"
    >
      <div class="flex flex-row sm:container sm:mx-auto px-2">
        <h1 class="px-4 sportHeading">{{Title}}</h1>
      </div>
      <div class="flex flex-row sm:container sm:mx-auto px-2 py-2">
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchCurrentNews(1)"
          :class="{selectedTab : currentTab == 1}"
        >All</h2>
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchFootball(2)"
          :class="{selectedTab : currentTab == 2}"
        >Foodbal</h2>
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchFormula(3)"
          :class="{selectedTab : currentTab == 3}"
        >Formula 1</h2>
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchRugby(4)"
          :class="{selectedTab : currentTab == 4}"
        >Rugby</h2>
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchGolf(5)"
          :class="{selectedTab : currentTab == 5}"
        >Golf</h2>
        <h2
          class="px-1 md:px-4 cursor-pointer subheading"
          @click="fetchAthletics(6)"
          :class="{selectedTab : currentTab == 6}"
        >Athletics</h2>
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
.home {
}

.text-center {
  text-align: center;
}

.display-center {
  margin-left: auto;
  margin-right: auto;
}

.isActive {
  color: red;
}

.subheading {
  &:hover {
    color: white;
  }
}

.selectedTab {
  font-weight: 500;
  color: white;
  border-bottom: 3px solid white;
}

.SportHeader {
  background-color: #ffd32f;
  border-top: 1px solid white;
}

@media only screen and (max-width: 600px) {
  .subheading {
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .sportHeading {
    font-size: 28px !important;
    padding-left: 0.2em;
  }
}
</style>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const axios = require("axios");
const apiKey = "77ef20c213b11a5bd4c4e1491a0c7043";
let newsCountry = "gb";

export default {
  data() {
    return {
      articles: [],
      sport: "",
      Spinner: false,
      Title: "Sport",
      currentTab: 1,
    };

    // currentDate: ''
  },
  methods: {
    fetchCurrentNews(selectedTab) {
      this.currentTab = selectedTab;
      this.Title = "Sport";
      this.Spinner = true;
      setTimeout(() => {
        axios
          .get(
            `https://gnews.io/api/v3/search?q=sport&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
            // alert("this is submit response");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },

    fetchFootball(selectedTab) {
      this.currentTab = selectedTab;
      this.Spinner = true;
      this.Title = "Football";
      setTimeout(() => {
        axios
          .get(
            `https://gnews.io/api/v3/search?q=football&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
            // alert("this is submit response");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },
    fetchFormula(selectedTab) {
      this.currentTab = selectedTab;
      this.Spinner = true;
      this.Title = "Formula 1";
      setTimeout(() => {
        axios
          .get(
            `https://gnews.io/api/v3/search?q=formula&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },
    fetchRugby(selectedTab) {
      this.currentTab = selectedTab;
      this.Spinner = true;
      this.Title = "Rugby";
      setTimeout(() => {
        axios
          .get(
             `https://gnews.io/api/v3/search?q=rugby&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },
    fetchGolf(selectedTab) {
      this.currentTab = selectedTab;
      this.Spinner = true;
      this.Title = "Golf";
      setTimeout(() => {
        axios
          .get(
             `https://gnews.io/api/v3/search?q=golf&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },
    fetchAthletics(selectedTab) {
      this.currentTab = selectedTab;
      this.Spinner = true;
      this.Title = "Athletics";
      setTimeout(() => {
        axios
          .get(
             `https://gnews.io/api/v3/search?q=athletics&country=${newsCountry}&lang=en&token=${apiKey}`
          )
          .then((response) => {
            this.articles = response.data.articles;
            console.log(response);
            this.Spinner = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1010);
    },
  },

  created() {
    this.fetchCurrentNews();
  },
};
</script>


