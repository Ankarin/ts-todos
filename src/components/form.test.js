import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "./Form";
import ListItem from './ListItem'

afterEach(cleanup);
it("button is clicked", () => {
  let item = {
    
     
    
  }

  const addTodo = (newTodo) => {
    
  item = {
    userId: 1,
    id: 1,
    title: "text",
    completed: false
  }
  }


  
    const {form, getByText} = render(<Form addTodo={addTodo} />);
    fireEvent.click(getByText('Add')) 
    
  const {getByTestId} = render(<ListItem completed={null} item={item} deleteItem={null}/>)

 
 
  expect(getByTestId("item")).toHaveTextContent("text");
 
});
