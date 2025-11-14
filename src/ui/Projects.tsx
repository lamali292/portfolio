import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "Android App - Spielhilfe für \"Blood on the Clocktower\"",
    description: "Analyse komplexer mathematischer Probleme",
    tags: ["Kotlin", "Jetpack Compose", "JSON", "REST-API"],
  },{
    title: "Webapp - Musikquiz",
    description: "Analyse komplexer mathematischer Probleme",
    tags: ["Python", "Flask", "HTML", "CSS", "Spotify", "REST-API"],
  },{
    title: "Masterarbeit - Port-Hamiltonian Neural Networks",
    description: "Kompiliertes Tool zur Datenanalyse",
    tags: ["Python", "JAX", "numpy", "ML", "Data Science"],
  },{
    title: "Natural Language Processing - Wikipedia Artikel",
    description: "Kompiliertes Tool zur Datenanalyse",
    tags: ["Python", "TensorFlow"],
  },{
    title: "Project Euler",
    description: "Kompiliertes Tool zur Datenanalyse",
    tags: ["Rust", "Java", "Python"],
  },{
    title: "Portfolio Seite",
    description: "...",
    tags: ["React", "TypeScript", "Material UI"],
  },{
    title: "Minecraft Mod - One Piece",
    description: "Analyse komplexer mathematischer Probleme",
    tags: ["Java", "Minecraft", "Fabric", "JSON"],
  },{
    title: "Factorio Mod - \"Behemoth Enemies\"",
    description: "Analyse komplexer mathematischer Probleme",
    tags: ["Lua", "Factorio"],
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#e0f7fa"
      p={4}
    >
      <Typography variant="h4" fontWeight={700} mb={4}>
        Projekte
      </Typography>

      <Stack spacing={3} width="100%" maxWidth={800}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
