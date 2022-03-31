import {configure, mount, shallow} from "enzyme";
import TicketSummary from "./TicketSummary";
import MovieDetails from "./MovieDetails";
import BookTicket from "./BookTicket";
import React from "react";
import MovieDashboard from "./MovieDashboard";
import Adapter from "enzyme-adapter-react-16";
import {getMovies} from "./MovieService";
import {render} from "@testing-library/react";
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

    it("should display the Movie dashboard,movie details,total", () => {
       //  const BookTicketMock = jest.mock('./BookTicket', () => ({
       //      __esModule: true,
       //      default: jest.fn()
       //   }));
       //
       //  jest.mock('axios')
       //
       //  const getMovies = jest.fn(() => new Promise((resolve) => {
       //      resolve({data: movies})
       //  }));
       //  const TicketSummary = jest.fn(()=>{
       //  })
       //  const MovieDetails = jest.mock('./MovieDetails')
       //  //const BookTicket = jest.mock('./BookTicket')
       //  render(<MovieDashboard />)
       //  expect(BookTicket(movies,jest.fn())).toHaveBeenCalledTimes(1)
       //  //expect(<TicketSummary movies={movies}/>).toHaveBeenCalledTimes(1)
       // // expect(MovieDetails).toHaveBeenCalledTimes(1)
    })

})
