import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = React.useState(null);
  const { id } = useParams();


  React.useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        } else {
          throw new Error("Movie not found");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };


    fetchMovie();
  }, [id]);


  if (!movie) {
    return null;
  }


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>
          Genres:{" "}
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </p>
      </main>
    </>
  );
}


export default Movie;
