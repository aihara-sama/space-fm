import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, Hidden, Link as MuiLink } from "@mui/material";
import Logo from "components/Logo";
import FacebookIcon from "components/icons/FacebookIcon";
import MediumIcon from "components/icons/MediumIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import Link from "next/link";
import { useState, type FunctionComponent } from "react";
import NavDrawer from "./NavDrawer";

interface IProps {}

const Header: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box component="header" px={5} pt={3}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Logo size="small" />
        <Hidden mdDown>
          <Box display="flex" gap={4}>
            <MuiLink
              component={Link}
              href="/music"
              sx={{
                zIndex: 1,
                position: "relative",
                textTransform: "uppercase",
                color: "#fff",
              }}
              underline="none"
              color="inherit"
            >
              Music
            </MuiLink>
            <MuiLink
              component={Link}
              href="/events"
              sx={{
                zIndex: 1,
                position: "relative",
                textTransform: "uppercase",
                color: "#fff",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
              underline="none"
              color="inherit"
            >
              Live Events
              <ArrowDownIcon />
            </MuiLink>
            <MuiLink
              component={Link}
              href="/marketplace"
              sx={{
                zIndex: 1,
                position: "relative",
                textTransform: "uppercase",
                color: "#fff",
              }}
              underline="none"
              color="inherit"
            >
              Marketplace
            </MuiLink>
            <MuiLink
              component={Link}
              href="/contact"
              sx={{
                zIndex: 1,
                position: "relative",
                textTransform: "uppercase",
                color: "#fff",
              }}
              underline="none"
              color="inherit"
            >
              Contact
            </MuiLink>
          </Box>
        </Hidden>
        <Box
          display="flex"
          alignItems="center"
          gap={4}
          position="relative"
          zIndex={1}
        >
          <FacebookIcon />
          <TwitterIcon />
          <MediumIcon />
          <Hidden mdUp>
            <Box
              onClick={() => setIsNavDrawerOpen(true)}
              component="button"
              sx={{
                background: "white",
                borderRadius: "12px",
                outline: "none",
                border: "1px solid #dddddd",
                display: "flex",
                width: "34px",
                height: "34px",
                alignItems: "center",
                justifyContent: "center",
                transition: "box-shadow 0.3s ease 0s",
                cursor: "pointer",
              }}
            >
              <MenuIcon />
            </Box>
          </Hidden>
          <NavDrawer
            isDrawerOpen={isNavDrawerOpen}
            setIsDrawerOpen={setIsNavDrawerOpen}
          />
        </Box>
      </Box>
      <Divider
        sx={{ borderColor: "#fff", mt: 2, position: "relative", zIndex: 1 }}
      />
    </Box>
  );
};

export default Header;
