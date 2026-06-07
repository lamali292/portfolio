import React from "react";
import { useNavigate } from "react-router-dom";
import card from "../../assets/spotify/card.png";
import card_back from "../../assets/spotify/card_back.png";
import search1 from "../../assets/spotify/search1.png";
import search2 from "../../assets/spotify/search2.png";
import spotify from "../../assets/spotify/spotify.png";
import json from "../../assets/spotify/json.png";

import FeatureSection from "../components/FeatureSection";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Paper,
  Button,
} from "@mui/material";

const BotcPage: React.FC = () => {
  const navigate = useNavigate();

  const technologies = [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "Spotify",
    "REST-API",
  ];

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
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Typography variant="h3" fontWeight={700}>
              Webapp - Spotify Musikquiz
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ maxWidth: 800, opacity: 0.95 }}>
            Eine browserbasierte Webanwendung für das Musikratespiel Hitster.
            Die App digitalisiert das physische Kartenspiel und integriert
            Spotify für nahtlose Musikwiedergabe.
          </Typography>
        </Paper>

        {/* Technologien */}
        <Paper sx={{ p: 3, mb: 4 }}>
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

        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Hitster
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
                Hitster ist ein Musik-Ratespiel, bei dem Spieler Songs
                chronologisch in ihre persönliche Zeitlinie einordnen müssen.
                Über Spotify-Codes auf Karten werden echte Hits aus
                verschiedenen Jahrzehnten abgespielt. Wer die meisten Songs
                korrekt einordnet, gewinnt das Spiel.
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.95 }}>
                Die Spotify-App übernimmt die Musikwiedergabe automatisch über
                die gescannten Codes.
              </Typography>
            </Box>
            {/* Image with Caption */}
            <Box sx={{ width: { xs: "100%", md: "400px" } }}>
              <Box
                component="img"
                src="https://gamesweplay.de/hitster1.jpg"
                alt="Hitster Spielkarten und Timeline"
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
                Hitster Spielkarten mit Spotify-Codes
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            p: 2,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mb: 3, textAlign: "center" }}
          >
            Webapp - Spotify Musikquiz
          </Typography>

          <FeatureSection
            title="Digitale Karte im Browser"
            images={[
              {
                src: card_back,
                alt: "Rückseite der digitalen Hitster-Karte",
                caption: "Kartenrückseite (verdeckt)",
              },
              {
                src: card,
                alt: "Vorderseite der digitalen Hitster-Karte mit Songinfos",
                caption: "Aufgedeckte Karte",
              },
            ]}
            imageWidth={600}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Jede Karte wird als interaktive Webansicht dargestellt. Die
              digitale Version zeigt alle wichtigen Informationen übersichtlich
              an: Interpret/Band, Erscheinungsjahr und Songtitel.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Sobald eine neue Karte erscheint, wird automatisch der
              entsprechende Song auf dem verbundenen Spotify-Account abgespielt.
              So können Spieler den Song hören, bevor sie ihre Schätzung
              abgeben.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Mit einem Klick auf die Kartenrückseite werden die Informationen
              aufgedeckt. Ein weiterer Klick auf die aufgedeckte Karte lädt
              automatisch den nächsten Song.
            </Typography>
          </FeatureSection>
          <FeatureSection
            title="Playlist-Auswahl über Spotify"
            images={[
              {
                src: search1,
                alt: "Spotify-Suche nach 80er-Jahre Playlists",
                caption: "Suche: 80er-Jahre",
              },
              {
                src: search2,
                alt: "Spotify-Suche nach Beatles Playlists",
                caption: "Suche: Beatles",
              },
            ]}
            imageWidth={600}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Über die Suchleiste können Spieler gezielt nach Spotify-Playlists
              suchen. Die App greift dabei auf die gesamte Spotify-Bibliothek zu
              und zeigt passende Ergebnisse in Echtzeit an.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Sobald eine Playlist ausgewählt ist, werden daraus zufällig Songs
              für das Spiel gezogen. So lassen sich thematische Runden
              erstellen, zum Beispiel nur 80er-Jahre-Hits, Songs einer
              bestimmten Band oder gemischte Jahrzehnte-Playlists..
            </Typography>
          </FeatureSection>
          <FeatureSection
            title="Spotify-Integration über OAuth und API"
            images={[
              {
                src: spotify,
                alt: "Spotify OAuth Login-Bildschirm",
                caption: "Spotify-Authentifizierung",
              },
              {
                src: json,
                alt: "Aufbereitete JSON-Daten von Spotify API",
                caption: "Verarbeitete API-Daten einer Playlist",
              },
            ]}
            imageWidth={600}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die App nutzt OAuth für die sichere Authentifizierung mit Spotify.
              Nutzer melden sich einmalig mit ihrem Spotify-Account an und
              erteilen der App die notwendigen Berechtigungen für
              Playlist-Zugriff und Musikwiedergabe.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Nach erfolgreicher Authentifizierung kommuniziert die App über die
              offizielle Spotify Web API mit dem Dienst.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die empfangenen JSON-Daten werden gefiltert und strukturiert,
              sodass nur spielrelevante Informationen wie Songtitel, Interpret
              und Erscheinungsjahr angezeigt werden.
            </Typography>
          </FeatureSection>
        </Paper>

        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Code & Download
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>
            Der Quellcode und die App sind aus urheberrechtlichen Gründen nicht
            öffentlich verfügbar.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Das Projekt dient ausschließlich dem privaten Gebrauch und der
            Portfolio-Präsentation. Die Rechte an „Hitster" liegen bei Jumbo
            Spiele .
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BotcPage;
