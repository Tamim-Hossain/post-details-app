import React, { useState, useEffect } from 'react';
import SelectedComments from '../SelectedComments/SelectedComments';
import { useParams } from 'react-router-dom';

const Comments = () => {
    let { postId } = useParams();
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => setComments(data))
    })
    return (
        <div>
            {
            comments.map(comment=><SelectedComments comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;