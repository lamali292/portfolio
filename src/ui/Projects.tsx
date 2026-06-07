import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  category: "gaming" | "uni" | "other" | "other2";
}

const projects: Project[] = [
  {
    title: 'Android App - Spielhilfe für "Blood on the Clocktower"',
    description:
      "Digitale Spielleiter-Unterstützung mit Skript-Verwaltung, Grimoire-Tool und Community-Integration",
    tags: ["Kotlin", "Jetpack Compose", "JSON", "REST-API"],
    link: "botc",
    image: `${process.env.PUBLIC_URL}/images/botc-icon2.webp`,
    category: "other",
  },
  {
    title: "Webapp - Spotify Musikquiz",
    description: "Musik raten, wie im Spiel Hitster",
    tags: ["Python", "Flask", "HTML", "CSS", "Spotify", "REST-API"],
    link: "spotify",
    image: `${process.env.PUBLIC_URL}/images/spotify.png`,
    category: "other",
  },
  {
    title: "Masterarbeit - Port-Hamiltonian Neural Networks",
    description:
      "Physik-informiertes Machine Learning für netzwerkbasierte Systeme",
    tags: ["Python", "JAX", "numpy", "ML", "Data Science"],
    link: "master",
    image: `${process.env.PUBLIC_URL}/images/master.png`,
    category: "uni",
  },
  {
    title: "Praktikum - Numerische Optionspreisberechnung",
    description:
      "Implementierung numerischer Lösungsverfahren für die Black-Scholes-Gleichung mit Basket-Optionen",
    tags: ["C", "Numerik", "Newton-Krylov", "GMRES", "Black-Scholes"],
    link: "praktikum",
    image: `${process.env.PUBLIC_URL}/images/optionspricing.png`,
    category: "uni",
  },
  {
    title: "Project Euler",
    description: "Lösen von Problemen in projecteuler.net",
    tags: ["Rust", "Java", "Python"],
    link: "euler",
    image: `${process.env.PUBLIC_URL}/images/euler.png`,
    category: "other2",
  },
  {
    title: "Natural Language Processing - Wikipedia Artikel",
    description:
      "Ein NLP-Modell, das anhand einer vorgegebenen Texteingabe Wikipedia-Artikel vorhersagen kann.",
    tags: ["Python", "TensorFlow"],
    category: "other2",
  },
  {
    title: "Portfolio Seite",
    description: "...",
    tags: ["React", "TypeScript", "Material UI"],
    category: "other2",
  },
  {
    title: 'Slay the Spire 2 Mod - "The Watcher"',
    description:
      "Implementierung des originalen Charakters The Watcher aus Slay the Spire 1 für STS2",
    tags: ["C# .NET 9", "Godot", "Slay the Spire 2"],
    link: "watcher",
    image: "https://slaythespire.wiki.gg/images/Watcher.png?a007dd",
    category: "gaming",
  },
  {
    title: 'Slay the Spire 2 Mod - "Downfall"',
    description:
      "Implementierung der Charaktere aus Slay the Spire 1 Downfall für STS2.",
    tags: ["C# .NET 9", "Godot", "Slay the Spire 2"],
    link: "downfall",
    image: "https://slaythespiredownfall.wiki.gg/images/Site-logo.png",
    category: "gaming",
  },
  {
    title: 'Factorio Mod - "Behemoth Enemies"',
    description:
      "Implementierung der Charaktere aus Slay the Spire 1 Downfall für STS2.",
    tags: ["Lua", "Factorio"],
    link: "factorio",
    image: "https://wiki.factorio.com/images/Demolisher_big.png",
    category: "gaming",
  },
  {
    title: "Minecraft Mod - One Piece",
    description:
      "bezahlter Auftrag für einen UI- und Inhalts-Mod für einen französischen „One Piece“-Server.",
    tags: ["Java", "Minecraft", "Fabric", "JSON"],
    category: "gaming",
  },
];

const categoryConfig = {
  gaming: {
    title: "Spiele & Modifikationen",
    background: "#0f3460",
    accentColor: "#e94560",
    overlayGradient: "none",
  },
  uni: {
    title: "Projekte im Studium",
    background: "#201a52",
    accentColor: "#3b82f6",
    overlayGradient: "none",
  },
  other: {
    title: "Software & Webentwicklung",
    background: "#2d1b4e",
    accentColor: "#a855f7",
    overlayGradient: "none",
  },
  other2: {
    title: "Kleinere Softwareprojekte",
    background: "#2c5d74",
    accentColor: "#a855f7",
    overlayGradient: "none",
  },
};

interface CategorySectionProps {
  category: keyof typeof categoryConfig;
  projects: Project[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  projects,
}) => {
  const config = categoryConfig[category];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
        py: 8,
        px: 4,
      }}
    >
      {/* Background layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: config.background,
          zIndex: 0,
        }}
      />

      {/* Animated gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: config.overlayGradient,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1000 }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          sx={{
            color: "#ffffff",
            textShadow: `0 4px 20px ${config.accentColor}40`,
            textAlign: "center",
          }}
        >
          {config.title}
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const Projects: React.FC = () => {
  return (
    <Box>
      {(["other", "uni", "gaming", "other2"] as const).map((category) => {
        const categoryProjects = projects.filter(
          (p) => p.category === category,
        );
        return categoryProjects.length > 0 ? (
          <CategorySection
            key={category}
            category={category}
            projects={categoryProjects}
          />
        ) : null;
      })}
    </Box>
  );
};

export default Projects;
