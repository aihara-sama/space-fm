import { Box } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import About from "components/home/About";
import FAQ from "components/home/FAQ";

import Features from "components/home/Features";
import GetApp from "components/home/GetApp";
import Hero from "components/home/Hero";
import Plans from "components/home/Plans";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~
  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#0A0A0A" overflow="hidden">
      <Box
        sx={{
          top: -220,
          left: -246,
          width: "500px",
          height: "500px",
          position: "absolute",
          background: "linear-gradient(#7000ff, #06fff06e)",
          borderRadius: "50%",
          filter: "blur(35px)",
        }}
      />
      <Header />
      <Hero />
      <Features />
      <About />
      <Plans />
      <GetApp />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default HomePage;
