import { combineReducers, createStore } from "redux";
import DetailReducer from "./reducer/DetailReducer";
import FormReducer from "./reducer/FormReducer";

const rootReducer = combineReducers({
    detail: DetailReducer,
    form: FormReducer
})

const store = createStore(rootReducer);
export default store;