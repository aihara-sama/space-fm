import { Box, Button, Divider, Typography } from "@mui/material";
import CheckIcon from "components/icons/CheckIcon";
import type { FunctionComponent } from "react";

interface IProps {
  type: "Begginer" | "Starter" | "Space Pro";
  features: string[];
  price: string;
}

const Plan: FunctionComponent<IProps> = ({ price, type, features }) => {
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
        background: "linear-gradient(#1C1D20, #161719)",
        borderRadius: "40px",
        p: 4,
      }}
    >
      <Typography color="#fff" fontSize={32}>
        {type}
      </Typography>
      <Divider sx={{ borderColor: "#F1F0EE", my: 4, opacity: 0.1 }} />
      <Typography fontSize={40} fontWeight={700} color="#fff">
        ${price}
        <Typography component="span" fontSize={28} fontWeight={400}>
          /mo
        </Typography>
      </Typography>
      <Box my={4} display="flex" flexDirection="column" gap={1}>
        {features.map((feature, idx) => (
          <Typography
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            key={idx}
          >
            <CheckIcon />
            {feature}
          </Typography>
        ))}
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          borderColor: "#F1F0EE",
          borderRadius: "40px",
          py: 1.3,
          ":hover": { color: "#161719", background: "#fff" },
        }}
        fullWidth
      >
        {type === "Begginer" ? "Get started" : "Buy now"}
      </Button>
    </Box>
  );
};

export default Plan;
