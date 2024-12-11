import React, { useState } from 'react'
import "./Counter.css"

const Counter = (props) => {
    const[count, setCount] = useState(props.initialValue)
    const increment=()=>{
        console.log("incremento")
        setCount(count+1)
    }
    const decrement=()=>{
        console.log("decremento")
        setCount(count-1)
    }
    const xdos=()=>{
        console.log("Por dos")
        setCount(count+2)
    }
    const xtres=()=>{
        console.log("Por tres")
        setCount(count+3)
    }
    const xcinco=()=>{
        console.log("Por cinco")
        setCount(count+5)
    }
    const xdiez=()=>{
        console.log("Por diez")
        setCount(count+10)
    }
  return (
    <div className='container3'><div className='counter'>Counter: {count}</div>
    <button className='btn' onClick={increment}>+</button>
    <button className='btn' onClick={decrement}>-</button>
    <button className='btn' onClick={xdos}>x2</button>
    <button className='btn' onClick={xtres}>x3</button>
    <button className='btn' onClick={xcinco}>x5</button>
    <button className='btn' onClick={xdiez}>x10</button>
    </div>
  )
}

export default Counter