import React from "react";
import {useState} from "react";
import {updateTicket} from "./MovieService";

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
        setBook(false)

    }

    const bookTicketWithData = async (MovieId,newMovie) => {
        return await updateTicket(MovieId,newMovie)
    }

    const BookTicketForMovie = (movies) => {
        let movie = null;
        let diff = 0;
        let total = 0;
        let booked = 0;
        for (let key in movies) {
            if(movies[key]){
                if(movies[key]._id === MovieId) {
                    console.log("movie present", movies[key])
                    movie = movies[key];
                    total = Number(movie.total_tickets);
                    booked = Number(movie.booked_tickets);
                    diff = total - (NumberOfTickets + booked)
                }
            }
        }



        if(movie == null)
            setMessage('Invalid Movie Id ' + MovieId)
        else if(diff < 0){
            setMessage('requested no of ticket is not available for Movie Id ' + MovieId)}
        else if (movie && diff >= 0) {
                let newMovie = {
                    "name": movie.name,
                    "total_tickets": total,
                    "booked_tickets": booked + NumberOfTickets
                }
                bookTicketWithData(MovieId, newMovie).then(r =>{
                    if (r){
                        UpdateMovieDetails()
                        setMessage('Tickets booked for Movie Id : '+ MovieId +'Successfully')}
                }).catch(e=>{

                        setMessage('try booking after some time')
                })
                // axios.put(`https://crudcrud.com/api/c52d5cdcc84e415e80d8f2b006cddc0b/movies/` + MovieId, newMovie).then(response => {
                //     UpdateMovieDetails()
                //     setMessage('Tickets booked for Movie Id : '+ MovieId +'Successfully')
                //     }
                // ).catch(error => {
                //     setMessage('try booking after some time')
                // })


        }
    }

    return(
        <div>
            <label>MOVIE DASHBOARD</label>
            <br/><br/>
            <label>MOVIE ID</label>
            <input data-testid ="movieId" id ="movieId" placeholder="Movie Id" value={MovieId} onChange={e=>setMovieId(e.target.value)}></input>
            <label>Number of tickets to book</label>
            <input data-testid="noOfTicket" id="noOfTicket" type="text" pattern="[0-9]*" value={NumberOfTickets} placeholder="no of tickets" onChange={e=>setNumberOfTickets(Number(e.target.value))}></input>
            <button data-testid="bookButton" id ="bookbtn" onClick={handleBooKTicket}>Book</button>
            { Book || <label>{message}</label>}
        </div>
    )
}
