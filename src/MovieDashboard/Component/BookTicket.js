import React from "react";
import {useState} from "react";
import axios from "axios";

export default function BookTicket(movies,UpdateMovieDetails){
    const [MovieId, setMovieId] = useState('')
    const [NumberOfTickets,setNumberOfTickets] = useState(0)
    const [Book,setBook] = useState(false)
    const [message,setMessage] = useState('')

    const handleBooKTicket = () => {
        setBook(true);
        BookTicketForMovie(movies);
        setNumberOfTickets(0);
        setMovieId('');
        setMessage('')
        setBook(false)

    }


    const BookTicketForMovie = (movies) => {
        let movie = null;
        for (let key in movies) {
            if(movies[key]._id === MovieId)
                console.log("movie present",movies[key])
            movie =  movies[key];
        }

        let total = Number(movie.total_tickets);
        let book = Number(movie.booked_tickets);
        let diff = total - ( NumberOfTickets + book)

        if(!movie)
            setMessage('Invalid Movie Id ' + MovieId)
        else if(diff < 0)
            setMessage('requested no of ticket is not available')
        else if (movie && diff >= 0) {
                let newMovie = {
                    "name": movie.name,
                    "total_tickets": total,
                    "booked_tickets": book + NumberOfTickets
                }

                axios.put(`https://crudcrud.com/api/6c48e9c143e84e19908760bef335c664/movies/` + MovieId, newMovie).then(response => {
                     setMessage('tickets booked Successfully')
                     UpdateMovieDetails("test")
                    }
                ).catch(error => {
                    setMessage('try booking after some time')
                })
        }
    }

    return(
        <div>
            <label>MOVIE DASHBOARD</label>
            <br/><br/>
            <label>MOVIE ID</label>
            <input placeholder="Movie Id" value={MovieId} onChange={e=>setMovieId(e.target.value)}></input>
            <label>Number of tickets to book</label>
            <input type="text" pattern="[0-9]*" value={NumberOfTickets} placeholder="no of tickets" onChange={e=>setNumberOfTickets(Number(e.target.value))}></input>
            <button onClick={handleBooKTicket}>Book</button>
            { Book || <label>{message}</label> }
        </div>
    )
}
