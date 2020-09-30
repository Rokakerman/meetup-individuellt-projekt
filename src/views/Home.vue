<template>
  <div class="home">
    <header class="home-header"> <h1 class="title"> GREET-UP </h1> 
    <h1 class="under-title"> Let's Greet-Up! </h1> </header>
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
import logoPhone from '../assets/logoPhone.png'
import logoDekstop from '../assets/logoDesktop.png'

export default {
	data: () => ({
    view: "home",
    list: [],
    clicked: false,
    clickedListitem: {},
    imagePhone: logoPhone,
    imageDesktop: logoDekstop
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
  background-color: white;
}

.home-header {
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-size: contain;
    background-repeat: round;
    background-image: url('../assets/logoPhone.png');
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.title {
  font-size: 70px;
  color: white;
  margin-bottom: 0px;
}

.under-title {
  margin-top: 0px;
  background: white;
  width: 300px;
  border-radius: 3px;
}

footer {
  height: 5vh;
}

@media screen and (min-width: 600px) {
  .home-header {
    background-image: url('../assets/logoDesktop.png');
    background-size: cover;
  }
}

@media screen and (min-width: 800px) {
  .title {
  font-size: 120px;
  }

.under-title {
  font-size: 70px;
  width: 600px;
}
}
</style>