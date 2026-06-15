import React from 'react';

export default function UserCard({ user }) {
  const { name, age, role, skills, photo } = user;

  
  const cardClass = role === "Admin" ? "card admin-card" : "card user-card";

  return (
    <div className={cardClass}>
      <img src={photo} alt={name} className="user-photo" />
      <h2>{name}</h2>
      <p>ასაკი: {age}</p>
      <p>როლი: <strong>{role}</strong></p>
      
      <div className="skills">
        <h4>უნარები:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}