import { Box, Link as MuiLink, Typography } from "@mui/material";
import LanguageSelectPopper from "components/LanguageSelectPopper";
import Logo from "components/Logo";
import DotsIcon from "components/icons/DotsIcon";
import SquareIcon from "components/icons/SquareIcon";
import { orbitronFont } from "fonts";
import type { NextPage } from "next";
import Link from "next/link";

const Index: NextPage = () => {
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
            "url(/images/svg/bg/welcome-page-bg.svg) center no-repeat",
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
          Welcome,
        </Box>{" "}
        to the future
      </Typography>

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
            top: -20,
            right: 0,
            width: "200px",
            height: "200px",
            position: "absolute",
            background: "linear-gradient(#00C2FF, #AE29FF)",
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        ></Box>
        <Box
          position="absolute"
          top={30}
          right={30}
          zIndex={1}
          display="flex"
          alignItems="center"
          gap={2.5}
        >
          <MuiLink
            component={Link}
            href="/location"
            underline="none"
            color="inherit"
          >
            <SquareIcon direction="right" />
          </MuiLink>
          <LanguageSelectPopper
            placement="bottom-start"
            anchorEl={<DotsIcon />}
          />
        </Box>
        <Typography position="relative" zIndex={1} maxWidth="70%" color="#fff">
          Welcome to Space FM, where music and live events meet the limitless
          potential of blockchain technology. We are a forward-thinking platform
          committed to reshaping the way music is created, distributed, and
          experienced, all while pioneering a new era of entertainment.
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
