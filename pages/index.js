import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "655d18a49bb65cb24871e0354717aafa";

export default function Home() {
  const [movies, setMovies] = useState([]);
  // useEffect(()=>{}, []) 기본형
  useEffect(()=>{
    // (async()=>{})(); 기본형
    (async()=>{
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();
    // console.log(data);
    setMovies(results);
    })();
  }, [])
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie)=> (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}