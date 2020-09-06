import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedPost from '../SelectedPost/SelectedPost';
import Comments from '../Comments/Comments';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const FullStory = () => {
    let { postId } = useParams();
    const [selectedPost, setSelectedPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setSelectedPost(data))
    })
    return (
        <div className="container shadow p-3 mb-5 bg-white rounded">
            <SelectedPost selectedPost={selectedPost} />
            <h4 className="mt-5">Recent Comments <ArrowDropDownIcon /></h4>
            <Comments />
        </div>
    );
};

export default FullStory;