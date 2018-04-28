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

export const fetchPosts = (category) => {
    const ifCategories = category ? `${api}/${category}/posts` : `${api}/posts`
    fetch(ifCategory, { headers })
        .then(res => res.json())
        .then(data => data.filter(post => !post.deleted))
}

export const fetchPost = (id) => {
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const createPost = (post) => {
    fetch(`${api}/posts/`,
        {
            headers,
            method: "POST",
            body: JSON.stringify({ post })
        })
        .then(res => res.json())
        .then(data => data)
}

export const deletePost = (post) => {
    fetch(`${api}/posts/${post.id}`,
        {
            headers,
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => data)
}

export const updatePost = (post) => {
    fetch(`${api}/posts/${post.id}`,
        { 
            headers,
            method: "PUT",
            body: JSON.stringify({ post })
        })
        .then(res => res.json())
        .then(data => data)
}

export const votePost = (id, option) => {
    fetch(`${api}/posts/${id}`,
        { 
            headers,
            method: "POST",
            body: JSON.stringify({ option })
        })
        .then(res => res.json())
        .then(data => data)
}