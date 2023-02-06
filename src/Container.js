import React, {useState}from "react";
import Square from "./Square";

import './Container.css'

const Container = () => {

    const [isSelected, setIsSelected] = useState('unselected');

    const boxes = [
        { 'id': 1, 'isSelected': isSelected },
        { 'id': 2, 'isSelected': isSelected },
        { 'id': 3, 'isSelected': isSelected }
    ]


    const handleClick = () => {
        console.log('click')
        setIsSelected('selected')
    }

    return (
        <div className="container">
            {boxes.map(box => {
                return (
                <Square id={box.id} isSelected={box.isSelected} handleClick={handleClick}/>
                )}
            )}
        </div>
    )
}

export default Container;