import "@assets/main.css";
import "@assets/chrome-bug.css";
import "../style/Global.css";
import Layout from "@components/common/Layout";
import { ManagedUIContext } from "@components/ui/context";
import { Provider as RWBProvider } from "react-wrap-balancer";
import AuthProvider from "context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // this is the CSS file provided by nprogress, or you can create your own CSS

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
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
