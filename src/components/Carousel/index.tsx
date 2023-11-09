import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import type { FunctionComponent } from "react";
import { images } from "./images";

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
`;

interface IProps {}

const Carousel: FunctionComponent<IProps> = () => {
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
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "url(/images/svg/big-frame.svg) no-repeat",
          position: "absolute",
          top: { xs: "-114%", lg: "-110%" },
          left: { xs: "-1138%", lg: "33%" },
          width: "489px",
          height: "422px",
          backgroundSize: "67%",
        }}
      ></Box>
      <Box
        sx={{
          left: { xs: -260, lg: 80 },
          bottom: -220,
          width: "500px",
          height: "500px",
          position: "absolute",
          background: "linear-gradient(#2603fb80, #dc06ff80)",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}
      ></Box>
      <Box
        className="frames"
        sx={{
          width: "10px",
          transformStyle: "preserve-3d",
          transform:
            "rotatex(347deg) rotateY(3deg) rotateZ(337deg) translateX(-10px)",
        }}
      >
        {images.map((image, idx) => {
          return (
            <Box
              className="strip"
              key={idx}
              sx={{
                transformStyle: "preserve-3d",
                animation: `${spin} 40s infinite linear`,
              }}
            >
              {image.strips.map(({ backgroundPosition, deg }, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      background: `url(${image.link})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1200%",
                      backgroundPosition,
                      transform: `rotateY(${deg}deg) translateZ(170px)`,
                      position: "absolute",
                      height: 140,
                      width: 10,
                    }}
                  ></Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
