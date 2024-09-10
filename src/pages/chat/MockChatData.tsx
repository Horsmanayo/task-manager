// Define types for messages and chat users
export interface Message {
  id: number;
  content: string;
  isSender: boolean;
}

export interface ChatUser {
  id: number;
  name: string;
  messages: Message[];
}

// Generate mock chat data with 20 users
export const mockChatData: ChatUser[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  messages: [
    {
      id: 1,
      content: `Hello, this is message 1 from User ${i + 1}`,
      isSender: false,
    },
    {
      id: 2,
      content: `This is message 2 from you to User ${i + 1}`,
      isSender: true,
    },
    {
      id: 3,
      content: `How's your day going? - User ${i + 1}`,
      isSender: false,
    },
    { id: 4, content: `I'm doing great! How about you?`, isSender: true },
  ],
}));
