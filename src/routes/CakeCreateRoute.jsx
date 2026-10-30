import { redirect, useActionData } from "react-router"
import CakeForm from "@/components/CakeForm"
import { validateCake } from "@/lib/validateCake"
import { createCake } from "@/lib/fetchCakes"

async function clientAction({ request }) {
    const formData = await request.formData()
    const cake = Object.fromEntries(formData)
    const { errors, isValid } = validateCake(cake)
    if (!isValid) {
        return errors
    }
    await createCake(cake)
    return redirect("/")
}

export default function CakeCreateRoute() {
    const errors = useActionData()
    return (
        <>
            <h2>Neuer Kuchen erstellen</h2>
            <CakeForm errors={errors} />
        </>
    )
}

CakeCreateRoute.action = clientAction
