import { Box, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {}

const Features: FunctionComponent<IProps> = () => {
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
      overflow="auto"
      bgcolor="#fff"
      py={3}
      px={10}
      display="flex"
      alignItems="center"
      gap={3}
      justifyContent={{
        lg: "center",
      }}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        Secure
      </Typography>
      <Box bgcolor="#D1D0CF" width={56} minWidth={56} height={9} />
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        High Definition
      </Typography>
      <Box bgcolor="#D1D0CF" width={56} minWidth={56} height={9} />
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        Decentralized
      </Typography>
      <Box bgcolor="#D1D0CF" width={56} minWidth={56} height={9} />
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        Community-Driven
      </Typography>
      <Box bgcolor="#D1D0CF" width={56} minWidth={56} height={9} />
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        Crypto Wallet
      </Typography>
      <Box bgcolor="#D1D0CF" width={56} minWidth={56} height={9} />
      <Typography
        whiteSpace="nowrap"
        textTransform="uppercase"
        fontWeight={500}
      >
        Radio
      </Typography>
    </Box>
  );
};

export default Features;
