import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import TruckOwner from "./parts/TruckOwner";
import Contractor from "./parts/Contractor";
import Civilian from "./parts/Civilian";

const HowAppWorks = () => {
  const [selected, setSelected] = useState("truck");

  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: "#000",
          }}
        >
          How does the Job Site Route app work?
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            mb: 5,
            lineHeight: 1.6,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Download Job site route app from Play store or App store, create an
          account, order food, invite friends and earn discounts!
        </Typography>

        {/* Toggle Buttons */}
        <ToggleButtonGroup
          color="primary"
          exclusive
          value={selected}
          onChange={handleChange}
          sx={{
            backgroundColor: "#F9F9F9",
            borderRadius: "12px",
            p: "6px",
            mb: 14,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            "& .MuiToggleButton-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              px: 3,
              py: 1.2,
              border: "none",
              borderRadius: "10px !important",
              color: "#000",
              "&.Mui-selected": {
                backgroundColor: "#007A87",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#006b78",
                },
              },
            },
          }}
        >
          <ToggleButton value="truck">Truck Owner</ToggleButton>
          <ToggleButton value="contractor">Contractor</ToggleButton>
          <ToggleButton value="civilian">Civilian</ToggleButton>
        </ToggleButtonGroup>

        {/* Render Based on Selection */}
        {selected === "truck" && <TruckOwner />}
        {selected === "contractor" && <Contractor />}
        {selected === "civilian" && <Civilian />}
      </Container>
    </Box>
  );
};

export default HowAppWorks;
