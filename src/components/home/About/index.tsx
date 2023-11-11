import { Box, Button, Container, Link, Typography } from "@mui/material";
import Carousel from "components/Carousel";
import ArrowRight from "components/icons/ArrowRIght";
import MarketplaceIcon from "components/icons/MarketplaceIcon";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";

interface IProps {}

const About: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container
      maxWidth="xl"
      pt={10}
      pb={20}
      component={Box}
      sx={{ overflow: "hidden" }}
    >
      <Fade bottom>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          gap={{ xs: 30, lg: 5 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex={1}>
            <Typography
              ml={2}
              lineHeight={1.2}
              color="#fff"
              fontSize={{ xs: 65, md: 80 }}
            >
              How do Music NFTs work?
            </Typography>
            <Box mt={5}>
              <Typography color="#fff" fontSize={18} fontWeight={300}>
                NFTs are unique assets stored and tradable on a blockchain. They
                are, immutable, scarce and publicly verifiable. In the music
                world, artistes get to sell limited digital content to their
                fans who pay via crypto. You can now produce any music content
                that cannot be counterfeited.
              </Typography>
            </Box>
          </Box>

          <Box flex={1} position="relative">
            <Carousel />
          </Box>
        </Box>
      </Fade>
      <Box
        mt={40}
        display="flex"
        flexDirection={{ xs: "column-reverse", lg: "row" }}
        gap={{ xs: 10, lg: 5 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Fade left>
          <Box display="flex" flexDirection={{ xs: "column", lg: "row" }}>
            <Box display="flex" flexDirection="column" gap={5}>
              <Box
                sx={{
                  background: "url(/images/svg/frame.svg) no-repeat",
                  pl: "38px",
                  pb: "20px",
                  backgroundPosition: "0 27px",
                }}
              >
                <Box component="img" src="/images/svg/live-events.svg" />
                <Box mt={1} display="flex" flexDirection="column">
                  <Typography color="#fff" fontWeight={700}>
                    Live Events
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <MarketplaceIcon />
                    <Typography color="#fff">0.86</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  background: "url(/images/svg/frame.svg) no-repeat",
                  pl: "38px",
                  pb: "20px",
                  backgroundPosition: "0 27px",
                  ml: { xs: 0, lg: 4 },
                }}
              >
                <Box component="img" src="/images/svg/radio-network.svg" />
                <Box mt={1} display="flex" flexDirection="column">
                  <Typography color="#fff" fontWeight={700}>
                    Radio Network
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <MarketplaceIcon />
                    <Typography color="#fff">0.964</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                background: "url(/images/svg/frame.svg) no-repeat",
                pl: "38px",
                pb: "20px",
                backgroundPosition: "0 27px",
                ml: { xs: 0, lg: 5 },
                mt: { xs: 5, lg: 8 },
              }}
            >
              <Box component="img" src="/images/svg/nft-marketplace.svg" />
              <Box mt={1} display="flex" flexDirection="column">
                <Typography color="#fff" fontWeight={700}>
                  NFT Marketplace
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <MarketplaceIcon />
                  <Typography color="#fff">0.94</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
        <Fade right>
          <Box>
            <Typography
              maxWidth={620}
              lineHeight={1.2}
              color="#fff"
              fontSize={{ xs: 65, md: 80 }}
            >
              Music NFT Marketplace
            </Typography>
            <Box maxWidth={610} mt={3} display="flex">
              <Typography color="#fff" fontWeight={300}>
                Create your first music NFTs with NFT market for musicians.
                Create music and music videos just under the $1, the platform
                works with BSC blockchain and supports mp4. With AirNFTs, you
                are getting the control over your NFTs, no middle man cutting
                your sales. Create, Buy, Sell and Earn with your music NFTs.
              </Typography>
            </Box>
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
                mt: 5,
              }}
              component={Link}
              href="#"
              endIcon={<ArrowRight />}
            >
              Explore Marketplace
            </Button>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default About;
