import React from "react";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";

const Hero = ({ CashFormComponent }) => {
  return (
    <Box
      component="header"
      role="banner"
      aria-label="Homepage hero"
      sx={{
        position: "relative",
        backgroundImage: "url('/public/images/home-header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 7, md: 14 },
      }}
    >
      {/* Overlay */}
      <Box
        className="hero-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(3,37,65,0.6), rgba(3,37,65,0.25))",
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container alignItems="center" spacing={4}>
          {/* Left: messaging + CTAs */}
          <Grid item xs={12} md={7} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "26px", md: "32px" },
                lineHeight: 1.05,
                color: "#fff",
                mb: 2,
              }}
            >
              Fast Sell Houses — AS IS & ASAP
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.9)", mb: 3, fontSize: "16px" }}
            >
              <strong>Fast cash</strong> for your home — no repairs, no commissions. Transparent offers and a simple process tailored to your timeline.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 1 }}>
              <Button
                variant="contained"
                color="primary"
                href="/forms/fastSell"
                sx={{ borderRadius: "10px", px: 3, py: 1.25 }}
              >
                Get a cash offer
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href="#how-it-works"
                sx={{
                  borderRadius: "10px",
                  px: 3,
                  py: 1.25,
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "#fff",
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                How it works
              </Button>
            </Box>

            <Typography
              sx={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", mt: 1 }}
            >
              No agents • No showings • Close in days
            </Typography>
          </Grid>

          {/* Right: quick form */}
          <Grid item xs={12} md={5} lg={5}>
            <Card
              sx={{
                p: 2,
                borderRadius: "12px",
                background: "linear-gradient(180deg,#ffffff,#f8fafc)",
                boxShadow: "0 10px 30px rgba(8,20,40,0.12)",
              }}
              aria-labelledby="quick-offer"
            >
              <Typography
                id="quick-offer"
                variant="h6"
                sx={{ mb: 1, color: "#0b2545" }}
              >
                Get a quick offer
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 2, color: "#495057", fontSize: "14px" }}
              >
                Enter a few details and we’ll send a fast, no-obligation cash offer.
              </Typography>

              {/* Render the server-side form or a React component */}
              {CashFormComponent && <CashFormComponent />}
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom transitional card */}
      <Box
        sx={{
          mt: -6,
          mx: { xs: 3, md: 4 },
          borderRadius: "12px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 30px rgba(8,20,40,0.12)",
          height: "50px",
        }}
        aria-hidden="true"
      />
    </Box>
  );
};

export default Hero;
