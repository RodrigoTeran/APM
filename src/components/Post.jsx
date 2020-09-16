import React from 'react';

const Post = ({
  title,
  date,
  img,
  children
}) => {
  return (
    <>
      <div className='date' style={{ textAlign: 'center' }}>
        {date}
      </div>
      <div className='title-post' style={{ textAlign: 'center' }}>
        {title}
      </div>
      <div className={`${img}`}></div>
      {children}
    </>
  );
};
export default Post;
