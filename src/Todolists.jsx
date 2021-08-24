import React from 'react';

const Todolists =(props)=>{
    return(
        <>
         <div>
         <div className="todo_style">
             <i class="fa fa-times" aria-hidden="true" />
             <li>{props.text}</li>
         </div>
         </div>
        </>
    )
}
export default Todolists;