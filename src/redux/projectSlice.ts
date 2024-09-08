import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { projectData } from '../utils/projectData';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: projectData,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    editProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    }
  }
});

export const { addProject, editProject, deleteProject } = projectSlice.actions;

export default projectSlice.reducer;
