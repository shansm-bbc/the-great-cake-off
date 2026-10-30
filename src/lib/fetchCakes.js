const URL = "http://localhost:8080";

export async function fetchCakes() {
  const response = await fetch("http://localhost:8080/cakes");
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}