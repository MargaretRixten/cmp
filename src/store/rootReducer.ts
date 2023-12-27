import { combineReducers } from "redux";
import { tableReducer } from "./redusers/table.ts";

const rootReducer = combineReducers({
  table: tableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
