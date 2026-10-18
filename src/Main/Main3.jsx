import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import PageSeo from "../Shared/Seo/Seo";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Loader from "../Component3/Loader/Loader";
import Navbar3 from "../Shared/Navbar/Navbar3";
import Footer from "../Shared/Footer/Footer";

const Main3 = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // 🔥 DISABLE BROWSER SCROLL RESTORATION (CRITICAL)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 🔥 FORCE SCROLL TO TOP ON EVERY ROUTE CHANGE
  useEffect(() => {
    setLoading(true);

    // HARD RESET — works even if layout hijacks scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <PageSeo />
      {loading && <Loader />}

      <Navbar3 />

      {/* 🔥 DO NOT ALLOW SCROLL CONTAINERS */}
      <div className="min-h-screen overflow-visible">
        <Outlet />
        <Footer/>
      </div>

      <ScrollToTop />
    </>
  );
};

export default Main3;
