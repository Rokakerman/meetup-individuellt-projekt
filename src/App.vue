<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">Greet Ups</router-link> |
        <router-link to="/profile">My Greet Ups</router-link> |
        <router-link to="/reviews">My Reviews</router-link>
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
  position: fixed;
  -webkit-box-shadow: 0px 5px 20px 10px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 20px 10px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 20px 10px rgba(0,0,0,0.75);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
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

button:hover{
    cursor: pointer;
}

</style>
