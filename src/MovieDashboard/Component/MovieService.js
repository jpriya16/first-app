import axios from "axios";


    export const getMovies = () => {

        return axios.get(`https://crudcrud.com/api/29bd8cc907024d05b532b554ddf9f979/movies`)
            .then(res => {
                return res.data
            })
            .catch((error) => {return []} )
    }

    export const updateTicket = (movieId,Movie) => {
        return axios.put(`https://crudcrud.com/api/29bd8cc907024d05b532b554ddf9f979/movies/` + movieId, Movie)
            .then(response => {
               return true
            })
            .catch((error)=>{
                return false
            })
     }


