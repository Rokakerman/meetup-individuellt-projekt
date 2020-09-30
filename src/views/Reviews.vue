<template>
  <div class="reviews">
    <header class="profile-header"> </header>
    <main> 
      <Reviews class="meet-up-component" :userData="sStorage" v-on:selectMeetUp="toggleMeetUp"/> 
      <meetUp v-if="clicked == true" v-on:close="closeMeetUp" :dataBaseItem="clickedListitem" :view="view"/>
    </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMyMeetUps, getReviews } from '../data/data';
import Reviews from '../components/Reviews'
import meetUp from '../components/Meet-up'

export default {
	data: () => ({
    view: "profile",
    list: getReviews(),
    clicked: false,
    clickedListitem: {}
    }),
    props: {
      database: ''
    },
    components: { Reviews, meetUp },
    computed: {
      sStorage() {
        const SS_KEY = 'my-reviews';
        let fromSs = this.list;
        return fromSs;
    }
    },
  methods: {
    toggleMeetUp(param) {
      const result = this.list.find(object => object.id == param);
      console.log('This is the result variable: ' + JSON.stringify(result))
      this.clickedListitem = result
      this.clicked = !this.clicked  
    },
    closeMeetUp() {
      this.clicked = !this.clicked
      this.list = getReviews()
    }
  }
}
</script>

<style scoped>
.reviews {
  background-image: url('../assets/logoPhone.png');
  background-size: cover;
  background-repeat: round;
}

@media screen and (min-width: 600px) {
  .reviews {
    background-image: url('../assets/logoDesktop.png');
  }
}

.profile-header {
    display: none;
}

main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.meet-up-component {
    height: 80vh;
}
</style>