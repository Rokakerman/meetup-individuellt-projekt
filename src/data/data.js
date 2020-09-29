const defaultData = [
    { id: 0, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text ever! Get ready for e pic gamer moment", image: 'https://www.sfbok.se/sites/default/files/sfbokbilder/butiker/sirius1.jpg' },
    { id: 1, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text! Karioke med gospelkören, ses där!", image: 'https://eqal.se/wp-content/uploads/2011/10/IGod-2-468x312.jpg' },
    { id: 2, title: "Lorem", date: "24/12", underTitle: "Lorem ipsumt", description: "Lorem ipsum with even more bread text!", image: 'https://i.ytimg.com/vi/qyZaBvCnKTU/maxresdefault.jpg'},
    { id: 3, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text! Fomrula 1 fan meet up! " , image: 'https://images.squarespace-cdn.com/content/v1/5346a3bfe4b0c08d31d63e97/1402919028544-YAOI0V9JKMNATAGTKHQT/ke17ZwdGBToddI8pDm48kPOyYgnW7nyGjASOBc05s4cUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmu9LPXh6MQ2js1S_zRc5FMg_8U215fhUVz0tlLN9nY9kaGBuGgADdJLkI-1Bdr5-/limmared-action'},
    { id: 4, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text", image: 'https://svenskamassan.se/uploads/sites/46/2018/02/7079e921-5e6e-4791-8601-ac1c815b83db-1024x691.jpg' },
    { id: 5, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text", image: 'https://static.presentjakt.se/products/retailers/gocartcentralen/gokartcentralen_race_gron_gocart_main_l.jpg?v=1567488810000' },
    { id: 6, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text", image: 'https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/n7aafeihcxwfldtbgpeu.jpg' },
    { id: 7, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text", image: 'https://www.gp.se/image/policy:1.500293:1462552456/image.jpg?f=Wide&w=1200&$p$f$w=834285a' }
]

let itemsArray = []

function getMeetUps() {
    const LS_KEY = 'meet-up-list';
    let fromLs = localStorage.getItem(LS_KEY);

    if( !fromLs ) {
        localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
        fromLs = localStorage.getItem(LS_KEY);
    }

    return JSON.parse(fromLs);
}

function getMyMeetUps() {
    const SS_KEY = 'my-meet-up-list';
    let fromLs = sessionStorage.getItem(SS_KEY);
    return JSON.parse(fromLs);
}

async function saveMeetUp(object) {
    const SS_KEY = 'my-meet-up-list';
    let fromSs = sessionStorage.getItem(SS_KEY);

    if( !fromSs ) {
        itemsArray.push(object)
        sessionStorage.setItem(SS_KEY,  JSON.stringify(itemsArray));
        fromSs = sessionStorage.getItem(SS_KEY);
        return 
    } else {
        itemsArray = JSON.parse(fromSs)
        //console.log(object.id)
        /*let identical = Boolean(itemsArray.find(() => {return el => el.id == object.id}))
        console.log(identical)*/
        const check = (element) => element.id === object.id;
        if (itemsArray.some(check) == true) {
            //console.log(itemsArray)
            return console.log("this meet-up is booked already")
        }
        itemsArray.push(object)
        //console.log(itemsArray)
        sessionStorage.setItem(SS_KEY, JSON.stringify(itemsArray))
    }


}

async function removeMeetUp(object) {
    const SS_KEY = 'my-meet-up-list';
    let fromSs = sessionStorage.getItem(SS_KEY);
    itemsArray = JSON.parse(fromSs)
    console.log(JSON.parse(fromSs))
    

    const equal = (element) => element.id === object.id 
    let index = itemsArray.findIndex(equal);

    
    itemsArray.splice(index, 1)
    sessionStorage.setItem(SS_KEY, JSON.stringify(itemsArray));
    console.log(itemsArray)
}

async function checkMeetUp(object) {
    const SS_KEY = 'my-meet-up-list';
    let fromSs = sessionStorage.getItem(SS_KEY);
    if( !fromSs ) {
        sessionStorage.setItem(SS_KEY,  JSON.stringify(itemsArray));
        fromSs = sessionStorage.getItem(SS_KEY);
        return 
    } 
    itemsArray = JSON.parse(fromSs)

    //console.log(object.id)
    /*let identical = Boolean(itemsArray.find(() => {return el => el.id == object.id}))
    console.log(identical)*/
    const check = (element) => element.id === object.id;
    if (itemsArray.some(check) == true) {
        //console.log(itemsArray)

        return true
    } else {
        return false
    }
}


export { getMeetUps }
export { getMyMeetUps }
export { saveMeetUp }
export { removeMeetUp }
export { checkMeetUp }