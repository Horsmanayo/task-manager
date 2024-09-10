import React, { useState } from "react";
import { userData } from "../../utils/mockUser";
import { User } from "../../types/User";

const Settings: React.FC = () => {
  // Define state for user and form data
  const [user, setUser] = useState<User>(userData);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    avatar: null as string | null,
  });

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle avatar change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      username: formData.username,
      email: formData.email,
      avatar: formData.avatar || user.avatar,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={handleAvatarChange}
            className="w-full"
          />
          {formData.avatar && (
            <img
              src={formData.avatar}
              alt="Avatar Preview"
              className="w-20 h-20 mt-4 rounded-full"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Updated User Information</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-20 h-20 mt-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Settings;
