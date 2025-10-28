import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      img: "public/assets/HowItWorks/Frame1.png",
      title: "Login to Job site Route",
      desc: "Download Job site route app from Play Store or App Store, create an account, order food, invite friends and earn discounts!",
    },
    {
      id: 2,
      img: "public/assets/HowItWorks/Frame2.png",
      title: "Log in as Truck owner",
      desc: "As a food truck owner, you get instant access to all active construction sites nearby.",
    },
    {
      id: 3,
      img: "public/assets/HowItWorks/Frame3.png",
      title: "Log in as Contractor",
      desc: "As a contractor, you can inform the location of your construction sites for food trucks to serve your crew.",
    },
    {
      id: 4,
      img: "public/assets/HowItWorks/Frame4.png",
      title: "Log in as Civilian",
      desc: "As a civilian, you can track your favorite food trucks and pre-order meals through the app.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        How Job Site Route Works
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: { xs: 6, md: 10 },
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Download the Job Site Route app, create an account, and start exploring
        how it connects contractors, truck owners, and civilians seamlessly.
      </Typography>

      {/* ===== Main Grid Layout ===== */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: 1600,
          mx: "auto",
          position: "relative",
        }}
      >
        {/* Left side (steps 1 & 3) */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: { xs: 6, md: 16 },
            alignItems: "flex-end",
            textAlign: "right",
            pr: { md: 4 },
            mt: { md: 4 },
          }}
        >
          {[steps[0], steps[2]].map((step, index) => (
            <Stack
              key={step.id}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                maxWidth: 320,
                mt: index === 1 ? { md: 6 } : 0,
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 1, mr: 10,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mr :10, mb:1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mr: 10}}>
                  {step.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Grid>

        {/* Center (Phone + Ellipse) */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: { xs: 8, md: 0 },
            position: "relative",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="public/assets/HowItWorks/Ellipse.png"
              alt="Ellipse"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: 260, md: 360 },
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src="public/assets/HowItWorks/phone2.png"
              alt="Phone"
              sx={{
                position: "relative",
                width: { xs: 220, md: 280 },
                zIndex: 2, 
              }}
            />
          </Box>
        </Grid>

        {/* Right side (steps 2 & 4) */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: { xs: 6, md: 16 },
            alignItems: "flex-start",
            textAlign: "left",
            pl: { md: 4 },
            mt: { md: 4 },
          }}
        >
          {[steps[1], steps[3]].map((step, index) => (
            <Stack
              key={step.id}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                maxWidth: 320,
                mt: index === 1 ? { md: 6 } : 0,
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 1, ml:10,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 ,ml:10, mb:1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ml: 10}}>
                  {step.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
