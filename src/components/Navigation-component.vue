<template>
  <div class="nav flex align-middle bg-gray-500">
    <div class="flex-auto text-center p-3">
      <router-link class="p-5 text-lg" to="/" :active="isActive" exact>Home</router-link>
      <router-link class="p-5 text-lg linkActiveClass" active="isActive" to="/sport">Sport</router-link>
      <router-link class="p-5 text-lg" to="/about" active="isActive">About</router-link>
      <router-link class="p-5 text-lg" to="/other" active="isActive">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">

.router-link-exact-active{
    
  font-weight: bold;
} 

.nav{
    background: linear-gradient(to bottom left, #cc0000 0%, #f3f3ed 107%);
}
    
</style>

<script>
export default {};
</script>[]