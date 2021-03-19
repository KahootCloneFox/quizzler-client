<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: `App`,
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'DotGothic16', sans-serif;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
