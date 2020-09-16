import React from 'react';

const CardRoutine = ({
  time,
  text,
  scale
}) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12 card'>
        <div className='card-container'>
          <div className='card-container-header'>
            <div>
              Time: {time}
            </div>
            <div>
              Scale: {scale}
            </div>
          </div>
          <div style={{ textAlign: "left", alignSelf: "start" }}>
            {text}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardRoutine;
