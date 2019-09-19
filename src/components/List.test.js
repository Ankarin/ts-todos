import React from 'react';
import List from './List'
import ListItem from './ListItem'
import {shallow} from 'enzyme';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "@testing-library/react";

it('check data', ()=> {
    const list = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }]
const component = shallow(<List list = {list}/>)
expect(component.contains(<ListItem key={list[0].id} item={list[0]}/>))


})

