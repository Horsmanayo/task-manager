import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TeamMember } from "../interface";

export interface TeamMemberState {
  teamMembers: TeamMember[];
}

const initialState: TeamMemberState = {
  teamMembers: [
    { id: 1, name: "Usman Oni", role: "Developer" },
    { id: 2, name: "Motun Marteen", role: "Blockchain Developer" },
    { id: 3, name: "Adaeze Ugwumba", role: "Project Manager" },
    { id: 5, name: "Olamilekan Oriyomi", role: "Business Analyst" },
    { id: 6, name: "Emmanuel Adesanya", role: "Scrum Master" },
    { id: 7, name: "Abodunrin Ibrahim", role: "Frontend Developer" },
    { id: 8, name: "Faborode Azeez", role: "Backend Developer" },
    { id: 9, name: "Sarah Eja", role: "Full Stack Developer" },
    { id: 10, name: "Abisola Odunsanwo", role: "UI/UX Designer" },
    { id: 11, name: "Precious Oluwagbenga", role: "Product Manager" },
  ],
};

export const teamMembersSlice = createSlice({
  name: "teamMembers",
  initialState: initialState,
  reducers: {
    createTeamMember: (state, action: PayloadAction<TeamMember>) => {
      state.teamMembers.push(action.payload);
    },
    removeMember: (state, action: PayloadAction<number>) => {
      state.teamMembers = state.teamMembers.filter(
        (task) => task.id !== action.payload
      );
    },
    updateMember: (state, action: PayloadAction<TeamMember>) => {
      const index = state.teamMembers.findIndex(
        (member) => member.id === action.payload.id
      );
      if (index !== -1) {
        state.teamMembers[index] = action.payload;
      }
    },
    updateMemberTask: (state, action) => {
      const index = state.teamMembers.findIndex(
        (member) => member.id === action.payload.id
      );
      if (index !== -1 && state.teamMembers[index].tasks) {
        state.teamMembers = state.teamMembers.map((member, i) =>
          i === index
            ? {
                ...member,
                tasks: member.tasks?.map((task) =>
                  task.id === action.payload.task.id
                    ? { ...task, ...action.payload.task }
                    : task
                ),
              }
            : member
        );
      }
    },
  },
});

export const {
  createTeamMember,
  removeMember,
  updateMember,
  updateMemberTask,
} = teamMembersSlice.actions;

export default teamMembersSlice.reducer;
