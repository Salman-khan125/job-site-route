import React from "react";
import { Box, Grid, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  const footerData = [
    {
      title: "Contact Job Site Route",
      items: [
        "📍 8306 Wilshire Blvd. Suite 777 Beverly Hills, CA 90211",
        "📧 info@jobsiteroute.com",
        "📞 (424) 204-2382",
        "Promotions",
      ],
    },
    {
      title: "About Job Site Route",
      items: [
        "Job Site Route is produced by BiomedRx Apps, a division of BiomedRx Federal Inc. It is one of several lifestyle and commerce mobile apps conceptualized by our founder and president.",
        "Programming for the Job Site Route app by",
        "https://mksmarttechnologies.com/",
      ],
    },
    {
      title: "How to Become a BiomedRX Hemp Distributor",
      items: [
        "Please send us an email",
        "FAQs",
        "Expressing your interest, and we will contact you promptly.",
        "We only drop ship wholesale to distributors with orders of 10 bottles or more, not including DMSO.",
      ],
    },
    {
      title: "Popular Links",
      items: [
        "https://devinlockett.com",
        "Devin Lockett is a serial entrepreneur who is committed to creating solutions that improve the quality of our lives.",
        "Labor Dia is our sister app that connects contractors and day laborers.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fbf9f9",
        py: { xs: 5, md: 6 },
        px: { xs: 3, sm: 5, md: 10 },
        borderTop: "1px solid #eee",
        width: "100%",
      }}
    >
      {/* Top Section: Logo + Store Buttons */}
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: { xs: 5, md: 7 } }}
      >
        <Grid item xs={12} md={4}>
          <Stack
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={0} // ↓ reduced spacing between logo & buttons
            textAlign={{ xs: "center", md: "left" }}
          >
            
            <Box
              component="img"
              src="/assets/footer/Frame.png"
              alt="App Store Buttons"
              sx={{
                width: { xs: 190, sm: 210, md: 230 },
                height: "auto",
              }}
            />
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Columns */}
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {footerData.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Stack
              spacing={1.5}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontSize: { xs: "15px", md: "16px" },
                  mb: 1,
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
                    fontSize: { xs: "13px", md: "14px" },
                    lineHeight: 1.6,
                    maxWidth: 260,
                  }}
                >
                  {item.startsWith("http") ? (
                    <Link
                      href={item}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#007A87", textDecoration: "none" }}
                    >
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </Typography>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Copyright */}
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 5, md: 6 },
          pt: 2.5,
          borderTop: "1px solid #eee",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#777",
            fontSize: { xs: "13px", md: "14px" },
          }}
        >
          © 2025 Job Site Route. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
