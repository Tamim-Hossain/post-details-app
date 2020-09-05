import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedPost from '../SelectedPost/SelectedPost';
import { Container } from '@material-ui/core';

const FullStory = () => {
    let { postId } = useParams();
    const [selectedPost, setSelectedPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setSelectedPost(data))
    })
    return (
        <Container maxWidth="sm">
            <SelectedPost selectedPost={selectedPost} />
        </Container>
    );
};

export default FullStory;