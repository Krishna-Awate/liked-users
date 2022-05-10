import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({ likeButtonToggleHandler, liked, icon }) => {
  return (
    <>
      {liked && <button onClick={likeButtonToggleHandler}>Unlike</button>}
      {!liked && <button onClick={likeButtonToggleHandler}>Like</button>}
    </>
  );
};

export default LikeButton;
