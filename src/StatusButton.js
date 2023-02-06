import React from "react";
import './StatusButton.css'

const StatusButton = ({status, setStatus}) => {

  const handleClick = () => {
    if (status == 'starting') {
      setStatus('playing')
      // window.location.reload(true);
    } else if (status == 'playing') {
      // setStatus('starting')
      window.location.reload(true);
    }

  }


  if (status == 'starting') {
    return (
      <>
        <button onClick={handleClick}>START</button>
      </>
    )
  } else if (status == 'playing') {
    return (
      <>
        <button onClick={handleClick}>New Game</button>
      </>
    )
  }

  
}

export default StatusButton;