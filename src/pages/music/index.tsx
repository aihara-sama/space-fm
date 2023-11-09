import { Box, Hidden, Typography } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import PlayIcon from "components/icons/PlayIcon";
import Explore from "components/music/Explore";
import Features from "components/music/Features";
import { montserratFont, orbitronFont } from "fonts";
import { useEffect, useRef, useState, type FunctionComponent } from "react";

interface IProps {}

const MusicPage: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isPlaying, setIsPlaying] = useState(false);

  // ~~~~~ Refs ~~~~~
  const videoRef = useRef<HTMLVideoElement>();

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Handlers ~~~~~
  const playVideo = () => {
    videoRef.current?.play();
  };
  const pauseVideo = () => {
    videoRef.current?.pause();
  };
  // ~~~~~ Effects ~~~~~
  useEffect(() => {
    if (isPlaying) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isPlaying]);

  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#0A0A0A">
      <Header />
      <Box
        sx={{
          marginTop: "-97px",
          position: "relative",
          "::after": {
            content: "''",
            background: "#00000059",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        }}
      >
        <Box
          ref={videoRef}
          sx={{
            maxWidth: "100%",

            width: "100%",
          }}
          component="video"
          src="https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4"
        />
      </Box>
      <Box
        position="absolute"
        top={{ xs: "18%", lg: "30%" }}
        sx={{ display: { xs: "none", md: "block" } }}
        width="100%"
      >
        <Box>
          <Box sx={{ opacity: isPlaying ? 0 : 1 }}>
            <Typography
              textAlign="center"
              fontWeight={700}
              fontFamily={orbitronFont.style.fontFamily}
              fontSize={{ xs: 32, md: 56, lg: 80 }}
              lineHeight={1.2}
              color="#fff"
            >
              Experience live Events
            </Typography>
            <Typography
              textAlign="center"
              fontSize={{ xs: 26, md: 48, lg: 64 }}
              color="#fff"
            >
              Like never before
            </Typography>
            <Typography mt={3} fontWeight={300} textAlign="center" color="#fff">
              Be apart the Space FM Family today and experience live events in a
              whole new way
            </Typography>
          </Box>
          <Box
            mt={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              gap={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setIsPlaying((prev) => !prev);
              }}
            >
              <PlayIcon />
              <Typography
                fontFamily={montserratFont.style.fontFamily}
                color="#fff"
                fontSize={20}
                fontWeight={900}
              >
                {isPlaying ? "Stop" : "Watch"} Video
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Hidden mdUp>
        <Box
          display="flex"
          mt={5}
          gap={2}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={{ xs: "15%", sm: "20%" }}
          width="100%"
        >
          <Box
            gap={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setIsPlaying((prev) => !prev);
            }}
          >
            <PlayIcon />
            <Typography
              fontFamily={montserratFont.style.fontFamily}
              color="#fff"
              fontSize={20}
              fontWeight={900}
            >
              {isPlaying ? "Stop" : "Watch"} Video
            </Typography>
          </Box>
        </Box>
      </Hidden>
      <Explore />
      <Box mt={12}>
        <Features />
      </Box>
      <Footer />
    </Box>
  );
};

export default MusicPage;
