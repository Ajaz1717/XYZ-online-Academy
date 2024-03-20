import {createStore} from "redux";

const INITIAL_VALUE = {
    courseName: "",
    courseList: [],
    trendingList: [],
    users: [],
    user: '',
    generateId: 1,
    optionClicked: '',
    score: 0,
}

const courseNameReducer = (store=INITIAL_VALUE, action) => {
    if (action.type==="cardClick") {
        return {...store, courseName: action.payload.name}
    } else if (action.type==="courseClick") {
        return {...store, courseName: action.payload.name}
    } else if (action.type==="formSubmit") {
        return {...store, users: action.payload.formDetail}
    } else if (action.type==="payClick") {
        return {...store, user: action.payload.user}
    } else if (action.type==="nextClicked"){
        return {...store, generateId: store.generateId + 1, optionClicked: ""}
    } else if (action.type==="previousClicked" && store.generateId > 1) {
        return {...store, generateId: store.generateId - 1}
    } else if (action.type==="clickOption") {
        return {...store, optionClicked: action.payload.selectedOption}
    } else if (action.type==="handleScore") {
        return {...store, score: store.score + 1}
    } else if (action.type==="onFatch") {
        return {...store, courseList: action.payload}
    } else if (action.type==="onFatchTrending") {
        return {...store, trendingList: action.payload}
    } else if (action.type==='onFatchSearch') {
        return {...store, courseList: action.payload}
    }
    return store;
}

const courseNameStore = createStore(courseNameReducer);

export default courseNameStore;