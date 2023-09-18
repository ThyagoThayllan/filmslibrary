import { useEffect, useState } from "react"
import styles from './Home.module.css'
import { MovieCard } from "../../../components/MovieCard/MovieCard"
import { FaStar } from 'react-icons/fa'

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

export const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}><FaStar /> Melhores Filmes:</h1>
      <div className={styles.moviesContainer}>
        {topMovies.length === 0
          ? 'Carregando...'
          : topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />
          )}
      </div>
    </div>
  )
}