import React from 'react'
import {useState} from "react"
import Alert from './Alert';

interface Props{
    items: string[][];
    color: "primary"|"secondary"|"success"
}

const Cities = ({items, color}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <>
            <div className="text-center py-2 my-4" style={{fontSize: "2rem"}}>Cities</div>
            
            <br/>

            {alertVisible  && <Alert onClose={()=>setAlertVisible(false)}>{"Miasto "+items[selectedIndex][0]+" jest w "+items[selectedIndex][1]}</Alert>}

            {items.length === 0 && <p>Brak Miast</p>}

            <ul className="list-group">
                {items.map((item, index) =>(
                    <li 
                    key={index} 
                    onClick={() => { setSelectedIndex(index); setAlertVisible(true) }} 
                    className={selectedIndex === index 
                        ? `list-group-item list-group-item-action list-group-item-${color} active` 
                        : `list-group-item list-group-item-action list-group-item-${color}`} 
                    >
                        {item[0]}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cities