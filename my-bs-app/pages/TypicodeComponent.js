import { useEffect, useState } from "react"

// see https://jsonplaceholder.typicode.com/guide/

const Typicode = () => {
    const [postId, setPostId] = useState(1)
    const [newPost, setNewPost] = useState({ title: 'foo', body: 'bar' })
    const [newPostFlag, setNewPostFlag] = useState(0)
    useEffect(() => {
        const fetchOnePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then((response) => response.json())
                .then((json) => console.log(`One Post:`, json));
        }
        fetchOnePost()
    }, [postId])

    useEffect(() => {
        const fetchAllPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => console.log(`All Posts:`, json));
        }
        fetchAllPosts()
    }, [])

    useEffect(() => {
        const createPost = () => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: `${newPost.title}`,
                    body: `${newPost.body}`,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(`New Post:`, json));

        }
        if (newPostFlag > 0) { // can we avoid making the call on component mount?
            createPost()
        }
    }, [newPostFlag])

    useEffect(() => {
        const updatePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: `${newPost.title}`,
                    body: `${newPost.body}`,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(`Post Updated:`, json))
        }
        updatePost()
    }, [])

    useEffect(() => {
        const deletePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            });
        }
        deletePost()
    }, [])

    useEffect(() => {
        const seePostComments = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then((response) => response.json())
                .then((json) => console.log(`Post Comments:`, json));
        }
        seePostComments()
        // The available nested routes are:
        // /posts/1/comments
        // /albums/1/photos
        // /users/1/albums
        // /users/1/todos
        // /users/1/posts
    }, [])

    return (
        <>
            <h2>Using Fetch to GET, POST, UPDATE and DELETE over API</h2>
            <h3>See console, and remember these results are asynchronous</h3>
            <button onClick={() => { setPostId(postId + 1) }}>Post {postId}</button>
            <input placeholder="Title" value={newPost.title} onChange={(e) => { setNewPost({ ...newPost, title: e.target.value }) }} />
            <input placeholder="Body" value={newPost.body} onChange={(e) => { setNewPost({ ...newPost, body: e.target.value }) }} />
            {/* increment the flag thereby triggering an effect */}
            <button onClick={() => { setNewPostFlag(newPostFlag + 1) }}>Post new Post</button>
            {/* The following buttons do nothing yet... */}
            <button>Update Posts</button>
            <button>Delete Posts</button>
            <button>Posts and Comments</button>
        </>
    )

}
export default Typicode