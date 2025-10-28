import { Box, Typography, Grid, Stack } from "@mui/material";

const Contractor = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Left side - Steps */}
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          {[
            "Download and install the Job Site Route app from the App Store or Google Play Store.",
            "Create a contractor account and profile. Locate all of the food trucks that use the app in your area.",
            "Upgrade to a premium membership in order to add your construction sites to the map and receive a steady stream of food trucks to your location throughout the day.",
            "Refer other contractors. Every active referral gives you a 10% discount from your monthly premium membership fee. With 10 active premium referrals, your membership is FREE.",
          ].map((text, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                textAlign: "left",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  minWidth: 60,
                  height: 60,
                  borderRadius: "8px",
                  backgroundColor: "#E5F4F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#007A87",
                  fontSize: "18px",
                }}
              >
                {index + 1}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  lineHeight: 1.6,
                  maxWidth: 500,
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Grid>

      {/* Right side - Images */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            minHeight: 450,
            ml: 35,
          }}
        >
          {/* Background Ellipse */}
          <Box
            component="img"
            src="/assets/contractor/Ellipse.png"
            alt="background ellipse"
            sx={{
              position: "absolute",
              right: "-5%",
              top: "10%",
              width: 420,
              height: "auto",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Phone 2 (behind) */}
          <Box
            component="img"
            src="/assets/contractor/phone2.png"
            alt="phone2"
            sx={{
              width: 250,
              position: "absolute",
              right: "-10%",
              top: "18%",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Phone 1 (front) */}
          <Box
            component="img"
            src="/assets/contractor/phone1.png"
            alt="phone1"
            sx={{
              width: 220,
              position: "relative",
              right: "95%",
              top: "-60%",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Truck Icon */}
          <Box
            component="img"
            src="/assets/contractor/truck.png"
            alt="truck"
            sx={{
              position: "absolute",
              top: "0%",
              right: "15%",
              width: 250,
              zIndex: 3,
              backgroundColor: "",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contractor;
