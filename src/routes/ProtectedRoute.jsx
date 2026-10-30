import { useEffect } from "react"

import { useCurrentUser } from "@/lib/session.js"
import { useLocation, useNavigate } from "react-router"

export default function ProtectedRoute({ children }) {
    const user = useCurrentUser()
    const navigate = useNavigate()
    const location = useLocation()

    // Überprüft ob User eingeloggt ist. Falls nicht wird er auf SignIn Page geleitet.
    useEffect(() => {
        if (!user) {
            const path = location.pathname
            navigate(`/auth/signin?path=${path}`)
        }
    }, [user, navigate, location])

    if (!user) {
        return null
    }

    return children
}
