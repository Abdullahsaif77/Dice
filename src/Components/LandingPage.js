import React from 'react'
import LandingPagee from './LandingPagee.css'
import img1 from '../images/DiceLand.png'

export default function LandingPage() {
  return (
    <>
    <img src={img1} alt="" height={300} className='img1' />
    <div className='Head'>
        <p>DICE GAME</p>
        <button className='btn1'>Play</button>
    </div>
    </>
  )
}
