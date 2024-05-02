

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Actors() {
  const [actors, setActors] = useState([]);


  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch("http://localhost:4000/actors");
        if (response.ok) {
          const data = await response.json();
          setActors(data);
        } else {
          throw new Error("Failed to fetch actors");
        }
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };


    fetchActors();
  }, []);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};


export default Actors;
