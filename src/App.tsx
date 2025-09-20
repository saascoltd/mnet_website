import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import AppDownload from "./pages/AppDownload";
import Contact from "./pages/Contact";
import { CssBaseline, Box } from "@mui/material";
import TermsAndConditions from "./pages/Terms&Condition";
import FaqPage from "./pages/FAQ";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box display='flex' flexDirection='column' minHeight='100vh'>
        <Navbar />
        <Box component='main' flexGrow={1}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/news' element={<News />} />
            <Route path='/app-download' element={<AppDownload />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/terms' element={<TermsAndConditions />} />
            <Route path='/faqs' element={<FaqPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
