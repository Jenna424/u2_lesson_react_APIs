import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'

const MovieDetails = ({ selectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState({})

  let API_KEY = process.env.REACT_APP_TMDB_KEY

  useEffect(() => {
    const getMovieData = async () => {
      const response = await axios.get(`${BASE_URL}/movie/${selectedMovie}?api_key=${API_KEY}`)
      setMovieDetails(response.data)
    }
    getMovieData()
  }, [selectedMovie])

  return (
    <div>
      <h3>{movieDetails.title}</h3>
      <p><b>Release Date</b>: {movieDetails.release_date}</p>
      <p><b>Overview</b>: {movieDetails.overview}</p>
    </div>
  )
}

export default MovieDetails