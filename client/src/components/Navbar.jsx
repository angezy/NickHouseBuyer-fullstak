import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useScrollTrigger
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentsIcon from "@mui/icons-material/Payments";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/faq" },
  { label: "Listing", href: "/properties" },
  { label: "Blog", href: "/Blogs" },
  { label: "Contact", href: "/Contactus" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Detect current active link
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
    setActivePath(path);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Shadow appears on scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {navLinks.map((item) => (
          <ListItemButton
            key={item.href}
            component="a"
            href={item.href}
            sx={{
              color:
                activePath === item.href || activePath.startsWith(item.href)
                  ? "#0d6efd"
                  : "rgba(0,0,0,0.85)",
              fontWeight:
                activePath === item.href || activePath.startsWith(item.href)
                  ? 600
                  : 400,
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href="/forms/fastSell"
            sx={{
              background: "linear-gradient(180deg,#0078d4,#0066b3)",
              color: "#fff",
              "&:hover": { background: "linear-gradient(180deg,#0088ff,#0078d4)" },
            }}
          >
            Cash Offer
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "rgba(0,0,0,0.85)",
          boxShadow: trigger ? "0 1px 6px rgba(0,0,0,0.06)" : "none",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Left: Logo */}
          <Box display="flex" alignItems="center">
            <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
              <img
                src="/public/images/241.png"
                alt="Nick House Buyer"
                style={{
                  height: "48px",
                  marginRight: "8px",
                }}
              />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ fontSize: "0.9rem" }}
              >
                Nick House Buyer
              </Typography>
            </a>
          </Box>

          {/* Center: Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{
                  color:
                    activePath === item.href || activePath.startsWith(item.href)
                      ? "#0d6efd"
                      : "rgba(0,0,0,0.85)",
                  fontWeight:
                    activePath === item.href || activePath.startsWith(item.href)
                      ? 600
                      : 400,
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right: CTA */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              href="/forms/fastSell"
              variant="contained"
              startIcon={<PaymentsIcon />}
              sx={{
                background: "linear-gradient(180deg,#0078d4,#0066b3)",
                color: "#fff",
                borderRadius: "6px",
                px: 2,
                "&:hover": {
                  background: "linear-gradient(180deg,#0088ff,#0078d4)",
                },
              }}
            >
              CASH OFFER
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
