import { fetchCakes } from "@/lib/fetchCakes";

async function clientLoader() {
  return await fetchCakes();
}

export default function CakeListRoute() {
  return (
    <div>CakeList</div>
  );
}

CakeListRoute.loader = clientLoader;
