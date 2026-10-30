import AuthForm from "@/components/AuthForm"
import { signin } from "@/lib/signin"
import { saveSession } from "@/lib/session"
import { redirect, useActionData } from "react-router"
import { validateSignIn } from "@/lib/validateSignIn"

// Holt sich die Daten aus dem Formular und Meldet den User an + Error Handling
async function clientAction({ request }) {
    const formData = await request.formData()
    const user = Object.fromEntries(formData)

    const { errors, isValid } = validateSignIn(user)
    if (!isValid) {
        return errors
    }

    try {
        const response = await signin(user)
        saveSession(response)
    } catch {
        return {
            general: "E-Mail-Adresse oder Passwort ist falsch.",
        }
    }
    const param = new URLSearchParams(location.search)
    const path = param.get("path")
    return redirect(path ?? "/")
}

export default function SignInRoute() {
    const errors = useActionData()
    return (
        <>
            <h2>Anmelden</h2>
            <AuthForm errors={errors} />
        </>
    )
}

SignInRoute.action = clientAction
