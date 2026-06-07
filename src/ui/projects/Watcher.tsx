import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Paper,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const Praktikum: React.FC = () => {
  const navigate = useNavigate();

  const technologies = ["C# .NET 9", "Godot", "Slay the Spire 2"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Button onClick={() => navigate("/portfolio")} sx={{ mb: 3 }}>
          ← Zurück
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" fontWeight={700} mb={2}>
            Slay the Spire 2 Mod - "The Watcher"
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Implementierung des originalen Charakters The Watcher aus Slay the
            Spire 1 für STS2
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Technologien
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Paper>

        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{ mb: 3, textAlign: "center" }}
            >
              Gameplay-Videos
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "800px",
                    paddingBottom: "450px",
                    height: 0,
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/PoqpDPO3UkA"
                    title="4 Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "800px",
                    paddingBottom: "450px",
                    height: 0,
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/r5F5pL5k218"
                    title="Blood on the Clocktower Gameplay"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Praktikum;
