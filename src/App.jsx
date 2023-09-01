import { NavBar } from "./component/NavBar.jsx";
import axios from "axios";
import MoviesList from './component/MoviesList.jsx'
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails.jsx"
import { getAllMovies } from "./redux/action/action.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState([]);
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  const dataMovies=useSelector((state)=>state.movies)
  const page=useSelector((state)=>state.pageCount)
  useEffect(() => {
    setMovies(dataMovies)
    setpageCount(page)
  }, [dataMovies]);
  
  // const getAllMovies = async () => {
  //  const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8629c6ceb24b323223a16942d60490a8&language=en-US&page=1`)
  //      setMovies(res.data.results)
  //      
       
  // };
  const search = async (word) => {
      if(word===""){
        getAllMovies(); 
      }else{
     const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8629c6ceb24b323223a16942d60490a8&language=en-US&query=${word}`)
      setMovies(res.data.results)
  };}
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
  }

  return (
    <div className="page">
            <NavBar search={search}/>
           <Container>
           <BrowserRouter>
           
           <Routes>
            <Route path="/" element={ <MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />}/>
            <Route path="/movie/:id" element={ <MovieDetails />}/>
       
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
