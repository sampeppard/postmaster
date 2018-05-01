const api = "http://localhost:3001"

let token = localStorage.token
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const fetchPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const fetchPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())

export const createPost = (post, postData) => 
    fetch(`${api}/posts/`,
        {
            headers,
            method: "POST",
            body: JSON.stringify(postData)
        })
        .then(res => res.json())

export const deletePost = (id) => 
    fetch(`${api}/posts/${id}`,
        {
            headers,
            method: "DELETE",
        })

export const updatePost = (id, post) =>
    fetch(`${api}/posts/${id}`,
        { 
            headers,
            method: "PUT",
            body: JSON.stringify(post)
        })
        .then(res => res.json())

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`,
        { 
            headers,
            method: "POST",
            body: JSON.stringify({ option })
        })
        .then(res => res.json())
        .then(data => data)