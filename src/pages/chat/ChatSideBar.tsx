import React, { useState } from "react";
import { ChatUser } from "./MockChatData"; // Import the ChatUser type
import { FiSearch } from "react-icons/fi"; // Import a search icon from react-icons

// Define the types for the component props
interface SidebarProps {
  chats: ChatUser[];
  onChatSelect: (chat: ChatUser) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ chats, onChatSelect }) => {
  // State to track search input
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter the chats based on the search query
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-100 p-4 border-r border-gray-300 h-screen overflow-y-auto">
      {/* Search Box */}
      <div className="mb-4 flex items-center">
        <FiSearch className="mr-2 text-gray-500" size={20} />{" "}
        {/* Search icon */}
        <input
          type="text"
          placeholder="Search user"
          className="p-2 border border-gray-300 rounded-lg flex-grow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>

      <h3 className="text-lg font-semibold mb-4">Messages</h3>

      <div className="space-y-3">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
              onClick={() => onChatSelect(chat)} // On click, select the chat
            >
              <div className="flex-grow">
                <p className="font-medium">{chat.name}</p>
                <p className="text-sm text-gray-600">
                  {chat.messages[0]?.content || "No messages yet"}
                </p>
              </div>
              <div className="text-xs text-gray-500">1m ago</div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
