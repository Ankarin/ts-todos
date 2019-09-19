import React from "react";



import { isArray } from "util";

import ListItem from "./ListItem";
import Item from '../item.interfase'
interface Props {
  list: Item[];
  deleteItem: any;
  completed: any;
}

const List: React.FC<Props> = ({ list, deleteItem, completed }) => {
  
  return (
    <div className="List">
      <ul  data-testid='items'>
      {isArray(list)
        ? list.map(item => (
            <ListItem  key={item.id} item={item} deleteItem={deleteItem} completed={completed} />
          ))
        : null}
        </ul>
    </div>
  );
};
export default List;
