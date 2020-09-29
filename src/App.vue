<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">Greet Ups</router-link> |
        <router-link to="/profile">My Greet Ups</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data: () => ({

  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
}

#nav {
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
}

nav {
  margin-left: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: orangered;
}

h1, h2, h3, h4, button {
  font-family: 'Rubik', sans-serif;
}

h2 {
  font-size: larger;
  font-size: 27px;
}

p {
  font-family: 'Roboto', sans-serif;
}
</style>
