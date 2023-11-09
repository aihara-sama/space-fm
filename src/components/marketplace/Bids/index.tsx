import { Box, Button, Container, Hidden, Typography } from "@mui/material";
import EtheriumIcon from "components/icons/EtheriumIcon";
import { orbitronFont, poppinsFont } from "fonts";
import type { FunctionComponent } from "react";

interface IProps {}

const Bids: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container maxWidth="xl" sx={{ mt: 3, position: "relative" }}>
      <Hidden lgDown>
        <Box
          sx={{
            width: "400px",
            height: "400px",
            background: "#2A0E35",
            borderRadius: "50%",
            filter: "blur(40px)",
            position: "absolute",
            bottom: 0,
            left: -127,
          }}
        ></Box>
      </Hidden>
      <Box display="flex" gap={3} position="relative" zIndex={1}>
        <Box>
          <Typography
            fontFamily={orbitronFont.style.fontFamily}
            fontWeight={800}
            fontSize={40}
            color="#fff"
          >
            98k+
          </Typography>

          <Typography fontSize={20} color="#fff">
            Artwork
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={orbitronFont.style.fontFamily}
            fontWeight={800}
            fontSize={40}
            color="#fff"
          >
            12k+
          </Typography>

          <Typography fontSize={20} color="#fff">
            Auction
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={orbitronFont.style.fontFamily}
            fontWeight={800}
            fontSize={40}
            color="#fff"
          >
            3k+
          </Typography>

          <Typography fontSize={20} color="#fff">
            Artist
          </Typography>
        </Box>
      </Box>
      <Box
        position="relative"
        zIndex={1}
        mt={5}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={5}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          gap={3}
          alignItems="start"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            sx={{ borderRadius: "24px" }}
            component="img"
            src="/images/svg/popular-nfts/nft1.svg"
          />
          <Box display="flex" flexDirection="column" gap={3}>
            <Box display="flex" gap={2} alignItems="end">
              <Box
                sx={{ borderRadius: "24px" }}
                component="img"
                src="/images/svg/popular-nfts/nft2.svg"
              />
              <Box>
                <Box
                  sx={{ border: "1px solid #00AC4F" }}
                  borderRadius="6px"
                  py={1}
                  px={3}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <EtheriumIcon color="green" size="small" />
                  <Typography color="#00AC4F">0.25 ETH</Typography>
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
                    mt: 2,
                  }}
                >
                  Place a bid
                </Button>
              </Box>
            </Box>
            <Box display="flex" gap={2} alignItems="end">
              <Box
                sx={{ borderRadius: "24px" }}
                component="img"
                src="/images/svg/popular-nfts/nft3.svg"
              />
              <Box>
                <Box
                  sx={{ border: "1px solid #00AC4F" }}
                  borderRadius="6px"
                  py={1}
                  px={3}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <EtheriumIcon color="green" size="small" />
                  <Typography color="#00AC4F">0.40 ETH</Typography>
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
                    mt: 2,
                  }}
                >
                  Place a bid
                </Button>
              </Box>
            </Box>
            <Box display="flex" gap={2} alignItems="end">
              <Box
                sx={{ borderRadius: "24px" }}
                component="img"
                src="/images/svg/popular-nfts/nft4.svg"
              />
              <Box>
                <Box
                  sx={{ border: "1px solid #00AC4F" }}
                  borderRadius="6px"
                  py={1}
                  px={3}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <EtheriumIcon color="green" size="small" />
                  <Typography color="#00AC4F">0.25 ETH</Typography>
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
                    mt: 2,
                  }}
                >
                  Place a bid
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderLeft: "1px solid #ECECEC", p: 6 }}>
          <Typography fontWeight={800} fontSize={18} color="#fff">
            Last 7 days
          </Typography>
          <Box mt={3} px={2} sx={{ borderBottom: "1px solid #F0F0F0", pb: 2 }}>
            <Box display="flex" alignItems="center" gap={4}>
              <Box display="flex" alignItems="end" gap={3}>
                <Box
                  component="img"
                  src="/images/svg/popular-nfts/avatars/avatar1.svg"
                />
                <Box display="flex" gap={1} alignItems="center">
                  <EtheriumIcon color="white" size="large" />
                  <Typography
                    fontFamily={poppinsFont.style.fontFamily}
                    fontWeight={700}
                    color="#fff"
                  >
                    19,769.39
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={poppinsFont.style.fontFamily}
                fontWeight={700}
                color="#14C8B0"
              >
                +26.52%
              </Typography>
            </Box>
          </Box>
          <Box mt={3} px={2} sx={{ borderBottom: "1px solid #F0F0F0", pb: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="end" gap={3}>
                <Box
                  component="img"
                  src="/images/svg/popular-nfts/avatars/avatar2.svg"
                />
                <Box display="flex" gap={1} alignItems="center">
                  <EtheriumIcon color="white" size="large" />
                  <Typography
                    fontFamily={poppinsFont.style.fontFamily}
                    fontWeight={700}
                    color="#fff"
                  >
                    2,769.39
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={poppinsFont.style.fontFamily}
                fontWeight={700}
                color="#FF002E"
              >
                +10.52%
              </Typography>
            </Box>
          </Box>
          <Box mt={3} px={2} sx={{ borderBottom: "1px solid #F0F0F0", pb: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="end" gap={3}>
                <Box
                  component="img"
                  src="/images/svg/popular-nfts/avatars/avatar3.svg"
                />
                <Box display="flex" gap={1} alignItems="center">
                  <EtheriumIcon color="white" size="large" />
                  <Typography
                    fontFamily={poppinsFont.style.fontFamily}
                    fontWeight={700}
                    color="#fff"
                  >
                    9,232.39
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={poppinsFont.style.fontFamily}
                fontWeight={700}
                color="#14C8B0"
              >
                +2.52%
              </Typography>
            </Box>
          </Box>
          <Box mt={3} px={2} sx={{ borderBottom: "1px solid #F0F0F0", pb: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="end" gap={3}>
                <Box
                  component="img"
                  src="/images/svg/popular-nfts/avatars/avatar3.svg"
                />
                <Box display="flex" gap={1} alignItems="center">
                  <EtheriumIcon color="white" size="large" />
                  <Typography
                    fontFamily={poppinsFont.style.fontFamily}
                    fontWeight={700}
                    color="#fff"
                  >
                    3,769.39
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={poppinsFont.style.fontFamily}
                fontWeight={700}
                color="#14C8B0"
              >
                +1.52%
              </Typography>
            </Box>
          </Box>
          <Box mt={3} px={2} sx={{ pb: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="end" gap={3}>
                <Box
                  component="img"
                  src="/images/svg/popular-nfts/avatars/avatar5.svg"
                />
                <Box display="flex" gap={1} alignItems="center">
                  <EtheriumIcon color="white" size="large" />
                  <Typography
                    fontFamily={poppinsFont.style.fontFamily}
                    fontWeight={700}
                    color="#fff"
                  >
                    10,769.39
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={poppinsFont.style.fontFamily}
                fontWeight={700}
                color="#FF002E"
              >
                +2.52%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Bids;
