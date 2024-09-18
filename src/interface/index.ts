export interface Project {
  id: number;
  name: string;
  status: string;
  priority: string;
  description: string;
  dueDate: string;
  createdAt?: string;
}

export interface Task {
  id: number;
  name: string;
  status: "completed" | "ongoing" | "not started";
  priority: string;
  description: string;
  dueDate: string;
  createdAt?: string;
  memberId?: number | null;
}

export interface TeamMember {
  id: number;
  name: string;
  email?: string;
  role: string;
  createdAt?: string;
  tasks?: Task[];
}
