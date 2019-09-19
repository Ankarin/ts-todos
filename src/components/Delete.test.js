import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ListItem from './ListItem'


afterEach(cleanup)
it('item deleated', ()=>{

let todo =  {
    userId: 1,
    id: 1,
    title: "text",
    completed: false
  }
const deleteItem = () => {
    todo = null
}

const component = render(<ListItem completed={null} item={todo} deleteItem={deleteItem}/>)
const deleteButton = component.getByTestId('delete')
fireEvent.click(deleteButton) 
const item = component.getByTestId('item')
expect(item).toBeInTheDocument()
})