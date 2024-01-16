// App.js
import React, { useState, useEffect } from "react";
import Albums from "./components/AlbumList";
import Photos from "./components/PhotoList";
import Breadcrumbs from "./components/Breadcrumbs";
import UsersList from "./components/UsersList";
import Nav from "./components/Nav";

const App = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch users data from API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((error) => setError(error.message));
    }, []);

    const handleUserClick = (user) => {
        // Set the selected user and clear selected album on user click
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch albums");
                }
                return response.json();
            })
            .then((albums) => {
                setSelectedUser({ ...user, albums });
                setSelectedAlbum(null);
            })
            .catch((error) => setError(error.message));
    };

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
    };

    const handleBackClick = () => {
        setSelectedAlbum(null);
        setSelectedUser(null);
    };

    return (
        <div className="app-container container-fluid">
            <div className="album-wrapper">
                <Nav />
                {error ? (
                    <p className="error-message">{error}</p>
                ) : selectedUser ? (
                    <>
                        <Breadcrumbs
                            user={selectedUser}
                            album={selectedAlbum}
                            onBackClick={handleBackClick}
                        />
                        {selectedAlbum ? (
                            <Photos albumId={selectedAlbum.id} />
                        ) : (
                            <Albums
                                albums={selectedUser.albums}
                                onAlbumClick={handleAlbumClick}
                            />
                        )}
                    </>
                ) : (
                    <UsersList users={users} onUserClick={handleUserClick} />
                )}
            </div>
        </div>
    );
};

export default App;
