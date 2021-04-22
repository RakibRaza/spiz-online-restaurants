import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../data/blogs";
import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState(data);
  return (
    <Box py={10}>
      <Typography align="center" gutterBottom variant="h4">
        Our Regular Blogs
      </Typography>
      <Typography align="center" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box my={6}>
        <Grid container justify="center" spacing={4}>
          {blogs.map((blog) => (
            <Blog key={blog.id} {...blog} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blogs;
