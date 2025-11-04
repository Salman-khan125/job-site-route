import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PaidIcon from "@mui/icons-material/Paid";

const premiumData = [
  {
    title: "Food Trucks",
    icon: <EmojiTransportationIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Stay ahead of the crowd and hit the best locations with real-time alerts and analytics.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features: "View nearby job sites & estimated foot traffic.",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10/month",
        price: "$10",
        features:
          "Up to 5 push notifications/day for high-traffic sites. Can post 1 menu item.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20/month",
        price: "$20",
        features:
          "15 notifications/day, priority placement in listings. Can post 5 menu items.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$50/month",
        price: "$50",
        features:
          "Unlimited alerts, top placement, analytics on popular locations. Can post entire menu.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
  {
    title: "Contractors",
    icon: <EngineeringIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Post sites, reach laborers and food trucks quickly with powerful tools and analytics.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features: "View registered users, post 1 site/month, no direct contact.",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10/month",
        price: "$10",
        features:
          "Post 2 sites/day, contact laborers/trucks via in-app text/call.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20/month",
        price: "$20",
        features: "Post 5 sites/day, priority notifications.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$30/month",
        price: "$30",
        features:
          "Post 10 sites/day, advanced analytics, unlimited notifications.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$50/month",
        price: "$50",
        features: "Unlimited postings, full access to all features.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
  {
    title: "Civilians / Foodies",
    icon: <FastfoodIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Track trucks and events, never miss your favorite stops or local food festivals.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features: "View nearby trucks/sites, 1 notification/day.",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$5/month",
        price: "$5",
        features: "5 notifications/day, basic route info.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10/month",
        price: "$10",
        features:
          "15 notifications/day, favorite trucks/sites, route suggestions.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20/month",
        price: "$20",
        features:
          "Unlimited notifications, detailed analytics on routes & popular spots.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
];

const Premium = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, mt: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          sx={{ mb: 6, color: "primary.main" }}
        >
          Job Site Route Premium Memberships
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Track. Post. Discover. Your Routes, Your Way.
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 5 }}
        >
          {premiumData.map((category, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 340,
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 4,
                  backgroundColor: "primary.main",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Stack alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                    {category.icon}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ color: "#fff", textAlign: "center" }}
                    >
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1.6,
                        opacity: 0.9,
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Stack>

                  <Divider
                    sx={{ my: 2, borderColor: "rgba(255,255,255,0.3)" }}
                  />

                  {category.tiers.map((tier, i) => (
                    <Box
                      key={i}
                      sx={{
                        mb: 2,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      {tier.icon}
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{ color: "#fff" }}
                        >
                          {tier.tier} — {tier.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255,255,255,0.9)", mt: 0.5 }}
                        >
                          {tier.features}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

           {/* Premium Referral Program & Why Go Premium Section */}
<Grid
  container
  spacing={3}
  justifyContent="center"
  alignItems="stretch"
  sx={{ mt: 8 }}
>
  {/* Referral Program Card */}
  <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        borderRadius: 3,
        boxShadow: 4,
        p: 3,
        backgroundColor: "primary.main",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: "#fff" }}
          gutterBottom
        >
          Referral Program (All Users)
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
          • Each referral = <strong>10% OFF</strong> monthly membership.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
          • 10 active referrals = <strong>FREE membership forever! 🎉</strong>
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Why Go Premium Card */}
  <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        borderRadius: 3,
        boxShadow: 4,
        p: 3,
        backgroundColor: "primary.main",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: "#fff" }}
          gutterBottom
        >
          Why Go Premium?
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
          • Stay informed – Never miss a high-traffic location or job site.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
          • Reach faster – Contact laborers, trucks, or contractors instantly.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
          • Analytics & Insights – Optimize routes and postings for maximum
          efficiency.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          • Fair & Transparent – Everyone gets visibility and equal opportunity.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>


      </Container>
   <Box
         sx={{
           textAlign: "center",
           mt: { xs: 3, md: 4 },
           py: 2,
           borderTop: "1px solid #eee",
         }}
       >
         <Typography
           variant="body2"
           sx={{
             color: "text.secondary",
             fontSize: { xs: "13px", md: "14px" },
           }}
         >
           © 2025 Job Site Route. All rights reserved.
         </Typography>
       </Box>



    </Box>
  );
};

export default Premium;
