import { DM_Sans, Inter, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const interFont = Inter({
  subsets: ["latin"],
});

export const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const orbitronFont = localFont({
  src: [
    {
      path: "../../public/fonts/orbitron/Orbitron-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/orbitron/Orbitron-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/orbitron/Orbitron-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/orbitron/Orbitron-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/orbitron/Orbitron-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../public/fonts/orbitron/Orbitron-Black.ttf",
      style: "normal",
      weight: "900",
    },
  ],
});

export const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fontFamily = `${interFont.style.fontFamily}, ${poppinsFont.style.fontFamily}, ${orbitronFont.style.fontFamily}, ${montserratFont.style.fontFamily}, ${dmSans.style.fontFamily}, 'Roboto', 'Helvetica', 'Arial', sans-serif;`;
