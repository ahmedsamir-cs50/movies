import MovieApi from "../types/MovieApi"
import AllMovies from "../types/MovieType.JSX"
import axios from "axios"
export const getAllMovies =() => {
    return async (dispatch)=>{
    const res = await axios.get(MovieApi)
    console.log(res)
    dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
}
}