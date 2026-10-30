import { useEffect, useState } from "react"

import { useCurrentUser } from "@/lib/session.js"
import { Link, useLocation, useNavigate, useParams } from "react-router"
import { fetchCakeByIDd } from "@/lib/fetchCakes"

export default function ProtectedRouteEdit({ children }) {
    const user = useCurrentUser()
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const [cake, setCake] = useState(null)
    const [error, setError] = useState(null)

    // Überprüft ob User eingeloggt ist. Falls nicht wird er auf SignIn Page geleitet.
    useEffect(() => {
        if (!user) {
            navigate(`/auth/signin?path=${path}`)
        }
    }, [user, navigate, location.pathname])

    // Versucht den Cake zu fetchen. Falls das nicht geht wird eine Error Meldung erzeugt.
    useEffect(() => {
        if (!user) return

        const fetchCake = async () => {
            try {
                const cakeData = await fetchCakeByIDd(id)

                if (!cakeData) {
                    setError("Der Kuchen wurde nicht gefunden.")
                    return
                }

                setCake(cakeData)
            } catch (error) {
                console.log(error)
                setError("Der Kuchen konnte nicht geladen werden.")
            }
        }

        fetchCake()
    }, [id, user])

    if (!user) {
        return null
    }

    if (error) {
        return (
            <>
                <h2>{error}</h2>
                <Link to="/">Zurück</Link>
            </>
        )
    }

    if (!cake) {
        return null
    }

    // Überprüft ob der eingeloggte User mit dem Ersteller des Kuchens übereinstimmt.
    if (cake.baker.id !== user.id) {
        return (
            <>
                <h2>Du kannst nur deine eigenen Kuchen bearbeiten.</h2>
                <Link to="/">Zurück</Link>
            </>
        )
    }

    return children
}
