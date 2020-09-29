<template>
    <div v-if="defineView == 'home'" id="meet-up-view">
        <figure class="meet-up-container">
            <header class="img-container"> <img class="image" :src="dataBaseItem.image"/> <div class="close" @click="closeMe">  x </div> </header> 
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
            <header class="img-container"> <img class="image" :src="dataBaseItem.image"/> <div class="close" @click="closeMe">  x </div> </header> 
            <main class="figure-main"> 
                <h2> {{ dataBaseItem.title }} </h2>
                <h2> {{ dataBaseItem.date }} </h2>
            </main>
            <footer class="figure-footer">
                <div class="under-title-container"> <h3> {{ dataBaseItem.underTitle }} </h3> <p/> </div>
                <div class="description-container" v-if="!review"> <p> {{ dataBaseItem.description }} </p> </div>
                <input v-if="review" type="text" v-model="inputText" class="review-field">
            <div class="buttons-wrapper">
                <button v-if="review" id="booked" class="book" @click="dontReviewMe"> BACK </button>
                <button v-else id="booked" class="book" @click="removeMe"> CANCEL </button>
                <button v-if="review" id="booked" class="book" @click="reviewMe"> SUBMIT </button>
                <button v-else id="booked" class="book" @click="reviewOn"> REVIEW </button>
            </div>
            </footer>
        </figure>   
    </div>
</template>

<script>
import { saveMeetUp } from '../data/data'
import { removeMeetUp } from '../data/data'
import { checkMeetUp } from '../data/data'
import { review } from '../data/data'
export default {
    data: () => ({
        meetUp: '',
        stored: false,
        currentView: '',
        review: false,
        inputText: ''
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
        reviewOn() {
            return this.review = true
        },
        reviewMe() {
            review(this.dataBaseItem, this.inputText)
            
        },
        dontReviewMe() {
            return this.review = false
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
    background-color: #000000bd;
}

.meet-up-container {
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
    width: 100%;
    height: 30%;
    height: 25%;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 110%;
}

.close {
    position: absolute;
    top: -26px;
    right: 7px;
    color: white;
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
    margin-bottom: 10px;
    margin-top: 5px;
}

.buttons-wrapper {
    align-self: center;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
}

.book {
    margin-top: auto;
    width: 85px;
    height: 35px;
    margin-bottom: 5px;
    border: none;
    background-color: #ff4500;
    color: white;
    font-size: large;
    border-radius: 3px;
}

.home-button {
    margin-top: auto;
    margin-bottom: 30px;
    width: 100%;
    height: 50px;   
    border: none;
    background-color: orangered;
    color: white;
    font-size: xx-large;
    border-radius: 3px;
}
h3 {
    margin: -5px 10px 0px 0px;
}

p {
    margin: 0px;
}
</style>