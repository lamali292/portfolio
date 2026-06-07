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

// Import pre-calculated data
import plotData from "../../data/american_option_data.json";

const Praktikum: React.FC = () => {
  const navigate = useNavigate();
  const plotRef = useRef<HTMLDivElement>(null);
  const [selectedN, setSelectedN] = useState<"N30" | "N50">("N50");

  const technologies = [
    "C",
    "Numerische Methoden",
    "Newton-Krylov",
    "GMRES",
    "Sparse Matrices",
  ];

  // Render plot when data or selection changes
  useEffect(() => {
    const renderPlot = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Plotly = (await import("plotly.js-dist-min")) as any;
      const data = plotData[selectedN];

      if (!data || !plotRef.current) return;

      const trace = {
        x: data.X,
        y: data.Y,
        z: data.grid,
        type: "surface",
        colorscale: "Viridis",
        colorbar: {
          title: "Option<br>Value",
        },
      };

      const layout = {
        title: `American Basket Option Surface (N=${data.N}×${data.N})`,
        autosize: true,
        scene: {
          xaxis: { title: "S₁" },
          yaxis: { title: "S₂" },
          zaxis: { title: "Option Value" },
          camera: {
            eye: { x: 1.5, y: 1.5, z: 1.3 },
          },
        },
        margin: { l: 0, r: 0, t: 40, b: 0 },
        height: 500,
      };

      Plotly.newPlot(plotRef.current, [trace], layout, {
        responsive: true,
      });
    };

    renderPlot();
  }, [selectedN]);

  const data = plotData[selectedN];

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
            Numerische Optionspreisberechnung
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Black-Scholes-Gleichung für amerikanische Basket-Optionen mit
            Newton-Krylov-GMRES
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

        <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Das Problem
          </Typography>

          <Box sx={{ bgcolor: "#e3f2fd", p: 3, borderRadius: 1, mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Eine <strong>Basket Option</strong> ist ein Derivat auf mehrere
              Underlying-Assets. Bei einer 2-dimensionalen Option (zwei Aktien)
              wird der Wert durch die Black-Scholes-PDE beschrieben.
            </Typography>
            <Typography variant="body2">
              Da es keine geschlossene Lösung gibt, muss die PDE diskretisiert
              und iterativ gelöst werden. Das Gitter erzeugt ein dünnbesetztes
              lineares System.
            </Typography>
          </Box>

          <Box sx={{ bgcolor: "#fff3e0", p: 3, borderRadius: 1 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Kernherausforderung
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • 2D-Gitter mit N×N Knoten erzeugt N² Unbekannte
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Freie Randbedingung (American-Option) wird via Penalty-Term
              modelliert
            </Typography>
            <Typography variant="body2">
              • Großes, dünnbesetztes System benötigt spezialisierte Solver
            </Typography>
          </Box>
        </Paper>

        {/* 3D Surface Plot */}
        <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h5" fontWeight={600}>
              Numerische Lösung: Option Value Surface
            </Typography>
            <ToggleButtonGroup
              value={selectedN}
              exclusive
              onChange={(e, value) => value && setSelectedN(value)}
              size="small"
            >
              <ToggleButton value="N30">N=30</ToggleButton>
              <ToggleButton value="N50">N=50</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Box
            ref={plotRef}
            sx={{
              width: "100%",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          />

          {data && (
            <Stack
              direction="row"
              spacing={3}
              sx={{ mt: 3, pt: 2, borderTop: "1px solid #eee" }}
            >
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Min Value
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {data.stats.min.toFixed(4)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Max Value
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {data.stats.max.toFixed(4)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Mean Value
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {data.stats.mean.toFixed(4)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Std Dev
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {data.stats.std.toFixed(4)}
                </Typography>
              </Box>
            </Stack>
          )}

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, opacity: 0.7 }}
          >
            Die Oberfläche zeigt den Optionswert v(S₁, S₂) für verschiedene
            Kombinationen der zwei Asset-Preise. Jeder Punkt entspricht einer
            Lösung der Black-Scholes-PDE mit Penalty-Formulierung.
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Lösungsansatz: Newton-Krylov mit GMRES
          </Typography>

          <Box sx={{ bgcolor: "#e8f5e9", p: 3, borderRadius: 1, mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Zweistufiges Verfahren zur Behandlung der Nichtlinearität
              (Penalty-Term) und des entstehenden linearen Systems:
            </Typography>
            <Stack spacing={1} sx={{ pl: 2 }}>
              <Typography variant="body2">
                <strong>Äußere Schleife (Newton):</strong> Löst F(v) = 0
                iterativ
              </Typography>
              <Typography variant="body2">
                <strong>Innere Schleife (GMRES):</strong> Löst das
                Jacobian-System J·d = -F(v)
              </Typography>
              <Typography variant="body2">
                <strong>ARMS Preconditioner:</strong> Verbessert Konvergenz
                durch Vorbehandlung
              </Typography>
            </Stack>
          </Box>

          <Paper sx={{ p: 3, borderRadius: 1, bgcolor: "#f5f5f5" }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Warum nicht SOR?
            </Typography>
            <Typography variant="body2">
              SOR-Verfahren konvergieren langsam bei großen, dünnbesetzten
              Systemen. GMRES ist für unsymmetrische Matrizen optimiert. Der
              ARMS-Preconditioner reduziert weitere Iterationen.
            </Typography>
          </Paper>
        </Paper>

        <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Implementierung
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Datenstrukturen
            </Typography>
            <SyntaxHighlighter
              language="c"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "4px",
                fontSize: "0.85rem",
                overflow: "auto",
              }}
              showLineNumbers
            >
              {`// Matrix in Compressed Sparse Column Format
typedef struct {
    int nr, nc;      // rows, columns
    int* ia;         // row indices
    int* ja;         // column pointers
    double* a;       // non-zero values
} CSCMat;

// Vector representation
typedef struct {
    double* values;
    int n;
} Vec;

// Problem parameters
typedef struct {
    int N;           // grid size
    double r;        // interest rate
    double D0;       // dividend yield
    double sigma1, sigma2;  // volatilities
    double beta1, beta2;    // basket weights
    int K;           // strike price
} Param;`}
            </SyntaxHighlighter>
            <Typography
              variant="caption"
              sx={{ mt: 1, display: "block", opacity: 0.7 }}
            >
              CSC-Format speichert nur Nicht-Null-Elemente. Die
              Finite-Differenzen-Diskretisierung erzeugt eine Matrix mit 5
              Diagonalen.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Newton-Krylov mit GMRES (Auszug)
            </Typography>
            <SyntaxHighlighter
              language="c"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "4px",
                fontSize: "0.75rem",
                maxHeight: "400px",
                overflow: "auto",
              }}
              showLineNumbers
            >
              {`int NEWTON_KRYLOV_ITSOL(Vec* v0, CSCMat A, Vec b, Vec f, 
                      double delta, double kappa, double eps, Param data) {
    
    int n = b.n;
    Vec v, v_star, d;
    double norm_fv, eta = 0;

    vec_copy(&v, *v0);
    
    // Setup ARMS Preconditioner
    arms ArmsSt = (arms)Malloc(sizeof(armsMat), "ArmsSt");
    arms2(csmat, ipar, droptol, lfil_arr, tolind, ArmsSt, flog);
    
    // Initial residual
    F_original(&c_star, A, b, v, f, kappa, delta);
    norm_fv = vec_2norm(c_star);
    
    int k = 0;
    while (norm_fv > eps / 10 && k < 100) {
        k++;
        
        // Choose forcing term eta
        if (k == 1) eta = 0.5;
        else eta = MIN(ETA_MAX, eta_star);
        
        // Compute Jacobian JF(v)
        F_jacobian(&A, diag, b, v, f, kappa, delta);
        
        // Solve with preconditioned GMRES
        fgmr(MAT, PRE, c_star.values, d.values, eta, im, &maxits, fits);
        
        // Line search
        vec_sub(&v_star, v, d);
        F_original(&c_star, A, b, v_star, f, kappa, delta);
        
        v = v_star;
        norm_fv = vec_2norm(c_star);
    }
    
    *v0 = v;
    cleanARMS(ArmsSt);
    return 0;
}`}
            </SyntaxHighlighter>
          </Box>
        </Paper>

        <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Module & Funktionen
          </Typography>

          <Stack spacing={2}>
            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Matrix & Vector Operations
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">
                  • <code>generatematrix</code> - Finite-Differenzen
                  Diskretisierung
                </Typography>
                <Typography variant="body2">
                  • <code>fpnmatvec</code> - Sparse Matrix-Vektor Produkt
                </Typography>
                <Typography variant="body2">
                  • <code>stranspose</code> - Matrix-Transposition
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Solver
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">
                  • <code>SOR</code> - Iterativer Solver (Baseline)
                </Typography>
                <Typography variant="body2">
                  • <code>NEWTON_GMRES</code> - Eigene Newton-GMRES
                  Implementierung
                </Typography>
                <Typography variant="body2">
                  • <code>NEWTON_KRYLOV_ITSOL</code> - ITSOL Library Integration
                  mit ARMS
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Problem Formulierung
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">
                  • <code>AMERICAN</code> - Diskretisierung der
                  Black-Scholes-Ungleichung
                </Typography>
                <Typography variant="body2">
                  • <code>F_original</code> - Residuum F(v) mit Penalty-Term
                </Typography>
                <Typography variant="body2">
                  • <code>F_jacobian</code> - Jacobian-Matrix JF(v)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 4, borderRadius: 2, bgcolor: "#e8f5e9" }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Wichtige Erkenntnisse
          </Typography>

          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>1. Penalty-Methode:</strong> Ersetzt die freie
                Randbedingung durch einen Penalty-Term. Vereinfacht die
                Implementierung erheblich.
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>2. Sparse Matrix Handling:</strong> Die
                Differenzen-Matrix hat nur 5 Diagonalen. Sparse-Formate sind
                fundamental für Speicher- und Recheneffizienz.
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2">
                <strong>3. Verfahrenswahl:</strong> Newton-Krylov bietet das
                beste Verhältnis zwischen Konvergenz und
                Implementierungskomplexität. GMRES mit ARMS-Preconditioner ist
                robust für große Systeme.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Praktikum;
