import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const faces = box.map((face, j) => {return <div key={j} className='bounding-box' style={ {top: face?.topRow, right: face?.rightCol, bottom: face?.bottomRow, left: face?.leftCol} }> </div>});
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
        {faces}
      </div>
    </div>
  );
}

export default FaceRecognition;