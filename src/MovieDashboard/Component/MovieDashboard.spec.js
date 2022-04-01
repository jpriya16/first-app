/* eslint-disable */
import {configure, mount, shallow} from "enzyme";
import TicketSummary from "./TicketSummary";
import MovieDetails from "./MovieDetails";
import BookTicket from "./BookTicket";
import React from "react";
import MovieDashboard from "./MovieDashboard";
import Adapter from "enzyme-adapter-react-16";
import {getMovies} from "./MovieService";
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });
describe("Movie dashboard",()=>{
    const movies =
        [
            {
                "_id": "123",
                "name": "Movie5",
                "total_tickets": 40,
                "booked_tickets": 10
            }
        ]


    it("should match snapshot",()=>{
        const component = shallow(<MovieDashboard />)
        expect(component.getElements()).toMatchSnapshot();
    })

    jest.mock('./BookTicket', () => ({
        __esModule: true,
        namedExport: jest.fn(),
        default: jest.fn()
    }));
    it('should display the Total text in ticket summary', () => {

        let mockComponent = renderer.create(<MovieDashboard />)
        expect( mockComponent.root.findByProps({id: "total"})).toBeTruthy()
    })
    it("should display the book ticket page", () => {
        let mockComponent = renderer.create(<MovieDashboard />)
        expect( mockComponent.root.findByProps({id: "bookbtn"})).toBeTruthy();
        expect( mockComponent.root.findByProps({id: "movieId"})).toBeTruthy();
        expect( mockComponent.root.findByProps({id: "noOfTicket"})).toBeTruthy();
    })

})
