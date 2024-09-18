import { combineReducers } from "@reduxjs/toolkit";
import managementReducer from "../features/management";
import taskReducer from "../features/taskSlice";
import teamMembersReducer from "../features/teamMemberSlice";

const rootReducer = combineReducers({
  teamMembers: teamMembersReducer,
  management: managementReducer,
  task: taskReducer,
});

export default rootReducer;
