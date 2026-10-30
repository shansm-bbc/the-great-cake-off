import { fetchCakeByIDd, deleteCake as deleteCake, createComment } from "@/lib/fetchCakes"
import LinkButton from "@/components/LinkButton"
import { redirect, useActionData, useLoaderData, useNavigate, useParams } from "react-router"
import ButtonGroup from "@/components/ButtonGroup"
import CommentForm from "@/components/CommentForm"
import { useCurrentUser } from "@/lib/session"
import { validateComment } from "@/lib/validateComment"
import Button from "@/components/Button"

async function clientLoader({ params }) {
    const data = await fetchCakeByIDd(params.id)
    console.log("Data:" + data)
    return data
}

async function clientAction({ request, params }) {
    const formData = await request.formData()
    const comment = Object.fromEntries(formData)
    const { errors, isValid } = validateComment(comment)
    if (!isValid) {
        return errors
    }
    await createComment(params.id, comment)
    return redirect(`/cakes/${params.id}`)
}

export default function CakeDeteilRoute() {
    const params = useParams()
    const data = useLoaderData()
    const user = useCurrentUser()
    console.log(data)
    const navigate = useNavigate()
    const errors = useActionData()

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
                        <p key={comment.id}>
                            {comment.author.firstname} {comment.author.lastname}:{" "}
                            {comment.commentText}
                        </p>
                    ))
                ) : (
                    <p>There are no comments about this cake</p>
                )}
                <br />
                {user && (
                    <>
                        <h2>Create / Add Comment:</h2>
                        <CommentForm errors={errors} />
                    </>
                )}
            </div>
            <br />
            <ButtonGroup>
                <LinkButton to={"/"} children={"Zurück"} secondary={true} />
                {data?.baker.id === user?.id ? (
                    <>
                        <LinkButton
                            to={`/cakes/${params.id}/edit`}
                            children={"Bearbeiten"}
                            secondary={true}
                        />
                        <Button danger={true} onClick={removeCake}>
                            Löschen
                        </Button>
                    </>
                ) : (
                    ""
                )}
            </ButtonGroup>
        </>
    )
}

CakeDeteilRoute.loader = clientLoader
CakeDeteilRoute.action = clientAction
