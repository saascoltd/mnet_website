import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Apple, Android } from "@mui/icons-material";

// Sample services
const services = [
  {
    title: "Web Development",
    description: "Building responsive, modern, and scalable web apps.",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile apps with exceptional UX.",
  },
  {
    title: "Cloud Solutions",
    description: "Secure cloud services to boost your business growth.",
  },
  {
    title: "Digital Marketing",
    description: "Strategies to increase reach, traffic, and conversion.",
  },
];

// Sample news
const newsData = [
  {
    id: 1,
    title: "Company Achieves Major Milestone",
    category: "News",
    image:
      "https://media.istockphoto.com/id/1439932989/vector/project-to-progress-toward-business-goal-tiny-people-holding-pen-to-mark-milestones.jpg?s=612x612&w=0&k=20&c=pU25B1QCSH_unmhjinDdcnR8A5lUq_7jOiLvJSvaZFE=",
  },
  {
    id: 2,
    title: "Team Building Activity 2025",
    category: "Activity",
    image:
      "https://blogimage.vantagecircle.com/content/images/2020/08/Importance-of-team-building.png",
  },
  {
    id: 3,
    title: "New Service Launch",
    date: "2025-08-15",
    image:
      "https://media.istockphoto.com/id/1227391762/vector/launching-soon-marketing-store-template-coming-soon-announcement-flyer-banner.jpg?s=612x612&w=0&k=20&c=j79-q5oSc-zqqxXRGmaNyJoEW2e0-LuOSUKXx5l0-sY=",
    category: "News",
  },
];

// Sample partners
const partners = [
  { logo: "https://dummyjson.com/image/210x70/f88/ffffff?text=Partner+A" },
  { logo: "https://dummyjson.com/image/210x70/988/ffffff?text=Partner+B" },
  { logo: "https://dummyjson.com/image/210x70/c88/ffffff?text=Partner+C" },
  { logo: "https://dummyjson.com/image/210x70/d88/ffffff?text=Partner+D" },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          bgcolor: "#f9f9f9",
          overflow: "hidden",
          py: 8,
        }}>
        {/* Decorative shapes */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            bgcolor: "#f6af05",
            borderRadius: "50%",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            right: -150,
            width: 400,
            height: 400,
            bgcolor: "#262ca0",
            borderRadius: "50%",
            opacity: 0.15,
            zIndex: 0,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={4} maxWidth={700}>
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <Typography variant='h2' fontWeight='bold' color='secondary'>
                Empowering Your Business with Innovative Solutions
              </Typography>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <Typography variant='h6' color='text.secondary'>
                We deliver high-quality, user-centric services that drive growth
                and foster innovation. Join us to take your business to the next
                level.
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
                  Get Started
                </Button>
                <Button
                  variant='outlined'
                  sx={{
                    borderColor: "#262ca0",
                    color: "#262ca0",
                    fontWeight: "bold",
                    borderRadius: "50px",
                    px: 5,
                    py: 1.5,
                    "&:hover": { backgroundColor: "#262ca0", color: "white" },
                  }}>
                  Learn More
                </Button>
              </Stack>
            </motion.div>
          </Stack>
        </Container>

        {/* Hero image or illustration */}
        <motion.img
          src='https://img.freepik.com/free-vector/abstract-technology-background_23-2148879056.jpg'
          alt='Hero Visual'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            maxWidth: "50%",
            borderRadius: "16px",
            zIndex: 0,
          }}
        />
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 12, bgcolor: "#f6f6f6" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            Our Services
          </Typography>
          <Grid container spacing={6}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      textAlign: "center",
                      bgcolor: "white",
                      borderTop: "4px solid #f6af05",
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                      },
                    }}>
                    <Typography variant='h6' fontWeight='bold' mb={1}>
                      {service.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {service.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Latest News Section */}
      <Box sx={{ py: 12, bgcolor: "white" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            News & Activities
          </Typography>
          <Grid container spacing={6}>
            {newsData.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <Box
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: 3,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}>
                    <Box
                      component='img'
                      src={item.image}
                      alt={item.title}
                      sx={{ width: "100%", height: 200, objectFit: "cover" }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant='subtitle2'
                        color='secondary'
                        fontWeight='bold'
                        mb={1}>
                        {item.category}
                      </Typography>
                      <Typography
                        variant='h6'
                        fontWeight='bold'
                        mb={1}
                        className='line-clamp-1'>
                        {item.title}
                      </Typography>
                      <Button
                        size='small'
                        sx={{
                          mt: 1,
                          borderRadius: "30px",
                          px: 3,
                          fontWeight: "bold",
                          border: "2px solid #262ca0",
                          color: "#262ca0",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#262ca0",
                            color: "white",
                          },
                        }}>
                        Read More →
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* App Download Section */}
      <Box sx={{ py: 12, bgcolor: "#f6f6f6" }}>
        <Container>
          <Grid container spacing={6} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                <Typography
                  variant='h3'
                  fontWeight='bold'
                  gutterBottom
                  color='secondary'>
                  Download Our App
                </Typography>
                <Typography variant='h6' paragraph color='text.secondary'>
                  Experience our services on the go. Fast, secure, and easy to
                  use — available for both iOS and Android devices.
                </Typography>
                <Stack direction='row' spacing={2} mt={3}>
                  <Button
                    startIcon={<Apple />}
                    sx={{
                      backgroundColor: "#262ca0",
                      color: "white",
                      borderRadius: "12px",
                      px: 3,
                      py: 1.5,
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#1e2299" },
                    }}>
                    App Store
                  </Button>
                  <Button
                    startIcon={<Android />}
                    sx={{
                      backgroundColor: "#f6af05",
                      color: "white",
                      borderRadius: "12px",
                      px: 3,
                      py: 1.5,
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#e89f00" },
                    }}>
                    Google Play
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.img
                src='https://img.freepik.com/free-vector/crowdfunding-app-interface_23-2148614212.jpg'
                alt='App Mockup'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", borderRadius: "16px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partners Section */}
      <Box sx={{ py: 12, bgcolor: "white", textAlign: "center" }}>
        <Typography variant='h4' fontWeight='bold' color='secondary' mb={6}>
          Our Partners
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'>
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.logo}
              alt={`Partner ${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ width: 150, borderRadius: "8px" }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
