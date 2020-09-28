const defaultData = [
    { id: 0, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text ever! Get ready for e pic gamer moment" },
    { id: 1, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text! Karioke med gospelkören, ses där!" },
    { id: 2, title: "Lorem", date: "24/12", underTitle: "Lorem ipsumt", description: "Lorem ipsum with even more bread text!" },
    { id: 3, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text! Fomrula 1 fan meet up! " },
    { id: 4, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 5, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 6, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 7, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" }
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