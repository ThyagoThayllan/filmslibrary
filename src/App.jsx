import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './components/Header/Header'

export function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  )
}