import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import styles from './MovieCard.module.css'


const imageUrl = import.meta.env.VITE_IMG

export const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className={styles.movieCard}>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && (<Link to={`/movie/${movie.id}`} className={styles.details}>Detalhes</Link>)}
        </div>
    )
}
