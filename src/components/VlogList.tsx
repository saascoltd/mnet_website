import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const VlogList = ({data}: any) => {
  return (
    <Box>
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
          {data?.map((item: any, index: number) => (
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
                  <Box sx={{ width: "100%", height: 200, objectFit: "cover" }}>
                    <video
                      src={`${import.meta.env.VITE_FILE_URL}/${item.video_url}`}
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
                      Watch Now →
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VlogList;
