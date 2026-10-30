import { fetchCakes } from "@/lib/fetchCakes"
import Card from "@/components/Card"
import { useLoaderData } from "react-router"

async function clientLoader() {
    return await fetchCakes()
}

export default function CakeListRoute() {
    const data = useLoaderData()
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
