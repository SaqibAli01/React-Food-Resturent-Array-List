import React from 'react'
import { useState } from 'react';
import './Arrays.css';
export function Arrays() {
    // let fruits = ["Mango" , "Banna" , "Apple"];
    let [fruits, setfruits] = useState(["Mango", "Banna", "Apple", "Carrot"]);
    return <>
        <div className='fruits'>
            <h1>Arrays List</h1>
            <oL>
                {
                    fruits.map((myFruits, myindex) => {
                        //delete button
                        return <li>{myFruits}
                            <button onClick={(() => {
                                fruits.splice(myindex, 1);
                                setfruits([...fruits]);
                            })} className="btn">
                                Delete  </button>
                            {/* //eidt button */}
                            <button onClick={(() => {
                                fruits[myindex] = prompt("Enter New Fruits Name ");
                                setfruits([...fruits]);
                            })} className="btn">Eidt</button>
                        </li>
                    })
                }
            </oL>
            <button onClick={() => {
                let fruitsAdd = prompt("Enter Fruits Name");
                setfruits([...fruits, fruitsAdd])
            }} className="btns"> Add Fruits</button>
        </div>
    </>
}
