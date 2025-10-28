import { Box, Typography, Grid, Stack } from "@mui/material";

const TruckOwner = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Left side - Steps */}
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          {[
            "Download and install the Job Site Route app from the App Store or Google Play Store.",
            "Gain instant access to all of the active construction sites in the local area and beyond.",
            "Upgrade to a premium membership to upload your menu and receive pre-orders through the app.",
            "Refer other food trucks. Each active referral gives you a 10% discount from your monthly membership fee. With 10 referrals, it’s FREE!",
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
            src="/assets/appworks/Ellipse.png"
            alt="background ellipse"
            sx={{
              position: "absolute",
              right: "-5%",
              top: "5%",
              width: 450,
              height: "auto",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Phone 2 (behind) */}
          <Box
            component="img"
            src="/assets/appworks/phone2.png"
            alt="phone2"
            sx={{
              width: 210,
              position: "absolute",
              right: "5%",
              top: "18%",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Phone 1 (front) */}
          <Box
            component="img"
            src="/assets/appworks/phone1.png"
            alt="phone1"
            sx={{
              width: 220,
              position: "relative",
              right: "99%",
              top: "-8%",
              zIndex: 2,
              ml: 1,
              pointerEvents: "none",
            }}
          />

          {/* Delivery Icon (top right) */}
          <Box
            component="img"
            src="/assets/appworks/delivery.png"
            alt="delivery"
            sx={{
              position: "absolute",
              top: "-55%",
              right: "-14%",
              width: 500,
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Receive Icon (top left, slightly lower) */}
          <Box
            component="img"
            src="/assets/appworks/Receive.png"
            alt="receive"
            sx={{
              position: "absolute",
              top: "3%",
              left: "-200%",
              width: 350,
              zIndex: 3,
            }}
          />

          {/* Sandwich Icon (bottom left) */}
          <Box
            component="img"
            src="/assets/appworks/sandwich.png"
            alt="sandwich"
            sx={{
              position: "absolute",
              top: "60%",
              left: "-145%",
              width: 250,
              zIndex: 3,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TruckOwner;
