<template>
  <div class="home">
    <header class="home-header"> </header>
    <main> 
      <meetUps :dataBase="list" v-on:selectMeetUp="toggleMeetUp"/> 
      <meetUp v-if="clicked == true" v-on:close="closeMeetUp" :dataBaseItem="clickedListitem"/>
    </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMeetUps } from '../data/data';
import meetUps from '../components/Meet-ups'
import meetUp from '../components/Meet-up'

export default {
	data: () => ({
    list: [],
    clicked: false,
    clickedListitem: {}
    }),
    components: { meetUps, meetUp },
	created() {
		this.list = getMeetUps();
  },
  methods: {
    toggleMeetUp(param) {
      this.clickedListitem = this.list[param]
      this.clicked = !this.clicked
      console.log(this.clickedListitem)
    },
    closeMeetUp() {
      this.clicked = false
    }
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