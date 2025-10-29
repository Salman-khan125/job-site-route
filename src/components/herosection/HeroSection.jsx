import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/Hero/hero-bg.png')", // your background map image
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Download{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                font: 900,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Job Site Route
            </Typography>
            , Invite friends <br /> and Earn discounts!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: "480px",
            }}
          >
            Download the Job Site Route app from the Google Play store or App
            store, create an account, order food, invite friends, and earn
            discounts!
          </Typography>

          {/* App Store Buttons + QR codes */}
          <Stack direction="row" spacing={3} alignItems="center" mb={2}>
            <Box
              component="img"
              src="/assets/Hero/googlePlay.png"
              alt="Google Play"
              onClick={() =>
                window.open(
                  " https://play.google.com/store/apps/details?id=com.job.site.route",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{
                height: 55,
                width: "auto",
                cursor: "pointer",
                transition: "all 0.3s ease",
                filter: "brightness(1)",
                "&:hover": {
                  filter: "brightness(0.6)", // darkens on hover
                  transform: "scale(1.05)", // slight zoom
                },
              }}
            />

            <Box
              component="img"
              src="/assets/Hero/appStore.png"
              alt="App Store"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/job-site-route/id6740814935",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{
                height: 55,
                width: "auto",
                cursor: "pointer",
                transition: "all 0.3s ease",
                filter: "brightness(1)",
                "&:hover": {
                  filter: "brightness(0.6)",
                  transform: "scale(1.05)",
                },
              }}
            />
          </Stack>

          <Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent={"space-evenly"}
              mr={"140px"}
            >
              <img src="/assets/Hero/qr1.svg" alt="QR Code 1" height="65" />
              <img src="/assets/Hero/qr2.svg" alt="QR Code 2" height="65" />
            </Stack>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            textAlign: "end",
            mt: "30px",
          }}
        >
          <img
            src="/assets/Hero/phone.png"
            alt="App Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          {/* Floating elements (you’ll add your icons later) */}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
