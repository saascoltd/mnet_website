import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Tabs,
  Tab,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { AppDispatch } from "../store";
import { getNews } from "../store/commonSlice";
import { useDispatch, useSelector } from "react-redux";

const ITEMS_PER_PAGE = 3;

const News = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector((state: any) => state.common);
  const [filter, setFilter] = useState<"All" | "News" | "Activites">("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getNews({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: "All" | "News" | "Activites"
  ) => {
    setFilter(newValue);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredNews =
    filter === "All"
      ? news
      : news.filter((item: any) => item.category === filter);

  const paginatedNews = filteredNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
      <Container>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <Typography
            variant='h3'
            fontWeight='bold'
            color='secondary'
            textAlign='center'
            gutterBottom>
            News & Activities
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            textAlign='center'
            mb={4}>
            Stay updated with the latest happenings, milestones, and events.
          </Typography>
        </motion.div>

        {/* Filter Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Tabs
            value={filter}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'>
            <Tab label='All' value='All' />
            <Tab label='News' value='News' />
            <Tab label='Activities' value='Activites' />
          </Tabs>
        </Box>

        {/* Featured News */}
        {paginatedNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                mb: 6,
                borderRadius: "16px",
                overflow: "hidden",
              }}>
              <CardMedia
                component='img'
                image={`${import.meta.env.VITE_FILE_URL}/${
                  paginatedNews[0].feature_image
                }`}
                alt={paginatedNews[0].title}
                sx={{ width: { xs: "100%", md: "50%" }, height: 320 }}
              />
              <CardContent sx={{ flex: 1, p: 4 }}>
                <Chip
                  label={paginatedNews[0].category}
                  color='primary'
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant='h4'
                  fontWeight='bold'
                  gutterBottom
                  className='line-clamp-3'
                  sx={{ lineHeight: 1.6 }}>
                  {paginatedNews[0].title}
                </Typography>
                <Typography variant='body1' color='text.secondary' paragraph>
                  {paginatedNews[0].excerpt}
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #262ca0, #f6af05)",
                    color: "white",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #1e2299, #e89f00)",
                    },
                  }}>
                  Read Full Article
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Other News Grid */}
        <Grid container spacing={4}>
          {paginatedNews.map((item: any, index: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <CardMedia
                    component='img'
                    image={`${import.meta.env.VITE_FILE_URL}/${
                      item.feature_image
                    }`}
                    alt={item.title}
                    sx={{ height: 200 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='space-between'
                      mb={1}>
                      <Chip
                        label={item.category}
                        color='secondary'
                        size='small'
                      />
                      <Typography variant='caption' color='text.secondary'>
                        {new Date(item.publish_date).toLocaleDateString()}
                      </Typography>
                    </Stack>
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                      gutterBottom
                      className='line-clamp-2'>
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      paragraph>
                      {item.excerpt}
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
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {filteredNews.length > ITEMS_PER_PAGE && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Pagination
              count={Math.ceil(filteredNews.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              color='primary'
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#262ca0",
                  fontWeight: "bold",
                  borderRadius: "50%",
                },
                "& .Mui-selected": {
                  backgroundColor: "#f6af05 !important",
                  color: "#262ca0 !important",
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default News;
