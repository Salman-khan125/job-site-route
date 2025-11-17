import React, { useState } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

const VideoEmbed = ({ video }) => {
  const [play, setPlay] = useState(false);
  const videoId = video.split("/").pop(); // get YouTube video ID

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9 aspect ratio
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={() => setPlay(true)}
    >
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </Box>
  );
};

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
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "900px", mx: "auto" }}
      >
        {videos.map((video, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <VideoEmbed video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoVideo;
