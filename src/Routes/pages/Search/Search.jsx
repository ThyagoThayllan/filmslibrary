import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './Search.module.css'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieCard } from '../../../components/MovieCard/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;

export const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmJjZmM2NmJhMWRlYTAzOWJlMmZiNGY4ZTNmNjA4NCIsInN1YiI6IjY1MDQ2MDA4ZmZjOWRlMGVkZWQ1ZDkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77tQoqcbis8AdNTtmWC4vfP3LeilfUvMn0DoDsrpNNU'
    }
  };

  const getSearchedMovies = async () => {

    const res = await fetch(`${searchURL}?query=${query}`, options)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
    getSearchedMovies()
  }, [query])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <BiSearchAlt2 /> Resultados para: <span className={styles.queryText}>{query}</span>
      </h1>
      <div className={styles.moviesContainer}>
        {movies.length === 0
          ? 'Carregando...'
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}