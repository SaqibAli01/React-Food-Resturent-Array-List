// import React, { useRef } from 'react'
import { useRef , useState} from 'react'
import './Forms.css'

export  function Forms() {
    let [users , setUsers] = useState([]);
    let name = useRef();
    let email = useRef();
    let city = useRef();

    function saveuser(event){
      event.preventDefault();
      let user = {
        name: name.current.value,
        email: email.current.value,
        city: city.current.value,
      }
      event.target.reset(); //reset krny k lia

      setUsers([...users,user])

    }


  return <>
    
    <div className='forms'>
      Forms
    <form onSubmit={saveuser}>

    <div>
     Name: <input ref ={name} className='name'/>
    </div>
    <div>
      Email:<input ref ={email} className='email'/>
    </div>
    <div>
      Select
     <select  ref ={city}>
       <option>Faisalabad</option>
       <option>Lahore</option>
       <option>Islamabad</option>
       <option>Karachi</option>
     </select>
     <br/>
     <button>Save Users</button>
    </div>

    </form>
    </div>

    <table border ="1">
      {
      users.map((myUser, myIndex)=>{
        return <tr>
          <td>{myUser.name}</td>
          <td>{myUser.email}</td>
          <td>{myUser.city}</td>
          <td>
            <button onClick= {()=>{
              users.splice(myIndex,1);
              setUsers([...users]);
            }}>
              Delete
            </button>
          </td>

          <td>
            <button onClick= {()=>{
              users[myIndex].name = prompt("Enter New  Name ");
              users[myIndex].email = prompt("Enter New  Email");
              users[myIndex].city = prompt("Enter New  Name City");
              setUsers([...users]);
            }}>
              Edit
            </button>
          </td>
          
        </tr>
      })
}
    </table>

  <br></br>
  
  </>
}
