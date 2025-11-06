import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Phone, Email, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "rgba(0,0,0,0.8)",
        pt: 6,
        pb: 3,
        mt: 6,
        boxShadow: "0 -1px 6px rgba(0,0,0,0.05)",
      }}
    >
      <Box className="container" sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        {/* Top Footer Sections */}
        <Grid container spacing={4} mb={4}>
          {/* Logo + Social */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Box>
              <Link href="/" underline="none">
                <img
                  src="/public/images/241.png"
                  alt="Nick House Buyer"
                  style={{ height: "100px" }}
                />
              </Link>
              <Typography
                variant="h6"
                sx={{ mt: 1, fontWeight: 700, fontSize: "1.1rem" }}
              >
                Nick House Buyer
              </Typography>

              <Stack direction="row" spacing={1.5} mt={2}>
                <IconButton href="#" aria-label="Twitter">
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton href="#" aria-label="Facebook">
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton href="#" aria-label="Instagram">
                  <Instagram fontSize="small" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Community */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Community
            </Typography>
            <Stack spacing={1}>
              <Link href="/properties" color="inherit" underline="hover">
                Search Properties
              </Link>
              <Link href="/terms-of-service" color="inherit" underline="hover">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Stack>
          </Grid>

          {/* Blogs */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Blogs
            </Typography>
            <Stack spacing={1}>
              <Link href="/blogs/1" color="inherit" underline="hover">
                Selling House Quickly
              </Link>
              <Link href="/blogs/2" color="inherit" underline="hover">
                Calculate Sell Taxes
              </Link>
              <Link href="/blogs/3" color="inherit" underline="hover">
                Pre Foreclosure
              </Link>
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/aboutus" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/faq" color="inherit" underline="hover">
                FAQs
              </Link>
              <Link href="/contactus" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Have Questions?
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="flex-start" spacing={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  100 N Ashley Dr. Tampa, Florida 33602
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone fontSize="small" />
                <Link href="tel:+13235531922" color="inherit" underline="hover">
                  +1 (323) 553-1922
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Email fontSize="small" />
                <Link
                  href="mailto:info@nickhousebuyer.online"
                  color="inherit"
                  underline="hover"
                >
                  info@nickhousebuyer.online
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Bottom Text */}
        <Box textAlign="center">
          <Typography variant="body2" mb={1}>
            Our team has helped many distressed homeowners relieve their
            emotional and financial stress, and our team goal is the same for
            you.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} All rights reserved | Made with ❤️ by{" "}
            <Link
              href="https://nickswebprojects.site"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Nicks Web Projects
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
