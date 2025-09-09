import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
      <Container>
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <Typography
            variant='h3'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            gutterBottom>
            Contact Us
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            textAlign='center'
            mb={8}>
            We'd love to hear from you! Reach out for inquiries, support, or
            feedback.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <Paper sx={{ p: 4, borderRadius: "16px", boxShadow: 3 }}>
                <Stack spacing={3}>
                  <TextField label='Full Name' variant='outlined' fullWidth />
                  <TextField label='Email' variant='outlined' fullWidth />
                  <TextField label='Subject' variant='outlined' fullWidth />
                  <TextField
                    label='Message'
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={5}
                  />
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: "#f6af05",
                      color: "#262ca0",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "#e89f00",
                      },
                    }}>
                    Send Message
                  </Button>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <Stack spacing={4}>
                <Box display='flex' alignItems='center' gap={2}>
                  <LocationOnIcon color='secondary' />
                  <Typography variant='body1' color='text.secondary'>
                    123 Company Street, City, Country
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={2}>
                  <PhoneIcon color='secondary' />
                  <Typography variant='body1' color='text.secondary'>
                    +1 (234) 567-890
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={2}>
                  <EmailIcon color='secondary' />
                  <Typography variant='body1' color='text.secondary'>
                    contact@company.com
                  </Typography>
                </Box>

                {/* Social Media */}
                <Stack direction='row' spacing={2}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <IconButton color='secondary'>
                      <FacebookIcon />
                    </IconButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <IconButton color='secondary'>
                      <TwitterIcon />
                    </IconButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <IconButton color='secondary'>
                      <LinkedInIcon />
                    </IconButton>
                  </motion.div>
                </Stack>

                {/* Optional Map */}
                <Box
                  component='iframe'
                  src='https://maps.google.com/maps?q=Yangon&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  width='100%'
                  height='280px'
                  sx={{ borderRadius: "16px", border: 0 }}
                  allowFullScreen
                />
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
