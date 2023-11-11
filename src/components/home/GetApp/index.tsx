import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";

interface IProps {}

const GetApp: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box
      sx={{
        bgcolor: "#161719",
        pt: 12,
        pb: { xs: 16, lg: 22 },
        position: "relative",
        zIndex: 1,
        px: { xs: 0, lg: 5 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          px={10}
          sx={{
            backgroundColor: "#1A1B1E",
            backgroundImage: "url(/images/svg/bg/waving-bg.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "1px solid #ffffff1f",
            position: "relative",
            boxShadow: "5px 5px 12px 0px #00000045",
            ":after": {
              content: "''",
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              borderRadius: "40px",
              transform: "rotate(3deg)",
              border: "1px solid #ffffff1f",
              background: "#1A1B1E",
              zIndex: -1,
              transformOrigin: "left",
              display: { xs: "none", lg: "block" },
            },
          }}
          borderRadius="40px"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: 10, lg: 15 }}
            pt={{ xs: 10, lg: 18 }}
            pb={{ xs: 10, lg: 0 }}
          >
            <Fade left>
              <Box maxWidth={500}>
                <Typography fontSize={40} fontWeight={700} color="#F1F0EE">
                  Listen to your favorite station while investing
                </Typography>
                <Typography my={3} fontSize={18} color="#F1F0EE">
                  Have a question that is not answered? You can contact us at{" "}
                  <MuiLink
                    component={Link}
                    href="mailto:support@spacefm.co"
                    underline="always"
                    color="inherit"
                  >
                    support@spacefm.co
                  </MuiLink>
                </Typography>
                <Box
                  position="relative"
                  zIndex={1}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <Box
                    component="img"
                    src="/images/svg/get-it-on-google-play.svg"
                  />
                  <Box
                    component="img"
                    src="/images/svg/get-it-on-app-store.svg"
                  />
                </Box>
              </Box>
            </Fade>
            <Fade right>
              <Box
                component="img"
                src="/images/svg/now-playing.svg"
                sx={{ objectPosition: { xs: "0 0 ", lg: "0 62px" } }}
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GetApp;
