<template>
  <main>
    <h1>Hello universe!</h1>
    <ul>
      <li><router-link to="/">Home Page</router-link></li>
      <li><router-link to="/about" >About Page</router-link></li>
    </ul>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="css" scoped>
</style>