<template>
    <div id="meet-up-view">
        <figure class="meet-up-container">
            <header class="img-container"> <img/> </header> 
            <main class="figure-main"> 
                <h2> {{ dataBaseItem.title }} </h2>
                <h2> {{ dataBaseItem.date }} </h2>
            </main>
            <footer class="figure-footer">
                <div class="under-title-container"> <h3> {{ dataBaseItem.underTitle }} </h3> <p/> </div>
                <div class="description-container"> <p> {{ dataBaseItem.description }} </p> </div>
                <button class="book"> BOOK </button>
            </footer>
        </figure>
    </div>
</template>

<script>
export default {
    data: () => ({
     
    }),
    props: {
            dataBaseItem: Object
        }
}
</script>

<style>
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
}

.img-container {
    border: 1px solid red;
    width: 99%;
    height: 30%;
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
    height: 200px;
}

.under-title-container {
    display: flex;
    justify-content: space-between;
}

.description-container {
    text-align: start;
    margin: 20px 0px 0px 0px
}

.book {
    margin-top: auto;
}

h3 {
    margin: -13px 10px 0px 0px;
}

p {
    margin: 0px;
}
</style>