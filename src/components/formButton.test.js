import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "./Form";
import ListItem from './ListItem'


  const mockFunc = jest.fn(()=>{})
  afterEach(cleanup);
  it("button is clicked", () => {  
 
 const form = render(<Form addTodo={mockFunc} />);
const addButton = form.getByTestId('addButton')

      fireEvent.click(addButton) 
      fireEvent.click(addButton) 
      const countMock = mockFunc.mock.calls.length
   expect(countMock).toBe(2)
   
  });
  

