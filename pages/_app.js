import "@assets/main.css";
import "@assets/chrome-bug.css";
import "../style/Global.css";
import { useEffect } from "react";
import Layout from "@components/common/Layout";
import Head from "@components/common/Head";
import { ManagedUIContext } from "@components/ui/context";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { Provider as RWBProvider } from "react-wrap-balancer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
    
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <LazyMotion features={domAnimation}>
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                document.body.classList.remove("overflow-hidden");
              }}
            >
              <RWBProvider>
                <Component {...pageProps} />
              </RWBProvider>
            </AnimatePresence>
          </LazyMotion>
        </Layout>
      </ManagedUIContext>
    </>
  );
}
