import { Box, Typography, Grid, Stack } from "@mui/material";
const Contractor = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      
      
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
                sx={{ color: "#333", lineHeight: 1.6, maxWidth: 500 }}
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
              right: { xs: "-3%", md: "25%" },
              top: {  xs: "25%",md: "10%" },
              width: { xs: 200, sm:300, md: 350 },
              height: "auto",
              zIndex: 1,
              
            }}
          />
          {/* Phone 2 (behind) */}
          <Box
            component="img"
            src="/assets/contractor/phone2.png"
            alt="phone2"
            sx={{
              width: { xs: 100, sm: 210, md: 220 },
              position: "absolute",
              right: { xs: "0%", sm: "-20%", md: "20%" },
              bootom: { xs: "10%", sm: "0%", md: "0%" },
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
              width: { xs: 100, sm: 200, md: 200 },
              position: "relative",
              right: { xs: "100%", sm: "70%", md: "120%" },
              top:{ xs: "40%"},
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
              top: { xs: "25%", md: "5%" },
              right: { xs: "15%", md: "50%" },
              width: { xs: 120, sm: 100, md: 210 },
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
