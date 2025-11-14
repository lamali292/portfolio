import React from "react";
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Stack, 
  Chip, 
  Box,
  useTheme 
} from "@mui/material";

// ProjectCard props
interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; // optional image
  tags?: string[]; // optional tags
}

// Reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        p: 0,
        borderRadius: 4, // <-- This value is 4
        
        // --- Glassy Apple Look ---
        bgcolor: 'rgba(255, 255, 255, 0.4)', 
        backdropFilter: 'blur(10px) saturate(180%)', 
        WebkitBackdropFilter: 'blur(10px) saturate(180%)', 
        
        border: '1px solid rgba(255, 255, 255, 0.18)', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)', 

        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: theme.palette.primary.main, 
        },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ 
            width: '100%', 
            objectFit: 'cover', 
            // FIXED: Using the number 4 directly to match the Card's borderRadius.
            // theme.shape.borderRadius * 4 / 4 was causing the TS error.
            borderTopLeftRadius: 4, 
            borderTopRightRadius: 4,
          }}
        />
      )}
      
      <CardContent sx={{ p: 3 }}>
        
        {/* TAGS (Category) - Muted & Refined */}
        {tags && tags.length > 0 && (
          <Box mb={1.5}> 
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {tags.map((tag) => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  size="small" 
                  variant="outlined"
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.4)', 
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    marginBottom: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    backdropFilter: 'blur(2px)', 
                    WebkitBackdropFilter: 'blur(2px)',
                  }} 
                />
              ))}
            </Stack>
          </Box>
        )}

        {/* TITLE - Clean & Readable */}
        <Typography 
          variant="h5"
          fontWeight={600} 
          gutterBottom 
          sx={{ color: 'text.primary' }}
        >
          {title}
        </Typography>
        
        {/* DESCRIPTION - Light & Airy */}
        <Typography 
          variant="body1"
          color="text.secondary" 
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default ProjectCard;