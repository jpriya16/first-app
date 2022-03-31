/* eslint-disable */
import TicketSummary from "./TicketSummary";
import renderer from "react-test-renderer";
import React from "react";



const movies =
    [
        {
            "_id": "62405be06f047803e8ae1ddd",
            "name": "Movie5",
            "total_tickets": 40,
            "booked_tickets": 40
        },
       {
            "_id": "624158496f047803e8ae1eb8",
            "name": "Movie5",
            "total_tickets": 40,
            "booked_tickets": 10
       }
    ]

describe('getTicketSummary', () => {
    it('should display the Total text', () => {

       let mockComponent = renderer.create(<TicketSummary movies={movies}/>)
        expect( mockComponent.root.findByProps({id: "total"})).toBeTruthy()
    })

    it('should display the Available Ticket', ()=>{
        let mockComponent = renderer.create(TicketSummary(movies))
        expect( mockComponent.root.findByProps({id: "availableTicket"}).children).toEqual(["Available Tickets: ","30"])
    })

    it('should display the booked ticket count',()=>{
        let mockComponent = renderer.create(TicketSummary(movies))
        expect( mockComponent.root.findByProps({id: "bookedTicket"}).children).toEqual(["Booked Count: ","50"])

    })


})
