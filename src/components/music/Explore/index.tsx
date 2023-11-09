import { Box, Typography } from "@mui/material";
import { montserratFont } from "fonts";
import type { FunctionComponent } from "react";

interface IProps {}

const Explore: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box mt={5}>
      <Typography
        ml={5}
        mb={4}
        fontSize={34}
        fontWeight={800}
        color="#fff"
        fontFamily={montserratFont.style.fontFamily}
      >
        Explore By Type of Radio Stations
      </Typography>
      <Box
        display="flex"
        gap={5}
        flexWrap="nowrap"
        overflow="auto"
        mx={3}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          component="img"
          src="/images/svg/radio-station-types/college-alternative.svg"
        />
        <Box component="img" src="/images/svg/radio-station-types/dance.svg" />
        <Box
          component="img"
          src="/images/svg/radio-station-types/hip-hop-rap.svg"
        />
        <Box
          component="img"
          src="/images/svg/radio-station-types/jazz-contemoporary.svg"
        />
      </Box>
    </Box>
  );
};

export default Explore;
