import { redirect, useActionData, useLoaderData } from "react-router"
import CakeForm from "@/components/CakeForm"
import { fetchCakeByIDd, updateCake } from "@/lib/fetchCakes"
import { validateCake } from "@/lib/validateCake"

async function clientLoader({ params }) {
    return await fetchCakeByIDd(params.id)
}

// Holt sich die Daten aus dem Formular und erstetzt die Daten mit den Vorhandenen
async function clientAction({ request, params }) {
    const formData = await request.formData()
    const cake = Object.fromEntries(formData)
    const { errors, isValid } = validateCake(cake)
    if (!isValid) {
        return errors
    }
    cake.id = params.id

    try {
        await updateCake(cake)
        return redirect(`/cakes/${params.id}`)
    } catch (error) {
        console.log(error)
        throw new Error("Der Kuchen konnte nicht gespeichert werden.", { cause: error })
    }
}

export default function CakeEditRoute() {
    const data = useLoaderData()
    const errors = useActionData()
    return (
        <>
            <h2>Kuchen Bearbeiten:</h2>
            <CakeForm cake={data} errors={errors} />
        </>
    )
}

CakeEditRoute.loader = clientLoader
CakeEditRoute.action = clientAction
