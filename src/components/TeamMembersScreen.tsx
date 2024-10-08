import { useState } from "react"; // Import useState hook to manage state in functional component
import styles from "./TeamMembersScreen.module.css"; // Import CSS module for styling
import teamMembers from "../data/teamMembers"; // Import initial data for team members
import { TeamMember } from "../types/TeamMember"; // Import TeamMember type for TypeScript type checking
import { toast, ToastContainer } from "react-toastify"; // Import toast functions for notifications
import "react-toastify/dist/ReactToastify.css"; // Import default toast styles
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import { assignTask } from "../features/taskSlice";
import { updateMemberTask } from "../features/teamMemberSlice";

// TeamMembersScreen component
const TeamMembersScreen: React.FC = () => {
  // State to store current list of members
  const [_, setMembers] = useState<TeamMember[]>(teamMembers);
  const dispatch = useDispatch();
  const members = useSelector(
    (state: RootState) => state.teamMembers.teamMembers
  );

  console.log("members", members);

  const tasks = useSelector((state: RootState) => state.task.tasks);

  // State to store new member's name
  const [newMember, setNewMember] = useState<string>("");
  const [newRole, setNewRole] = useState<string>("");

  // Function to add a new team member
  const addMember = () => {
    if (newMember && newRole) {
      // Check if both name and role are provided
      const newMemberData: TeamMember = {
        id: members.length + 1, // Generate a new ID based on current length of members
        name: newMember, // Set new member's name
        role: newRole, // Set new member's role
      };

      // Update members state with the new member data
      setMembers([...members, newMemberData]);

      // Display success notification
      toast.success(`You have added ${newMember} as a ${newRole}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear the input fields
      setNewMember("");
      setNewRole("");
    } else {
      // Display error notification if fields are missing
      toast.error("Please enter both name and role for the new member.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Function to remove a member by their ID
  const removeMember = (id: number) => {
    // Filter out the member with the given ID and update the state
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  // Function to assign a task to a member
  const handleAssignTask = (memberId: number, task: string) => {
    // Find the member by their ID
    const member = members.find((m) => m.id === memberId);
    const newTask = tasks.find((t) => t.id === +task);

    if (member && newTask) {
      console.log("im here");
      dispatch(assignTask({ taskId: newTask.id, memberId: member.id }));
      dispatch(updateMemberTask({ id: member.id, task: newTask }));
      // Display a notification showing which member has been assigned which task
      toast.success(`You have assigned ${member.name} the task to ${task}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log("task", tasks);
    console.log("member", members);
  };

  // JSX for the component's UI
  return (
    <div className={styles.customContainer}>
      <h1>Team Members</h1>
      {/* List of team members */}
      <ul>
        {members.map((member) => (
          <li key={member.id} className={styles.memberListItem}>
            {member.name} - {member.role}
            <div className={styles.memberActions}>
              {/* Dropdown to assign tasks */}
              <select
                className={styles.taskSelect}
                onChange={(e) => handleAssignTask(member.id, e.target.value)}
                aria-label="Assign Task"
              >
                <option>Assign Task</option>
                {tasks.map((task, index) => (
                  <option key={index} value={task.id}>
                    {task.name}
                  </option>
                ))}
              </select>
              {/* Button to remove a member */}
              <button
                className={styles.removeButton}
                onClick={() => removeMember(member.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Input for adding new member's name */}
      <input
        type="text"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        placeholder="New member name"
        className={styles.customInput}
      />
      {/* Input for adding new member's role */}
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="New member role"
        className={styles.customInput}
      />
      {/* Button to add the new member */}
      <button className={styles.addButton} onClick={addMember}>
        Add Member
      </button>

      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default TeamMembersScreen;
