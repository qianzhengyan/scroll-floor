
import {createStore , combineReducers} from "redux"

import count from "./count/count"
import list from "./list/list"
let reducer = combineReducers({
    count,
    list
})
const store = createStore(reducer);
export default store;