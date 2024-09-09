import React, { useState } from "react";
import Sidebar from "./ChatSideBar";
import ChatWindow from "./ChatWindow";
import { ChatUser, mockChatData } from "./MockChatData"; // Import mock data and types

const Chat: React.FC = () => {
  // State to track selected chat, default to the first user (typed with ChatUser)
  const [selectedChat, setSelectedChat] = useState<ChatUser>(mockChatData[0]);

  // Handle selecting a chat from the sidebar
  const handleChatSelect = (chat: ChatUser) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen">
      {/* Pass the mock chat data and the chat select handler to the Sidebar */}
      <Sidebar chats={mockChatData} onChatSelect={handleChatSelect} />

      {/* Pass the selected chat to the ChatWindow */}
      <ChatWindow chat={selectedChat} />
    </div>
  );
};

export default Chat;
