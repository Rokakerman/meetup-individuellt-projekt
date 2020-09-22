<template>
  <div class="home">
    <header class="home-header"> </header>
    <main> <meetUps :dataBase="list"/> </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMeetUps } from '../data/data';
import meetUps from '../components/Meet-ups'

export default {
	data: () => ({
		list: []
    }),
    components: { meetUps },
	created() {
		this.list = getMeetUps();
	}
}
</script>

<style>
.home-header {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background: green;
}
</style>