import { Navigate, createBrowserRouter } from "react-router-dom";

import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
import AboutPage from "../Pages/InnerPage/About/AboutPage";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";
import Terms from "../Pages/InnerPage/Terms/Terms";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home3 /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactInner /> },
      { path: "terms", element: <Terms /> },
      { path: "products", element: <Navigate to="/about" replace /> },
      { path: "services", element: <Navigate to="/about" replace /> },
      { path: "quote", element: <Navigate to="/contact" replace /> },
      { path: "agenda", element: <Navigate to="/" replace /> },
      { path: "become-speaker", element: <Navigate to="/about" replace /> },
      { path: "speaker-benefits", element: <Navigate to="/about" replace /> },
      { path: "sponsors", element: <Navigate to="/about" replace /> },
      { path: "register", element: <Navigate to="/contact" replace /> },
      { path: "payment-success", element: <Navigate to="/contact" replace /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
