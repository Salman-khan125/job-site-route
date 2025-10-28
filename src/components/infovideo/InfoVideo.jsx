import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const InfoVideo = () => {
  return (
    <Box
      sx={{
        backgroundColor:"#fff",
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
            mb: 6,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Watch this video to find out more about how the Job Site Route can help
          mobile food vendors increase sales, while saving contractors time and money.
        </Typography>
      </Stack>

      {/* Embedded Video */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          maxWidth: 900,
          height: "auto",
          mx: "auto",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/UyR_1PQNy6s"
          title="Informative Video Intro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "300px", md: "500px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default InfoVideo;
