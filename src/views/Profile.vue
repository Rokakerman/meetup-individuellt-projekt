<template>
  <div class="profile">
    <header class="profile-header"> </header>
    <main> 
      <MyMeetUps class="meet-up-component" :userData="mounted" v-on:selectMeetUp="toggleMeetUp"/> 
      <meetUp v-if="clicked == true" v-on:close="closeMeetUp" :dataBaseItem="clickedListitem"/>
    </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMeetUps } from '../data/data';
import MyMeetUps from '../components/My-meet-ups'
import meetUp from '../components/Meet-up'

export default {
	data: () => ({
    list: [],
    clicked: false,
    clickedListitem: {}
    }),
    components: { MyMeetUps, meetUp },
    computed: {
        mounted() {
            const SS_KEY = 'my-meet-up-list';
            let fromSs = sessionStorage.getItem(SS_KEY);
            return JSON.parse(fromSs);
    }
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