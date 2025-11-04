import React from "react";
import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SyncIcon from "@mui/icons-material/Sync";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const AboutUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        mt: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          About Job Site Route
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "text.secondary",
            mb: { xs: 5, md: 8 },
            px: { xs: 2, md: 6 },
            lineHeight: 1.7,
          }}
        >
          Job Site Route is an app that connects food trucks with construction
          job sites. Contractors add job sites to the app daily. Foodies can
          locate food trucks and pre-order meals through the app.
        </Typography>

        {/* Video Section */}
        <Paper
          elevation={4}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            mx: "auto",
            maxWidth: "800px",
            aspectRatio: "16/9",
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/UyR_1PQNy6s"
            title="About Job Site Route"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Paper>
      </Container>
      <Box
        sx={{ textAlign: "center", px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "primary.main",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
          }}
        >
          Revolutionizing Food Delivery with Smart Routing and Seamless
          Coordination
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Welcome to Job Site Route, the ultimate app designed to simplify and
          optimize food delivery operations. This all-in-one platform seamlessly
          connects truck owners, contractors, and civilians, ensuring an
          efficient, transparent, and hassle-free experience for everyone
          involved. Whether you're a truck owner delivering food, a contractor
          managing delivery sites, or a civilian ordering meals, Job Site Route
          streamlines the entire process with smart routing, real-time
          coordination, and easy payment options.
        </Typography>
      </Box>

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "primary.main",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            textAlign: "center",
          }}
        >
          For Truck Owners: Deliver Food with Ease
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          As a truck owner, your role is essential in ensuring timely and
          efficient food deliveries. Job Site Route gives you the tools to
          maximize your efficiency and earnings.
        </Typography>

        {/* Bullet Points */}
        <Box
          component="ul"
          sx={{
            mt: 2,
            mb: 2,
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "left",
            pl: { xs: 2, md: 3 },
            listStyle: "none", // remove default bullets
          }}
        >
          {[
            {
              title: "Follow Optimized Routes",
              desc: "Receive pre-planned delivery routes from contractors, ensuring you take the most efficient path to each destination.",
            },
            {
              title: "Manage Orders Easily",
              desc: "View and accept civilian delivery requests, keeping your schedule full and business booming.",
            },
            {
              title: "Showcase Your Menu",
              desc: "Add your food menu and subscription options, allowing customers to browse and order directly from you.",
            },
            {
              title: "Earn on the Go",
              desc: "Get paid instantly for every successful delivery, with transparent payment tracking and instant notifications.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
            >
              <CheckCircleIcon
                color="primary"
                sx={{ mr: 1, mt: "4px", flexShrink: 0 }}
              />
              <Typography variant="body1">
                <strong>{item.title}</strong> – {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Closing Line */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          With Job Site Route, truck owners can focus on delivering great food
          while the app takes care of the logistics.
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "primary.main",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            textAlign: "center",
          }}
        >
          For Contractors: Manage Sites & Optimize Deliveries
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          As a contractor, you play a vital role in ensuring smooth food
          distribution. Job Site Route allows you to:
        </Typography>

        {/* Bullet Points */}
        <Box
          component="ul"
          sx={{
            mt: 2,
            mb: 2,
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "left",
            pl: { xs: 2, md: 3 },
            listStyle: "none",
          }}
        >
          {[
            {
              title: "Add Delivery Sites",
              desc: "Specify key locations where truck owners should deliver food, ensuring timely and organized distribution.",
            },
            {
              title: "Enhance Efficiency",
              desc: "Help truck owners follow structured routes, reducing delays and improving service quality.",
            },
            {
              title: "Improve Coordination",
              desc: "Keep deliveries on track and on time with a clear, organized system.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
            >
              <CheckCircleIcon
                color="primary"
                sx={{ mr: 1, mt: "4px", flexShrink: 0 }}
              />
              <Typography variant="body1">
                <strong>{item.title}</strong> – {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Closing Line */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          By using Job Site Route, contractors ensure food trucks reach the
          right places at the right time, keeping operations seamless and
          efficient.
        </Typography>
      </Box>

      {/* === For Civilians Section === */}

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "primary.main",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            textAlign: "center",
          }}
        >
          For Civilians: Order Food with a Click
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          As a civilian, Job Site Route makes ordering fresh, delicious food
          quick, easy, and hassle-free.
        </Typography>

        {/* Bullet Points */}
        <Box
          component="ul"
          sx={{
            mt: 3,
            listStyle: "none",
            pl: 0,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {[
            {
              title: "Browse Food Menus",
              desc: "Click on a nearby food truck to view its menu and place an order instantly.",
            },
            {
              title: "Secure Payments",
              desc: "Pay safely through the app using multiple payment options, ensuring a smooth transaction.",
            },
            {
              title: "Receive Fresh Meals Fast",
              desc: "With optimized delivery routes and dedicated truck owners, your food arrives hot and on time.",
            },
          ].map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
            >
              <CheckCircleIcon
                sx={{
                  color: "primary.main",
                  mr: 1.2,
                  mt: "3px",
                  fontSize: "1.3rem",
                  flexShrink: 0,
                }}
              />
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                <Typography
                  component="span"
                  sx={{ fontWeight: 700, color: "text.secondary" }}
                >
                  {item.title} –{" "}
                </Typography>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Closing Paragraph */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            color: "text.secondary",
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          No more guessing where food trucks are parked—Job Site Route connects
          you with the best options near you!
        </Typography>
      </Box>

      {/* === Why Choose Job Site Route === */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{
            mb: 3,
            color: "primary.main",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Why Choose Job Site Route?
        </Typography>

        <Stack
          spacing={3}
          sx={{
            maxWidth: "800px",
            mx: "auto",
            textAlign: "left",
          }}
        >
          {/* Efficiency */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <RocketLaunchIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Efficiency:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Smart routing and real-time tracking ensure fast and on-time
                deliveries.
              </Typography>
            </Box>
          </Stack>

          {/* Transparency */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <LightbulbIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Transparency:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Clear communication and payment tracking build trust between
                users.
              </Typography>
            </Box>
          </Stack>

          {/* Flexibility */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <SyncIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Flexibility:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Whether you're a food truck owner, contractor, or civilian, the
                app adapts to your needs.
              </Typography>
            </Box>
          </Stack>

          {/* User Friendly Design */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <SmartphoneIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                User-Friendly Design:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Intuitive and easy to use for everyone, regardless of technical
                skills.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/* === How It Works === */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{
            mb: 3,
            color: "primary.main",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          How It Works
        </Typography>

        <Stack
          spacing={3}
          sx={{
            maxWidth: "800px",
            mx: "auto",
            textAlign: "left",
          }}
        >
          {/* Step 1 */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <CheckCircleIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Sign Up:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Choose your role – Truck Owner, Contractor, or Civilian – and
                create your account.
              </Typography>
            </Box>
          </Stack>

          {/* Step 2 */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <CheckCircleIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Get Started:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                <strong>Truck Owners</strong> – View and follow pre-assigned
                routes from contractors. <br />
                <strong>Contractors</strong> – Add delivery sites to guide truck
                owners to the right locations. <br />
                <strong>Civilians</strong> – Browse menus, place orders, and
                track deliveries in real time.
              </Typography>
            </Box>
          </Stack>

          {/* Step 3 */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <CheckCircleIcon color="primary" />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Enjoy the Benefits:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Experience a seamless, efficient, and stress-free food delivery
                process.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 5, md: 6 },
          
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

export default AboutUs;
