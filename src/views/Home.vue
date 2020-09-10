<template>
  <div class="home">
    <div
      class="sticky md:flex-auto text-center border-solid border-b-2 border-gray-600 border-opacity-50 SportHeader"
    >
      <div class="hidden md:flex flex-row lg:container lg:mx-auto py-3 px-2">
        <h1 class="dateHeading">{{getCurrentDate()}}</h1>
      </div>

      <form class="flex flex-row lg:container lg:mx-auto p-2" @submit.prevent="fetchSearchNews">
        <input
          id="input"
          class="w-64 searchInput"
          type="text"
          v-model="searchTopic"
          placeholder=" Search.."
          name="search"
        />

        <div class="search-icons">
          <i
            class="fas fa-search text-2xl p-1 border-solid border-2 border-white"
            @click="fetchSearchNews"
          ></i>
        </div>
      </form>
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

.fa-spinner {
  font-size: 40px;
}

.searchInput {
  height: 2.2rem;
}

::placeholder {
  color: black !important;
  opacity: 0.7;
}

.SportHeader {
  background-color: #ffd32f;
  border-top: 1px solid white;
}

.dateHeading {
  border-bottom: 1px solid black;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  .searchInput {
    width: 100% !important;
    padding: 5px;
  }

  .home {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .fa-spinner {
    font-size: 40px;
    margin-top: 20px;
  }
  .sticky {
    top: 0;
    z-index: 9;
  }
  .fa-search{
    padding-left: 1px;
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
      searchTopic: "",
      Spinner: false,
    };
  },
  methods: {
    getCurrentDate() {
      // Get Current Day Name
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let dayName = days[new Date().getDay()];
      // Get Current Month Name
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let monthDay = monthNames[new Date().getMonth()];
      // Get Current Day Number
      let date = new Date();
      let day = date.getDate();

      // Display Current Date
      return "Today: " + dayName + ", " + day + " " + monthDay;
    },
    fetchSearchNews() {
      this.Spinner = true;

      setTimeout(() => {
        if (this.searchTopic !== "") {
          axios
            .get(
              `https://gnews.io/api/v3/search?q=${this.searchTopic}&country=${newsCountry}&token=${apiKey}`
            )
            .then((response) => {
              this.articles = response.data.articles;
              console.log(response);
              this.Spinner = false;
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.fetchCurrentNews();
        }
      }, 600);
    },
    fetchCurrentNews() {
      this.Spinner = true;
      setTimeout(() => {
        axios
          .get(
            `https://gnews.io/api/v3/search?q=world&country=${newsCountry}&lang=en&token=${apiKey}`
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


