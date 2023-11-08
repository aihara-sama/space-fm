import { fontFamily } from "fonts";
import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
