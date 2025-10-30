import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Referrals", path: "/referrals" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "100%", sm: "95%", md: "90%" },
        borderRadius: { xs: 0, sm: "20px" },
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 3 },
          minHeight: { xs: 64, md: 80 },
          overflow: "hidden",
        }}
      >
        {/* ✅ Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            maxWidth: { xs: "50%", md: "none" }, // prevent overflow
          }}
        >
          <img
            src="/assets/Hero/logo.png"
            alt="Company Logo"
            style={{
              height: "75px",
              width: "auto",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </Box>

        {/* Desktop Nav Links */}
        <NavLinks sx={{ mx: "auto" }}>
          {navItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                position: "relative",
                color: "text.primary",
                cursor: "pointer",
                fontWeight: 500,
                transition: "color 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                "&:hover::after": { width: "100%" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </NavLinks>

        {/* Contact Button (Desktop Only) */}
        <Box
          sx={{
            ml: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: (theme) => theme.palette.primary.dark,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
                py: 1,
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* ✅ Hamburger Icon (Mobile Only) */}
        <IconButton
          color="primary"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            ml: "auto",
            flexShrink: 0,
          }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>

        {/* Drawer (Mobile) */}
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: "75%", maxWidth: 300 },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: "#007A87",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Job Site Route
            </Typography>

            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: "auto", textAlign: "center" }}>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.main,
                    },
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
