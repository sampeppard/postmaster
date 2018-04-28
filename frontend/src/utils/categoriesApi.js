const api = "http://localhost:3001"

const token = localStorage.token
if (!token) {
    token = Math.random().toString(36).substr(-8)
}

const headers = {
    'Authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getCategories = () => {
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
}
