const defaultData = [
    { id: 1, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 2, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 3, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 4, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 5, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 6, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 7, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" },
    { id: 8, title: "Lorem", date: "24/12", underTitle: "Lorem ipsum and small bread text", description: "Lorem ipsum with even more bread text" }
]

function getMeetUps() {
    const LS_KEY = 'meet-up-list';
    let fromLs = localStorage.getItem(LS_KEY);

    if( !fromLs ) {
        localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
        fromLs = localStorage.getItem(LS_KEY);
    }

    return JSON.parse(fromLs);
}
