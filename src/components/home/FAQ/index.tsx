import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";
import Accordion from "./Accordion";
import { menu } from "./faqs";

interface IProps {}

const FAQ: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#1617199e" py={15}>
      <Fade bottom>
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={5}
            position="relative"
          >
            <Box
              sx={{
                top: "35%",
                left: "20%",
                width: "200px",
                height: "200px",
                position: "absolute",
                background: "#176ef047",
                borderRadius: "50%",
                filter: "blur(85px)",
              }}
            ></Box>
            <Box
              sx={{
                top: "35%",
                left: "50%",
                width: "200px",
                height: "200px",
                position: "absolute",
                background: "#6baf1570",
                borderRadius: "50%",
                filter: "blur(85px)",
              }}
            ></Box>
            <Box maxWidth={500}>
              <Typography color="#fff" fontSize={48}>
                Frequently Asked Questions
              </Typography>
              <Typography color="#F1F0EE" fontSize={18} fontWeight={300} mt={3}>
                Have a question that is not answered? You can contact us at{" "}
                <Box
                  color="#F1F0EE"
                  component="a"
                  href="mailto:support@spacefm.co"
                >
                  support@spacefm.co
                </Box>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderRadius: "50px",
                  borderColor: "#ffffff1c !important",
                  textTransform: "none",
                  py: "10px",
                  px: 4,
                  fontsize: 18,
                  whiteSpace: "nowrap",
                  mt: 10,
                }}
                component={Link}
                href="#"
              >
                Contact
              </Button>
            </Box>
            <Box flex={1}>
              <Accordion menu={menu} />
            </Box>
          </Box>
        </Container>
      </Fade>
    </Box>
  );
};

export default FAQ;
