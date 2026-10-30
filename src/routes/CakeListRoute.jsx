import { fetchCakes } from "@/lib/fetchCakes"
import Card from "@/components/Card"
import { useLoaderData } from "react-router"

async function clientLoader() {
    try {
        return await fetchCakes()
    } catch (error) {
        console.log(error)
        return {
            error: "Die Kuchen konnten nicht geladen werden.",
        }
    }
}

export default function CakeListRoute() {
    const data = useLoaderData()
    if (data.error) {
        return <h2>{data.error}</h2>
    }
    console.log(data)
    return (
        <div className="">
            {data.map((cake) => (
                <Card
                    key={cake.id}
                    name={cake.name}
                    description={cake.text}
                    price={cake.price}
                    baker={cake.baker}
                    url={`/cakes/${cake.id}`}
                />
            ))}
        </div>
    )
}

CakeListRoute.loader = clientLoader
