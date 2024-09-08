// src/components/UserProfile.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { mockUser } from "../../utils/mockUser";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Settings: React.FC = () => {
  const [user, setUser] = useState(mockUser);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
        setUser({ ...user, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("User updated successfully!");
    console.log("Updated User:", user);
  };

  return (
    <ProfileContainer>
      <Avatar
        src={avatarPreview || "https://via.placeholder.com/150"}
        alt="User Avatar"
      />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <Input type="file" accept="image/*" onChange={handleAvatarChange} />
        <Button type="submit">Update Profile</Button>
      </Form>
    </ProfileContainer>
  );
};

export default Settings;
