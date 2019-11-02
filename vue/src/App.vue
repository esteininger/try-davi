<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="./assets/placeholder_logo.jpg" alt="">
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/upload">Upload</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

:root{
  --orange: #ffc776;
  --dark-green: #005450;
  --green: #068466;
  --lime: #abcc76;
  --sky: #8aced4;
  --pastel-blue: #9ab4dd;
  --dark-oragen: #b57931;
  --light-grey: #f4f4f4;
}

body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
    flex-direction: row;
    justify-content: space-around;

  .logo{
    width: 10rem;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
