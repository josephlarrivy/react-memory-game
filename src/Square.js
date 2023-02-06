import React, {useState} from "react";
import './Square.css'
import useToggle from "./hooks/useToggle";

// const Square = () => {

//   const [isSelected, setIsSelected] = useToggle('unselected');

//   const handleClick = () => {
//     console.log('click')
//     setIsSelected
//   }


//   return (
//     <div>
//       <div onClick={handleClick} className="selected"></div>
//       <div onClick={handleClick} className="unselected"></div>

//     </div>
//   )
// }

// export default Square;

const Square = ({id, isSelected, handleClick}) => {

  return (
    <div>
      <div key={id} id={id} className={isSelected} onClick={handleClick}></div>
    </div>
  )
}

export default Square;