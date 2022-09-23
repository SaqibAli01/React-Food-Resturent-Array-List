import React from 'react'
import './ClassOne.css'
export function ClassOne() {

    let name = [
        { names: 'Saqib' },
        { names: 'Saqib' },
        { names: 'Saqib' },
        { names: 'Saqib' },
        { names: 'Saqib' },
    ];

    let na = [
        {
            firstName: 'Saqib',
            lastName: "Ali"
        },

        {
            firstName: 'Saqib',
            lastName: "Ali"
        },

        {
            firstName: 'Saqib',
            lastName: "Ali"
        },

    ];

    return (
        <div className='arrays'>
            <h1>Arrays List</h1>
            <ul>
                {
                    name.map((item, index) => {
                        return <li key={index}>{item.names}</li>

                    })
                }
            </ul>
            <h1>Array Tables</h1>
            <table border='2'>
                {
                    na.map((items, indexs) => {
                        return <tr>
                        <td id='a'>{items.firstName}</td>
                        <td id='b'>{items.lastName}</td>
                        <td id='c'>{items.firstName + " "+items.lastName}</td>
                        </tr>
                    })
                }
            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

