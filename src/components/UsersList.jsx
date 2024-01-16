// Users.js
import React from "react";
import '../styles/style.css'

const UsersList = ({ users, onUserClick }) => {
    return (
        <div className="users-container">
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => onUserClick(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
