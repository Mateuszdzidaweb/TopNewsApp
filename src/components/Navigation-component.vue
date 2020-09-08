<template>
  <div>
    <div>
      <h2
        class="navMobile md:hidden sm:hidden"
        @click="openMobileNav"
        v-bind:class="{MobileNavActive : openNav}"
      >
        Menu
        <i v-if="!openNav" class="fas fa-caret-down"></i>
        <i v-else class="fas fa-caret-up"></i>
      </h2>
      <div class="nav flex align-middle bg-gray-500 sticky top-0 z-10">
        <div v-if="openNav" class="navigation flex-auto text-center p-3">
          <router-link class="p-3 md:p-5 text-lg" to="/" active="isActive" exact>Home</router-link>
          <router-link
            class="p-3 md:p-5 text-lg linkActiveClass"
            active="isActive"
            to="/sport"
          >Sport</router-link>
          <router-link class="p-3 md:p-5 text-lg" to="/business" active="isActive">Business</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.router-link-exact-active {
  font-weight: bold;
  color: #ffd32f !important;
}

.nav {
  background: #474747;
  position: sticky;
  top: 100px;
}

.nav a {
  color: white;
}

@media only screen and (max-width: 640px) {
  .navigation {
    display: flex;
    flex-direction: column;
  }

  .navMobile {
    background: #474747;
    color: white;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px solid white;
    padding: 2px;
  }

  .fa-caret-down {
    font-size: 18px;
    padding: 2px;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .navMobile {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      openNav: false,
      mobile: window.innerWidth <= 700,
    };
  },
  methods: {
    openMobileNav() {
      if (this.openNav === false) {
        this.openNav = true;
      } else {
        this.openNav = false;
      }
    },
    isMobie() {
      if (this.mobile) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    },
  },
  created() {
    this.isMobie();
  },
};
</script>