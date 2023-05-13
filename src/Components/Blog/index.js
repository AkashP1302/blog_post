import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { BlogPost } from "./BlogPost";
import { CreateBlogForm } from "./CreateBlogForm";

const BlogList = ({ blogPosts }) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1}>
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </Box>
  );
};

const BlogWebsite = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Demo",
      author: "Akash",
      date: "12/12/2022",
      content: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      title: "Demo-1  ",
      author: "Demo-1 ",
      date: "12/12/2022",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ]);

  const handleNewBlogPost = (newPost) => {
    setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="blog-website">
      <Typography
        variant="h4"
        component="h1"
        sx={{ display: "flex", color: "#2e2e2e", justifyContent: "center" }}
        gutterBottom
      >
        Welcome to Blog
      </Typography>
      <CreateBlogForm onPublish={handleNewBlogPost} />
      <BlogList blogPosts={blogPosts} />
    </div>
  );
};

export default BlogWebsite;
