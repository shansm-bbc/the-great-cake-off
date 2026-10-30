import { fetchCakeByIDd, deleteCake as deleteCake } from "@/lib/fetchCakes"
import LinkButton from "@/components/LinkButton"
import { useLoaderData, useNavigate, useParams } from "react-router"
import ButtonGroup from "@/components/ButtonGroup"
import Button from "@/components/Button"

async function clientLoader({ params }) {
    return await fetchCakeByIDd(params.id)
}

export default function CakeDeteilRoute() {
    const params = useParams()
    const data = useLoaderData()
    const navigate = useNavigate()

    const removeCake = async () => {
        if (confirm("Soll ich den Kuchen wirklich löschen?")) {
            try {
                await deleteCake(params.id)
                navigate("/")
            } catch (error) {
                console.error(error)
                alert("Ein Fehler ist aufgetreten.")
            }
        }
    }

    return (
        <>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <br />
            <ButtonGroup>
                <LinkButton to={"/"} children={"Zurück"} secondary={true} />
                <LinkButton
                    to={`/chronicles/${params.id}/edit`}
                    children={"Bearbeiten"}
                    secondary={true}
                />
                <Button danger={true} onClick={removeCake}>
                    Löschen
                </Button>
            </ButtonGroup>
        </>
    )
}

CakeDeteilRoute.loader = clientLoader
