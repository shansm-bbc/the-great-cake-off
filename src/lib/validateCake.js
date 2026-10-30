export function validateCake(cake) {
    const errors = {}
    if (!cake.name?.trim()) errors.name = "Titel darf nicht leer sein"
    if (!cake.flavor?.trim()) errors.flavor = "Geschmack darf nicht leer sein"
    if (!cake.price?.trim()) errors.price = "Preis darf nicht leer sein"
    if (!cake.description?.trim()) errors.description = "Beschreibung darf nicht leer sein"

    const isValid = Object.keys(errors).length === 0
    return { errors, isValid }
}
