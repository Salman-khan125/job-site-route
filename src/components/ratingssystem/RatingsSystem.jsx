import React from "react";
import { Grid, Box, Typography, Stack, Container } from "@mui/material";

const RatingsSystem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 14 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side - Text */}
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              sx={{
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#007A87",
                  fontSize: { xs: "26px", sm: "30px", md: "36px" },
                }}
              >
                Mutual Ratings System
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  lineHeight: 1.7,
                  maxWidth: { xs: "100%", md: 480 },
                  fontSize: { xs: "15px", sm: "16px", md: "18px" },
                }}
              >
                Civilian users have the ability to rate the quality food and
                dining experience. Food trucks also have the ability to rate
                customers. This mutual ratings system ensures a pleasant and
                professional dining atmosphere.
              </Typography>

              {/* Stars icon */}
              <Box
                sx={{
                  mt: { xs: 2, md: 3 },
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  component="img"
                  src="/assets/mrs/stars.png"
                  alt="stars"
                  sx={{
                    width: { xs: 100, sm: 130, md: 200 },
                    height: "auto",
                  }}
                />
              </Box>
            </Stack>
          </Grid>

          {/* Right Side - Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: { xs: "row", md: "row" },
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                gap: { xs: 2, sm: 3, md: 0 },
                minHeight: { xs: 300, sm: 380, md: 450 },
                ml: { xs: 0, md: 6 },
                mt: { xs: 4, md: 0 },
              }}
            >
              {/* Ellipse background */}
              <Box
                component="img"
                src="/assets/mrs/Ellipse.png"
                alt="ellipse"
                sx={{
                  position: "absolute",
                  right: { xs: "auto", md: "-30%" },
                  top: { xs: "20%", sm: "18%", md: "3%" },
                  width: { xs: 250, sm: 350, md: 450 },
                  height: "auto",
                  zIndex: 0,
                }}
              />

              {/* Phone 1 (left) */}
              <Box
                component="img"
                src="/assets/mrs/phone1.png"
                alt="phone1"
                sx={{
                  width: { xs: 170, sm: 200, md: 320 },
                  height: "auto",
                  zIndex: 2,
                  position: { xs: "relative", md: "relative" },
                  top: { xs: 0, md: "20%" },
                  right: { xs: "auto", md: "40%" },
                }}
              />

              {/* Phone 2 (right) */}
              <Box
                component="img"
                src="/assets/mrs/phone2.png"
                alt="phone2"
                sx={{
                  width: { xs: 150, sm: 200, md: 300 },
                  height: "auto",
                  zIndex: 1,
                  position: { xs: "relative", md: "absolute" },
                  right: { xs: "5%", md: "-55%" },
                  top: { xs: 50, md: "18%" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RatingsSystem;
