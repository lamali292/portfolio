import React from "react";
import { useNavigate } from "react-router-dom";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Grid,
  Paper,
  Button,
  Divider,
} from "@mui/material";

const Euler: React.FC = () => {
  const navigate = useNavigate();

  const technologies = ["Java", "Rust", "Python", "Mathematica", "Matlab"];

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
            Project Euler
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Lösen von Problemen in projecteuler.net
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
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            🧮 Was ist Project Euler?
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Project Euler</strong> ist eine Sammlung von fast 1000
            anspruchsvollen mathematischen und algorithmischen Problemen, die
            sowohl mathematisches Verständnis als auch Programmierkenntnisse
            erfordern.
          </Typography>

          {/* Why solve them */}
          <Box sx={{ p: 3, bgcolor: "#b4ddffff", borderRadius: 2, mb: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              🎯 Warum Project Euler lösen?
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" mb={1}>
                  ✓ <strong>Mathematisches Denken</strong> trainieren
                </Typography>
                <Typography variant="body2" mb={1}>
                  ✓ <strong>Problem-Solving</strong> auf höchstem Niveau
                </Typography>
                <Typography variant="body2">
                  ✓ <strong>Optimierung</strong> über Code hinaus
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" mb={1}>
                  ✓ Neue <strong>mathematische Konzepte</strong> lernen
                </Typography>
                <Typography variant="body2" mb={1}>
                  ✓ <strong>Elegante Lösungen</strong> statt Brute Force
                </Typography>
                <Typography variant="body2">
                  ✓ Tiefes Verständnis von <strong>Algorithmen</strong>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="h6" fontWeight={600} mb={2}>
            Was macht es besonders?
          </Typography>

          <Typography variant="body2" paragraph>
            Im Vergleich zu anderen Problemseiten (wie z.B. LeetCode) geht es um
            wesentlich komplexere mathematische Aufgaben. Klassische
            Optimierungen wie Binary Search oder Dynamic Programming reichen
            nicht aus, die Probleme haben oft eine Größenordnung von{" "}
            <TeX math="O(10^{20})" />. Stattdessen sind tiefgreifende
            mathematische Lösungsansätze gefragt: analytische Methoden,
            zahlentheoretische Tricks oder stochastische Optimierungen.
          </Typography>

          {/* Community & Resources */}
          <Typography variant="h6" fontWeight={600} mb={2}>
            Community & Ressourcen
          </Typography>

          <Typography variant="body2" paragraph>
            Nach dem Lösen eines Problems erhältst du Zugang zum offiziellen
            Forum, wo du andere Lösungsansätze sehen und diskutieren kannst. Das
            ist oft genauso lehrreich wie das Problem selbst!
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="outlined"
              href="https://projecteuler.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 projecteuler.net
            </Button>
            <Button
              variant="outlined"
              href="https://projecteuler.net/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 About Project Euler
            </Button>
          </Box>
        </Paper>
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            💼 Warum Project Euler im Portfolio?
          </Typography>

          <Typography variant="body1" paragraph>
            Mit über <strong>150 gelösten Problemen</strong> gehöre ich zu den{" "}
            <strong>Top 0,5%</strong> aller Project Euler Teilnehmer weltweit.
            Diese Platzierung zeigt meine ausgereiften Fähigkeiten in:
          </Typography>

          <Grid container spacing={2} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                variant="outlined"
                sx={{ p: 2, height: "100%", textAlign: "center" }}
              >
                <Box sx={{ fontSize: "2rem", mb: 1 }}>🧮</Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Mathematik
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Zahlentheorie, Analysis, Kombinatorik, Stochastik
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                variant="outlined"
                sx={{ p: 2, height: "100%", textAlign: "center" }}
              >
                <Box sx={{ fontSize: "2rem", mb: 1 }}>🎯</Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Problem-Solving
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Komplexe Probleme analysieren und clever lösen
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                variant="outlined"
                sx={{ p: 2, height: "100%", textAlign: "center" }}
              >
                <Box sx={{ fontSize: "2rem", mb: 1 }}>⚡</Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Optimierung
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Von <TeX math="O(10^{20})" /> auf <TeX math="O(10^{3})" />{" "}
                  durch mathematische Skills
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="h6" fontWeight={600} mb={2}>
            Technische Vielfalt
          </Typography>

          <Typography variant="body1" paragraph>
            Für die Lösungen habe ich verschiedene Programmiersprachen
            eingesetzt und dabei tiefgehende Expertise entwickelt:
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box
                sx={{
                  minWidth: 80,
                  px: 2,
                  py: 0.5,
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: 1,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Java
              </Box>
              <Typography variant="body2" sx={{ flex: 1, pt: 0.5 }}>
                Langjährige Erfahrung mit objektorientierten Ansätzen und der
                Java-Standard-Bibliothek
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box
                sx={{
                  minWidth: 80,
                  px: 2,
                  py: 0.5,
                  bgcolor: "secondary.main",
                  color: "white",
                  borderRadius: 1,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Rust
              </Box>
              <Typography variant="body2" sx={{ flex: 1, pt: 0.5 }}>
                Moderne, performante Lösungen mit Memory Safety und Zero-Cost
                Abstractions
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ mt: 3, p: 2, bgcolor: "#bbffbbff", borderRadius: 2 }}>
            <Typography variant="body2" fontWeight={600} mb={0.5}>
              ✓ Diese Fähigkeiten sind direkt übertragbar
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Komplexe Business-Logik, Performance-Optimierung und
              algorithmische Herausforderungen in realen Projekten löse ich mit
              der gleichen systematischen Herangehensweise.
            </Typography>
          </Box>
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
          <Typography variant="h4" fontWeight={600} mb={4} textAlign={"center"}>
            Beispielprobleme
          </Typography>
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              Problem 938: Exhausting a Colour
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              A deck of cards contains <TeX>R</TeX> red cards and <TeX>B</TeX>{" "}
              black cards.
              <br />A card is chosen uniformly randomly from the deck and
              removed. A second card is then chosen uniformly randomly from the
              cards remaining and removed.
            </Typography>

            <Box component="ul" sx={{ mb: 2 }}>
              <li>
                <Typography variant="body1">
                  If both cards are red, they are discarded.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  If both cards are black, they are both put back in the deck.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  If they are different colours, the red card is put back in the
                  deck and the black card is discarded.
                </Typography>
              </li>
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Play ends when all the remaining cards in the deck are the same
              colour and let <TeX>P(R,B)</TeX> be the probability that this
              colour is black.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              You are given <TeX>P(2,2) = 0.4666666667</TeX>,{" "}
              <TeX>P(10,9) = 0.4118903397</TeX> and{" "}
              <TeX>P(34,25) = 0.3665688069</TeX>.
            </Typography>

            <Typography variant="body1" fontWeight={600}>
              Find <TeX>P(24690,12345)</TeX>. Give your answer with 10 digits
              after the decimal point.
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              Problem 926: Total Roundness
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              A <strong>round number</strong> is a number that ends with one or
              more zeros in a given base.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Let us define the <strong>roundness</strong> of a number{" "}
              <TeX>n</TeX> in base <TeX>b</TeX> as the number of zeros at the
              end of the base <TeX>b</TeX> representation of <TeX>n</TeX>.
              <br />
              For example, <TeX>20</TeX> has roundness <TeX>2</TeX> in base{" "}
              <TeX>2</TeX>, because the base <TeX>2</TeX> representation of{" "}
              <TeX>20</TeX> is <TeX>10100</TeX>, which ends with <TeX>2</TeX>{" "}
              zeros.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Also define <TeX>R(n)</TeX>, the <strong>total roundness</strong>{" "}
              of a number <TeX>n</TeX>, as the sum of the roundness of{" "}
              <TeX>n</TeX> in base <TeX>b</TeX> for all <TeX>{"b > 1"}</TeX>.
              <br />
              For example, <TeX>20</TeX> has roundness <TeX>2</TeX> in base{" "}
              <TeX>2</TeX> and roundness <TeX>1</TeX> in base <TeX>4</TeX>,{" "}
              <TeX>5</TeX>, <TeX>10</TeX>, <TeX>20</TeX>, hence we get{" "}
              <TeX>R(20)=6</TeX>.
              <br />
              You are also given <TeX>R(10!) = 312</TeX>.
            </Typography>

            <Typography variant="body1" fontWeight={600}>
              Find <TeX>{"R(10\\,000\\,000!)"}</TeX>. Give your answer modulo{" "}
              <TeX>{"10^9 + 7"}</TeX>.
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              Problem 822: Square the Smallest
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              A list initially contains the numbers <TeX>2, 3, \dots, n</TeX>.
              <br />
              At each round, the smallest number in the list is replaced by its
              square. If there is more than one such number, then only one of
              them is replaced.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              For example, below are the first three rounds for <TeX>n = 5</TeX>
              :
            </Typography>

            <Box sx={{ textAlign: "center", my: 2 }}>
              <TeX
                math="[2, 3, 4, 5] \xrightarrow{(1)} [4, 3, 4, 5] \xrightarrow{(2)} [4, 9, 4, 5] \xrightarrow{(3)} [16, 9, 4, 5]."
                block
              />
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Let <TeX>S(n, m)</TeX> be the sum of all numbers in the list after{" "}
              <TeX>m</TeX> rounds.
              <br />
              <br />
              For example, <TeX>S(5, 3) = 16 + 9 + 4 + 5 = 34</TeX>. Also{" "}
              <TeX>{"S(10, 100) \\equiv 845339386 \\pmod{1234567891}"}</TeX>.
            </Typography>

            <Typography variant="body1" fontWeight={600}>
              Find <TeX>{"S(10^4, 10^{16})"}</TeX>. Give your answer modulo{" "}
              <TeX>1234567891</TeX>.
            </Typography>
          </Paper>
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
          {/* Problem Statement */}
          <Typography variant="h4" fontWeight={600} mb={4} textAlign={"center"}>
            Beispiel an Problem 822: Square the Smallest
          </Typography>
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="body1" paragraph>
              Eine Liste enthält anfangs die Zahlen <TeX>2, 3, \ldots, n</TeX>.
            </Typography>

            <Typography variant="body1" paragraph>
              In jeder Runde wird die <strong>kleinste Zahl</strong> durch ihr{" "}
              <strong>Quadrat</strong> ersetzt. Gibt es mehrere gleich kleine
              Zahlen, wird nur eine davon ersetzt.
            </Typography>

            <Box
              sx={{
                pl: 2,
                borderLeft: "3px solid",
                borderColor: "primary.main",
                mb: 2,
                bgcolor: "grey.50",
                p: 2,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600} mb={1}>
                Beispiel für <TeX>n = 5</TeX>:
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                [2, 3, 4, 5] → [4, 3, 4, 5] → [4, 9, 4, 5] → [16, 9, 4, 5]
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 1, opacity: 0.7 }}
              >
                Runde 1: 2 → 2² = 4 | Runde 2: 3 → 3² = 9 | Runde 3: 4 → 4² = 16
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
              }}
            >
              Definiere <TeX>S(n, m)</TeX> als die Summe aller Zahlen nach{" "}
              <TeX>m</TeX> Runden.
            </Typography>

            <Box
              sx={{
                pl: 2,
                borderLeft: "3px solid",
                borderColor: "success.main",
                mb: 2,
                bgcolor: "#b7ffc9ff",
                p: 2,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2">
                <strong>Gegeben:</strong>
                <br />
                <TeX>S(5, 3) = 16 + 9 + 4 + 5 = 34</TeX>
                <br />
                <TeX>{"S(10, 100) \\equiv 845339386 \\pmod{1234567891}"}</TeX>
              </Typography>
            </Box>

            <Box sx={{ mt: 3, p: 2, bgcolor: "#ffe5bfec", borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Aufgabe:
              </Typography>
              <Typography variant="body1">
                Finde <TeX>{"S(10^4, 10^{16})"}</TeX> modulo{" "}
                <TeX>1234567891</TeX>
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  color: "error.main",
                  fontWeight: 600,
                }}
              >
                ⚠️ Das sind 10 Billiarden Runden!
              </Typography>
            </Box>
          </Paper>
          {/* The Naive Problem */}
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              ❌ Warum die naive Lösung nicht funktioniert
            </Typography>

            <Typography variant="body1" paragraph>
              Die offensichtliche Lösung wäre:
            </Typography>

            <Box sx={{ bgcolor: "#ffc3c3ff", p: 2, borderRadius: 2, mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}
              >
                for _ in 0..m:
                <br />
                &nbsp;&nbsp;find minimum in list
                <br />
                &nbsp;&nbsp;replace it with its square
                <br />
                return sum(list)
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              <strong>Das Problem:</strong>
            </Typography>

            <Stack spacing={1} sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body2">
                • <TeX math="m = 10^{16}" /> Iterationen → Unmöglich zu
                simulieren
              </Typography>
              <Typography variant="body2">
                • Zahlen werden riesig: Nach wenigen Quadrierungen hat man
                Zahlen mit Millionen Stellen
              </Typography>
              <Typography variant="body2">
                • Selbst das Speichern der Liste würde den Speicher sprengen
              </Typography>
            </Stack>

            <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 2 }}>
              <Typography variant="body2" fontWeight={600} color="error">
                Laufzeit: <TeX math="O(m \times n)" /> mit{" "}
                <TeX math="m = 10^{16}" /> → Völlig hoffnungslos!
              </Typography>
            </Box>
          </Paper>
          {/* Key Insight 1: Logarithmic Transformation */}
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              💡 Schlüssel-Idee 1: Logarithmische Transformation
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Das Problem mit großen Zahlen:</strong> Nach nur 5
              Quadrierungen wird aus 2 bereits 65536, nach 10 eine Zahl mit 300+
              Stellen!
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Die Lösung:</strong> Statt die Zahlen selbst zu speichern,
              speichern wir einen{" "}
              <strong>logarithmischen Vergleichswert</strong>:
            </Typography>

            <Box
              sx={{
                textAlign: "center",
                my: 2,
                p: 2,
                bgcolor: "grey.50",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">
                <TeX>{"\\text{value}(x) = \\log_2(\\log_2(x))"}</TeX>
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              <strong>Warum funktioniert das?</strong>
            </Typography>

            <Box sx={{ pl: 2, mb: 2 }}>
              <Typography variant="body2" paragraph>
                Wenn wir eine Zahl <TeX>x</TeX> quadrieren:
                <br />
                <TeX>
                  {
                    "x \\to x^2 \\to (x^2)^2 = x^4 \\to (x^4)^2 = x^8 \\to \\cdots \\to x^{2^k}"
                  }
                </TeX>
              </Typography>
              <Typography variant="body2" paragraph>
                Im Logarithmus wird daraus:
                <br />
                <TeX>
                  {
                    "\\log_2(\\log_2(x^{2^k})) = \\log_2(2^k \\cdot \\log_2(x)) = k + \\log_2(\\log_2(x))"
                  }
                </TeX>
              </Typography>

              <Typography variant="body2" mb={1}>
                Da der Logarithmus streng monoton steigend ist, bleibt auch die
                Ordnung erhalten (welche Werte kleiner und größer sind)
              </Typography>
            </Box>

            <Box sx={{ bgcolor: "#b7ffc9ff", p: 2, borderRadius: 2 }}>
              <Typography variant="body2" fontWeight={600}>
                ✓ Jede Quadrierung erhöht den Vergleichswert einfach um 1!
              </Typography>
              <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                Statt riesige Zahlen zu speichern, rechnen wir nur mit kleinen
                Gleitkommazahlen
              </Typography>
            </Box>
          </Paper>
          {/* Key Insight 2: Pattern Detection */}
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              💡 Schlüssel-Idee 2: Zyklus-Erkennung
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Die zentrale Beobachtung:</strong> Nach anfänglichem Chaos
              entsteht ein <strong>stabiles, wiederkehrendes Muster</strong>!
            </Typography>

            {/* Phase 1: Initial Chaos */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" fontWeight={600} mb={1} color="primary">
                Phase 1: Anfängliches Chaos
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.9 }}>
                Am Anfang haben die Zahlen unterschiedliche Größenordnungen.
                Nach der logarithmischen Transformation:
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  bgcolor: "grey.50",
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <TeX
                  math={
                    "\\begin{bmatrix}2\\\\3\\\\4\\\\5\\end{bmatrix} \\overset{\\log_2\\log_2}{\\longrightarrow} \\begin{bmatrix}0.00\\\\0.58\\\\1.00\\\\1.32\\end{bmatrix}"
                  }
                />
              </Box>
              <Typography
                variant="caption"
                sx={{ display: "block", textAlign: "center", opacity: 0.7 }}
              >
                Unterschiedliche Startwerte – unregelmäßige Reihenfolge
              </Typography>
            </Box>

            {/* Phase 2: Convergence */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={1}
                color="success.main"
              >
                Phase 2: Konvergenz zum stabilen Muster
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.9 }}>
                Nach einigen Iterationen haben alle Zahlen die{" "}
                <strong>gleiche Vorkommastelle</strong> erreicht. Jetzt zählt
                nur noch die Nachkommastelle für die Sortierung:
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  bgcolor: "#b7ffc9ff",
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <TeX
                  math={
                    "\\begin{bmatrix}1.00\\\\1.58\\\\1.00\\\\1.32\\end{bmatrix} \\overset{\\text{stabil}}{\\Longrightarrow} \\begin{bmatrix}2.00\\\\2.58\\\\2.00\\\\2.32\\end{bmatrix} \\overset{\\text{stabil}}{\\Longrightarrow} \\begin{bmatrix}3.00\\\\3.58\\\\3.00\\\\3.32\\end{bmatrix}"
                  }
                />
              </Box>
              <Typography
                variant="caption"
                sx={{ display: "block", textAlign: "center", opacity: 0.7 }}
              >
                Alle auf gleicher Ebene → Reihenfolge bleibt konstant
              </Typography>
            </Box>

            {/* Why does this happen? */}
            <Box sx={{ p: 2, bgcolor: "#b7e8ffff", borderRadius: 2, mb: 3 }}>
              <Typography variant="body2" fontWeight={600} mb={1}>
                🤔 Warum entsteht ein Zyklus?
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Sobald alle Zahlen die gleiche Vorkommastelle haben, ändert sich
                die <strong>relative Reihenfolge nicht mehr</strong>. Die
                Nachkommastellen bleiben konstant, nur die Vorkommastelle erhöht
                sich um 1 bei jeder Quadrierung.
              </Typography>
            </Box>

            {/* Visualization of one period */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Beispiel: Eine Periode (n=4, also 3 Runden)
              </Typography>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "grey.50",
                  borderRadius: 2,
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                }}
              >
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Start: [<strong>1.00</strong>, 1.58, 1.00, 1.32] → Kleinste:
                  Index 0
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Runde 1: [2.00, 1.58, <strong>1.00</strong>, 1.32] → Kleinste:
                  Index 2
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Runde 2: [2.00, 1.58, 2.00, <strong>1.32</strong>] → Kleinste:
                  Index 3
                </Typography>
                <Typography variant="body2">
                  Runde 3: [2.00, <strong>1.58</strong>, 2.00, 2.32] → Kleinste:
                  Index 1
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  opacity: 0.7,
                  textAlign: "center",
                }}
              >
                Immer die gleiche Reihenfolge: 0 → 2 → 3 → 1 → 0 → 2 → 3 → 1 →
                ...
              </Typography>
            </Box>

            {/* The Strategy */}
            <Divider sx={{ my: 2 }} />

            {/* Success Box */}
            <Box
              sx={{
                mt: 3,
                p: 2,
                bgcolor: "#b7ffc9ff",
                borderRadius: 2,
                border: "2px solid",
                borderColor: "success.main",
              }}
            >
              <Typography variant="body2" fontWeight={600} mb={0.5}>
                ✓ Statt 10¹⁶ Runden zu simulieren, simulieren wir nur ~100
                Runden!
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Die restlichen 10¹⁶ - 100 Runden berechnen wir in O(1) durch
                Multiplikation
              </Typography>
            </Box>
          </Paper>

          {/* Computing Powers Efficiently */}
          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              🚀 Effiziente Potenz-Berechnung
            </Typography>

            <Typography variant="body1" paragraph>
              Am Ende müssen wir <TeX>{"x^{2^k} \\bmod p"}</TeX> für jede Zahl{" "}
              <TeX>x</TeX> berechnen, wobei <TeX>k</TeX> die Anzahl der
              Quadrierungen ist.
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Problem:</strong> <TeX>2^k</TeX> kann astronomisch groß
              sein!
            </Typography>

            <Box
              sx={{ bgcolor: "warning.light", p: 2, borderRadius: 2, mb: 2 }}
            >
              <Typography variant="body2">
                Beispiel: Wenn <TeX>k = 1000</TeX>, dann ist{" "}
                <TeX>{"2^{1000} \\approx 10^{301}"}</TeX> – eine Zahl mit 300+
                Stellen!
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              <strong>Rettung: Fermats kleiner Satz</strong>
            </Typography>

            <Box
              sx={{
                textAlign: "center",
                my: 2,
                p: 2,
                bgcolor: "grey.50",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">
                Für Primzahl <TeX>p</TeX>:{" "}
                <TeX>{"x^{p-1} \\equiv 1 \\pmod{p}"}</TeX>
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              Das bedeutet: Wir können den Exponenten <strong>modulo</strong>{" "}
              <TeX>p-1</TeX> reduzieren!
            </Typography>

            <Box sx={{ bgcolor: "#b7e8ffff", p: 2, borderRadius: 2, mb: 2 }}>
              <Typography variant="body2" fontWeight={600} mb={1}>
                Algorithmus:
              </Typography>
              <Typography variant="body2" sx={{ pl: 2 }}>
                1. Berechne <TeX>{"e = 2^k \\bmod (p-1)"}</TeX> mit schneller
                Exponentiation
                <br />
                2. Berechne <TeX>{"x^e \\bmod p"}</TeX> mit schneller
                Exponentiation
              </Typography>
            </Box>

            <Box sx={{ bgcolor: "grey.100", p: 2, borderRadius: 2 }}>
              <Typography
                variant="body2"
                sx={{ fontFamily: "monospace", fontSize: "0.85rem" }}
              >
                fn n_pow_2k_mod(n, k, p):
                <br />
                &nbsp;&nbsp;// Schritt 1: e = 2^k mod (p-1)
                <br />
                &nbsp;&nbsp;phi = p - 1
                <br />
                &nbsp;&nbsp;e = pow_mod(2, k, phi)
                <br />
                &nbsp;&nbsp;
                <br />
                &nbsp;&nbsp;// Schritt 2: n^e mod p
                <br />
                &nbsp;&nbsp;return pow_mod(n, e, p)
              </Typography>
            </Box>

            <Box sx={{ mt: 2, p: 2, bgcolor: "#b7ffc9ff", borderRadius: 2 }}>
              <Typography variant="body2" fontWeight={600}>
                ✓ Beide Exponentiationen: O(log k) statt O(2^k)
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              💻 Vollständiger Code (Rust)
            </Typography>

            <SyntaxHighlighter
              language="rust"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.85rem",
                maxHeight: "600px",
                overflow: "auto",
              }}
              showLineNumbers
            >
              {`use my_macros::problem;
use crate::util::modulo::pow;

#[problem(822)]
fn solve() -> u64 {
    // Berechne S(10^4, 10^16) mod 1234567891
    // Problem: Liste [2,3,...,n], in jeder Runde wird das kleinste Element quadriert
    g(10u64.pow(4), 10u64.pow(16))
}

const MOD: u64 = 1234567891;

/// Berechnet S(n, m): Summe der Liste nach m Runden
/// 
/// Hauptidee: Statt die Zahlen selbst zu speichern (die riesig werden),
/// speichern wir log₂(log₂(x)). Bei Quadrierung: x → x² wird daraus einfach +1
fn g(n: u64, m: u64) -> u64 {
    let f = 2.0f64.log2();
    let mut list: Vec<f64> = (2..=n)
        .map(|x| f64::log2(f64::log2(x as f64)) / f)
        .collect();
    let mut count = vec![0; (n - 1) as usize];
    let mut k = 0;
    
    // ===== PHASE 1: Pattern-Erkennung =====
    loop {
        for _ in 0..n - 1 {
            let mut smallest = f64::INFINITY;
            let mut min_idx = 0;
            for i in 0..list.len() {
                if list[i] < smallest {
                    smallest = list[i];
                    min_idx = i;
                }
            }
            count[min_idx] += 1;
            list[min_idx] += 1.0;
        }
        k += 1;
        if count.iter().all(|&x| x > 0) {
            break;
        }
    }
    
    // ===== PHASE 2: Rest-Runden =====
    for _ in 0..(m % (n - 1)) {
        let mut smallest = f64::INFINITY;
        let mut min_idx = 0;
        for i in 0..list.len() {
            if list[i] < smallest {
                smallest = list[i];
                min_idx = i;
            }
        }
        count[min_idx] += 1;
        list[min_idx] += 1.0;
    }
    
    // ===== PHASE 3: Wiederholungen =====
    let r = m / (n - 1) - k;
    
    // ===== PHASE 4: Endergebnis =====
    (2..=n)
        .enumerate()
        .map(|(i, x)| n_pow_2k_mod(x, count[i] + r, MOD))
        .fold(0u64, |acc, c| (acc + c) % MOD)
}

/// Berechnet x^(2^k) mod p effizient
fn n_pow_2k_mod(n: u64, k: u64, p: u64) -> u64 {
    if n % p == 0 {
        return 0;
    }
    let phi = p - 1;
    let mut e = 1u64;
    let mut base = 2u64;
    let mut exp = k;
    while exp > 0 {
        if exp % 2 == 1 {
            e = (e as u128 * base as u128 % phi as u128) as u64;
        }
        base = (base as u128 * base as u128 % phi as u128) as u64;
        exp /= 2;
    }
    // Modulo pow
    pow(n, e, p)
}`}
            </SyntaxHighlighter>
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default Euler;
