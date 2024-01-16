// Photos.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import '../styles/style.css'

const PhotoList = ({ albumId }) => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch photos data for the selected album from API
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch photos");
                }
                return response.json();
            })
            .then((data) => setPhotos(data))
            .catch((error) => setError(error.message));
    }, [albumId]);

    return (
        <div className="photos-container">
            <h2>Photos</h2>
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="photo-list">
                    {photos.map((photo) => (
                        <img
                            key={photo.id}
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

PhotoList.propTypes = {
    albumId: PropTypes.number.isRequired,
};

export default PhotoList;

// // Photos.js
// import React, { useState, useEffect } from "react";

// const PhotoList = ({ albumId }) => {
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         // Fetch photos data for the selected album from API
//         fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
//             .then((response) => response.json())
//             .then((data) => setPhotos(data))
//             .catch((error) => console.error("Error fetching photos:", error));
//     }, [albumId]);

//     return (
//         <div className="photos-container">
//             <h2>Photos</h2>
//             <div className="photo-list">
//                 {photos.map((photo) => (
//                     <img
//                         key={photo.id}
//                         src={photo.thumbnailUrl}
//                         alt={photo.title}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PhotoList;
