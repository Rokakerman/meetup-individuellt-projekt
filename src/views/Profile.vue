<template>
  <div class="profile">
    <header class="profile-header"> </header>
    <main> 
      <MyMeetUps class="meet-up-component" :userData="sStorage" v-on:selectMeetUp="toggleMeetUp"/> 
      <meetUp v-if="clicked == true" v-on:close="closeMeetUp" :dataBaseItem="clickedListitem" :view="view"/>
    </main>
    <footer> </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import { getMyMeetUps } from '../data/data';
import MyMeetUps from '../components/My-meet-ups'
import meetUp from '../components/Meet-up'

export default {
	data: () => ({
    view: "profile",
    list: getMyMeetUps(),
    clicked: false,
    clickedListitem: {}
    }),
    components: { MyMeetUps, meetUp },
    computed: {
      sStorage() {
        const SS_KEY = 'my-meet-up-list';
        let fromSs = sessionStorage.getItem(SS_KEY);
        return JSON.parse(fromSs);
    }
    },
  methods: {
    toggleMeetUp(param) {
      this.clickedListitem = this.list[param - 1]
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