import { useState } from "react";
import { notifications as mockNotifications } from "../../utils/notificationData";

// Define the notification interface to specify the structure
interface Notification {
  id: number;
  message: string;
  isRead: boolean;
  timestamp: string;
}

const NotificationComponent = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);

  // Toggle read and unread state with typed notification
  const toggleReadStatus = (id: number) => {
    const updateNotifications = notifications.map(
      (notification: Notification) => {
        if (notification.id === id) {
          return { ...notification, isRead: !notification.isRead };
        }
        return notification;
      }
    );
    setNotifications(updateNotifications);
  };

  return (
    <div className="w-full p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Notifications</h2>
      <ul className="space-y-3">
        {notifications.map((notification: Notification) => (
          <li
            key={notification.id}
            className={`p-4 border rounded-md cursor-pointer transition-all hover:bg-gray-100 ${
              notification.isRead ? "bg-gray-200 line-through" : "bg-white"
            }`}
            onClick={() => toggleReadStatus(notification.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-700">
                {notification.message}
              </span>
              <span className="text-sm text-gray-500">
                {notification.isRead ? "Read" : "Unread"}
              </span>
            </div>
            <p className="text-xs text-gray-400">{notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
