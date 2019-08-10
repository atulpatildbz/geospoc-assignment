import { combineReducers } from "redux";
import { switchMode } from "./switchMode";
import { viewport } from "./viewport";


export default combineReducers({
    mode: switchMode,
    viewport: viewport
});