import { Box, Typography, Grid, Stack } from "@mui/material";

const Civilian = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Left side - Steps */}
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          {[
            "Download and install the Job Site Route app from the App Store or Google Play Store.",
            "Create a civilian account and profile. Gain instant access to the locations of all of the food trucks using the app.",
            "Click on a truck to view the menu and pre-order meals. You can visit the truck to pick up your order while your food is being prepared.",
            "Refer the app to others to receive a discount on the surcharge for in-app food purchases.",
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
            src="/assets/civilian/Ellipse.png"
            alt="background ellipse"
            sx={{
              position: "absolute",
              right: "-5%",
              top: "10%",
              width: 420,
              height: "auto",
              zIndex: 1,
            }}
          />

          {/* Phone 2 (behind) */}
          <Box
            component="img"
            src="/assets/civilian/phone2.png"
            alt="phone2"
            sx={{
              width: 220,
              position: "absolute",
              right: "-10%",
              top: "18%",
              zIndex: 1,
            }}
          />

          {/* Phone 1 (front) */}
          <Box
            component="img"
            src="/assets/civilian/phone1.png"
            alt="phone1"
            sx={{
              width: 220,
              position: "relative",
              right: "95%",
              top: "-60%",
              zIndex: 2,
            }}
          />

          {/* Truck Icon */}
          <Box
            component="img"
            src="/assets/civilian/truck.png"
            alt="truck"
            sx={{
              position: "absolute",
              top: "0%",
              right: "8%",
              width: 270,
              zIndex: 3,
            }}
          />

          {/* Pizza Price Icon */}
          <Box
            component="img"
            src="/assets/civilian/pizzaprice.png"
            alt="pizzaprice"
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "-160%",
              width: 240,
              zIndex: 3,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Civilian;
