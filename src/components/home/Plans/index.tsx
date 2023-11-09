import { Box, Container, Typography } from "@mui/material";
import type { FunctionComponent } from "react";
import { useState } from "react";
import Plan from "./Plan";
import { plans } from "./plans";

interface IProps {}

const Plans: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [reccuringPlanType, setReccuringPlanType] = useState<
    "monthly" | "annual"
  >("monthly");

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container maxWidth="xl" sx={{ pb: 30, overflow: "hidden" }}>
      <Typography color="#fff" textAlign="center" fontSize={{ xs: 52, md: 65 }}>
        Choose a pricing plan
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box
          mt={5}
          bgcolor="#17181A"
          sx={{ border: "1px solid #f1f0ee29", borderRadius: "40px" }}
          p={0.5}
          display="flex"
        >
          <Box
            onClick={() => setReccuringPlanType("monthly")}
            py={1.2}
            px={2.5}
            bgcolor={reccuringPlanType === "monthly" ? "#fff" : "inherit"}
            sx={{ borderRadius: "40px", cursor: "pointer" }}
          >
            <Typography
              color={reccuringPlanType === "monthly" ? "#161719" : "#fff"}
              fontWeight={700}
            >
              Monthly Billing
            </Typography>
          </Box>
          <Box
            onClick={() => setReccuringPlanType("annual")}
            py={1.2}
            px={2.5}
            sx={{ borderRadius: "40px", cursor: "pointer" }}
            bgcolor={reccuringPlanType === "annual" ? "#fff" : "inherit"}
          >
            <Typography
              color={reccuringPlanType === "annual" ? "#161719" : "#fff"}
              fontWeight={700}
            >
              Annual Billing
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        mt={10}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={5}
        position="relative"
      >
        <Box
          sx={{
            bottom: -310,
            left: "41%",
            width: "500px",
            height: "500px",
            position: "absolute",
            background: "linear-gradient(#dc06ff7d, #2603fb80)",
            borderRadius: "50%",
            filter: "blur(75px)",
          }}
        ></Box>
        {plans.map((plan, idx) => (
          <Box key={idx} sx={{ flex: 1 }}>
            <Plan
              features={plan.features}
              price={plan.prices[reccuringPlanType]}
              type={plan.type}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Plans;
