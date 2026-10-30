export async function signin(user) {
  const response = await fetch("http://localhost:8080/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
