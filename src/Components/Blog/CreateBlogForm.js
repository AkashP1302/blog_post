import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import TextInput from "../editors/TextInput";
import FormButton from "../editors/buttonComponent";

export const CreateBlogForm = ({ onPublish }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePublish = () => {
    if (title && author && content) {
      const newPost = {
        title,
        author,
        date: new Date().toLocaleDateString(),
        content,
      };
      onPublish(newPost);
      setTitle("");
      setAuthor("");
      setContent("");
    } else {
      alert("Please enter titlr, author and content");
    }
  };

  return (
    <div className="create-blog-form">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="50%"
        mx="auto"
        bgcolor="#fff"
        padding="20px"
        borderRadius="20px"
        height={"250px"}
      >
        {" "}
        <TextInput
          inputLabelStyle={{
            top: "-13px",
            color: "#2f4f4f",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          label="Title"
          placeholder="Enter title"
          id="title"
          name="title"
          value={title}
          type="text"
          inputStyle={{
            fontWeight: 500,
            fontSize: "15px",
            fontFamily: "Poppins",
            opacity: "0.75",
            color: "rgba(0, 0, 0, 0.87)",
          }}
          inputProps={{
            tabIndex: "1",
          }}
          formStyle={{ width: "100%", marginBottom: 20 }}
          onChange={handleTitleChange}
        />
        <TextInput
          inputLabelStyle={{
            top: "-10px",
            color: "#2f4f4f",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          label="Author"
          placeholder="Enter author"
          id="author"
          name="author"
          value={author}
          type="text"
          inputStyle={{
            fontWeight: 500,
            fontSize: "15px",
            fontFamily: "Poppins",
            opacity: "0.75",
            color: "rgba(0, 0, 0, 0.87)",
          }}
          formStyle={{ width: "100%", marginBottom: 20 }}
          onChange={handleAuthorChange}
        />
        <TextInput
          inputLabelStyle={{
            top: "-13px",
            color: "#2f4f4f",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          label="Content"
          placeholder="Enter content"
          id="content"
          name="content"
          value={content}
          type="text"
          inputStyle={{
            fontWeight: 500,
            fontSize: "15px",
            fontFamily: "Poppins",
            opacity: "0.75",
            color: "rgba(0, 0, 0, 0.87)",
          }}
          formStyle={{ width: "100%" }}
          onChange={handleContentChange}
        />
        <FormButton
          label="Publish Blog Post"
          type="submit"
          style={{
            background: "#FFD58E",
            borderRadius: "35.5px",
            marginTop: "20px",
            width: "50%",
            height: "46px",
            color: "#2F4F4F",
            fontWeight: "500",
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handlePublish}
        />
      </Box>
    </div>
  );
};
