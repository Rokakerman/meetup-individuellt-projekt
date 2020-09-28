<template>
    <div v-if="defineView == 'home'" id="meet-up-view">
        <figure class="meet-up-container">
            <header class="img-container"> <img/> <div @click="closeMe">  x </div> </header> 
            <main class="figure-main"> 
                <h2> {{ dataBaseItem.title }} </h2>
                <h2> {{ dataBaseItem.date }} </h2>
            </main>
            <footer class="figure-footer">
                <div class="under-title-container"> <h3> {{ dataBaseItem.underTitle }} </h3> <p/> </div>
                <div class="description-container"> <p> {{ dataBaseItem.description }} </p> </div>
                <button id="book" class="home-button" v-if="!stored" @click="saveToSession"> BOOK </button>
                <button id="booked" class="home-button" v-else> BOOKED! </button>
            </footer>
        </figure>   
    </div>
    <div v-else id="meet-up-view">
        <figure class="meet-up-container">
            <header class="img-container"> <img/> <div @click="closeMe">  x </div> </header> 
            <main class="figure-main"> 
                <h2> {{ dataBaseItem.title }} </h2>
                <h2> {{ dataBaseItem.date }} </h2>
            </main>
            <footer class="figure-footer">
                <div class="under-title-container"> <h3> {{ dataBaseItem.underTitle }} </h3> <p/> </div>
                <div class="description-container"> <p> {{ dataBaseItem.description }} </p> </div>
                <input v-if="review" type="text" class="review-field">
            <div class="buttons-wrapper">
                <button id="booked" class="book" @click="removeMe"> CANCEL </button>
                <button id="booked" class="book" @click="reviewMe"> REVIEW </button>
            </div>
            </footer>
        </figure>   
    </div>
</template>

<script>
import { saveMeetUp } from '../data/data'
import { removeMeetUp } from '../data/data'
import { checkMeetUp } from '../data/data'

export default {
    data: () => ({
        meetUp: '',
        stored: false,
        currentView: '',
        review: false
    }),
    props: {
        dataBaseItem: Object,
        view: String
    },
    methods: {
        saveToSession() {
            saveMeetUp(this.dataBaseItem)
            this.stored = true
        },
        closeMe() {
            this.$emit("close")
        },
        removeMe() {
            removeMeetUp(this.dataBaseItem)
            this.closeMe()
        },
        reviewMe() {
            return this.review = true
        }
    },
    mounted: async function () {
        this.stored = await checkMeetUp(this.dataBaseItem)
    },
    computed: {
        defineView: function () {
            return this.view
        }
    }
}
</script>

<style scoped>
#meet-up-view {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    position: fixed;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.meet-up-container {
    border: 2px solid black;
    border-radius: 3px;
    padding: 0px;
    margin: 0px;
    height: 450px;
    width: 250px;
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: cornsilk;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
}

.img-container {
    border: 1px solid red;
    width: 99%;
    height: 30%;
    height: 25%;
}

.figure-main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 15%;
}

.figure-footer {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60%;
}

.under-title-container {
    display: flex;
    justify-content: space-between;
}

.description-container {
    text-align: start;
    margin: 20px 0px 0px 0px
}

.review-field {
    margin-top: auto;
    height: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
}

.buttons-wrapper {
    align-self: center;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.book {
    margin-top: auto;
    width: 80px;
    height: 35px;
    margin-bottom: 5px;
    border: none;
    background-color: orangered;
    color: white;
}

.home-button {
    margin-top: auto;
    margin-bottom: 30px;
    width: 100%;
    height: 50px;   
    border: none;
    background-color: orangered;
    color: white;
}
h3 {
    margin: -13px 10px 0px 0px;
}

p {
    margin: 0px;
}
</style>