import LinkButton from "./LinkButton"
import styles from "./Header.module.css"
import { useNavigate } from "react-router"
import { removeSession, useCurrentUser } from "@/lib/session"
import ButtonGroup from "./ButtonGroup"
import Button from "./Button"

export default function Header() {
    const navigate = useNavigate()
    const user = useCurrentUser()

    const logout = async (e) => {
        e.preventDefault()
        removeSession()
        alert("Du wurdest abgemledet!")
        navigate("/")
    }

    const login = async (e) => {
        e.preventDefault()
        navigate("/auth/signin")
    }

    return (
        <main className={styles.main}>
            <ButtonGroup>
                {user && (
                    <LinkButton to="/cakes/create" secondary>
                        Neue Kuchen erstellen
                    </LinkButton>
                )}
                {user ? (
                    <Button onClick={logout}>Abmelden</Button>
                ) : (
                    <Button onClick={login}>Anmelden</Button>
                )}
            </ButtonGroup>
        </main>
    )
}
