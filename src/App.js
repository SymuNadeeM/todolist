import React, { useState } from 'react';
import Todolists  from './Todolists.jsx';
import './style.css'

function App() {
   
 
const [name,setTarget]=useState("")
 const [item,setitem]= useState([])


   const inputvalue=(event)=>{
   setTarget(event.target.value)
 
   }

 const buttonclick =()=>{
   setitem((olditems)=>{
     return[...olditems,name]
   })
   setTarget("")
 }


  return (
    <>
      <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Todo list</h1>
        <br/>
        <input type="text" placeholder="Add Your List" onChange={inputvalue} value={name} />
        <button onClick={buttonclick}> + </button>

        <ol>
          
            {item.map((itemmap)=>{
              return <Todolists  text={itemmap}/>
               
            })}
          
        </ol>
      </div>
      </div>
    </>
  );
}

export default App;
