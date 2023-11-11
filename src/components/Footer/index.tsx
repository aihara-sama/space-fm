import {
  Box,
  Container,
  Divider,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Logo from "components/Logo";
import SilverButton from "components/buttons/SilverButton";
import DiscordIcon from "components/icons/DiscordIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import LinkedinIcon from "components/icons/LinkedinIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import YoutubeIcon from "components/icons/YoutubeIcon";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";

interface IProps {}

const Footer: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#000000">
      <Container sx={{ pb: 5, pt: 12 }} component="footer" maxWidth="xl">
        <Box px={{ xs: 0, md: 5 }}>
          <Fade left>
            {" "}
            <Box
              bgcolor="#17181A"
              py={4}
              px={6}
              borderRadius="24px"
              display="flex"
              alignItems="center"
              gap={5}
              justifyContent="space-between"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Box display="flex" gap={2} alignItems="center">
                <Box
                  width={50}
                  height={50}
                  borderRadius="8px"
                  sx={{
                    background: "linear-gradient(#35383A, #232529)",
                    border: "1px solid #ffffff26",
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <DiscordIcon size="medium" />
                </Box>
                <Box flex={1}>
                  <Typography fontSize={20} color="#fff">
                    Join our awesome community
                  </Typography>
                  <Typography fontSize={14} color="#D8D5D1">
                    Share work, seek support, vote on components, stay updated
                    and network
                  </Typography>
                </Box>
              </Box>
              <Box
                py={2}
                px="20px"
                borderRadius="40px"
                component="a"
                bgcolor="#fff"
                color="#17181A"
                href="#"
                fontWeight={600}
                sx={{ textDecoration: "none" }}
              >
                Join Discord
              </Box>
            </Box>
          </Fade>
          <Fade left>
            {" "}
            <Box my={10} display="flex" justifyContent="center">
              <Logo size="large" />
            </Box>
          </Fade>

          <Box
            justifyContent="space-between"
            display="flex"
            gap={5}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Box>
              <Box display="flex">
                <Box
                  p={1}
                  borderRadius="8px"
                  sx={{
                    background: "linear-gradient(#35383A, #232529)",
                    border: "1px solid #ffffff26",
                  }}
                >
                  <Typography color="#F1F0EE">
                    Made by{" "}
                    <Typography fontWeight={600} component="span">
                      Space FM
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Typography maxWidth={500} mt={3} color="#F1F0EE">
                Space FM is still in early Beta, so please keep in mind that
                there may be some imperfections as we continue to work on
                improving it.
              </Typography>
              <Box mt={5} display="flex" alignItems="center" gap={2}>
                <SilverButton Icon={<DiscordIcon size="small" />} />
                <SilverButton Icon={<TwitterIcon />} />
                <SilverButton Icon={<YoutubeIcon />} />
                <SilverButton Icon={<InstagramIcon />} />
                <SilverButton Icon={<LinkedinIcon />} />
              </Box>
            </Box>
            <Box display="flex" gap={10}>
              <Box display="flex" flexDirection="column" gap={2}>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Install App
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Watch Demo
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Features
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Pricing
                </MuiLink>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Feedback
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Contact
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/#"
                  underline="none"
                  color="#F1F0EE"
                >
                  Discord
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#FFFFFF", opacity: 0.04, my: 7 }} />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={3}
        >
          <Typography color="#F1F0EE">
            2023 Space FM. All rights reserved
          </Typography>
          <Box display="flex" gap={3}>
            <MuiLink
              component={Link}
              href="/#"
              underline="none"
              color="#F1F0EE"
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/#"
              underline="none"
              color="#F1F0EE"
            >
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
