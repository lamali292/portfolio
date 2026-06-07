import React from "react";
import { useNavigate } from "react-router-dom";
import main_screen from "../../assets/botc/main_screen.png";
import script_select from "../../assets/botc/script_select.png";
import script_info from "../../assets/botc/script_info.png";
import online_search from "../../assets/botc/online_search.png";
import online_search_info from "../../assets/botc/online_search_info.png";
import online_search_select from "../../assets/botc/online_search_select.png";
import grimoire from "../../assets/botc/grimoire.png";
import grimoire2 from "../../assets/botc/grimoire2.png";
import first_night from "../../assets/botc/first_night.png";
import other_nights from "../../assets/botc/other_nights.png";
import script_pdf from "../../assets/botc/script_pdf.png";
import json_import from "../../assets/botc/json_import.png";
import player_selection from "../../assets/botc/player_selection.png";

import FeatureSection from "../components/FeatureSection";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Grid,
  Paper,
  Button,
} from "@mui/material";

const BotcPage: React.FC = () => {
  const navigate = useNavigate();

  const technologies = [
    "Kotlin",
    "Jetpack Compose",
    "JSON",
    "REST-API",
    "Material Design 3",
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
              Android-App - Blood on the Clocktower
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ maxWidth: 800, opacity: 0.95 }}>
            Eine umfassende Android-App zur Unterstützung beim Spielen von Blood
            on the Clocktower. Die App ermöglicht es Spielleitern, Skript und
            Rollen zu verwalten, Spieler zu organisieren und den Spielstatus
            effizient zu verfolgen.
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
            Blood on the Clocktower
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
                Blood on the Clocktower ist aktuell das ausgereifteste Social
                Deduction Game auf dem Markt (ähnlich wie Werwolf). Eine
                informierte Minderheit (die Bösen) tritt gegen eine
                uninformierte Mehrheit (die Guten) an. Die Guten müssen die
                Bösen identifizieren und eliminieren, bevor diese die Kontrolle
                übernehmen.
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Im Gegensatz zu Werwolf besitzt jede Person eine Rolle mit
                einzigartigen Fähigkeiten. Ein "Skript" legt dabei fest, welche
                Rollen in einer Runde verfügbar sind. Diese
                Rollenzusammenstellungen variieren in Schwierigkeitsgrad und
                Mechaniken, was für hohe Wiederspielbarkeit sorgt.
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.95 }}>
                Ein Spielleiter kennt dabei alle Rollen und Fähigkeiten und
                moderiert das Spiel durch alle Phasen.
              </Typography>
            </Box>

            {/* Image with Caption */}
            <Box sx={{ width: { xs: "100%", md: "400px" } }}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Blood_on_the_Clocktower_game_in_progress.jpg"
                alt="Blood on the Clocktower game in progress"
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
                Spielleiter-Ansicht mit allen Rollenverteilungen
              </Typography>
            </Box>
          </Box>

          {/* Video Section */}
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{ mb: 3, textAlign: "center" }}
            >
              Erklärungsvideos
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
                    src="https://www.youtube.com/embed/7OjT5aLmhVQ"
                    title="Blood on the Clocktower Erklärvideo"
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
                    mt: 1,
                  }}
                >
                  Spielregeln erklärt
                </Typography>
              </Box>

              <Box>
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
                    src="https://www.youtube.com/embed/m14N28Lq-jM"
                    title="Blood on the Clocktower Gameplay"
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
                    mt: 1,
                  }}
                >
                  Beispiel-Gameplay
                </Typography>
              </Box>
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
            Android-App - BOTC
          </Typography>

          <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
              Vom physischen zum digitalen Grimoire
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.95, mb: 4 }}>
              Das Grimoire ist das zentrale Werkzeug eines Blood on the
              Clocktower Spielleiters. Im richtigen Spiel wird eine ausklappbare
              Box mit Token verwendet, um Rollen und Spielstatus zu verwalten.
              Diese App digitalisiert dieses Konzept und macht es zugänglicher
              und einfacher zu handhaben.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-start",
              }}
            >
              {/* Physical Grimoire */}
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://beckybeckyblogs.com/wp-content/uploads/botc-inside-grimoire-1024x1024.jpg"
                  alt="Physisches Blood on the Clocktower Grimoire"
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
                    mb: 2,
                  }}
                >
                  Physisches Grimoire mit Token
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Das Original-Grimoire besteht aus einer Box mit Stoffeinlagen,
                  auf denen Rollen-Token platziert werden. Zusätzliche
                  Erinnerungs-Token und Marker helfen, den Spielstatus zu
                  verfolgen.
                </Typography>
              </Box>

              {/* Digital Grimoire */}
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={grimoire2}
                  alt="Digitales Grimoire in der App"
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
                    mb: 2,
                  }}
                >
                  Digitales Grimoire in der App
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Die digitale Version bietet alle Funktionen des physischen
                  Grimoires mit zusätzlichen Features: automatische
                  Phasen-Übersichten, Rollensuche, und persistente Speicherung
                  des Spielstatus.
                </Typography>
              </Box>
            </Box>
          </Paper>

          <FeatureSection
            title="Skriptauswahl und -verwaltung"
            images={[
              {
                src: main_screen,
                alt: "Hauptbildschirm mit Skriptübersicht",
                caption: "Hauptbildschirm",
              },
              {
                src: script_select,
                alt: "Skriptauswahl mit gespeicherten Skripten",
                caption: "Skriptauswahl",
              },
              {
                src: script_info,
                alt: "Detailansicht mit allen Rolleninformationen",
                caption: "Skript-Details",
              },
            ]}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Vor jeder Spielrunde muss der Spielleiter ein Skript auswählen.
              Dabei handelt es sich um eine definierte Zusammenstellung von
              Rollen, die in dieser Partie verfügbar sind
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die App dient als zentrale Bibliothek für alle Skripte. Nutzer
              können eigene Skripte erstellen und importierte Skripte verwalten.
              Zudem können sie jederzeit auf ihre Sammlung zugreifen.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die Detailansicht bietet einen umfassenden Überblick über ein
              Skript. Alle enthaltenen Rollen werden mitsamt ihrer Fähigkeiten,
              Ausrichtung und dem Team angezeigt.
            </Typography>
          </FeatureSection>
          <FeatureSection
            title="Online-Skriptsuche und Download"
            images={[
              {
                src: online_search_select,
                alt: "Online-Skriptsuche mit Filteroptionen",
                caption: "Suchfunktion",
              },
              {
                src: online_search,
                alt: "Liste der gefundenen Skripte",
                caption: "Suchergebnisse",
              },
              {
                src: online_search_info,
                alt: "Detailansicht eines Online-Skripts",
                caption: "Skript-Vorschau",
              },
            ]}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die App integriert die REST-API von botcscripts.com, eine
              Community-Plattform mit tausenden nutzergenerierten Skripten.
              Diese werden als JSON-Daten abgerufen und in der App verarbeitet.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Nutzer können die umfangreiche Skript-Bibliothek durchsuchen und
              sich Detailinformationen zu jedem Skript anzeigen lassen.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Gefundene Skripte lassen sich mit einem Klick herunterladen und
              werden automatisch in die lokale Bibliothek importiert. So stehen
              sie auch offline zur Verfügung und können wie eigene Skripte
              verwaltet werden.
            </Typography>
          </FeatureSection>
          <FeatureSection
            title="Grimoire - Spielhilfe für Spielleiter"
            images={[
              {
                src: grimoire,
                alt: "Grimoire-Übersicht mit Spielerrollen",
                caption: "Grimoire-Hauptansicht",
              },
              {
                src: first_night,
                alt: "Ablauf der ersten Nacht",
                caption: "1. Nacht – Ablauf",
              },
              {
                src: other_nights,
                alt: "Ablauf weiterer Nächte",
                caption: "Folgenächte – Ablauf",
              },
            ]}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Das Grimoire ist das zentrale Werkzeug für Spielleiter während
              einer Partie. Hier können alle Spieler mit ihren zugewiesenen
              Rollen verwaltet werden.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Für jeden Spieler lassen sich wichtige Eigenschaften festlegen:
              Status (tot/lebendig), Ausrichtung (gut/böse), Erinnerungs-Tokens
              für spezielle Fähigkeiten und individuelle Tags.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Zusätzlich zeigt die App die skriptspezifischen Abläufe für jede
              Spielphase an. Besonders hilfreich sind die
              Nachtphasen-Übersichten, die genau vorgeben, in welcher
              Reihenfolge die Rollen aktiviert werden. Ein unverzichtbares
              Feature für komplexe Skripte.
            </Typography>
          </FeatureSection>
          <FeatureSection
            title="Weitere Funktionen"
            images={[
              {
                src: script_pdf,
                alt: "PDF-Export eines Skripts",
                caption: "Skript als PDF exportieren",
              },
              {
                src: json_import,
                alt: "JSON-Import Funktion",
                caption: "JSON-Import",
              },
              {
                src: player_selection,
                alt: "Spielerverwaltung mit Namen und Anordnung",
                caption: "Spielerauswahl",
              },
            ]}
          >
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die App bietet zusätzliche praktische Features, die den
              Spielablauf erleichtern und die Vorbereitung optimieren.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Skripte können als PDF exportiert werden, um sie vor Spielbeginn
              an alle Teilnehmer zu verteilen. So hat jeder Spieler einen
              Überblick über alle möglichen Rollen und deren Fähigkeiten.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Für fortgeschrittene Nutzer gibt es die Möglichkeit, Skripte
              direkt über JSON-Dateien zu importieren. Dies ermöglicht das
              schnelle Einbinden von Skripten aus externen Quellen.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
              Die Spielerverwaltung erlaubt das Festlegen von Spielernamen, der
              Spieleranzahl und der Sitzordnung. Diese Informationen werden im
              Grimoire übernommen.
            </Typography>
          </FeatureSection>
        </Paper>

        {/* Technische Details */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Technische Umsetzung
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Frontend
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    • <strong>Jetpack Compose</strong> für moderne, deklarative
                    UI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • <strong>Material Design 3</strong> für konsistentes Design
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Backend & API
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    • <strong>REST-API Integration</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • <strong>JSON Parsing</strong> für Datenverarbeitung
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
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
            Portfolio-Präsentation. Die Rechte an „Blood on the Clocktower"
            liegen bei The Pandemonium Institute.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BotcPage;
