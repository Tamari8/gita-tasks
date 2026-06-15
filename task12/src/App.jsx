import React from 'react';
import './App.css';
import UserCard from './UserCard';

export default function App() {
  const users = [
    {
      id: 1,
      name: "გიორგი",
      age: 28,
      role: "Admin",
      skills: ["JavaScript", "React", "Node.js"],
      photo: "https://picsum.photos/id/1005/200/200"
    },
    {
      id: 2,
      name: "მარიამი",
      age: 22,
      role: "User",
      skills: ["HTML", "CSS", "Figma"],
      photo: "https://picsum.photos/id/1011/200/200"
    },
    {
      id: 3,
      name: "დავითი",
      age: 35,
      role: "Admin",
      skills: ["Python", "SQL", "Docker"],
      photo: "https://picsum.photos/id/1025/200/200"
    },
    {
      id: 4,
      name: "ელენე",
      age: 26,
      role: "User",
      skills: ["PHP", "Laravel", "Vue.js"],
      photo: "https://picsum.photos/id/1027/200/200"
    }
  ];

  return (
    <div className="container">
      <h1>მომხმარებლების სია (Task 12)</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}