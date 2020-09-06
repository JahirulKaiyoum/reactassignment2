import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../Comments/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const history = useHistory();

  const handleSeeMore = () => {
    history.push(`/post/postID`);
  };

  const classes = useStyles();
  return (
   <>
    <Header></Header>
    <Container fixed>
        <Grid container spacing={1}>
          {posts.map((post) => (
            <Post post={post} handleSeeMore={handleSeeMore}></Post>
          ))}
        </Grid>
      </Container>
      </>
  );
};

export default Home;

