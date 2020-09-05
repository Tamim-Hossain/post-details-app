import React from 'react';
import { Card, CardActionArea, CardContent, Typography, makeStyles, Box } from '@material-ui/core';

const SelectedPost = ({ selectedPost }) => {
    const { title, body, userId, id } = selectedPost;
    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
        },
        media: {
            height: 200,
        },
    });
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" component="small" color="textSecondary"><Box display="flex" justifyContent="space-between" ><span>User ID: {userId}</span><span>Post ID: {id}</span></Box></Typography>
                    <hr/>
                    <Typography gutterBottom variant="h4" component="h2">{title}</Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{body}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SelectedPost;