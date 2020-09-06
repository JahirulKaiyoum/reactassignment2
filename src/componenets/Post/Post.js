import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
 import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 140,
  },
});


const Post = (props) => {
    const { id, title } = props.post;
    //const{handleSeeMore}=props.handleSeeMore
    const classes = useStyles();

    return (
       
        <Grid item lg={4}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Post By :{id}</Typography>
                <Typography variant="body2" color="textSecondary" component="p"> <strong>Title of post:</strong>{title}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/post/${id}`}><Button variant="contained" color="primary" >See more</Button></Link>
            </CardActions>
            </Card>
        </Grid>
    );
};

export default Post;
