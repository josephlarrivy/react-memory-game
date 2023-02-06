import React, {useEffect, useState} from "react";
import './Square.css'



const Square = ({id, initialValues, status, setStatus, userPicks}) => {

  const [isSelected, setIsSelected] = useState('unselected');

  const handleClick = (e) => {
    setIsSelected('selected')
    let id = e.target.id
    userPicks.push(parseInt(id))

    let sortedInitialValues = initialValues.sort()
    let sortedUserPicks = userPicks.sort()
    
    console.log(initialValues)
    console.log(userPicks)

    if (sortedInitialValues.toString() == sortedUserPicks.toString()) {
      console.log('win')
    }
  }



  if (status == 'starting') {
    if (initialValues.includes(id)) {
      return (
        <div>
          <div key={id} id={id} className={'selected'}></div>
        </div>
      )
    } else {
      return (
        <div>
          <div key={id} id={id} className={isSelected}></div>
        </div>
      )
    }

  } else if (status == 'playing') {
    return (
      <div>
        <div key={id} id={id} className={isSelected} onClick={handleClick}></div>
      </div>
    )
  } 
  

}

export default Square;