import React from 'react';

const SongList = ({ songs }) => {

  if(!songs) return null;

  const songNodes = songs.map((song, index) => {
    return (
      <li key={index}>{index + 1} - {song["im:name"].label}, {song.title.label}
        <audio controls>
          <source src={song.link[1].attributes.href } type="audio/mpeg"/>
        </audio>
      </li>
    )
  })
  return (
    <ul>
      {songNodes}
    </ul>
  )
}

export default SongList;
