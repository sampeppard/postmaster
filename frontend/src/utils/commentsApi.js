
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

export const fetchComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())


export const createComment = (comment, commentData) =>
    fetch(`${api}/comments`,
        { 
            headers,
            method: "POST",
            body: JSON.stringify(commentData)
        })
        .then(res => res.json())
        .then(data => data)

export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: "DELETE",
            body: JSON.stringify(id)
        })
        .then(res => res.json())

export const updateComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`,
        {
            headers,
            method: "PUT",
            body: JSON.stringify(comment)
        })
        .then(res => res.json())

export const voteComment = (id, vote) =>
    fetch(`${api}/comments/${id}`,
        {
            headers,
            method: "POST",
            body: JSON.stringify({ option: vote })
        })
        .then(res => res.json())