// Modules
import React from 'react';

const ButtonMenu = ({
  clickFunction,
  text,
  newPost
}) => {
  return (
    <button onClick={clickFunction} className={`menu-button col-lg-2 col-md-4 col-sm-6`}>
      <div className="menu-button-text">
        {text}
      </div>
      {newPost ? (
        <div className="new-post">
          New Post
        </div>
      ) : (<></>)}
    </button>
  );
};
export default ButtonMenu;