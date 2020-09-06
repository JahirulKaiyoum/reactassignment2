import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Grid } from '@material-ui/core';

const Postdetails = () => {

    const { id } = useParams();

    const  [post,setPost] = useState({});

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [])

      

    return (

        < Grid container >
            <Grid item lg={12}>
                
                <h1 style={{ textAlign: 'center' }}>Post Details Of User : {id}</h1>
            <p style={{textAlign: 'center'}}> <strong>Title of post : </strong>{post.title}</p>
            <p style={{textAlign: 'center'}}> <strong>Post Details : </strong>{post.body}</p>
                
            </Grid>

            <div>
                {
                    comments.map(comment =><Comments comment={comment}></Comments> 
                    )
            }
            </div>
        </Grid>

        
           
    );
};

export default Postdetails;

