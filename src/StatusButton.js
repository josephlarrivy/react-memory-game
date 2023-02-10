import React from "react";
import './StatusButton.css'

const StatusButton = ({status, setStatus}) => {

  const handleClick = () => {
    if (status == 'preGame') {
      setStatus('starting')
      // window.location.reload(true);
    } else if (status == 'starting') {
      setStatus('playing')
      // window.location.reload(true);
    } else if (status == 'playing' || status == 'win' || status == 'lose') {
      // setStatus('starting')
      window.location.reload(true);
    // } else if (status == 'win') {
    //   // setStatus('starting')
    //   window.location.reload(true);
    }

  }


  if (status == 'preGame') {
    return (
      <>
        <button onClick={handleClick}>SHOW TILES</button>
      </>
    )
  } else if (status == 'starting') {
    return (
      <>
        <button onClick={handleClick}>START</button>
      </>
    )
  } else if (status == 'playing' || status == 'win' || status == 'lose') {
    return (
      <>
        <button onClick={handleClick}>New Game</button>
      </>
    )
  } 
      // else if (status == 'win') {
  //   return (
  //     <>
  //       <button onClick={handleClick}>New Game</button>
  //     </>
  //   )
  // }

  
}

export default StatusButton;