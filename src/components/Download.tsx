import { Apple, Android } from '@mui/icons-material'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
const Download = () => {
  return (
    <Box>
        <Container>
        <Grid container spacing={6} alignItems='center'>
          {/* Left: Text */}
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
                Download Our Mobile App
              </Typography>
              <Typography variant='h6' paragraph color='text.secondary'>
                Experience our services on the go. Fast, secure, and easy to use
                — available now for both iOS and Android devices.
              </Typography>

              <Stack direction='row' spacing={2} mt={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}>
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
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
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right: Mockup */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  textAlign: "center",
                }}>
                <Box
                  component='img'
                  src='https://img.freepik.com/free-vector/crowdfunding-app-interface_23-2148614212.jpg?semt=ais_hybrid&w=740'
                  alt='App Mockup'
                  sx={{ width: "100%" }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Download