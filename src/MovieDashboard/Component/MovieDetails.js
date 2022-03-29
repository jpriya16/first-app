import React from "react";
export default function MovieDetails(Movies){
    return(
        <div>
            <table>
                <tr>
                    <th>Movie name</th>
                    <th>ID</th>
                    <th>Total tickets</th>
                    <th>Booked</th>
                </tr>
                { Movies.map( (val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val._id}</td>
                            <td>{val.total_tickets}</td>
                            <td>{val.booked_tickets}</td>
                        </tr>
                    )
                }) }
            </table>
        </div>
    )
}
