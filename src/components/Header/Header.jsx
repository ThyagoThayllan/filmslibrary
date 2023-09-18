import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import styles from './Header.module.css'
import { useState } from "react"

export const Header = () => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return
        navigate(`/search?q=${search}`)

        setSearch('')
    };

    return (
        <div className={styles.header}>
            <h2>
                <Link to='/'>
                    <BiCameraMovie />
                    Movies Library
                </Link>
            </h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
            {/* <nav id='navbar'>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="movie/:id">Filmes</Link></li>
                    <li><Link to="search">Pesquisar</Link></li>
                </ul>
            </nav> */}
        </div>
    )
}