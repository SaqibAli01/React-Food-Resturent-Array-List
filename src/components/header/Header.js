import  React from 'react'
import {useState} from 'react'
import './Header.css'
export  function Header() {
  //css styles
  let style = {
    flex: {
      backgroundColor : "red",
    }
    
    
   
  }
  return <>
  <div style={style.flex}>Saqib  </div>
  </>
}


// useState model view ha
export  function Sum() {
let [number , setNum] = useState(20);
let [number1 , setNum1] = useState(50); // ak or usestate model bania



  // let number = 20;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={function(){
          number++;
          setNum(number);
          console.log(number);
        }
      }>Update Number</button>
      {/* ak or number add kia me ny  */}
      <h1>{number1}</h1>
      <button onClick={function(){
          number1++;
          setNum1(number1);
          console.log(number1);
        }
      }>Update Number</button>
    </div>
  )
}

