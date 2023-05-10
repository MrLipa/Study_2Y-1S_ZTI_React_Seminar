import React from 'react'
import useLocalStorage from './useLocalStorage'
import {useState} from 'react';

const SimpleComponent = () => {
    // const [name, setName] = useLocalStorage('name','')
    const [name, setName] = useState('')

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <input
          type="text"
          className="form-control"
          style={{width: '80%', borderRadius: '10px', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center'}}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    )
}

export default SimpleComponent