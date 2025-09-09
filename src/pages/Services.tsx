import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps using React, Vue, and Next.js. Optimized for speed and SEO.",
    image:
      "https://www.topdesk.com/en/wp-content/media/sites/30/topdesk-demo-videos-still-incident-management-and-self-service-portal.png",
    icon: <CodeIcon sx={{ fontSize: 50, color: "#f6af05" }} />,
  },
  {
    title: "Mobile App Development",
    description:
      "High-quality iOS and Android apps with seamless UX/UI and performance.",
    image:
      "https://www.topdesk.com/en/wp-content/media/sites/30/topdesk-demo-videos-still-incident-management-and-self-service-portal.png",
    icon: <PhoneIphoneIcon sx={{ fontSize: 50, color: "#f6af05" }} />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, database solutions, and cloud-native apps for businesses.",
    image:
      "https://www.topdesk.com/en/wp-content/media/sites/30/topdesk-demo-videos-still-incident-management-and-self-service-portal.png",
    icon: <StorageIcon sx={{ fontSize: 50, color: "#f6af05" }} />,
  },
  {
    title: "Technical Support",
    description:
      "24/7 support and proactive monitoring to ensure smooth business operations.",
    image:
      "https://www.topdesk.com/en/wp-content/media/sites/30/topdesk-demo-videos-still-incident-management-and-self-service-portal.png",
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: "#f6af05" }} />,
  },
];

const Services = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          bgcolor: "linear-gradient(to right, #f9f9f9, #ffffff)",
        }}>
        <Container>
          <Typography
            variant='h3'
            fontWeight='bold'
            color='secondary'
            gutterBottom>
            Our Services
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            maxWidth={700}
            mx='auto'>
            Innovative solutions tailored to your business needs, combining
            creativity and technology to drive growth.
          </Typography>
          <Button
            sx={{
              mt: 4,
              backgroundColor: "#f6af05",
              color: "#262ca0",
              px: 5,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e89f00" },
            }}>
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Services Cards */}
      <Box sx={{ py: 12, bgcolor: "#f6f6f6" }}>
        <Container>
          <Grid container spacing={6}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      textAlign: "center",
                      borderTop: "4px solid #f6af05",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.03)",
                        boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                      },
                    }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant='h6' fontWeight='bold' mb={1}>
                      {service.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Box
          key={index}
          sx={{
            py: 12,
            bgcolor: index % 2 === 0 ? "#ffffff" : "#f6f6f6",
          }}>
          <Container>
            <Grid
              container
              spacing={6}
              alignItems='center'
              direction={index % 2 === 0 ? "row" : "row-reverse"}>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}>
                  <Typography
                    variant='h4'
                    fontWeight='bold'
                    color='secondary'
                    mb={3}>
                    {service.title}
                  </Typography>
                  <Typography variant='body1' color='text.secondary' paragraph>
                    {service.description} More detailed information can be added
                    here for clients to understand the service better.
                  </Typography>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: "#f6af05",
                      color: "#262ca0",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      px: 5,
                      py: 1.5,
                      "&:hover": { backgroundColor: "#e89f00" },
                    }}>
                    Learn More
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* CTA Section */}
      <Box sx={{ py: 12, textAlign: "center", bgcolor: "#ffffff" }}>
        <Typography variant='h5' fontWeight='bold' color='secondary' mb={4}>
          Ready to Transform Your Business?
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: "#f6af05",
            color: "#262ca0",
            fontWeight: "bold",
            borderRadius: "50px",
            px: 6,
            py: 1.5,
            "&:hover": { backgroundColor: "#e89f00" },
          }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
