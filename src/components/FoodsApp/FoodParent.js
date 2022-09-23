import React from 'react'
import {FoodDish} from './FoodDish'
// import {FoodTable} from './FoodTable'
import { useState } from 'react'
import './Food.css'
export  function FoodParent() {

    let [totalBill , setTotalBill] = useState(0);

    let [dishes , setDishes] = useState([
        {
            name: 'Biryani',
            price: 250
        },
        {
            name: 'tikka',
            price: 650
        },
        {
            name:"Raita",
            price:50
          },
          
          {
            name:"Kabab",
            price:150
          },
          {
            name:"Curry",
            price:780
          }
    ])


  return <>
    <div className='food'>
        <h1> New Food Resturant</h1>
        
    <table border ='2'>
    {
          dishes.map((dish, index)=>{
            return <FoodDish fsd={function(res){dish.orderHogi = res}}
            price={dish.price} 
            name={dish.name}/>
          })
        }
        <tr>
            <td >Total Bill</td>
            <td colSpan= {2}>{totalBill}</td>
        </tr>
    <tr >
      <td colSpan= {3}>
    <button onClick={()=>{
      totalBill = 0;
        dishes.forEach(dish=>{
          if(dish.orderHogi){
            totalBill += dish.price;
          }
        })
        setTotalBill(totalBill);
        
    }} className="btns">Get Bill</button>

    {/* <FoodTable> </FoodTable> */}
    {/* <FoodDish > </FoodDish> */}
    </td>
</tr>
    </table>

</div>

    </>
}
