<template>
  <div class="flex align-middle bg-gray-500">
    <div class="flex-auto text-center p-3">
      <router-link class="p-5 text-lg" to="/" :active="isActive" exact>Home</router-link>
      <router-link class="p-5 text-lg linkActiveClass" active="isActive" to="/about">About</router-link>
      <router-link class="p-5 text-lg" to="/about" active="isActive">About</router-link>
      <router-link class="p-5 text-lg" to="/other" active="isActive">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">

.router-link-exact-active{
    
     font-weight: bold;
} 
    
</style>

<script>
export default {};
</script>[]