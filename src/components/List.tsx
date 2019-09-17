import React from "react";
import { borderColor } from "@material-ui/system";
import Form from "./Form";
import axios from "axios";
import { isArray } from "util";
import { number } from "prop-types";
import ListItem from "./ListItem";
import Item from '../item.interfase'
interface Props {
  list: Item[];
  deleteItem: any;
  completed: any;
}

const List: React.FC<Props> = ({ list, deleteItem, completed }) => {
  console.log(list);
  return (
    <div className="List">
      {isArray(list)
        ? list.map(item => (
            <ListItem key={item.id} item={item} deleteItem={deleteItem} completed={completed} />
          ))
        : null}
    </div>
  );
};
export default List;
