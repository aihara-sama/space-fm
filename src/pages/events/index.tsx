import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import UpcomingEvents from "components/events/UpcomingEvents";
import ArrowDown from "components/icons/ArrowDown";
import { orbitronFont } from "fonts";
import type { FunctionComponent } from "react";

interface IProps {}

const EventsPage: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "url(/images/svg/bg/live-events-page-bg.svg) no-repeat;",
          backgroundSize: "cover",
          height: 700,
          mt: "-97px",
          pt: 25,
          position: "relative",
        }}
      >
        <Typography
          textAlign="center"
          fontWeight={700}
          fontFamily={orbitronFont.style.fontFamily}
          fontSize={{ xs: 32, md: 56, lg: 80 }}
          color="#fff"
        >
          Experience live Events
        </Typography>
        <Box
          sx={{
            mt: 17,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderRadius: "50px",
              borderColor: "#fff !important",
              textTransform: "none",
              py: "10px",
              px: 4,
              fontsize: 18,
              whiteSpace: "nowrap",
            }}
            component={Link}
            href="/#"
          >
            Learn More
          </Button>
        </Box>
        <Box
          position="absolute"
          bottom={-50}
          sx={{
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "100%", lg: 1086 },
            px: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: "#242565",
              borderRadius: "20px",
              px: 6,
              py: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff !important" },
              }}
              variant="standard"
              label="Search Event"
              value="Los Angeles,CA"
            />
            <TextField
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff !important" },
              }}
              variant="standard"
              label="Place"
              value="Cryto.com  Arena"
            />
            <TextField
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#fff !important" },
              }}
              variant="standard"
              InputProps={{ endAdornment: <ArrowDown /> }}
              label="Date / Time"
              value="Saturday @ 3:00 PM"
            />
          </Box>
        </Box>
      </Box>
      <Box component="img" sx={{ width: "100%" }} src="/images/svg/map.svg" />
      <UpcomingEvents />
      <Footer />
    </Box>
  );
};

export default EventsPage;
