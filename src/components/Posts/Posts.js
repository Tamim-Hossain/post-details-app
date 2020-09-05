import React, { useState, useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <PostDetails post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;