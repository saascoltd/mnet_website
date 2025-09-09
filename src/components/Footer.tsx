import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Partners", "Contact Us"],
    },
    {
      title: "Services",
      items: ["Web Development", "Mobile Apps", "Cloud Solutions", "Marketing"],
    },
    {
      title: "Support",
      items: ["Help Center", "FAQs", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#262ca0", color: "white", pt: 8, pb: 4 }}>
      <Container>
        <Grid container spacing={6}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <Box
                height={100}
                width={100}
                display='flex'
                mb={2}
                bgcolor={"white"}
                p={1}
                borderRadius={2}>
                <img
                  src='./src/assets/mnet_logo.png'
                  alt='Company Logo'
                  height={"100%"}
                  width={"100%"}
                />
              </Box>
              <Typography variant='body2' color='white'>
                We provide innovative solutions to empower your business and
                help you grow with modern technology and strategy.
              </Typography>
              <Stack direction='row' spacing={1} mt={2}>
                <IconButton
                  href='#'
                  sx={{
                    color: "white",
                    "&:hover": { color: "#f6af05" },
                  }}>
                  <Facebook />
                </IconButton>
                <IconButton
                  href='#'
                  sx={{
                    color: "white",
                    "&:hover": { color: "#f6af05" },
                  }}>
                  <Twitter />
                </IconButton>
                <IconButton
                  href='#'
                  sx={{
                    color: "white",
                    "&:hover": { color: "#f6af05" },
                  }}>
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href='#'
                  sx={{
                    color: "white",
                    "&:hover": { color: "#f6af05" },
                  }}>
                  <Instagram />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {links.map((section, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  mb={2}
                  sx={{ color: "#f6af05" }}>
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.items.map((item, idx) => (
                    <Typography
                      key={idx}
                      variant='body2'
                      component='a'
                      href='#'
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { color: "#f6af05" },
                      }}>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ bgcolor: "white", my: 6, opacity: 0.2 }} />

        <Typography
          variant='body2'
          color='white'
          textAlign='center'
          sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
