import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Partner A",
    logo: "https://dummyjson.com/image/210x70/f88/ffffff?text=Partner+A",
  },
  {
    name: "Partner B",
    logo: "https://dummyjson.com/image/210x70/988/ffffff?text=Partner+B",
  },
  {
    name: "Partner C",
    logo: "https://dummyjson.com/image/210x70/c88/ffffff?text=Partner+C",
  },
  {
    name: "Partner D",
    logo: "https://dummyjson.com/image/210x70/d88/ffffff?text=Partner+D",
  },
  {
    name: "Partner E",
    logo: "https://dummyjson.com/image/210x70/a88/ffffff?text=Partner+E",
  },
];

const coreValues = [
  {
    title: "Integrity",
    description: "We act with honesty, fairness, and transparency.",
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and technology to deliver smart solutions.",
  },
  {
    title: "Excellence",
    description: "We strive to exceed expectations in everything we do.",
  },
];

const About = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <Box
          sx={{
            py: 12,
            textAlign: "center",
            position: "relative",
            bgcolor: "#f9f9f9",
          }}>
          <Box
            sx={{
              position: "absolute",
              top: -50,
              left: -50,
              width: 200,
              height: 200,
              bgcolor: "#f6af05",
              borderRadius: "50%",
              opacity: 0.2,
              zIndex: 0,
            }}
          />
          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant='h3'
              fontWeight='bold'
              color='secondary'
              gutterBottom>
              About Our Company
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              maxWidth={700}
              mx='auto'>
              We deliver innovative solutions with integrity, professionalism,
              and excellence. Our mission is to empower our clients and create
              value through technology and creativity.
            </Typography>
          </Container>
        </Box>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        <Box sx={{ bgcolor: "white", position: "relative", py: 10 }}>
          <Container>
            <Grid container spacing={6} alignItems='center'>
              {/* Text */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    },
                  }}>
                  <Typography
                    variant='h4'
                    fontWeight='bold'
                    color='secondary'
                    mb={2}>
                    Our Vision
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    To be the leading provider of innovative solutions that
                    empower businesses worldwide and create lasting impact in
                    the technology sector.
                  </Typography>
                </motion.div>
              </Grid>

              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    },
                  }}>
                  <Box
                    component='img'
                    src='https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/9653016/447231_712259.png'
                    alt='Vision'
                    sx={{ width: "100%", borderRadius: "16px" }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        <Box sx={{ py: 10, bgcolor: "#f6f6f6", position: "relative" }}>
          <Container>
            <Grid container spacing={6} alignItems='center'>
              {/* Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    },
                  }}>
                  <Box
                    component='img'
                    src='https://thumbs.dreamstime.com/b/mission-vision-strategy-company-goals-business-internet-technology-concept-100712264.jpg'
                    alt='Mission'
                    sx={{ width: "100%", borderRadius: "16px" }}
                  />
                </motion.div>
              </Grid>

              {/* Text */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    },
                  }}>
                  <Typography
                    variant='h4'
                    fontWeight='bold'
                    color='secondary'
                    mb={2}>
                    Our Mission
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    To deliver high-quality, user-centric solutions that drive
                    business growth, foster innovation, and exceed client
                    expectations.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Core Values */}
      <Box sx={{ py: 10, bgcolor: "white" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            Our Core Values
          </Typography>
          <Grid container spacing={6} justifyContent='center'>
            {coreValues.map((value, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                  }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      bgcolor: "#f9f9f9",
                      borderTop: "4px solid #f6af05",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                      color='secondary'
                      mb={1}>
                      {value.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {value.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* More About the Company */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <Box sx={{ py: 10, bgcolor: "#f6f6f6" }}>
          <Container>
            <Typography
              variant='h4'
              fontWeight='bold'
              color='secondary'
              textAlign='center'
              mb={6}>
              More About Us
            </Typography>
            <Grid container spacing={6} alignItems='center'>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant='body1' color='text.secondary' paragraph>
                  Founded in 2010, our company has grown by embracing
                  innovation, fostering talent, and delivering results that
                  exceed expectations. We value collaboration, integrity, and
                  continuous learning.
                </Typography>
                <Typography variant='body1' color='text.secondary' paragraph>
                  Over the years, we have partnered with industry leaders and
                  delivered successful projects across multiple sectors. Our
                  team is dedicated to providing solutions that empower our
                  clients and communities.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component='img'
                  src='https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-1105.jpg'
                  alt='Company'
                  sx={{ width: "100%", borderRadius: "16px" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Partners */}
      <Box sx={{ py: 10, bgcolor: "white", textAlign: "center" }}>
        <Typography variant='h4' fontWeight='bold' color='secondary' mb={4}>
          Our Partners
        </Typography>
        <Grid container spacing={4} justifyContent='center' alignItems='center'>
          {partners.map((partner, index) => (
            <Grid key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}>
                <Box
                  component='img'
                  src={partner.logo}
                  alt={partner.name}
                  sx={{ width: 150, height: "auto", borderRadius: "8px" }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <Box sx={{ py: 12, textAlign: "center", bgcolor: "#f6f6f6" }}>
          <Typography variant='h5' fontWeight='bold' color='secondary' mb={3}>
            Interested in Collaborating with Us?
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
            Contact Us
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
