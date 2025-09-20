import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const CharitiesList = ({ data }: any) => {
  return (
    <Box>
      <Container>
        <Typography
          variant='h4'
          fontWeight='bold'
          color='secondary'
          textAlign='center'
          mb={8}>
          Charities We Support
        </Typography>
        <Grid container spacing={6} justifyContent='center'>
          {data?.map((value: any, index: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={value.id}>
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
                  <Box
                    component='img'
                    src={`${import.meta.env.VITE_FILE_URL}${value.logo}`}
                    alt={value.name}
                    sx={{
                      width: "80px",
                      height: "80px",
                      mx: "auto",
                      mb: 2,
                      borderRadius: "8px",
                    }}
                  />
                  <Typography
                    variant='h6'
                    fontWeight='bold'
                    color='secondary'
                    mb={1}>
                    {value.name}
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
  );
};

export default CharitiesList;
