
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

export const fetchComments = (id) => {
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data.filter(comment => !comment.deleted))
}

export const fetchComment = (id) => {
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const createComment = (comment) => {
    const commentData = {
        ...comment,
        timestamp: Date.now()
    }

    return fetch(`${api}/comments`,
        { 
            headers,
            method: "POST",
            body: JSON.stringify(commentData)
        })
        .then(res => res.json())
        .then(data => data)
}

export const deleteComment = (comment) => {
    fetch(`${api}/comments/${comment.id}`,
        {
            headers,
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => data)
}

export const updateComment = (comment) => {
    const commentData = {
        ...comment,
        timestamp: Date.now()
    }

    fetch(`${api}/comments/${comment.id}`,
        {
            headers,
            method: "PUT",
            body: JSON.stringify(commentData)
        })
        .then(res => res.json())
        .then(data => data.json())
}

export const voteComment = (id, option) => {
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: "POST",
            body: JSON.stringify({ option })
        })
        .then(res => res.json())
        .then(data => data.json())
}