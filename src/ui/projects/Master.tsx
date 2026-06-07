import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import rlcEditor from "../../assets/master/editor.png";
import tiefpassTraj from "../../assets/master/tief_traj.png";
import hochpassTraj from "../../assets/master/hoch_traj.png";
import testInput from "../../assets/master/func.png";
import tiefpassOutput from "../../assets/master/tief.png";
import hochpassOutput from "../../assets/master/hoch.png";
import separateFilters from "../../assets/master/hoti_sep.png";
import combinedFilters from "../../assets/master/hoch_tief_rlc.png";
import combinedLoss from "../../assets/master/hoch_tief_loss.png";
import combinedTraj from "../../assets/master/hoch_tief_traj.png";

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

const Master: React.FC = () => {
  const navigate = useNavigate();

  const technologies = [
    "Python",
    "JAX",
    "NumPy",
    "Matplotlib",
    "Machine Learning",
    "Numerical Methods",
    "Runge-Kutta-Verfahren",
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
            borderRadius: 3,
          }}
        >
          <Typography variant="h3" fontWeight={700} mb={2}>
            Port-Hamiltonian Neural Networks
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Masterarbeit: Physik-informiertes Machine Learning für dynamische
            Systeme
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

        {/* Motivation */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Worum geht es?
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.95, mb: 2, fontSize: "1.1rem" }}
          >
            Meine Masterarbeit kombiniert{" "}
            <strong>Physik und Machine Learning</strong>, um komplexe dynamische
            Systeme wie elektrische Schaltkreise oder mechanische Schwingungen
            datenbasiert zu modellieren. Dabei bleiben wichtige physikalische
            Eigenschaften wie Energieerhaltung erhalten.
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.95, fontSize: "1.1rem" }}
          >
            Das Besondere: Einzelne Teilsysteme können separat trainiert und
            dann modular zu größeren Netzwerken kombiniert werden, ähnlich wie
            Lego-Bausteine.
          </Typography>
        </Paper>

        {/* Die Herausforderung */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Die Herausforderung
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
            Traditionelle Machine-Learning-Ansätze ignorieren oft physikalische
            Gesetze wie Energieerhaltung. Das führt zu unrealistischen
            Vorhersagen, besonders bei langfristigen Simulationen.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
            <strong>Der Ansatz:</strong> Port-Hamiltonian Neural Networks
            (pHNNs) kodieren physikalische Struktur direkt ins neuronale Netz.
            So bleiben Energieerhaltung und andere wichtige Eigenschaften
            automatisch gewahrt.
          </Typography>
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "grey.50",
              borderLeft: "4px solid",
              borderColor: "primary.main",
              borderRadius: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, mb: 1, fontStyle: "italic" }}
            >
              Diese Arbeit basiert auf dem Paper:
            </Typography>
            <Typography variant="body2" fontWeight={600} mb={0.5}>
              "Compositional Learning of Dynamical System Models Using
              Port-Hamiltonian Neural Networks"
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              C. Neary & U. Topcu (2022)
            </Typography>
            <Button
              variant="outlined"
              size="small"
              href="https://arxiv.org/pdf/2212.00893"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 1 }}
            >
              📄 Paper lesen (arXiv)
            </Button>
          </Box>
        </Paper>

        {/* Kernbeiträge */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
            Kernbeiträge meiner Arbeit
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Modulare Skalierung
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Kleine Systeme separat trainieren und zu großen Netzwerken
                  kombinieren, ohne Neutraining des Gesamtsystems
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Energieerhaltung
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Spezielle numerische Verfahren garantieren physikalisch
                  korrekte Vorhersagen über lange Zeiträume
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Reale Anwendungen
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Erfolgreich getestet an elektrischen Schaltkreisen, Filtern
                  und mechanischen Systemen
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 1, textAlign: "center" }}
          >
            Praktisches Beispiel
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, textAlign: "center", opacity: 0.9 }}
          >
            Hoch- und Tiefpassfilter modular trainieren und kombinieren
          </Typography>

          {/* Step 0: Was sind Filter? */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Was sind Hoch- und Tiefpassfilter?
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", mb: 2 }}
                >
                  Elektronische Filter sind grundlegende Bausteine der
                  Signalverarbeitung. Sie bestehen aus denselben Komponenten
                  (Widerstand, Kondensator, Spannungsquelle), unterscheiden sich
                  aber in ihrer <strong>Verschaltung</strong>:
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", mb: 1 }}
                  >
                    <strong>Tiefpassfilter:</strong> R → C → Lässt tiefe
                    Frequenzen durch, dämpft hohe
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    <strong>Hochpassfilter:</strong> C → R → Lässt hohe
                    Frequenzen durch, blockiert tiefe
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "350px" } }}>
                <Box
                  component="img"
                  src={separateFilters}
                  alt="Schaltkreise von Hoch- und Tiefpassfiltern"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Oben: Tiefpass | Unten: Hochpass
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Step 1: Einzeltraining */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Schritt 1: Einzelne Filter separat trainieren
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", mb: 3 }}>
              Zunächst werden beide Filter{" "}
              <strong>unabhängig voneinander</strong> auf jeweils 100
              Trajektorien trainiert. Die gestrichelten Linien zeigen die
              Vorhersagen des pHNN, die durchgezogenen Linien die Originaldaten.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={tiefpassTraj}
                  alt="Tiefpassfilter Training"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Tiefpass: Hohe Frequenzen werden unterdrückt
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={hochpassTraj}
                  alt="Hochpassfilter Training"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Hochpass: Tiefe Frequenzen werden unterdrückt
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, p: 2, bgcolor: "#e3f2fd", borderRadius: 1 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ color: "text.primary" }}
              >
                ✓ Perfekte Übereinstimmung: pHNN lernt beide
                Filtercharakteristiken präzise
              </Typography>
            </Box>
          </Paper>

          {/* Step 2: Generalisierung */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Schritt 2: Generalisierung auf unbekannte Signale
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", mb: 3 }}>
              Kritischer Test: Ein <strong>völlig neues Eingangssignal</strong>{" "}
              (Überlagerung von 10 Sinuswellen), das während des Trainings nie
              vorkam.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={testInput}
                  alt="Test-Eingangssignal"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Eingangssignal (unbekannt)
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={tiefpassOutput}
                  alt="Tiefpass-Ausgabe"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Tiefpass: Hohe Frequenzen gefiltert
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={hochpassOutput}
                  alt="Hochpass-Ausgabe"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Hochpass: Tiefe Frequenzen gefiltert
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, p: 2, bgcolor: "#e8f5e9", borderRadius: 1 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ color: "text.primary" }}
              >
                ✓ Perfekte Generalisierung: Beide Filter funktionieren korrekt
                auf unbekannten Signalen
              </Typography>
            </Box>
          </Paper>

          {/* Step 3: Kombination */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mb: 2, color: "text.primary" }}
            >
              Schritt 3: Systeme modular kombinieren
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary", mb: 3 }}>
              Jetzt kommt der entscheidende Schritt: Die beiden separat
              trainierten Filter werden über einen <strong>Kondensator</strong>{" "}
              verbunden. Dies erzeugt eine Kopplungsstruktur in der
              Differentialgleichung. Das verbundene Systeme kann perfekt
              nachgebildet werden. <strong>Ohne Neutraining</strong>!
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                mb: 3,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={separateFilters}
                  alt="Separate Filter"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Vorher: Zwei unabhängige Systeme
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", minWidth: 50 }}
              >
                <Typography variant="h3" sx={{ color: "primary.main" }}>
                  →
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={combinedFilters}
                  alt="Kombinierte Filter"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Nachher: Über Kondensator gekoppelt
                </Typography>
              </Box>
            </Box>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={combinedLoss}
                  alt="Verlustfunktion"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Trainingsverlust: Einzelsysteme + Gesamtsystem
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={combinedTraj}
                  alt="Kombinierte Trajektorien"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  Testdaten (dunkel) vs. Vorhersage (hell)
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ p: 2, bgcolor: "#e8f5e9", borderRadius: 1 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ color: "text.primary", mb: 0.5 }}
              >
                ✓ Modulare Kombination erfolgreich, ohne Neutraining!
              </Typography>
            </Box>
          </Paper>

          {/* Zusammenfassung */}
          <Paper
            sx={{
              p: 3,
              bgcolor: "rgba(255,255,255,0.7)",
              borderRadius: 2,
              border: "2px solid white",
            }}
          >
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Was zeigt dieses Beispiel?
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6">1.</Typography>
                <Typography variant="body1">
                  <strong>Modulares Lernen:</strong> Kleine Systeme separat
                  trainieren spart Zeit und Ressourcen
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6">2.</Typography>
                <Typography variant="body1">
                  <strong>Generalisierung:</strong> Gelernte Modelle
                  funktionieren auch auf völlig neuen Eingangsdaten
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6">3.</Typography>
                <Typography variant="body1">
                  <strong>Kompositionsfähigkeit:</strong> Systeme lassen sich
                  wie Lego-Bausteine kombinieren, die physikalische Struktur
                  bleibt erhalten
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Paper>
        {/* Fazit */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3, bgcolor: "#abe0ffff" }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
            Fazit
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.95, fontSize: "1.1rem" }}
          >
            Port-Hamiltonian Neural Networks sind ein{" "}
            <strong>vielversprechender Ansatz</strong> für die datenbasierte
            Modellierung physikalischer Systeme. Die Arbeit zeigt, dass sich
            physikalisches Wissen und Machine Learning erfolgreich kombinieren
            lassen, mit Vorteilen für Genauigkeit, Interpretierbarkeit und
            Skalierbarkeit.
          </Typography>
        </Paper>

        {/* Tool-Entwicklung */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Tool-Entwicklung: RLC-Schaltkreis-Editor
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Ich habe einen <strong>grafischen Editor</strong> mit PyQt5
                entwickelt, mit dem elektrische Schaltkreise visuell
                zusammengestellt werden können. Das System übersetzt den
                Schaltplan automatisch in mathematische Modelle (Matrizen E, J,
                R, G), die dann trainiert werden.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                Der Editor nutzt einen <strong>Node-basierten Ansatz</strong>:
                Widerstände, Kondensatoren, Spulen und Quellen werden per Drag &
                Drop verbunden. Die Inzidenzmatrix des entstehenden Graphen wird
                automatisch berechnet.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "500px" } }}>
              <Box
                component="img"
                src={rlcEditor}
                alt="RLC-Schaltkreis-Editor"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 3,
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
                Grafischer Node-Editor für RLC-Schaltkreise
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Master;
