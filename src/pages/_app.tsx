import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { fontFamily } from "fonts";
import type { AppProps as NextAppProps } from "next/app";
import createEmotionCache from "utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const App = (props: AppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <style jsx global>{`
        html {
          font-family: ${fontFamily};
        }
      `}</style>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
