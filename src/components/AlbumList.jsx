// AlbumList.jsx
import React from 'react';
import '../styles/style.css'

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
    <div className="albums-container">
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id} onClick={() => onAlbumClick(album)}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;