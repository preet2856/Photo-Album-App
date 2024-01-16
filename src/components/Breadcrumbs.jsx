// Breadcrumbs.jsx
import React from "react";
import "../styles/style.css";

const Breadcrumbs = ({ user, album, onBackClick }) => {
    return (
        <div className="breadcrumbs-container">
            <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item" onClick={onBackClick}>Home</li>
                    {user && <li class="breadcrumb-item" onClick={onBackClick}>{user.name}</li>}
                    {album && <li class="breadcrumb-item">{album.title}</li>}
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
