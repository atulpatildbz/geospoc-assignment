import { combineReducers } from "redux";
import { switchMode } from "./switchModeReducer";
import { viewport } from "./viewport";
import {setArea} from "./areaSelectionReducer";


export default combineReducers({
    mode: switchMode,
    viewport: viewport,
    selectedArea: setArea
});