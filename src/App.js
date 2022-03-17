import './styles/App.css'
import { useEffect, useState } from 'react'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import axios from 'axios'
import { BASE_URL } from './globals'

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one
  // Create a function that accepts a movieId as a parameter
  // and sets that movieId to the selectedMovie state.
  const updateSelectedMovie = (movieId) => {
    setSelectedMovie(movieId)
  }

  // grab the variable REACT_APP_TMDB_KEY from .env file
  let API_KEY = process.env.REACT_APP_TMDB_KEY
  // useEffect accepts 2 arguments: anonymous arrow function and dependency array
  useEffect(() => {
    // Declare an async function inside the anonymous arrow function,
    //  and make the API call inside of that async function
    const getMovies = async () => {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}`
      )
      // State can only be updated with its associated function, in our case, setMovies
      setMovies(response.data.results)
    }
    // Immediately invoke async function
    getMovies()
  }, [])
  return (
    <div>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
        <MovieList movies={movies} updateSelectedMovie={updateSelectedMovie} />
      )}
    </div>
  )
}

export default App
