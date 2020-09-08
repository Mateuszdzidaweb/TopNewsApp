<template>
  <div id="app">
    <app-navigation></app-navigation>
    <header class="header p-1">
      <a href="/">
        <h1 class="text-center font-bold tracking-wider text-blue-500">
          <span class="title">Top</span>
          <span class="text-black title">News</span>
        </h1>
      </a>
    </header>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");

html {
  background-color: #f3f3ed;
}
h1 {
  font-size: 2em !important;
}
.title {
  border-bottom: 2px solid black;
  border-top: 2px solid black;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  header {
    display: none;
  }
}
</style>
<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
};
</script>