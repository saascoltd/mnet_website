import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { getFAQs } from "../store/commonSlice";

const FaqPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { faqs } = useSelector((state: any) => state.common);
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    dispatch(getFAQs());
  }, [dispatch]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
      <Container maxWidth='md'>
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Typography
            variant='h3'
            fontWeight='bold'
            textAlign='center'
            gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            textAlign='center'
            mb={6}>
            Find answers to the most common questions about our services and
            process.
          </Typography>
        </motion.div>

        {/* Accordion List */}
        {Array.isArray(faqs) &&
          faqs?.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: "12px",
                  "&:before": { display: "none" },
                  boxShadow: 2,
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ fontWeight: "bold" }}>
                  <Typography variant='h6' fontWeight='bold'>
                    {item?.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color='text.secondary'>
                    {item?.answers[0]?.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
      </Container>
    </Box>
  );
};

export default FaqPage;
