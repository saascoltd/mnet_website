import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { useEffect } from "react";
import { getAboutUs, getCharities, getVlogs } from "../store/commonSlice";
import Download from "../components/Download";
import VlogList from "../components/VlogList";
import CharitiesList from "../components/CharitiesList";

const About = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { aboutUs, charities, vlogs } = useSelector(
    (state: any) => state.common
  );

  useEffect(() => {
    dispatch(getAboutUs());
    dispatch(getCharities());
    dispatch(getVlogs({ page: 1, limit: 3 }));
  }, [dispatch]);

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
              {aboutUs?.title}
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              maxWidth={700}
              mx='auto'
              dangerouslySetInnerHTML={{
                __html: aboutUs?.description,
              }}
            />
          </Container>
        </Box>
      </motion.div>

      <Box sx={{ py: 10, bgcolor: "white" }}>
        <CharitiesList data={charities} />
      </Box>

      <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
        <VlogList data={vlogs} />
      </Box>

      <Box sx={{ py: 10, bgcolor: "white" }}>
        <Download />
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
