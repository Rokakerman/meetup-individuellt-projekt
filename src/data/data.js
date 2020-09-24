const defaultData = [
    { id: 1, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 2, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 3, title: "Lorem", date: "24/12", underTitle: "Lorem ipsumt", description: "Lorem ipsum with even more bread text" },
    { id: 4, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 5, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 6, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 7, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" },
    { id: 8, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum", description: "Lorem ipsum with even more bread text" }
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

function saveMeetUp(object) {
    const SS_KEY = 'my-meet-up-list';
    let fromSs = sessionStorage.getItem(SS_KEY);

    if( !fromSs ) {
        itemsArray.push(object)
        sessionStorage.setItem(SS_KEY,  JSON.stringify(itemsArray));
        fromSs = sessionStorage.getItem(SS_KEY);
    } else {
        if (itemsArray.filter(el => el.id === object.id)) {
            return console.log("this meet-up is booked already")
        }
        console.log(x)
        itemsArray = JSON.parse(fromSs)
        itemsArray.push(object)
        console.log(itemsArray)
        sessionStorage.setItem(SS_KEY, JSON.stringify(itemsArray))
    }


}


export { getMeetUps }
export { saveMeetUp }