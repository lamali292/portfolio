import React from "react";
import { useNavigate } from "react-router-dom";
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
import nauvis from "../../assets/downfall/selection.png";
import snecko from "../../assets/downfall/snecko.png";
import snecko2 from "../../assets/downfall/snecko2.png";
import hexaghost from "../../assets/downfall/hexaghost.png";
import awakened from "../../assets/downfall/awakened.png";
import collector from "../../assets/downfall/collector.png";
import champ from "../../assets/downfall/champ.png";
import automaton from "../../assets/downfall/automaton.png";
import encoding from "../../assets/downfall/encoding.png";
import gremlins from "../../assets/downfall/gremlins.png";
import slimeboss from "../../assets/downfall/slimeboss.png";
import guardian from "../../assets/downfall/guardian.png";
import hermit from "../../assets/downfall/hermit.png";

const Praktikum: React.FC = () => {
  const navigate = useNavigate();

  const technologies = ["C#", "Godot"];

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
            Downfall - Slay the Spire 2
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Implementierung der Charaktere aus Slay the Spire 1 Downfall für
            STS2.
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
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Bilder
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
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
            </Box>
          </Box>

          {/* Space Age Planeten */}

          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={snecko}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={snecko2}
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={hexaghost}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={awakened}
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={collector}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={champ}
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={automaton}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={encoding}
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={gremlins}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={slimeboss}
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
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={guardian}
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
            </Box>

            <Box sx={{ flex: "1 1 45%", minWidth: "300px" }}>
              <Box
                component="img"
                src={hermit}
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
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Praktikum;
