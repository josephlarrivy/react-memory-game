import React, {useState} from "react";
import './Square.css'
import useToggle from "./hooks/useToggle";


const Square = ({id, initialValues}) => {

  const [isSelected, setIsSelected] = useState('unselected');


  const handleClick = (e) => {
    setIsSelected('selected')
  }

  if (initialValues.includes(id)) {
    return (
      <div>
        <div key={id} id={id} className={'selected'} onClick={handleClick}></div>
      </div>
    )
  } else {
    return (
      <div>
        <div key={id} id={id} className={isSelected} onClick={handleClick}></div>
      </div>
    )
  }

}

export default Square;