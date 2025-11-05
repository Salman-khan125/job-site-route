import { Box, Typography, Container } from "@mui/material";

const TheImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        mt: { xs: 10, md: 0 },
        backgroundImage: "url('/assets/theimage/lines.svg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        borderRightColor:"#fff",
        color:"#FFF",
        
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#000",
            mb: 2,
          }}
        >
          The image is below
        </Typography>

        {/* Subtitle */}
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
          Download Job Site Route app from Play store or App store, create an account,
          order food, invite friends and earn discounts!
        </Typography>

        {/* Main Logo */}
        <Box
          component="img"
          src="/assets/theimage/image.png" // adjust path if needed
          alt="Job Site Route Logo"
          sx={{
            width: { xs: "70%", sm: "55%", md: "60%" },
            height: "auto",
            mx: "auto",
            display: "block",
          }}
        />
      </Container>
    </Box>
  );
};

export default TheImage;
