import React, {useState} from "react";
import { Checkbox } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Item from '../item.interfase'
export interface Props {
  item: Item;
  deleteItem:any,
  completed:any
}

const ListItem: React.FC<Props> = ({ item, deleteItem, completed }) => {
let color = ''
    if(item.completed) 
    color =  'green'
    else 
   color =  'red'



  return (
    <div>
      <li>
       
        <div>
         <Checkbox color="primary" className={color} onClick={()=>completed(item.id)} checked={item.completed}/>{" "}
        <HighlightOffIcon  className='icon' onClick={()=>deleteItem(item.id)}/>
        </div>
        <p>{item.title}</p>
      </li>
    </div>
  );
};
export default ListItem;
