import Close from "@mui/icons-material/Close";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Drawer, Hidden, Link as MuiLink } from "@mui/material";
import Logo from "components/Logo";
import Link from "next/link";
import type { FunctionComponent } from "react";
import React from "react";

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDrawer: FunctionComponent<IProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  // ~~~~~ JSX ~~~~~
  return (
    <Hidden lgUp>
      <Drawer
        hideBackdrop
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        data-testid="nav-drawer"
        PaperProps={{
          sx: {
            width: "100%",
            py: 3,
            px: 4,
            bgcolor: "#0A0A0A",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Logo size="small" />
          <Box>
            <Box
              onClick={handleClose}
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
              <Close sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
        <Box mt={5} display="flex" gap={5} flexDirection="column">
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
      </Drawer>
    </Hidden>
  );
};

export default NavDrawer;
