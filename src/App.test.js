import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ListItem from './components/ListItem'
afterEach(cleanup)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const todo = {
  userId: 1,
    id: 1,
    title: "text",
    completed: false
}

const deleteItem = jest.fn(()=> {
  todo.title = 'deleted'
}) 
let delButton 
it('delete item', () => {
 
// const component = render(<App/>)
const listItem = render (<ListItem completed={null} item={todo} deleteItem={deleteItem}/>)
const deleteButton = listItem.getByTestId('delete')
fireEvent.click(deleteButton)
const content = listItem.getByTestId('item')
expect(content).toHaveTextContent('texts')

})

