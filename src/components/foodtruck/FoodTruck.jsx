import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const FoodTruck = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 10 },
        backgroundColor: "#fff",
        
      }}
    >
      {/* Title and Subtitle */}
      <Stack
        spacing={2}
        sx={{ mb: { xs: 6, md: 10 }, maxWidth: 700, mx: "auto" }}
        alignItems="center"
        textAlign="center"
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#007A87",
            fontSize: { xs: "28px", md: "36px" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Food trucks build a following
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
          Job site route raises the profile and popularity of the food truck on
          the app. Trucks soon build a followings of loyal fans from the
          civilian, contractor and laborer communities.
        </Typography>
      </Stack>

      {/* Phones and Ellipses */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 5 },
          minHeight: 450,
          mr:25,
        }}
      >
        {/* Group 1: Phone 1 + Ellipse 1 */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ellipse 1 (behind phone1, top-left) */}
          <Box
            component="img"
            src="/assets/foodtruck/Ellipse1.png"
            alt="ellipse1"
            sx={{
              position: "absolute",
              left: { xs: "40%", md: "18%" },
              top: { xs: "17%", md: "-10%" },
              transform: { xs: "translateX(-50%)", md: "none" },
              width: { xs: 100, sm: 180, md: 200 },
              height: "auto",
              zIndex: 0,
            }}
          />

          {/* Phone 1 */}
          <Box
            component="img"
            src="/assets/foodtruck/phone1.png"
            alt="phone1"
            sx={{
              width: { xs: 350, sm: 260, md: 500 },
              mt: { xs: 0, md: -17 },
              left: { xs: "-2%", md: "18%" },
              zIndex: 2,
            }}
          />
        </Box>

        {/* Group 2: Phone 2 + Ellipse 2 */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ellipse 2 (behind phone2, bottom-right) */}
          <Box
            component="img"
            src="/assets/foodtruck/Ellipse2.png"
            alt="ellipse2"
            sx={{
              position: "absolute",
              right: { xs: "15%", md: "-4%" },
              bottom: { xs: "-15%", md: "-12%" },
              transform: { xs: "translateX(50%)", md: "none" },
              width: { xs: 130, sm: 180, md: 150 },
              height: "auto",
              zIndex: 0,
            }}
          />

          {/* Phone 2 */}
          <Box
            component="img"
            src="/assets/foodtruck/phone2.png"
            alt="phone2"
            sx={{
              width: { xs: 240, sm: 220, md: 325 },
              ml: { xs: 13, md: -12 },
              mb: { xs: 0, md: -2 },
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FoodTruck;
