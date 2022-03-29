import axios from "axios";


    export const getMovies = () => {

        return axios.get(`https://crudcrud.com/api/6c48e9c143e84e19908760bef335c664/movies`)
            .then(res => {
                console.log(res.data)
                return res.data
            })
    }

    export const updateTicket = (movieId,Movie) => {
        return axios.put(`https://crudcrud.com/api/6c48e9c143e84e19908760bef335c664/movies/` + movieId, Movie)
            .then(response => {
               return "Tickets booked Successfully!"
            })
            .catch((error)=>{
                return "Try to book after some time!"
            })
     }


