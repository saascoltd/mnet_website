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
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { getContactUs, sendInquiry } from "../store/commonSlice";

const ContactUs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contactUs } = useSelector((state: any) => state.common);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openToast, setOpenToast] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    dispatch(getContactUs());
  }, [dispatch]);

  const handleFormSubmit = () => {
    if (!validate()) return;
    dispatch(sendInquiry(formData)).then((res: any) => {
      if (res.payload.success) {
        setOpenToast(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    });
  };
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
                  <TextField
                    label='Full Name'
                    variant='outlined'
                    fullWidth
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                  <TextField
                    label='Email'
                    type='email'
                    variant='outlined'
                    fullWidth
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                  <TextField
                    label='Phone'
                    variant='outlined'
                    fullWidth
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                  />
                  <TextField
                    label='Subject'
                    variant='outlined'
                    fullWidth
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                  />
                  <TextField
                    label='Message'
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                  <Button
                    variant='contained'
                    onClick={handleFormSubmit}
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
                    {contactUs?.address}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={2}>
                  <PhoneIcon color='secondary' />
                  <Typography variant='body1' color='text.secondary'>
                    {contactUs?.company_phone || "+1 (234) 567-890"}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={2}>
                  <EmailIcon color='secondary' />
                  <Typography variant='body1' color='text.secondary'>
                    {contactUs?.company_email}
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
                  height='360px'
                  sx={{ borderRadius: "16px", border: 0 }}
                  allowFullScreen
                />
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      {/* ✅ Success Toast */}
      <Snackbar
        open={openToast}
        autoHideDuration={4000}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert
          onClose={() => setOpenToast(false)}
          severity='success'
          variant='filled'
          sx={{ width: "100%" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
