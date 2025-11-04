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
import Premium   from "./premium/Premium";

const pricingData = [
  {
    title: "Food Trucks",
    icon: <EmojiTransportationIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Food trucks need real-time alerts for job sites and high-traffic locations.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features:
          "View nearby job site locations & estimated foot traffic. No priority alerts.",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10",
        price: "$10",
        features:
          "Receive up to 5 push notifications/day for high-traffic sites. Can post 1 signature dish to order-by-click.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20",
        price: "$20",
        features:
          "Receive 15 push notifications/day, priority placement in the app’s search listings. Can post 5 menu items for pre-ordering.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$50",
        price: "$50",
        features:
          "Unlimited alerts, top placement in listings, analytics on high-traffic locations. Can post entire menu for pre-ordering.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
  {
    title: "Contractors",
    icon: <EngineeringIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Contractors need to post sites and notify laborers or food trucks quickly.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features:
          "View registered laborers and food trucks. Post 1 site/month, no direct contact.",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10",
        price: "$10",
        features:
          "Post 2 sites/day, contact laborers/food trucks via in-app text/call.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20",
        price: "$20",
        features:
          "Post 5 sites/day, priority notifications to laborers/trucks.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$30",
        price: "$30",
        features:
          "Post 10 sites/day, advanced analytics, unlimited notifications.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$50",
        price: "$50",
        features:
          "Unlimited postings, full access to all features & analytics.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
  {
    title: "Civilians / Foodies",
    icon: <FastfoodIcon sx={{ fontSize: 36, color: "#fff" }} />,
    description:
      "Civilians may want to track food trucks or job sites for events, street fairs, or deliveries.",
    tiers: [
      {
        tier: "Free",
        price: "$0",
        features:
          "View nearby trucks/sites, basic notifications (1/day). No food ordering (pre-orders).",
        icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$5",
        price: "$5",
        features:
          "Receive 5 notifications/day, basic route info. Can order 1 meal per week.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$10",
        price: "$10",
        features:
          "15 notifications/day, route suggestions, ability to favorite trucks/sites. Can order 1 meal per day.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
      {
        tier: "$20",
        price: "$20",
        features:
          "Unlimited notifications, detailed analytics on routes & popular trucks/sites. Unlimited food ordering & catering from trucks.",
        icon: <PaidIcon sx={{ fontSize: 20, color: "#fff" }} />,
      },
    ],
  },
];

const Referrals = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        mt: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          sx={{ mb: 6, color: "primary.main" }}
        >
          Pricing & Referral Plans
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 5 }}
        >
          {pricingData.map((category, index) => (
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

        {/* Referral Program & Key Notes Section */}
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
                  Referral Program (Optional but Recommended)
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                  • Each referral = <strong>10% off monthly membership</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                  • 10 active referrals = <strong>FREE membership</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  • Works across all user types: Food trucks, contractors, and
                  civilians.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Key Notes Card */}
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
                  Key Notes
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                  • Keeps the platform accessible with{" "}
                  <strong>cheap entry-level tiers</strong>.
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                  • Encourages upgrades via{" "}
                  <strong>
                    more postings, notifications, and priority features
                  </strong>
                  .
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mb: 1 }}>
                  • Scales for heavy users (contractors posting multiple sites,
                  trucks tracking high-traffic events).
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  • Supports a referral program to{" "}
                  <strong>grow user base virally</strong>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Premium />
    </Box>
    
  );
};

export default Referrals;
