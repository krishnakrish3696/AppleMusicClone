import React, { useState, useEffect } from 'react';

const SongDurationComponent = ({ audioUrl }) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const audioElement = new Audio(audioUrl);

    // Use the onloadedmetadata event to get the duration
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });

    // Clean up the event listener on component unmount
    return () => {
      audioElement.removeEventListener('loadedmetadata', () => {});
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUrl]); // Re-run effect if audioUrl changes

  return (
    <div>
      {duration !== null ? (
        <p>{Math.floor(duration)} seconds</p>
      ) : (
        <p>Loading duration...</p>
      )}
    </div>
  );
};

export default SongDurationComponent;
