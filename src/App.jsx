import { useState } from "react"
import { Outlet } from "react-router"
import styles from "./App.module.css"
import Header from "./components/Header"

function App() {
    const [count, setCount] = useState(0)

    return (
        <main className={styles.main}>
            <Header />
            <Outlet />
        </main>
    )
}

export default App
