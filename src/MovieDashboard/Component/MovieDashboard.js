import React from "react";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import TicketSummary from "./TicketSummary";
import MovieDetails from "./MovieDetails";
import BookTicket from "./BookTicket";
import {getMovies} from "./MovieService";

export default function MovieDashboard(){
    const [Movies,setMovies] = useState([])

    useEffect(async () => {
        setMovies(await getMovies());
    },[])

    const updateMovieDetails = async () => {
        let movieData = await getMovies();
        setMovies(movieData)
    }


    return(<div>
        {BookTicket(Movies,updateMovieDetails)}
        <br/>
        <br/>
        {MovieDetails(Movies)}
        <br/>
        {TicketSummary(Movies)}
    </div>);


}
