import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { MovieCard } from '../../../components/MovieCard/MovieCard'
import styles from './Movie.module.css'

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

export const Movie = () => {

  //  ROUTER-DOM
  const { id } = useParams();

  //  STATE
  const [movie, setMovie] = useState(null);

  //  REQUISIÇÃO
  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  //  REQUISIÇÃO CHAMANDO A FUNÇÃO ***getMovie*** e passando a ***URL*** para ser requisitada.
  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKEY}`

    getMovie(movieURL)
  }, [])

  useEffect(() => {
    console.log(movie)
  }, [movie])

  //  FORMATANDO FORMATO DE MOEDA.
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  return (
    <div className={styles.moviePage}>
      {movie === null
        ? 'Carregando...'
        : (
          <div className={styles.movieContent}>
            <MovieCard movie={movie} showLink={false} />
            <div className={styles.movieData}>
              <h2>{movie.title}</h2>
              <p className={styles.tagline}><b><i>- {movie.tagline}</i></b></p>
              <div className={styles.statsInfo}>
                <div className={styles.info}>
                  <h3>
                    <BsWallet2 /> Orçamento:
                  </h3>
                  <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div className={styles.info}>
                  <h3>
                    <BsGraphUp /> Receita:
                  </h3>
                  <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div className={styles.info}>
                  <h3>
                    <BsHourglassSplit /> Duração:
                  </h3>
                  <p>{movie.runtime} minutos.</p>
                </div>
              </div>
              <div className={styles.info}>
                <h3>
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        )}
    </div>
  )
} 