import { Button } from "@mui/material";
import ArrowDown from "components/icons/ArrowDown";
import type { FunctionComponent } from "react";

interface IProps {
  text: string;
}

const GradientButton: FunctionComponent<IProps> = ({ text }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Button
      sx={{
        background: "linear-gradient(-90deg, #1C80C8, #660B90) !important",
        borderRadius: "40px",
        py: 2,
        color: "#fff",
        width: { xs: "100%", md: 157 },
      }}
      endIcon={<ArrowDown />}
    >
      {text}
    </Button>
  );
};

export default GradientButton;
