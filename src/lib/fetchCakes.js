import { getJWTToken } from "./session"

export async function fetchCakes() {
    const response = await fetch("http://localhost:8080/cakes")
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function fetchCakeByIDd(id) {
    const response = await fetch("http://localhost:8080/cakes/" + id)
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
    const data = await response.json()
    return data
}

export async function createCake(cake) {
    const response = await fetch("http://localhost:8080/cakes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getJWTToken()}`,
        },
        body: JSON.stringify(cake),
    })
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
    const data = response.json()
    return data
}

export async function updateCake(cake) {
    const response = await fetch(`http://localhost:8080/cakes/${cake.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getJWTToken()}`,
        },
        body: JSON.stringify(cake),
    })
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
    const data = response.json()
    return data
}

export async function deleteCake(id) {
    const response = await fetch(`http://localhost:8080/cakes/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${getJWTToken()}`,
        },
    })
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
}

export async function createComment(id, comment) {
    const commentText = comment.comment
    const response = await fetch(`http://localhost:8080/comments/cake/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getJWTToken()}`,
        },
        body: JSON.stringify({ commentText: commentText }),
    })
    if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`)
    }
    const data = response.json()
    return data
}
