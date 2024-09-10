import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../interface";

export interface ManagementState {
  projects: Project[];
}

const initialState: ManagementState = {
  projects: [],
};

export const managementSlice = createSlice({
  name: "management",
  initialState: initialState,
  reducers: {
    createProject: (state, action: PayloadAction<Project>) => {
      console.log("action", action);
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { createProject, removeProject } = managementSlice.actions;

export default managementSlice.reducer;
