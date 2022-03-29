import React from "react";

export default function TicketSummary (movies) {
    let totalTickets, bookedTickets;
    totalTickets = 0;
    bookedTickets = 0;
    let availableTickets = 0;

    for(let movie in movies){
            totalTickets += Number(movies[movie].total_tickets);
            bookedTickets += Number(movies[movie].booked_tickets);
    }
    availableTickets = totalTickets - bookedTickets;

    return(<div>
        <table>
            <tr><th id="total"> Total </th></tr>
            <tr><td id="availableTicket">Available Tickets: {availableTickets}</td></tr>
            <tr><td id="bookedTicket">Booked Count: { bookedTickets }</td></tr>
        </table>
    </div>)
}
