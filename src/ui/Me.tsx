import React from "react";
import * as react from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import { SiGithub, SiLinkedin, SiXing } from "react-icons/si";
import { Mail, LucideProps } from "lucide-react";
import profileImage from "../assets/profile.png";
import { SVGProps } from "react";

// Unified icon type: Lucide or react-icons
type AnyIcon =
  | react.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
    >
  | ((props?: SVGProps<SVGSVGElement>) => React.ReactElement<SVGSVGElement>);

// Helper function to cast the icon (kept for functional compatibility)
const CastIcon = (Icon: (props?: any) => React.ReactNode): AnyIcon => {
  return (props?: SVGProps<SVGSVGElement>) => {
    const el = Icon(props);
    if (React.isValidElement(el))
      return el as React.ReactElement<SVGSVGElement>;
    return <></>;
  };
};

interface LinkItem {
  name: string;
  url: string;
  Icon: AnyIcon;
  color?: string; // Not used in this modern version, but kept for interface compatibility
  bgColor?: string; // Not used in this modern version, but kept for interface compatibility
}

// Links (using only name, url, and Icon for the modern style)
const links: LinkItem[] = [
  {
    name: "Xing",
    url: "https://www.xing.com/profile/Laurin_Liebhart",
    Icon: CastIcon(SiXing),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/laurin-liebhart-78bb84255/",
    Icon: CastIcon(SiLinkedin),
  },
  {
    name: "GitHub",
    url: "https://github.com/lamali292",
    Icon: CastIcon(SiGithub),
  },
  { name: "Mail", url: "mailto:laurin@familie-liebhart.de", Icon: Mail },
];

const Me: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight="50vh" // Nutzen Sie die volle Höhe des Viewports
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={theme.palette.grey[50]} // Sehr dezenter Hintergrund
      p={4}
    >
      <Stack
        spacing={3}
        alignItems="center"
        textAlign="center"
        maxWidth={480}
        // Zentrales Card-Design
        p={{ xs: 3, md: 5 }}
        borderRadius={4}
        bgcolor="background.paper" // Weiße Karte
        boxShadow={theme.shadows[10]} // Sanfter, moderner Schatten
        border={`1px solid ${theme.palette.grey[200]}`} // Dezente Umrandung
      >
        {/* AVATAR */}
        <Avatar
          src={profileImage}
          alt="Laurin Liebhart"
          sx={{
            width: 120, // Etwas kleiner für Eleganz
            height: 120,
            transition: "transform 0.3s",
            border: `4px solid ${theme.palette.primary.main}`, // Farbiger Rand für Akzent
            "&:hover": {
              transform: "scale(1.08)", // Dezenterer Hover-Effekt
              boxShadow: theme.shadows[4],
            },
          }}
        />

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            background: "#4f46e5",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 0.5,
          }}
        >
          Laurin Liebhart
        </Typography>

        <Typography variant="h6" color="text.primary" fontWeight={500} mb={1}>
          M. Sc. Mathematik | TU Braunschweig
        </Typography>

        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ maxWidth: 900, mb: 2, lineHeight: 1.6 }}
        >
          Mathestudent mit Schwerpunkten in Numerik, Analysis und Machine
          Learning. Programmierkenntnisse in Java, Python, C#, Kotlin, Matlab, C
          und Rust.
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          flexWrap="wrap"
          justifyContent="center"
        >
          {links.map(({ name, url, Icon }) => (
            <Link key={name} href={url} target="_blank" underline="none">
              <Button
                startIcon={<Icon width={20} height={20} />}
                variant="outlined"
                color="primary"
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  borderColor: theme.palette.grey[300],
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    bgcolor: theme.palette.primary.light + "10",
                  },
                }}
              >
                {name}
              </Button>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Me;
