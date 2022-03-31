import React from "react";
import axios from "axios";
import {getMovies} from "./MovieService";

jest.mock("axios");

describe("Movie service",() => {
    it("should return movies list", async () => {
        //given
        const movies ={
            data: [
                {
                    "_id": "624158496f047803e8ae1eb8",
                    "name": "Movie5",
                    "total_tickets": 40,
                    "booked_tickets": 10
                }
            ]}
        axios.get.mockResolvedValueOnce(movies);

        // when
        const result = await getMovies();

        // then
        expect(axios.get).toHaveBeenCalledWith(`https://crudcrud.com/api/c52d5cdcc84e415e80d8f2b006cddc0b/movies`);
        expect(result).toEqual(movies.data);
    })

    it("should return empty movies list", async () => {
        // given
        const message = "Network Error";
        axios.get.mockRejectedValueOnce(new Error(message));

        // when
        const result = await getMovies();

        // then
        expect(axios.get).toHaveBeenCalledWith(`https://crudcrud.com/api/c52d5cdcc84e415e80d8f2b006cddc0b/movies`);
        expect(result).toEqual([]);
    });
})


