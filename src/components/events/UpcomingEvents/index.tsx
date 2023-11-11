import { Box, Button, Container, Grid, Typography } from "@mui/material";
import GradientButton from "components/buttons/GradientButton";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";

interface IProps {}

const UpcomingEvents: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "stretch", md: "center" }}
        gap={5}
      >
        <Fade left>
          <Typography color="#242565" fontWeight={500} fontSize={40}>
            Upcoming Events
          </Typography>
        </Fade>
        <Fade right>
          <Box
            display="flex"
            gap={4}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <GradientButton text="Weekdays" />
            <GradientButton text="Event Type" />
            <GradientButton text="Location" />
            <GradientButton text="More" />
          </Box>
        </Fade>
      </Box>
      <Box mt={7}>
        <Fade bottom cascade>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 3 }} container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="18px"
                boxShadow="1px 1px 20px #00000030"
              >
                <Box component="img" src="/images/svg/events/event1.svg" />
                <Box px={2} pb={2} mt={2} display="flex" gap={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize={12} fontWeight={800} color="#3D37F1">
                      Month
                    </Typography>
                    <Typography fontSize={13} fontWeight={800} color="#000000">
                      Date
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={800} color="#000">
                      Event Name/ Location
                    </Typography>
                    <Typography mt={2} fontSize={14} color="#6A6A6A">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam vero magnam ipsa velit doloribus? Provident incidunt
                      repellendus soluta inventore esse itaque quidem
                      blanditiis, impedit et odio veritatis laboriosam fuga hic.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>

        <Fade left>
          <Box
            sx={{
              mt: 10,
              display: "flex",
              justifyContent: "center",
              mb: 5,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#3D37F1",
                borderRadius: "50px",
                borderColor: "#3D37F1 !important",
                textTransform: "none",
                py: "10px",
                px: 4,
                fontsize: 18,
                whiteSpace: "nowrap",
                fontWeight: 800,
                borderWidth: 1.5,
              }}
            >
              Load More
            </Button>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default UpcomingEvents;
