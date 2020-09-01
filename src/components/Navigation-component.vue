<template>
  <div class="nav flex align-middle bg-gray-500 sticky top-0 z-10">
    <div class="flex-auto text-center p-3">
      <router-link class="p-5 text-lg" to="/" :active="isActive" exact>Home</router-link>
      <router-link class="p-5 text-lg linkActiveClass" active="isActive" to="/sport">Sport</router-link>
      <router-link class="p-5 text-lg" to="/about" active="isActive">Business</router-link>
    </div>
  </div>
</template>

<style lang="scss">

.router-link-exact-active{
  font-weight: bold;
  color: #FFD32F !important;
} 


.nav{
    // background: linear-gradient(to bottom left, #cc0000 0%, #f3f3ed 107%);
    background: #474747;
    border-bottom: 1px solid white;
}

.nav a{
  color: white;
}
    
</style>

<script>
export default {};
</script>[]