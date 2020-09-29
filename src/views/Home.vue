<template>
  <div class="home">
    <header class="home-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"> </header>
    <main> 
      <meetUps :dataBase="list" v-on:selectMeetUp="toggleMeetUp"/> 
      <meetUp v-if="clicked == true" v-on:close="closeMeetUp" :dataBaseItem="clickedListitem" :view="view"/>
    </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMeetUps } from '../data/data';
import meetUps from '../components/Meet-ups'
import meetUp from '../components/Meet-up'
import logo from '../assets/logo3.png'

export default {
	data: () => ({
    view: "home",
    list: [],
    clicked: false,
    clickedListitem: {},
    image: logo
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

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.home-header {
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-size: contain;
    background-repeat: round;
}
</style>