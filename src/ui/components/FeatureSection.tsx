// FeatureSection.tsx
import { Paper, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

interface FeatureSectionProps {
  title: string;
  children: ReactNode;
  images: ImageData[];
  imageWidth?: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  children,
  images,
  imageWidth = 600,
}) => {
  return (
    <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Text Content - Left Side */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            {title}
          </Typography>
          {children}
        </Box>

        {/* Images - Right Side (side by side) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Keep row for side-by-side
            gap: 3,
            width: { xs: "100%", md: `${imageWidth}px` },
          }}
        >
          {images.map((image, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              {" "}
              {/* Added flex: 1 for equal width */}
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 2,
                  mb: 1,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.7,
                  fontStyle: "italic",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {image.caption}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default FeatureSection;
