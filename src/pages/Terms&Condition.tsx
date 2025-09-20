import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { useEffect } from "react";
import { getTerms } from "../store/commonSlice";

const TermsAndConditions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { terms } = useSelector((state: any) => state.common);

  useEffect(() => {
    dispatch(getTerms());
  }, [dispatch]);
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
      <Container maxWidth='md'>
        <Typography variant='h3' fontWeight='bold' gutterBottom>
          {terms.title || "Terms & Conditions"}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography
          paragraph
          dangerouslySetInnerHTML={{
            __html: terms?.description,
          }}
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant='body2' color='text.secondary'>
          For questions about these Terms, contact us at{" "}
          <Link href='mailto:support@example.com'>support@example.com</Link>.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
