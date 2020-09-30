<template>
    <div v-if="desktop == false" class="meet-up-list-mobile">
        <ul>
            <li v-for="item in list" :key="item.id" @click="emitId(item.id)">
                <header class="img-container"> <img class="image" :src="item.image"/> </header> 
                <main class="figure-main"> 
                    <h2> {{ item.title }} </h2>
                    <h2> {{ item.date }} </h2>
                </main>
                <footer class="figure-footer">
                    <div class="under-title-container"> <h3> {{ item.underTitle }} </h3> <p/> </div>
                    <div class="description-container"> <p> {{ item.description }} </p> </div>
                </footer>
            </li>
        </ul>
    </div>
    <div v-else class="meet-up-list-desktop">
            <article v-for="item in list" :key="item.id" @click="emitId(item.id)">
                <header class="img-container"> <img class="image" :src="item.image"/> </header> 
                <main class="figure-main"> 
                    <h2> {{ item.title }} </h2>
                    <h2> {{ item.date }} </h2>
                </main>
                <footer class="figure-footer">
                    <div class="under-title-container"> <h3> {{ item.underTitle }} </h3> <p/> </div>
                    <div class="description-container"> <p> {{ item.description }} </p> </div>
                </footer>
            </article>
    </div>
</template>

<script>
import MeetUp from '../components/Meet-up'

export default {
    data() {
        return {
            meetUpList: [],
            desktop: '',
        }
    },
    components: { meetUp: MeetUp},
    props: {
        userData: Array
    },
    computed: {
        list() {
            return this.meetUpList = this.userData
        }
    },
    methods: {
        emitId(param) {
            
            this.$emit("selectMeetUp", param)
            return
        },
        myEventHandler() {
           let height = document.documentElement.clientHeight
           let width = document.documentElement.clientWidth
           
           if(width > 600) {
               
               return this.desktop = true
           }
           else {
              
               return this.desktop = false
           }
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        this.myEventHandler()
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    }
}
</script>

<style scoped>
.meet-up-list-mobile {
    width: 100%;
    max-width: 300px;
}

.meet-up-list-desktop {
    display: grid;
    grid-row: auto;
    grid-template-columns: repeat(3, 2fr);
    width: 100%;
}

@media screen and (min-width: 600px) {
  .meet-up-list-desktop {
    grid-template-columns: repeat(1, 2fr);
    overflow: auto;
    overflow-x: visible;
    height: 100%;
  }
}

@media screen and (min-width: 900px) {
  .meet-up-list-desktop {
    grid-template-columns: repeat(2, 2fr);
  }
}

@media screen and (min-width: 1200px) {
  .meet-up-list-desktop {
    grid-template-columns: repeat(3, 2fr);
  }
}

.img-container {
    width: 100%;
    height: 30%;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 110%;
}

ul {
    list-style: none;
    padding: 0px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    overflow-x: visible;
    height: 100%;
    width: 100%;
}

li {
    border: 2px solid black;
    border-radius: 3px;
    padding: 0px;
    margin: 0px;
    height: 300px;
    width: 250px;
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.figure-main {
    display: flex;
    justify-content: space-between;
    width: 80%;
}

.figure-footer {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.under-title-container {
    display: flex;
    justify-content: space-between;
}

.description-container {
    text-align: start;
    margin: 20px 0px 0px 0px
}

h3 {
    margin: -13px 10px 0px 0px;
}

p {
    margin: 0px;
}
</style>