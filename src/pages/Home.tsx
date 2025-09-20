import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { Apple, Android } from "@mui/icons-material";
import type { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCharities,
  getContactUs,
  getNews,
  getVlogs,
} from "../store/commonSlice";
import CharitiesList from "../components/CharitiesList";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contactUs, charities, news, vlogs } = useSelector(
    (state: any) => state.common
  );

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getNews({ page: 1, limit: 6 }));
    dispatch(getVlogs({ page: 1, limit: 3 }));
    dispatch(getContactUs());
  }, [dispatch]);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          //   minHeight: "90vh",
          height: { xs: "42vh", sm: "62vh", md: "90vh" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          bgcolor: "#f9f9f9",
          backgroundImage: `url('${import.meta.env.VITE_FILE_URL}${
            contactUs.banner_image
          }')`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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

        {/* <Container sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={4} maxWidth={700}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <Typography variant='h2' fontWeight='bold' color='secondary'>
                Empowering Your Business with Innovative Solutions
              </Typography>
            </motion.div>

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
        </Container> */}

        {/* Hero image or illustration */}
        {/* <motion.img
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
        /> */}
      </Box>

      {/* Services Section */}
      {/* <Box sx={{ py: 12, bgcolor: "#f6f6f6" }}>
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
      </Box> */}

      <Box sx={{ py: 12, bgcolor: "white" }}>
        <CharitiesList data={charities} />
      </Box>

      {/* Latest News Section */}
      <Box sx={{ py: 10, bgcolor: "#f6f6f6" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            Charities Update News
          </Typography>
          <Grid container spacing={6}>
            {news
              .filter((item: any) => item.charity_id)
              .slice(0, 3)
              .map((item: any, index: number) => (
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
                        src={`${import.meta.env.VITE_FILE_URL}/${
                          item.feature_image
                        }`}
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

      <Box sx={{ py: 10, bgcolor: "white" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            Latest News & Activities
          </Typography>
          <Grid container spacing={3}>
            {/* Lead story with motion */}
            {news
              .filter((item: any) => item.is_featured === 0)
              .slice(0, 1)
              .map((leadItem: any) => (
                <Grid size={{ xs: 12, md: 7 }} key={leadItem.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                    }}>
                    <Card
                      sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        overflow: "hidden",
                      }}>
                      <CardMedia
                        component='img'
                        image={`${import.meta.env.VITE_FILE_URL}/${
                          leadItem.feature_image
                        }`}
                        alt={leadItem.title}
                        sx={{
                          height: { xs: 220, md: 400 },
                          objectFit: "cover",
                        }}
                      />
                      <CardContent>
                        {leadItem.category && (
                          <Typography
                            variant='subtitle2'
                            color='error'
                            fontWeight='bold'
                            gutterBottom>
                            {leadItem.category}
                          </Typography>
                        )}
                        <Typography
                          variant='h6'
                          fontWeight='bold'
                          className='line-clamp-3'>
                          {leadItem.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}

            {/* Side list with animated items */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={2}>
                {news.map((item: any, index: number) => (
                  <Grid
                    size={12}
                    key={item.id}
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #eee",
                      pb: 1,
                    }}>
                    <motion.div
                      style={{ display: "flex", width: "100%" }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
                        borderRadius: 2,
                      }}>
                      <CardMedia
                        component='img'
                        image={`${import.meta.env.VITE_FILE_URL}/${
                          item.feature_image
                        }`}
                        alt={item.title}
                        sx={{
                          width: 110,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography
                          variant='body1'
                          fontWeight='bold'
                          className='line-clamp-3'
                          sx={{ lineHeight: 1.3 }}>
                          {item.title}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
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

      <Box sx={{ py: 10, bgcolor: "white" }}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            mb={8}>
            Vlogs & Articles
          </Typography>
          <Grid container spacing={6}>
            {vlogs?.map((item: any, index: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: 3,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}>
                    <Box
                      sx={{ width: "100%", height: 300, objectFit: "cover" }}>
                      <video
                        src={`${import.meta.env.VITE_FILE_URL}/${
                          item.video_url
                        }`}
                        width='100%'
                        height='200px'
                        muted
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ p: 2 }}
                      position='absolute'
                      zIndex={1}
                      bottom={0}
                      bgcolor='rgba(0,0,0,0.5)'
                      width='100%'>
                      <Typography
                        variant='subtitle2'
                        color='primary'
                        fontWeight='bold'
                        mb={1}>
                        {item.publish_date}
                      </Typography>
                      <Typography
                        variant='h6'
                        fontWeight='bold'
                        mb={1}
                        color='white'
                        className='line-clamp-1'>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
