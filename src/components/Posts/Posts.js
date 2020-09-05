import React, { useState, useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';
import { Grid, Container } from '@material-ui/core';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <Container fixed m={3}>
            <Grid container item xs={12} spacing={3} justify="center">
                {
                    posts.map(post => <PostDetails post={post} key={post.id} />)
                }
            </Grid>
        </Container>
    );
};

export default Posts;