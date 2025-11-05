import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary.main"
          sx={{ mt: { xs: 8, md: 10 }, mb: 4 }}
        >
          Our Services
        </Typography>

        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            mb: 3,
            color: "primary.main",
            mt: { xs: 4, md: 10 },
          }}
        >
          How to Become a Biomed
          <Box component="span" sx={{ color: "#e53935", ml: 0.5 }}>
            RX
          </Box>{" "}
          Hemp Distributor
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: 700,
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          Please send us your{" "}
          <Link
            href="mailto:info@biomedrxhemp.com"
            underline="hover"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            email
          </Link>{" "}
          expressing your interest. We will contact you promptly. We only drop
          ship wholesale to distributors with orders of 10 bottles or more, not
          including DMSO.
        </Typography>

        <Box
          component="a"
          href="https://biomedrxhemp.com"
          target="_blank"
          rel="noopener"
          sx={{ mt: { xs: 6, md: 8 } }}
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/bottle.jpg"
              alt="biomedRX"
              sx={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 2,
                display: "block",
                mx: "auto",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "primary.main", mb: 3 }}
        >
          POPULAR LINKS
        </Typography>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              <Link
                href="https://devinlockett.com"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Devin Lockett, President
              </Link>{" "}
              is a serial entrepreneur who is committed to creating solutions
              that improve the quality of our lives.
            </Typography>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box component="a"
             href="https://devinlockett.com"
             target="_blank"
             rel="noopener"
              sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src="/public/assets/lockett.jpg"
                alt="Devin Lockett"
                
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* LABOR DIA Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
        <Grid
          container
          direction="column" 
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Text Content */}
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", textAlign: "center" }}
            >
              <Link
                href="https://labordia.com"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                LABOR DIA
              </Link>{" "}
              is our sister app, that connects contractors and day laborers.
            </Typography>
          </Grid>

          {/* Image (below text) */}
          <Grid item xs={12}>
            <Box
              component="a"
              href="https://labordia.com"
              target="_blank"
              rel="noopener"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src="/assets/labor.png"
                alt="LABOR DIA"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 5, md: 6 },

          borderTop: "1px solid #eee",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "13px", md: "14px" },
          }}
        >
          © 2025 Job Site Route. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
