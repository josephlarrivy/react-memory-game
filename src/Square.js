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

    if (userPicks.length == 6) {
      if (sortedInitialValues.toString() == sortedUserPicks.toString()) {
        setStatus('win')
      } else {
        setStatus('lose')
      }
    }
    
  }

  if (status == 'preGame') {
    return (
      <div>
        <div key={id} id={id} className={isSelected}></div>
      </div>
    )
  } else if (status == 'starting') {
    if (initialValues.includes(id)) {
      return (
        <div>
          <div key={id} id={id} className={'starting'}></div>
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
  } else if (status == 'win') {
    return (
      <>
        <div className="image"></div>
      </>
      
    )
  } else if (status == 'lose') {
    return (
      <>
        <div className="lose">
          <h1>:(</h1>
        </div>
      </>
    )
  } 
  

}

export default Square;