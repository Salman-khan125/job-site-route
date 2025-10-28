import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";

const Footer = () => {
  const footerData = [
    {
      title: "Our Services",
      items: ["Food Truck Locations", "Catering", "Mobile Orders", "Promotions"],
    },
    {
      title: "Other Products",
      items: ["Job Site Route App", "Admin Dashboard", "Driver App", "Vendor Portal"],
    },
    {
      title: "Support",
      items: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Use"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Press", "Blog"],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fbf9f9ff",
        py: { xs: 6, md: 5 },
        px: { xs: 3, md: 10 },
        borderTop: "1px solid #eee",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="flex-start">
        {/* Left Side - Logo + Store Buttons */}
        <Grid item xs={12} md={4} lg={3}>
          <Stack
            spacing={2}
            alignItems={{ xs: "center", md: "flex-start" }}
            sx={{
              height: "100%",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                position: "relative",
                width: { xs: 250, md: 500 },
                height: { xs: 80, md: 120 },
                overflow: "visible",
                left: { xs: 0, md: -150 },
              }}
            >
              <Box
                component="img"
                src="/assets/footer/logo.png"
                alt="Job Site Route Logo"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>

            {/* Store Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                mt: { xs: 1, md: -10 },
              }}
            >
              <Box
                component="img"
                src="/assets/footer/Frame.png"
                alt="App Store Buttons"
                sx={{
                  width: { xs: 200, md: 220 },
                  height: "auto",
                  objectFit: "contain",
                  mt: 5,
                }}
              />
            </Box>
          </Stack>
        </Grid>

        {/* Right Side - Columns */}
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: { xs: 4, md: 10 },
            flexWrap: "wrap",
          }}
        >
          {footerData.map((section, index) => (
            <Stack
              key={index}
              spacing={1.5}
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{
                minWidth: { xs: "40%", md: "auto" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#000",
                  fontSize: { xs: "16px", md: "18px" },
                }}
              >
                {section.title}
              </Typography>
              {section.items.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
