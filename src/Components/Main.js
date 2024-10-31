import React from 'react'
import Mainn from './Mainn.css'
import { useState } from 'react'
import array from './ex'

export default function Main() {
  const [value,setValue] = useState(0)
  const [isBlack,setisBlack] = useState(false)

  let arry = [1,2,3,4,5,6]
  function HandleSelect1(e) {
    console.log(e.target.textContent)
  }
  function handleImage() {
    let a = Math.floor(Math.random() * 6 + 1)

  }
   
  return (
    <div>
      <nav className='nav'>
        <p className='score'>0</p>
        <span className='down'>Your Score</span>
        {arry.map((value,i)=>(
    <button key={i} className='button' onClick={HandleSelect1}>{value}</button>
   ))}
       
        <span className='option'>Select Number</span>
      </nav>
      <div className='dice'>
        <img className='imgahi' onClick={handleImage} src={array[1].img} alt="" />
        <h4>Click on dice to roll</h4>
        <button className='btn2'>Reset Score</button>
        <button className='btn3'>Show Rules</button>
      </div>
    </div>
  )
}
