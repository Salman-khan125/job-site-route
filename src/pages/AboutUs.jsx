import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        mt: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          About Job Site Route
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "text.secondary",
            mb: { xs: 5, md: 8 },
            px: { xs: 2, md: 6 },
            lineHeight: 1.7,
          }}
        >
          Job Site Route is an app that connects food trucks with construction job sites.
          Contractors add job sites to the app daily.
          Foodies can locate food trucks and pre-order meals through the app.
        </Typography>

        {/* Video Section */}
        <Paper
          elevation={4}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            mx: "auto",
            maxWidth: "800px",
            aspectRatio: "16/9",
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/UyR_1PQNy6s"
            title="About Job Site Route"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
