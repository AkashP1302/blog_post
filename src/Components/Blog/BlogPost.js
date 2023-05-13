import { Facebook } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FormButton from "../editors/buttonComponent";

export const BlogPost = ({ title, author, date, content }) => {
  const firstLetter = author.split("");
  const handleShare = () => {
    // Implement the sharing logic here
    // You can use external libraries or APIs to handle social media sharing
    console.log("Share button clicked");
  };
  return (
    <div className="blog-post">
      <Card sx={{ width: 400, height: 200, overflow: "auto", marginBottom: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#FFD58E" }} aria-label="recipe">
              {firstLetter[0]}
            </Avatar>
          }
          title={title}
          subheader={` Written by ${author} | Published on ${date}`}
        />
        <CardContent sx={{ maxHeight: 300, overflow: "auto" }}>
          <Typography paragraph variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<Facebook />}
            onClick={handleShare}
          />
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<TwitterIcon />}
            onClick={handleShare}
          />
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<LinkedInIcon />}
            onClick={handleShare}
          />
        </Box>
      </Card>
    </div>
  );
};
