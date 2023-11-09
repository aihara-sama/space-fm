import { Box, Container, Typography } from "@mui/material";
import { orbitronFont } from "fonts";
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
    <Container maxWidth="xl" sx={{}}>
      <Box sx={{}}></Box>

      <Box
        mt={5}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={{ xs: 10, lg: 5 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flex={1} maxWidth={{ xs: "auto", lg: 615 }}>
          <Typography
            ml={2}
            lineHeight={1.2}
            color="#fff"
            fontWeight={700}
            fontSize={{ xs: 66 }}
            fontFamily={orbitronFont.style.fontFamily}
          >
            Discover & Collect{" "}
            <Typography
              fontFamily={orbitronFont.style.fontFamily}
              component="span"
              fontSize={{ xs: 66 }}
              sx={{
                background: "linear-gradient(90deg, #fdf15f, #cfa300)",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Super Rare
            </Typography>{" "}
            Digital Artworks
          </Typography>
          <Box mt={5}>
            <Typography color="#fff" fontSize={18} fontWeight={300}>
              The largest NFT marketplace. Authentic and truly unique digital
              creation. Signed and issued by the creator, made possible by
              blockchain technology
            </Typography>
          </Box>
        </Box>
        <Box position="relative">
          <Box
            sx={{
              width: "400px",
              height: "400px",
              background: "linear-gradient(#03FB75, #06FFF0)",
              borderRadius: "50%",
              filter: "blur(40px)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          ></Box>
          <Box
            sx={{
              width: "400px",
              height: "400px",
              background: "linear-gradient(#FB03F5, #AA9CFF)",
              borderRadius: "50%",
              filter: "blur(40px)",
              position: "absolute",
              top: { xs: -108, lg: -215 },
              left: { xs: 199, lg: 336 },
              zIndex: 0,
            }}
          ></Box>
          <Box
            sx={{
              width: "400px",
              height: "400px",
              background: "linear-gradient(#2603FB, #DC06FF)",
              borderRadius: "50%",
              filter: "blur(40px)",
              position: "absolute",
              top: 50,
              left: 327,
              zIndex: 0,
            }}
          ></Box>
          <Box
            maxWidth="100%"
            position="relative"
            zIndex={1}
            component="img"
            src="/images/svg/digital-artworks.svg"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
