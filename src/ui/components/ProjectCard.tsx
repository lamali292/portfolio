import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Box,
  useTheme,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  const theme = useTheme();

  const cardContent = (
    <Card
      sx={{
        p: 0,
        borderRadius: 5,
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.45)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <Stack direction="row" sx={{ height: "100%" }}>
        {image && (
          <Box sx={{ p: 2 }}>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                width: 120, // Fixed width for icon area
                minWidth: 120, // Prevent shrinking
                height: 120,
                minHeight: 120,
                objectFit: "cover",
                filter: "brightness(0.9)",
              }}
            />
          </Box>
        )}
        <CardContent sx={{ p: 3, flex: 1 }}>
          {/* TITLE BLOCK */}
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{
              background: " #000000ff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>
          {/* TAGS */}
          {tags && tags.length > 0 && (
            <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontWeight: 800,
                    borderRadius: 2,
                    backdropFilter: "blur(6px)",
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                />
              ))}
            </Stack>
          )}
          {/* DESCRIPTION */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7, fontSize: "0.95rem" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
  if (link) {
    return (
      <Link
        to={`/portfolio/projects/${link}`}
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </Link>
    );
  }
  return cardContent;
};

export default ProjectCard;
