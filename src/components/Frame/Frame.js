import React from 'react'
import './Frame.css'
export function Frame(props) {
  return (
    <div className='divs frame-box'>
        <h1>Frame</h1>
        <img className='img_frame' src='framee.png' alt='' ></img>
        {props.children}
        
        </div>
  )
}



export  function FrameParent() {
  return (
    <div>
        <Frame city="FSD">
            <img src='img1.jpg' alt='' ></img>
            <img src='img2.jpg' alt='' ></img>
        </Frame>

    </div>
  )
}
