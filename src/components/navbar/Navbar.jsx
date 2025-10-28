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
import { Link } from "react-router-dom"; // ✅ Added for navigation

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none", // hide desktop navbar on small screen
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
        width: "90%",
        borderRadius: "20px",
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          width: "100%",
          borderRadius: "50px",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/Hero/logo.png"
            alt="Company Logo"
            style={{ height: "75px", width: "auto" }}
          />
        </Box>

        {/* Desktop Nav Links */}
        <NavLinks sx={{ mx: "auto" }}>
          {navItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              component={Link} //  Use React Router Link
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
                "&:hover::after": {
                  width: "100%",
                },
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
            mr: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact" //  Contact Page
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
        </Box>

        {/* Hamburger Icon (Mobile Only) */}
        <IconButton
          color="primary"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 3, color: "#007A87", fontWeight: 700 }}
            >
              Job Site Route
            </Typography>

            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  component={Link} //  Make Drawer items linkable
                  to={item.path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: "auto", textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/contact"
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
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
