<template>
  <div>
    <div id="nav">
        <router-link to="/home">Greet-ups</router-link> | <router-link to="/products">Products</router-link> |
        <router-link to="/profile">Mina sidor</router-link>
    </div>
  </div>
</template>

<script>
import { getMeetUps } from '../data/data.js';
export default {
    data: function() {
        return {
            list: []
        }
    },
    created() {
        this.list = getMeetUps()
    }
}
</script>

<style>

</style>