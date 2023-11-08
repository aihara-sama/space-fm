import { Box, Link as MuiLink, Typography } from "@mui/material";
import LanguageSelectPopper from "components/LanguageSelectPopper";
import Logo from "components/Logo";
import DotsIcon from "components/icons/DotsIcon";
import SquareIcon from "components/icons/SquareIcon";
import { orbitronFont } from "fonts";
import type { NextPage } from "next";
import Link from "next/link";

const LocationPage: NextPage = () => {
  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box py={5} px={7}>
      <Box
        sx={{
          background:
            "url(/images/svg/bg/location-page-bg.svg) center no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      ></Box>
      <Logo size="small" />
      <Box display="flex" justifyContent="end">
        <Typography
          mt={14}
          fontWeight={700}
          fontSize={69}
          fontFamily={orbitronFont.style.fontFamily}
          color="#fff"
          textAlign="center"
          maxWidth={836}
        >
          <Box component="span" color="#979797">
            Where
          </Box>{" "}
          innovation and Music Meet
        </Typography>
      </Box>

      <Box display="flex" justifyContent="end">
        <Box
          mt={14}
          borderRadius="31.44px"
          p={5}
          maxWidth={690}
          sx={{
            backgroundColor: "#1C1F37",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              top: -99,
              left: -83,
              width: "200px",
              height: "200px",
              position: "absolute",
              background: "linear-gradient(#00C2FF, #AE29FF)",
              borderRadius: "50%",
              filter: "blur(20px)",
            }}
          ></Box>
          <Box zIndex={1} display="flex" alignItems="center" gap={2.5} mb={1}>
            <LanguageSelectPopper
              placement="bottom-end"
              anchorEl={<DotsIcon />}
            />
            <MuiLink component={Link} href="/" underline="none" color="inherit">
              <SquareIcon direction="left" />
            </MuiLink>
          </Box>
          <Typography position="relative" zIndex={1} color="#fff">
            At Space FM, our mission is to empower artists, fans, and creators
            by harnessing the power of blockchain technology. We aim to create a
            decentralized, transparent, and artist-centric ecosystem that
            reimagines the music and live event industry. We believe in removing
            barriers, cutting out intermediaries, and ensuring that artists
            receive fair compensation for their talent and hard work.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationPage;
