import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Checkbox, Container, Typography } from "@mui/material";
import Logo from "components/Logo";
import StepOneIcon from "components/icons/StepOneIcon";
import StepThreeIcon from "components/icons/StepThreeIcon";
import StepTwoIcon from "components/icons/StepTwoIcon";
import { orbitronFont, poppinsFont } from "fonts";
import type { NextPage } from "next";
import { Fade } from "react-reveal";

const RegisterPage: NextPage = () => {
  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box py={5} px={7} overflow="hidden">
      <Box
        sx={{
          background: "#07070A",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      ></Box>
      <Logo size="small" />

      <Box
        sx={{
          top: -231,
          left: -30,
          width: "321px",
          height: "600px",
          position: "fixed",
          background: "linear-gradient(#fb038e4a, #aa9cff42)",
          borderRadius: "50%",
          filter: "blur(64px)",
          transform: "rotate(55deg)",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          bottom: -394,
          left: "5%",
          width: "321px",
          height: "525px",
          position: "fixed",
          background: "linear-gradient(#03fb754d, #06fff04a)",
          borderRadius: "50%",
          filter: "blur(64px)",
          transform: "rotate(55deg)",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          bottom: "-4%",
          right: "-4%",
          width: "321px",
          height: "321px",
          position: "fixed",
          background: "linear-gradient(#2603fb4f, #dc06ff54)",
          borderRadius: "50%",
          filter: "blur(64px)",
          transform: "rotate(55deg)",
          zIndex: -1,
        }}
      ></Box>
      <Container maxWidth="xl">
        <Fade left>
          <Box
            mt={15}
            display="flex"
            justifyContent="space-between"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: 3, lg: 0 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <StepOneIcon />
              <Typography
                sx={{ borderBottom: "1px solid #fff" }}
                color="#fff"
                fontWeight={500}
                fontSize={37}
                fontFamily={orbitronFont.style.fontFamily}
              >
                Create Account
              </Typography>
              <ArrowDownIcon sx={{ color: "#fff", fontSize: 37 }} />
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <StepTwoIcon />
              <Typography
                sx={{ borderBottom: "1px solid #fff", opacity: 0.5 }}
                color="#fff"
                fontWeight={500}
                fontSize={29}
                fontFamily={orbitronFont.style.fontFamily}
              >
                Free Access
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <StepThreeIcon />
              <Typography
                sx={{ borderBottom: "1px solid #fff", opacity: 0.5 }}
                color="#fff"
                fontWeight={500}
                fontSize={29}
                fontFamily={orbitronFont.style.fontFamily}
              >
                Vip Members
              </Typography>
            </Box>
          </Box>
        </Fade>
        <Fade left>
          <Box maxWidth={430}>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Enter your Full Name here"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Date Registered"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Wallet Information"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Address"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                type="tel"
                placeholder="Phone"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Email"
                type="email"
              />
              <Box
                component="input"
                sx={{
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  height: 65,
                  width: "100%",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 22,
                }}
                placeholder="Confirmation needed"
                type="email"
              />
            </Box>
            <Box display="flex" my={3} alignItems="center">
              <Checkbox sx={{ ".MuiSvgIcon-root": { color: "#fff" } }} />
              <Typography
                color="#A5A0A0"
                fontWeight={500}
                fontFamily={poppinsFont.style.fontFamily}
                fontSize={14}
              >
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#6C35BD",
                  width: 340,
                  height: 60,
                  fontSize: 26,
                  fontWeight: 500,
                  textTransform: "none",
                  ":hover": { bgcolor: "#6C35BD" },
                }}
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default RegisterPage;
