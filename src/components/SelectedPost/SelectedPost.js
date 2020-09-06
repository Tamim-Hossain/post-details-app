import React from 'react';
import { Typography, Box } from '@material-ui/core';

const SelectedPost = ({ selectedPost }) => {
    const { title, body, userId, id } = selectedPost;
   
    return (
        <div className="container">
            <div>
                    <Typography variant="body2" component="small" color="textSecondary"><Box display="flex" justifyContent="space-between" ><span>Index: {id}</span><span>User ID: {userId}</span></Box></Typography>
                    <hr />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <hr/>
            </div>
        </div>
    );
};

export default SelectedPost;