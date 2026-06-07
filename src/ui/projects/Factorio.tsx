import React from "react";
import { useNavigate } from "react-router-dom";
import nauvis from "../../assets/factorio/nauvis.png";
import gleba from "../../assets/factorio/gleba.png";
import vulcanus from "../../assets/factorio/vulcanus.png";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Paper,
  Button,
  Divider,
  Link,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const Factorio: React.FC = () => {
  const navigate = useNavigate();

  const technologies = ["Lua", "Factorio Modding API", "Git"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Button onClick={() => navigate("/portfolio")} sx={{ mb: 3 }}>
          ← Zurück zu Projekten
        </Button>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight={700} mb={2}>
            Behemoth Enemies Mod
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 2 }}>
            Erweitert Space Age um die fehlende vierte Gegnerstufe
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Über 9.000 Downloads auf{" "}
            <Link
              href="https://mods.factorio.com/mod/behemoth-enemies"
              target="_blank"
              sx={{ color: "white", textDecoration: "underline" }}
            >
              mods.factorio.com
            </Link>
          </Typography>
        </Paper>

        {/* Technologien */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Verwendete Technologien
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{ fontSize: "1rem", py: 2 }}
              />
            ))}
          </Stack>
        </Paper>

        {/* Factorio Beschreibung */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Über Factorio
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
              mb: 3,
            }}
          >
            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Factorio ist ein Aufbauspiel, in dem man Fabriken konstruiert
                und optimiert. Nach der Bruchlandung auf einem fremden Planeten
                musst du Ressourcen abbauen, Technologien erforschen und eine
                immer komplexere Industrieanlage aufbauen, um letztendlich eine
                Rakete zu konstruieren und zu entkommen.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Das Herzstück des Spiels ist die Automatisierung: Von einfachen
                Förderbändern bis zu komplexen Logistik-Netzwerken mit Zügen und
                Robotern. Jede Produktionskette muss durchdacht werden,
                angefangen beim Rohstoffabbau über die Verarbeitung bis zum
                Endprodukt. Die einheimische Fauna sieht deine Verschmutzung
                allerdings nicht gern.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.95 }}>
                Dank des umfangreichen Modding-Supports und der
                Multiplayer-Funktionalität bietet Factorio nahezu endlose
                Möglichkeiten zur Optimierung und Entfaltung der Kreativität.
              </Typography>
            </Box>

            {/* Image with Caption */}
            <Box sx={{ width: { xs: "100%", md: "400px" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "400px",
                  paddingBottom: "225px",
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
                  src="https://www.youtube.com/embed/J8SBp4SyvLc"
                  title="Factorio Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.7,
                  fontStyle: "italic",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Factorio-Trailer
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            Space Age DLC
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Space Age ist die erste große Erweiterung für Factorio, die das
                Spiel in neue Dimensionen führt. Das Abenteuer beginnt erst
                richtig, nachdem du deine erste Rakete gebaut hast. Nun reist
                man zu fremden Planeten, die jeweils einzigartige Ressourcen,
                Herausforderungen und Technologien bieten, die es zu meistern
                gilt.
              </Typography>
            </Box>

            {/* Video */}
            <Box sx={{ width: { xs: "100%", md: "400px" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "400px",
                  paddingBottom: "225px",
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
                  src="https://www.youtube.com/embed/OiczN-8QKDA"
                  title="Factorio Space Age Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.7,
                  fontStyle: "italic",
                  display: "block",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                Factorio Space Age Trailer
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Planet Vergleiche */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Problem & Lösung
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ flex: "1 1 45%", minWidth: "300px", mb: 3 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Das Problem:</strong> Im Standard Factorio (ohne Space
                Age) gibt es 4 Gegnerstufen:
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography variant="body2">• Klein (Small)</Typography>
                <Typography variant="body2">• Mittelgroß (Medium)</Typography>
                <Typography variant="body2">• Groß (Big)</Typography>
                <Typography variant="body2">
                  • <strong>Riesig (Behemoth)</strong>
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                In der Space Age Erweiterung wurden jedoch nur 3 Stufen
                implementiert. Die mächtigsten Behemoth-Gegner fehlen auf den
                neuen Planeten.
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Meine Lösung:</strong> Die "Behemoth Enemies" Mod fügt
                die fehlende vierte Gegnerstufe für alle Space Age Planeten
                hinzu:
              </Typography>
              <Box sx={{ pl: 3 }}>
                <Typography variant="body2">
                  • Behemoth Pentapods für Gleba
                </Typography>
                <Typography variant="body2">
                  • Behemoth Demolishers für Vulcanus
                </Typography>
              </Box>
            </Box>

            {/* Nauvis Image on the right */}
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={nauvis}
                alt="Nauvis mit allen Gegnerstufen"
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
                Nauvis (Hauptplanet) - Bereits alle 4 Stufen vorhanden: Klein,
                Mittelgroß, Groß, Riesig
              </Typography>
            </Box>
          </Box>

          {/* Space Age Planeten */}

          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={gleba}
                alt="Planet Gleba"
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
                Gleba - Vanilla: nur 3 Stufen hinzugefügt
              </Typography>
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={vulcanus}
                alt="Planet Vulcanus"
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
                Vulcanus - Vanilla: nur 3 Stufen hinzugefügt
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #FF6B00 0%, #FF9500 100%)",
            color: "white",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 3, textAlign: "center" }}
          >
            Behemoth Enemies Mod
          </Typography>

          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.95)",
              borderRadius: 2,
              p: 3,
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Größenvergleich der Gegnertypen
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Das Bild zeigt die neu hinzugefügten Behemoth-Varianten für alle
              Space Age Planeten. Daneben sind zum Vergleich die drei kleineren
              Stufen (Klein, Mittel, Groß) dargestellt.
            </Typography>

            <Box
              component="img"
              src="https://assets-mod.factorio.com/assets/e5eb20545df8be41b565acd69509b88bdce815b7.png"
              alt="Behemoth Enemies Größenvergleich - alle Gegnertypen"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              href="https://github.com/lamali292/behemoth-enemies"
              target="_blank"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
              startIcon={<CodeIcon />}
            >
              GitHub Repository
            </Button>

            <Button
              variant="contained"
              href="https://mods.factorio.com/mod/behemoth-enemies"
              target="_blank"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
              startIcon={<DownloadIcon />}
            >
              Mod Portal (9000+ Downloads)
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Factorio;
