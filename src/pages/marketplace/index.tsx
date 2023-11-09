import { Box } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import Bids from "components/marketplace/Bids";
import FeaturedNFTs from "components/marketplace/FeaturedNFTs";

import Hero from "components/marketplace/Hero";
import NFTs from "components/marketplace/NFTs";
import type { FunctionComponent } from "react";

interface IProps {}

const MarketplacePage: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#000000" sx={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <Bids />
      <FeaturedNFTs />
      <NFTs />
      <Footer />
    </Box>
  );
};

export default MarketplacePage;
