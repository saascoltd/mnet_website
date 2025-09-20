import { Box } from "@mui/material";
import Download from "../components/Download";

const AppDownload = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
        py: 8,
      }}>
      <Download />
    </Box>
  );
};

export default AppDownload;
