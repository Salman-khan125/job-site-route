import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

const InfoVideo = () => {
const videos = [
  "https://www.youtube.com/embed/UyR_1PQNy6s",
  "https://www.youtube.com/embed/4Wmew8VyQw0",
  "https://www.youtube.com/embed/vsL318SyyuE",
  "https://www.youtube.com/embed/LodicnY7h80",
];


  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        textAlign: "center",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Title and Subtitle */}
      <Stack spacing={2} alignItems="center" mb={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#007A87",
            fontSize: { xs: "28px", md: "36px" },
          }}
        >
          Informative Video Intro
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Watch these videos to find out more about how the Job Site Route can help
          mobile food vendors increase sales, while saving contractors time and money.
        </Typography>
      </Stack>

      {/* Video Grid */}
      <Grid container
  spacing={4}
  justifyContent="center"
  wrap="wrap"
  sx={{ maxWidth: "900px", mx: "auto" }}>
        {videos.map((video, index) => (
          <Grid key={index} item xs={12} sm={6} md={6}  lg={6} xl={6}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "16 / 9", // wider rectangle
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                mx: "auto",
              }}
            >
              <Box
                component="iframe"
                src={video}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoVideo;
