import { redirect, useLoaderData, useNavigate } from "react-router"
import CakeForm from "@/components/CakeForm"
import { fetchCakeByIDd, updateCake } from "@/lib/fetchCakes"

async function clientLoader({ params }) {
    return await fetchCakeByIDd(params.id)
}

async function clientAction({ request, params }) {
    const formData = await request.formData()
    const cake = Object.fromEntries(formData)
    cake.id = params.id

    try {
        await updateCake(cake)

        return redirect(`/cakes/${params.id}`)
    } catch (error) {
        console.log(error)
        throw new Error("Der Kuchen konnte nicht gespeichert werden.")
    }
}

export default function CakeEditRoute() {
    const data = useLoaderData()
    const navigate = useNavigate()
    return (
        <>
            <h2>Kuchen Bearbeiten:</h2>
            <CakeForm cake={data} />
        </>
    )
}

CakeEditRoute.loader = clientLoader
CakeEditRoute.action = clientAction
