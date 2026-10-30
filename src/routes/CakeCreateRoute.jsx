import { redirect, useActionData, useNavigate } from "react-router"
import CakeForm from "@/components/CakeForm"

async function clientAction({ request, params }) {
    const formData = await request.formData()
    const chronicle = Object.fromEntries(formData)

    const { errors, isValid } = validateChronicle(chronicle)
    if (!isValid) {
        return errors
    }

    await createChronicle(chronicle)
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
