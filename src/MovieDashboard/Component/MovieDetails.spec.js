/* eslint-disable */


import React from "react";
import { shallow } from 'enzyme';
import MovieDetails from "./MovieDetails";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const movies =
    [
        {
            "_id": "624158496f047803e8ae1eb8",
            "name": "Movie5",
            "total_tickets": 40,
            "booked_tickets": 10
        }
    ]

describe("Get Movie Details",()=>{
    it("should Match the snapshot", ()=>{
        const component = shallow(MovieDetails(movies))
        expect(component.getElements()).toMatchSnapshot();
    })
})
