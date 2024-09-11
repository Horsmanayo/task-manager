import { combineReducers } from "@reduxjs/toolkit";
import managementReducer from "../features/management";
import taskReducer from "../features/taskSlice";
import teamMembersReducer from "../features/teamMemberSlice";

const rootReducer = combineReducers({
  management: managementReducer,
  task: taskReducer,
  teamMembers: teamMembersReducer,
});

export default rootReducer;
