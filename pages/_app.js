import "@assets/main.css";
import "@assets/chrome-bug.css";
import "../style/Global.css";
import { useEffect } from "react";
import Layout from "@components/common/Layout";
import { ManagedUIContext } from "@components/ui/context";
import { Provider as RWBProvider } from "react-wrap-balancer";
import AuthProvider from "context/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <AuthProvider>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <RWBProvider>
              <Component {...pageProps} />
            </RWBProvider>
            <ToastContainer />
          </Layout>
        </ManagedUIContext>
      </AuthProvider>
    </>
  );
}
