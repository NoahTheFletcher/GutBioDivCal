import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropBox = ({ id, label }) => {
  const [droppedImages, setDroppedImages] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBox(item.src),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addImageToBox = (src) => {
    setDroppedImages((prev) => [...prev, src]);
  };

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '150px',
        margin: '10px',
        border: '2px dashed gray',
        backgroundColor: isOver ? 'lightgreen' : 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'auto',
      }}
    >
      <strong>{label}</strong>
      {droppedImages.length === 0 ? (
        <p style={{ marginTop: '20px' }}>Drop Here</p>
      ) : (
        droppedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`dropped-${index}`}
            style={{ width: '90%', margin: '5px 0' }}
          />
        ))
      )}
    </div>
  );
};

export default DropBox;
