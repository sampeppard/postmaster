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

export const fetchPosts = (category) => {
    const ifCategories = category ? `${api}/${category}/posts` : `${api}/posts`
    return fetch(ifCategories, { headers })
        .then(res => res.json())
        .then(data => data.filter(post => !post.deleted))
}

export const fetchPost = (id) => {
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const createPost = (post) => {
    const postData = {
        ...post,
        timestamp: Date.now()
    }

    return fetch(`${api}/posts/`,
        {
            headers,
            method: "POST",
            body: JSON.stringify(postData)
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
    const postData = {
        ...post,
        timestamp: Date.now()
    }

    return fetch(`${api}/posts/${post.id}`,
        { 
            headers,
            method: "PUT",
            body: JSON.stringify(postData)
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