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
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
          textAlign: { xs: "center", md: "left" },
          mt: { xs: 4, md: 0 },
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
              fontSize: { xs: "1.9rem", sm: "2.2rem", md: "3rem" },
            }}
          >
            Download{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontWeight: 900,
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
              maxWidth: { xs: "100%", sm: "480px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Download the Job Site Route app from the Google Play store or App
            store, create an account, order food, invite friends, and earn
            discounts!
          </Typography>

          {/* App Store Buttons + QR codes */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
            mb={2}
          >
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
                height: { xs: 50, md: 55 },
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
                height: { xs: 50, md: 55 },
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

          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{
                mr: { xs: 0, md: "140px" },
              }}
            >
              <Box
                component="img"
                src="/assets/Hero/qr1.svg"
                alt="QR Code 1"
                sx={{ height: { xs: 55, md: 65 }, width: "auto" }}
              />
              <Box
                component="img"
                src="/assets/Hero/qr2.svg"
                alt="QR Code 2"
                sx={{ height: { xs: 55, md: 65 }, width: "auto" }}
              />
            </Stack>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            textAlign: { xs: "center", md: "end" },
            mt: { xs: 4, md: "30px" },
          }}
        >
          <Box
            component="img"
            src="/assets/Hero/phone.png"
            alt="App Preview"
            sx={{
              maxWidth: { xs: "80%", sm: "70%", md: "100%" },
              height: "auto",
            }}
          />
          {/* Floating elements (you’ll add your icons later) */}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
