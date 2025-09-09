import { useState, type MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t("Home"), path: "/" },
    { label: t("About Us"), path: "/about" },
    { label: t("Services"), path: "/services" },
    { label: t("News"), path: "/news" },
    { label: t("App Download"), path: "/app-download" },
    { label: t("Contact Us"), path: "/contact" },
  ];

  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenLangMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleChange = (lang: string) => {
    console.log("Changing language to:", lang);

    i18n.changeLanguage(lang);
    handleCloseLangMenu();
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box my={2} height={100} display='flex' justifyContent='center'>
        <img
          src='./src/assets/mnet_logo.png'
          alt='Company Logo'
          height={"100%"}
        />
      </Box>
      <List>
        {navLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  bgcolor: isActive ? "secondary.main" : "transparent",
                  color: isActive ? "primary.main" : "inherit",
                  "&:hover": { bgcolor: "#262ca0cc", color: "primary.main" },
                }}>
                <ListItemText
                  primary={item.label}
                  sx={{ span: { color: "inherit", fontWeight: "bold" } }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton onClick={handleOpenLangMenu}>
            <Language fontSize='small' sx={{ mr: 1 }} />
            <ListItemText primary='Language' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: "#f6af05", py: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 3, md: 8 },
          }}>
          {/* Logo / Brand */}
          <Box height={60} display='flex'>
            <img
              src='./src/assets/mnet_logo.png'
              alt='Company Logo'
              height={"100%"}
            />
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  color='inherit'
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? "secondary.main" : "white",
                    borderBottom: isActive ? "2px solid" : "none",
                    borderColor: isActive ? "secondary.main" : "transparent",
                    borderRadius: isActive ? 0 : 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    ":hover": { color: "secondary.main" },
                  }}>
                  {item.label}
                </Button>
              );
            })}
            {/* <Box sx={{ display: "flex", mr: 3 }}>
              <IconButton
                size='small'
                aria-label='language'
                aria-controls='menu-lang-appbar'
                aria-haspopup='true'
                onClick={handleOpenLangMenu}
                color='inherit'
                disableRipple>
                <Language fontSize='small' sx={{ color: "white" }} />
              </IconButton>
              <Menu
                id='menu-lang-appbar'
                anchorEl={anchorElLang}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
                sx={{ p: 0 }}>
                <MenuItem onClick={() => handleChange("en")}>
                  <Typography variant='body2' fontWeight={600}>
                    EN
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleChange("th")}
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                    borderTop: "1px solid #e0e0e0",
                  }}>
                  <Typography variant='body2' fontWeight={600}>
                    TH
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleChange("mm")}>
                  <Typography variant='body2' fontWeight={600}>
                    MM
                  </Typography>
                </MenuItem>
              </Menu>
            </Box> */}
            {/* Desktop Language Menu */}
            <IconButton
              size='small'
              aria-label='language'
              aria-controls='menu-lang-appbar'
              aria-haspopup='true'
              onClick={handleOpenLangMenu}
              color='inherit'
              disableRipple>
              <Language fontSize='small' sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color='inherit'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              color: "secondary.main",
            }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}>
        {drawer}
      </Drawer>

      <Menu
        id='menu-lang-appbar'
        anchorEl={anchorElLang}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElLang)}
        onClose={handleCloseLangMenu}
        sx={{ p: 0, ml: { xs: 2, md: 0 } }}>
        <MenuItem onClick={() => handleChange("en")}>
          <Typography variant='body2' fontWeight={600}>
            EN
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleChange("th")}
          sx={{
            borderBottom: "1px solid #e0e0e0",
            borderTop: "1px solid #e0e0e0",
          }}>
          <Typography variant='body2' fontWeight={600}>
            TH
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleChange("mm")}>
          <Typography variant='body2' fontWeight={600}>
            MM
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
