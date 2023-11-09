import { Box, Button, Container, Typography } from "@mui/material";
import ArrowRight from "components/icons/ArrowRIght";
import { interFont, orbitronFont } from "fonts";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface IProps {}

const Hero: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container maxWidth="xl" py={10} component={Box}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={5}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            lineHeight={1.2}
            textAlign="center"
            maxWidth={870}
            color="#fff"
            fontFamily={orbitronFont.style.fontFamily}
            fontSize={{ xs: 65, md: 71 }}
            fontWeight={600}
          >
            The New Era of Music{" "}
            <Typography
              textAlign="center"
              fontSize={{ xs: 42, md: 64 }}
              fontFamily={interFont.style.fontFamily}
              component="span"
            >
              & Radio on the Blockchain
            </Typography>
          </Typography>
          <Box mt={3} display="flex" justifyContent="center">
            <Typography color="#fff" fontWeight={300} maxWidth={670}>
              Music NFTs will continue to revolutionize the way that artists and
              fans create community together as we enter the upcoming year —
              undoubtedly changing the trajectory of countless budding music
              careers.
            </Typography>
          </Box>

          <Box
            mt={5}
            display="flex"
            gap={{ xs: 3, md: 8 }}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
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
              href="#"
              endIcon={<ArrowRight />}
            >
              Discover More
            </Button>
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
              href="#"
              endIcon={<ArrowRight />}
            >
              Early Access
            </Button>
          </Box>
        </Box>
        <Box component="img" src="/images/svg/radio-station.svg"></Box>
      </Box>
    </Container>
  );
};

export default Hero;
