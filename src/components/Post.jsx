import React from 'react';

const Post = ({
  title,
  date,
  des,
  img
}) => {
  return (
    <>
      <div className='date' style={{ textAlign: 'center' }}>
        {date}
      </div>
      <div className='title-post' style={{ textAlign: 'center' }}>
        {title}
      </div>
      <div className='img-post-1'></div>
      <div className='title-des'>
        {des}
      </div>
    </>
  );
};
export default Post;
