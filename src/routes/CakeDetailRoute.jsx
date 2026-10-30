import { fetchCakeByIDd, deleteCake as deleteCake } from "@/lib/fetchCakes"
import LinkButton from "@/components/LinkButton"
import { useLoaderData, useNavigate, useParams } from "react-router"
import ButtonGroup from "@/components/ButtonGroup"

async function clientLoader({ params }) {
    return await fetchCakeByIDd(params.id)
}

export default function CakeDeteilRoute() {
    const params = useParams()
    const data = useLoaderData()
    console.log(data)
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
            <h2>{data.name}</h2>
            <p>Flavor: {data.flavor}</p>
            <p>Preis: {data.price} CHF</p>
            <p></p>
            <p>Description: {data.description}</p>
            <br />
            <h2>Comments:</h2>
            <div className="">
                {data.comments ? (
                    data.comments.map((comment) => (
                        <p>
                            {comment.author.firstname} {comment.author.lastname}:{" "}
                            {comment.commentText}
                        </p>
                    ))
                ) : (
                    <p>There are no comments about this cake</p>
                )}
            </div>
            <ButtonGroup>
                <LinkButton to={"/"} children={"Zurück"} secondary={true} />
                <LinkButton
                    to={`/cakes/${params.id}/edit`}
                    children={"Bearbeiten"}
                    secondary={true}
                />
            </ButtonGroup>
        </>
    )
}

CakeDeteilRoute.loader = clientLoader
