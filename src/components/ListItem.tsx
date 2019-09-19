import React from "react";
import { Checkbox } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Item from '../item.interfase'
import { isObject } from "util";
export interface Props {
  item: Item;
  deleteItem:any,
  completed:any
}

const ListItem: React.FC<Props> = ({ item, deleteItem, completed }) => {
let color = ''
 const colorist = () =>{
  if(item.completed) 
  color =  'green'
  else 
 color =  'red'
 }  
  if(isObject(item)) {
colorist()
  }



  return (
    <div>
      <li>
       
        <div>
         <Checkbox color="primary" className={color} onClick={()=>completed(item.id)} checked={item.completed}/>{" "}
        <HighlightOffIcon data-testid='delete'  className='icon' onClick={()=>deleteItem(item.id)}/>
        </div>
        <p data-testid='item'>{item.title}</p>
      </li>
    </div>
  );
};
export default ListItem;
