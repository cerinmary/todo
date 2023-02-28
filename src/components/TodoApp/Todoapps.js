import {Button, Container, Typography } from '@mui/material'
import { color } from '@mui/system';
import React, { useState } from 'react'

const Todoapps = () => {

const [todo,setTodo]=useState("");
const [todolist,setTodolist]=useState([]);

const handleevent  = (e) =>{
    console.log(todolist)
    setTodo(e.target.value)
  }
  const addlist=()=>{
    setTodolist(
    todolist=>[...todolist,todo])
  }

  return (
    
    
        <div style={{color:"red"} }> 
        <Container fixed maxWidth='sm'> 
        <form style={{backgroundColor:"bisque"}}>
    <br></br>        
<Typography variant='h3'>TO-DO LIST</Typography>
<br></br>
<input type="text" value={todo} 
placeholder='Add todo'
onChange={handleevent}></input>
<br></br>
<br></br>
<br></br>
<Button color='secondary' variant='contained' 
onClick={addlist}>Add Todo</Button>

</form>
    </Container>

<ul>
{todolist.map((value,index)=>{
    return(
      <div key={index}>
        <li> {value}</li>
        </div>
    );
  })}
</ul>

    </div>
    
  )
}

export default Todoapps