import React, { useState } from "react";


function Task({ category, text }) {

  const [clicked, setClicked] = useState(false)
 

  function handleClick(){
    setClicked(clicked=>!clicked)
  }

  return !clicked ? (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  )
  : null;
}

export default Task;
