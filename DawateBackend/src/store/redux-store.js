import {createStore} from "redux";

const INITIAL_VALUE = {
    courseList: [],
    trendingList: [],
    addQuiz: [],
}

const courseNameReducer = (store=INITIAL_VALUE, action) => {
    if (action.type==="onFatch") {
        return {...store, courseList: action.payload}
    } else if (action.type==="adQuizDiv") {
        return {...store, addQuiz: action.payload}
    } else if (action.type==="onFatchTrending") {
        return {...store, trendingList: action.payload}
    }
    return store;
}

const courseNameStore = createStore(courseNameReducer);

export default courseNameStore;