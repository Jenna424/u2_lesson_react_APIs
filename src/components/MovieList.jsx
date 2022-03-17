import { POSTER_PATH } from "../globals"

const MovieList = ({ movies, updateSelectedMovie }) => {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          <h3>{movie.title}</h3>
          <button onClick={() => updateSelectedMovie(movie.id)}>View Movie</button>
        </div>
      ))}
    </div>
  )
}

export default MovieList