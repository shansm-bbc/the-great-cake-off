import { useState } from "react"
import { Outlet } from "react-router"
import styles from "./App.module.css"

function App() {
    const [count, setCount] = useState(0)

    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    )
}

export default App
