import React, {useEffect, useState}from "react";
import Square from "./Square";
import StatusButton from "./StatusButton";

import './Container.css'

const Container = () => {

  const [initialValues, setInitialValues] = useState([])
  const [status, setStatus] = useState('preGame')

  let userPicks = []

  useEffect(() => {
    const set1 = new Set();
    while (set1.size <= 5) {
      let pickRandNum = Math.floor(Math.random() * 16);
      set1.add(pickRandNum);
    }
    let array = [];
    for (let num of set1) {
      array.push(num)
    }
    setInitialValues(array.sort())
    setStatus('preGame')
  }, [])


  let boxes = [
    { 'id': 0 }, { 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }, { 'id': 5 }, { 'id': 6 }, { 'id': 7 }, { 'id': 8 }, { 'id': 9 }, { 'id': 10 }, { 'id': 11 }, { 'id': 12 }, { 'id': 13 }, { 'id': 14 }, { 'id': 15 }
  ]



  return (
    <>
      <div className="container">
        {boxes.map(box => {
          return (
            <Square id={box.id} initialValues={initialValues} status={status} setStatus={setStatus} userPicks={userPicks} />
          )
        }
        )}
        <br></br>
        <StatusButton status={status} setStatus={setStatus} />
      </div>
    </>
  )
  
  
}

export default Container;