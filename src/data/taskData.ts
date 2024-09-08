export interface Task {
  id: number;
  name: string;
  status: "completed" | "ongoing" | "not started";
  priority: "high" | "medium" | "low";
  description: string;
  dueDate: string;
}

export const mockTasks: Task[] = [
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
    description: "Conduct a security audit on the user authentication module.",
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
];
