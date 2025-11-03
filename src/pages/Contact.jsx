import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
  Alert,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // 🔹 Replace these with your actual IDs
  const SERVICE_ID = "service_awn9ilp";
  const TEMPLATE_ID = "template_wtzyndq";
  const PUBLIC_KEY = "3GVgyBMhNblwlVIQ5";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setSuccess(true);
          setError(false);
          e.target.reset(); // clear the form
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

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
        {/* Header */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Have a question or want to work with us? Fill out the form below or
          reach us directly.
        </Typography>

        {/* Main Grid */}
        <Grid container spacing={4}>
          {/* Left Section - Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                backgroundColor: "#ffffff",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ mb: 3, color: "primary.main " }}
              >
                Send us a message
              </Typography>

              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  fullWidth
                  name="from_name"
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  name="from_email"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                />

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  type="submit"
                  sx={{
                    mt: { xs: 3, md: 4 },
                    textTransform: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                  }}
                >
                  Send Message
                </Button>

                {/* Alerts for feedback */}
                {success && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Message sent successfully!
                  </Alert>
                )}
                {error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    Failed to send message. Please try again later.
                  </Alert>
                )}
              </form>
            </Paper>
          </Grid>

          {/* Right Section - Contact Info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ color: "primary.main" }}
              >
                Contact Information
              </Typography>

              <Typography sx={{ mb: 1 }}>
                📍 8306 Wilshire Blvd. Suite 777 Beverly Hills, CA 90211
              </Typography>
              <Typography sx={{ mb: 1 }}>📧 info@jobsiteroute.com</Typography>
              <Typography sx={{ mb: 3 }}>📞 (424) 204-2382</Typography>

              {/* Social Media Icons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1,
                }}
              >
                <IconButton
                  color="primary"
                  href="https://www.facebook.com/jobsiteroute/"
                  target="_blank"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.instagram.com/jobsiteroute/"
                  target="_blank"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/devin-lockett-31687b22/"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
