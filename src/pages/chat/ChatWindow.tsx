import React from "react";
import { ChatUser } from "./MockChatData"; // Import the ChatUser type
import { IoCall, IoVideocam } from "react-icons/io5";

// Define the types for the component props
interface ChatWindowProps {
  chat: ChatUser;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  return (
    <div className="w-2/3 flex flex-col h-screen p-4">
      {/* Chat Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-lg font-semibold">{chat.name}</h4>
          <span className="text-sm text-gray-500">Online</span>
        </div>
        <div className="text-gray-600">
          <IoVideocam className="mr-2" />
          <IoCall className="mr-2" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isSender ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg shadow-md ${
                msg.isSender ? "bg-blue-100" : "bg-gray-100"
              } max-w-xs`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Send your message"
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <button className="ml-3 p-2 bg-blue-500 text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
