import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import EtheriumIcon from "components/icons/EtheriumIcon";
import FiltersIcon from "components/icons/FiltersIcon";
import type { FunctionComponent } from "react";
import { Fade } from "react-reveal";
import { cards } from "./cards";

interface IProps {}

const categories = [
  "Music",
  "Film, Shorts",
  "Animation, 3D",
  "Diplomas, Scholarships",
  "Luxury Weddings",
  "Luxury Homes",
  "Space Travel",
];

const NFTs: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box sx={{ py: 15, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "400px",
            height: "400px",
            background: "linear-gradient(#2603fb52, #dc06ff7d)",
            borderRadius: "50%",
            filter: "blur(40px)",
            position: "absolute",
            top: "-227px",
            right: "-189px",
            zIndex: 0,
          }}
        ></Box>
        <Box
          sx={{
            width: "400px",
            height: "400px",
            background: "linear-gradient(#03fb754d, #06fff061)",
            borderRadius: "50%",
            filter: "blur(40px)",
            position: "absolute",
            bottom: "83px",
            right: "-62px",
            zIndex: 0,
          }}
        ></Box>
        <Fade left>
          <Box
            display="flex"
            alignItems="center"
            overflow="auto"
            sx={{ "::-webkit-scrollbar": { display: "none" } }}
          >
            <Typography
              whiteSpace="nowrap"
              mr={3}
              fontWeight={500}
              fontSize={14}
              color="#fff"
            >
              All Categories
            </Typography>
            {categories.map((cat, idx) => (
              <Box
                whiteSpace="nowrap"
                mr={2}
                key={idx}
                borderRadius="100px"
                sx={{
                  bgcolor: "#dcdcdc38",
                  color: "#fff",
                  py: "10px",
                  px: "20px",
                }}
              >
                {cat}
              </Box>
            ))}
            <Box
              whiteSpace="nowrap"
              mr={2}
              borderRadius="100px"
              sx={{
                bgcolor: "#dcdcdc38",
                color: "#fff",
                py: "15px",
                px: "20px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiltersIcon />
              All Filters
            </Box>
          </Box>
        </Fade>
        <Box px={3} mt={3}>
          <Grid container spacing={3}>
            {cards.map((card, idx) => (
              <Grid key={idx} item xs={12} sm={6} lg={3}>
                <Fade bottom>
                  <Box bgcolor="#fff" borderRadius="14px" p="10px">
                    <Box position="relative">
                      <Box
                        component="img"
                        src={card.image}
                        sx={{ width: "100%" }}
                      />
                      <Box
                        position="absolute"
                        sx={{ bottom: "-15px", left: "13px" }}
                      >
                        <AvatarGroup>
                          {card.avatars.map((avatar, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={avatar} />
                          ))}
                        </AvatarGroup>
                      </Box>
                    </Box>
                    <Box px={2}>
                      <Typography
                        fontWeight={800}
                        fontSize={20}
                        color="#000"
                        mt={2}
                      >
                        {card.title}
                      </Typography>
                      <Box
                        mt={1}
                        mb={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <EtheriumIcon color="green" size="small" />
                          <Typography
                            fontWeight={800}
                            fontSize={11}
                            color="#00AC4F"
                          >
                            {card.price}
                          </Typography>
                        </Box>
                        <Typography
                          color="#838383"
                          fontSize={13}
                          fontWeight={500}
                        >
                          {card.amount} of 321
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: "#F4F4F4", mb: 2 }} />
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          bgcolor="#F5F5F5"
                          borderRadius="110px"
                          px={1.5}
                          py={0.5}
                          color="#5539A8"
                          fontSize={11}
                          fontWeight={500}
                        >
                          {card.timeLeft}
                        </Box>
                        <Typography fontWeight={600} color="#4F33A3">
                          Place a bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ mt: 3 }} container spacing={3}>
            {cards.map((card, idx) => (
              <Grid key={idx} item xs={12} sm={6} lg={3}>
                <Fade bottom>
                  <Box bgcolor="#fff" borderRadius="14px" p="10px">
                    <Box position="relative">
                      <Box
                        component="img"
                        src={card.image}
                        sx={{ width: "100%" }}
                      />
                      <Box
                        position="absolute"
                        sx={{ bottom: "-15px", left: "13px" }}
                      >
                        <AvatarGroup>
                          {card.avatars.map((avatar, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={avatar} />
                          ))}
                        </AvatarGroup>
                      </Box>
                    </Box>
                    <Box px={2}>
                      <Typography
                        fontWeight={800}
                        fontSize={20}
                        color="#000"
                        mt={2}
                      >
                        {card.title}
                      </Typography>
                      <Box
                        mt={1}
                        mb={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <EtheriumIcon color="green" size="small" />
                          <Typography
                            fontWeight={800}
                            fontSize={11}
                            color="#00AC4F"
                          >
                            {card.price}
                          </Typography>
                        </Box>
                        <Typography
                          color="#838383"
                          fontSize={13}
                          fontWeight={500}
                        >
                          {card.amount} of 321
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: "#F4F4F4", mb: 2 }} />
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          bgcolor="#F5F5F5"
                          borderRadius="110px"
                          px={1.5}
                          py={0.5}
                          color="#5539A8"
                          fontSize={11}
                          fontWeight={500}
                        >
                          {card.timeLeft}
                        </Box>
                        <Typography fontWeight={600} color="#4F33A3">
                          Place a bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ mt: 3 }} container spacing={3}>
            {cards.map((card, idx) => (
              <Grid key={idx} item xs={12} sm={6} lg={3}>
                <Fade bottom>
                  <Box bgcolor="#fff" borderRadius="14px" p="10px">
                    <Box position="relative">
                      <Box
                        component="img"
                        src={card.image}
                        sx={{ width: "100%" }}
                      />
                      <Box
                        position="absolute"
                        sx={{ bottom: "-15px", left: "13px" }}
                      >
                        <AvatarGroup>
                          {card.avatars.map((avatar, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={avatar} />
                          ))}
                        </AvatarGroup>
                      </Box>
                    </Box>
                    <Box px={2}>
                      <Typography
                        fontWeight={800}
                        fontSize={20}
                        color="#000"
                        mt={2}
                      >
                        {card.title}
                      </Typography>
                      <Box
                        mt={1}
                        mb={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <EtheriumIcon color="green" size="small" />
                          <Typography
                            fontWeight={800}
                            fontSize={11}
                            color="#00AC4F"
                          >
                            {card.price}
                          </Typography>
                        </Box>
                        <Typography
                          color="#838383"
                          fontSize={13}
                          fontWeight={500}
                        >
                          {card.amount} of 321
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: "#F4F4F4", mb: 2 }} />
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          bgcolor="#F5F5F5"
                          borderRadius="110px"
                          px={1.5}
                          py={0.5}
                          color="#5539A8"
                          fontSize={11}
                          fontWeight={500}
                        >
                          {card.timeLeft}
                        </Box>
                        <Typography fontWeight={600} color="#4F33A3">
                          Place a bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <Grid
            sx={{ mt: 3, position: "relative", zIndex: 1 }}
            container
            spacing={3}
          >
            {cards.map((card, idx) => (
              <Grid key={idx} item xs={12} sm={6} lg={3}>
                <Fade bottom>
                  <Box bgcolor="#fff" borderRadius="14px" p="10px">
                    <Box position="relative">
                      <Box
                        component="img"
                        src={card.image}
                        sx={{ width: "100%" }}
                      />
                      <Box
                        position="absolute"
                        sx={{ bottom: "-15px", left: "13px" }}
                      >
                        <AvatarGroup>
                          {card.avatars.map((avatar, i) => (
                            <Avatar key={i} alt="Remy Sharp" src={avatar} />
                          ))}
                        </AvatarGroup>
                      </Box>
                    </Box>
                    <Box px={2}>
                      <Typography
                        fontWeight={800}
                        fontSize={20}
                        color="#000"
                        mt={2}
                      >
                        {card.title}
                      </Typography>
                      <Box
                        mt={1}
                        mb={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <EtheriumIcon color="green" size="small" />
                          <Typography
                            fontWeight={800}
                            fontSize={11}
                            color="#00AC4F"
                          >
                            {card.price}
                          </Typography>
                        </Box>
                        <Typography
                          color="#838383"
                          fontSize={13}
                          fontWeight={500}
                        >
                          {card.amount} of 321
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: "#F4F4F4", mb: 2 }} />
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          bgcolor="#F5F5F5"
                          borderRadius="110px"
                          px={1.5}
                          py={0.5}
                          color="#5539A8"
                          fontSize={11}
                          fontWeight={500}
                        >
                          {card.timeLeft}
                        </Box>
                        <Typography fontWeight={600} color="#4F33A3">
                          Place a bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
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
                variant="contained"
                sx={{
                  color: "#4F33A3",
                  borderRadius: "50px",
                  border: "none !important",
                  textTransform: "none",
                  py: "10px",
                  px: 4,
                  fontsize: 18,
                  whiteSpace: "nowrap",
                  fontWeight: 800,
                  borderWidth: 1.5,
                  background: "#fff !important",
                }}
              >
                More NFTs
              </Button>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};

export default NFTs;
