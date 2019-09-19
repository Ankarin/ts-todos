import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {  TextField } from '@material-ui/core';


export default function Form({addTodo}:any) {
const [input, setInput] = useState('')

const handle = (e:any) => {
    setInput(e.target.value)
}

const add= () =>{
    if(addTodo!=null) {
        addTodo(input)
    }
setInput('')
}

    return (
        <div className='Form'>
           
           
            <TextField data-testid='input' fullWidth={true} id='input-todo' value={input} label='Type to do'  type='text' onChange={handle} />
            <br/>
            <Button   data-testid='addButton'  variant="contained" color="secondary" onClick={add} >Add</Button>
            
            
            
            

        </div>
    )
}
