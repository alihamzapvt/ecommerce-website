import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import {productselect, selectitemadd} from "./reducer";

const reducer1 = combineReducers({
  productselect,
  selectitemadd
});

const store = createStore(reducer1);
export default store;
