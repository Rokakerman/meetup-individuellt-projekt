<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">About</router-link>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

#nav {
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
