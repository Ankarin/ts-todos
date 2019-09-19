import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import List from './List'
import ListItem from './ListItem'

afterEach(cleanup)
const list = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
      
    ]
const deleteItem=() => list.shift()
const addItem =()=>list.push({
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  })

it ('delete',()=>{
deleteItem()

const component = render(<List list = {list} deleteItem={null} completed={null}/>)
const items = component.getByTestId('items')
expect(items).not.toHaveTextContent("delectus aut autem")

})
it ('delete',()=>{
    addItem()
    
    const component = render(<List list = {list} deleteItem={null} completed={null}/>)
    const items = component.getByTestId('items')
    expect(items).toHaveTextContent("laboriosam mollitia et enim quasi adipisci quia provident illum")
    
    })