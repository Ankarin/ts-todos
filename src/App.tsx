import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Form from './components/Form'
import List from './components/List'
import './App.scss';
import Item from './item.interfase'

const App: React.FC = () => {

  const [todos, setTodos] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        
        setTodos(res.data)});
        // console.log(todos[0])
  }, []);
const addTodo = (newTodo:string) => {
  const arr =[{  userId:11,
    id:todos.length+1,
    title:newTodo,
    completed:false}, ...todos]
setTodos(arr)
}


const deleteItem = (checkId:number) => {
  
  let newId:number = 0;
const arr = todos.filter((item:Item)=>item.id!==checkId)
.map((item:Item)=>{
  newId++
  return {
    userId: item.userId,
    id: newId,
    title: item.title,
    completed: item.completed
  }
})

setTodos(arr)
}

  const completed = (checkId:number) => {
const arr = [...todos];
arr[checkId-1].completed=!arr[checkId-1].completed
console.log(arr[checkId])
setTodos(arr)
  }

const arr = [1,2,34]


  return (
    <div className="App">
     <Form addTodo={addTodo} />
     <List list={todos} deleteItem = {deleteItem} completed={completed}/>
    </div>
  );
}

export default App;
