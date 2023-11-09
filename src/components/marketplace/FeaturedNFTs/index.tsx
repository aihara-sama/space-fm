import { Box, Button, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {}

const FeaturedNFTs: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#fff" py={8} px={{ xs: 3, md: 6 }}>
      <Typography
        ml={{ xs: 1, md: 4 }}
        color="#000"
        fontWeight={800}
        fontSize={28}
      >
        Collection Featured NFTs
      </Typography>
      <Box mt={6} display="flex" gap={5} flexWrap="wrap">
        <Box>
          {" "}
          <Box
            display="flex"
            gap={3}
            alignItems="stretch"
            // flexDirection={{ xs: "column", md: "row" }}
          >
            {/* <Box> */}
            <Box
              sx={{ borderRadius: "24px", objectFit: "cover" }}
              component="img"
              src="/images/svg/featured-nfts/music-artist/nft1.svg"
            />
            {/* </Box> */}
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/music-artist/nft2.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/music-artist/nft3.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/music-artist/nft4.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#000" fontSize={20} fontWeight={800}>
              Music Artist
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#2639ED",
                borderRadius: "50px",
                borderColor: "#2639ED !important",
                textTransform: "none",
                py: "7px",
                px: 2,
                fontsize: 18,
                whiteSpace: "nowrap",
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
        <Box>
          {" "}
          <Box
            display="flex"
            gap={3}
            alignItems="stretch"
            // flexDirection={{ xs: "column", md: "row" }}
          >
            {/* <Box> */}
            <Box
              sx={{ borderRadius: "24px", objectFit: "cover" }}
              component="img"
              src="/images/svg/featured-nfts/animation-3d/nft1.svg"
            />
            {/* </Box> */}
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/animation-3d/nft2.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/animation-3d/nft3.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/animation-3d/nft4.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#000" fontSize={20} fontWeight={800}>
              Film, Shorts
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#2639ED",
                borderRadius: "50px",
                borderColor: "#2639ED !important",
                textTransform: "none",
                py: "7px",
                px: 2,
                fontsize: 18,
                whiteSpace: "nowrap",
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
        <Box>
          {" "}
          <Box
            display="flex"
            gap={3}
            alignItems="stretch"
            // flexDirection={{ xs: "column", md: "row" }}
          >
            {/* <Box> */}
            <Box
              sx={{ borderRadius: "24px", objectFit: "cover" }}
              component="img"
              src="/images/svg/featured-nfts/firm-shorts/nft1.svg"
            />
            {/* </Box> */}
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/firm-shorts/nft2.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/firm-shorts/nft3.svg"
                />
              </Box>
              <Box display="flex" gap={2} alignItems="end">
                <Box
                  sx={{ borderRadius: "11px" }}
                  component="img"
                  src="/images/svg/featured-nfts/firm-shorts/nft4.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#000" fontSize={20} fontWeight={800}>
              Animation, 3D
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#2639ED",
                borderRadius: "50px",
                borderColor: "#2639ED !important",
                textTransform: "none",
                py: "7px",
                px: 2,
                fontsize: 18,
                whiteSpace: "nowrap",
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedNFTs;
