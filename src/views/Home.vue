<template>
  <div class="home">
    <header> </header>
    <main> <meetUps :meetUpList="list"/> </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMeetUps } from '../data/data';
import navigation from '../components/Navigation'
import meetUps from '../components/Meet-ups'

export default {
	data: () => ({
		list: []
    }),
    components: { navigation, meetUps},
	created() {
		this.list = getMeetUps();
	}
}
</script>

<style>
header {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background: green;
}
</style>