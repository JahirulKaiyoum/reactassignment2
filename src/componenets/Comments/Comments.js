import React, { useState,useEffect } from 'react';
import comments from './comments.css'
import { Grid } from '@material-ui/core';

const Comments = (props) => {
    const { postId, id, name, email, body } = props.comment;
    
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=1';

            fetch(url)
            .then(response => response.json())
            .then(data => setPictures(data.results))
       
             //.then(data => console.log(data.results))

    }, [])
        
    return (
            
        <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item lg={2}>
            {
                pictures.map(item=><img className="commnet-img" src={item.picture.large} alt=''></img>)
            }
            </Grid>
            <Grid item lg={10}>
               
                   
               <p><strong>Name : </strong>{name}</p>
               <p><strong>Comments : </strong>{body}</p>
               <p><strong>Email : </strong>{email}</p>
               <hr></hr>
                
                 
            </Grid>
        </Grid>









        // <div className="commnet-section">
        //     <div  >
                
        //         {
        //             pictures.map(item=><img className="commnet-img" src={item.picture.large} alt=''></img>)
        //         }
        //     </div>
        //     <div>
        //         <p>{postId}</p>
        //         <p>{id}</p>
        //         <p>Name:{name}</p>
        //         <p>{email}</p>
        //         <p>{body}</p>
        //     </div>
        // </div>
    );
};

export default Comments;