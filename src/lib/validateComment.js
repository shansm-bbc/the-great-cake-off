export function validateComment({ comment }) {
    const errors = {}
    if (!comment?.trim()) {
        errors.name = "Kommentar darf nicht Leer sein."
    }

    const isValid = Object.keys(errors).length === 0
    return { errors, isValid }
}
