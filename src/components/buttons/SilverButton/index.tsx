import { Box } from "@mui/material";
import type { FunctionComponent } from "react";

interface IProps {
  size?: number;
  Icon: React.ReactNode;
}

const SilverButton: FunctionComponent<IProps> = ({ size = 34, Icon }) => {
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
      width={size}
      height={size}
      borderRadius="8px"
      sx={{
        background: "linear-gradient(#35383A, #232529)",
        border: "1px solid #ffffff26",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {Icon}
    </Box>
  );
};

export default SilverButton;
