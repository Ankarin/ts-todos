import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {  TextField } from '@material-ui/core';


export default function Form({addTodo}:any) {
const [input, setInput] = useState('')

const handle = (e:any) => {
    setInput(e.target.value)
}

    return (
        <div className='Form'>
           <br/>
            < TextField id='input-todo' value={input} label='Type to do'  type='text' onChange={handle} />
            <br/>
            <Button variant="contained" color="primary" onClick={()=>addTodo(input)} >Add</Button>
        </div>
    )
}
