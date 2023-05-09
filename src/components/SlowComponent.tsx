import React from 'react'
import {useState, useMemo, useEffect} from 'react'

const SlowComponent = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false);

    const doubleNumber = slowFunction(number);

    // const doubleNumber = useMemo(()=>{
    //     return slowFunction(number)
    // }, [number])

    const themeStyles = useMemo(()=>{
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333'
        }
    }, [dark])
    
    useEffect(()=>{
        console.log('Theme Changed');
    }, [themeStyles])

    return (
        <>
            <input type='number' value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
            <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
  )
}

function slowFunction(num: number){
    for(let i = 0; i<=1000000000;i++){}
    return num*2
}
export default SlowComponent