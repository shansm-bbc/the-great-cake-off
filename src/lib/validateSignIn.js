export function validateSignIn(cake) {
    const errors = {
        email: "",
        password: "",
    }

    let isValid = true

    if (cake.email.trim().length === 0 || !cake.email.includes("@")) {
        errors.email = "E-Mail darf nicht leer sein und muss eine gültige E-Mail Adresse sein"
        isValid = false
    }
    if (cake.password.trim().length < 8) {
        errors.password = "Passwort darf nicht leer sein und muss mindestens 8 zeichen lang sein"
        isValid = false
    }

    return { errors, isValid }
}
