// Import the required dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task, TeamMember } from "../interface";
import { updateMember } from "./teamMemberSlice";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      name: "Design Homepage",
      status: "completed",
      priority: "high",
      description: "Finalize the homepage design for the new project.",
      dueDate: "2024-09-15",
    },
    {
      id: 2,
      name: "Implement Authentication",
      status: "ongoing",
      priority: "high",
      description: "Set up login, register, and logout functionalities.",
      dueDate: "2024-09-20",
    },
    {
      id: 3,
      name: "Write Unit Tests",
      status: "not started",
      priority: "medium",
      description: "Add unit tests for the user and task modules.",
      dueDate: "2024-09-30",
    },
    {
      id: 4,
      name: "Update Documentation",
      status: "ongoing",
      priority: "low",
      description: "Update the project documentation with the latest features.",
      dueDate: "2024-10-01",
    },
    {
      id: 5,
      name: "Fix UI Bugs",
      status: "completed",
      priority: "medium",
      description: "Resolve layout issues on mobile devices.",
      dueDate: "2024-09-18",
    },
    {
      id: 6,
      name: "Database Optimization",
      status: "not started",
      priority: "high",
      description: "Optimize database queries for performance improvements.",
      dueDate: "2024-10-10",
    },
    {
      id: 7,
      name: "Client Feedback",
      status: "ongoing",
      priority: "medium",
      description:
        "Incorporate feedback from the client in the latest design iteration.",
      dueDate: "2024-09-25",
    },
    {
      id: 8,
      name: "Prepare Presentation",
      status: "completed",
      priority: "low",
      description: "Create slides for the upcoming stakeholder meeting.",
      dueDate: "2024-09-17",
    },
    {
      id: 9,
      name: "Security Audit",
      status: "not started",
      priority: "high",
      description:
        "Conduct a security audit on the user authentication module.",
      dueDate: "2024-09-29",
    },
    {
      id: 10,
      name: "Social Media Campaign",
      status: "ongoing",
      priority: "low",
      description:
        "Plan and execute a marketing campaign on social media platforms.",
      dueDate: "2024-10-05",
    },
    {
      id: 11,
      name: "User Research",
      status: "completed",
      priority: "medium",
      description: "Collect user feedback and analyze research data.",
      dueDate: "2024-09-21",
    },
    {
      id: 12,
      name: "API Integration",
      status: "not started",
      priority: "high",
      description: "Integrate third-party APIs into the application.",
      dueDate: "2024-09-28",
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { createTask, removeTask, updateTask } = taskSlice.actions;

// Thunk for assigning task
import { Dispatch } from "redux";

export const assignTask =
  (taskId: number, memberId: number) => (dispatch: Dispatch, getState: any) => {
    const { teamMembers } = getState().teamMember;
    const { tasks } = getState().task;

    const task = tasks.find((t: Task) => t.id === taskId);
    const member = teamMembers.find((m: TeamMember) => m.id === memberId);

    if (task && member) {
      const updatedTask = { ...task, memberId: member.id };
      const updatedMember = {
        ...member,
        tasks: [...(member.tasks || []), updatedTask],
      };

      // Dispatch updates
      dispatch(updateTask(updatedTask)); // Update task in the task slice
      dispatch(updateMember(updatedMember)); // Update member in the teamMember slice
    }
  };

export default taskSlice.reducer;
