import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Header, Footer } from "@/components";
import { CvePage, InfoPage, NotFoundPage } from "./pages";
import { useEffect } from "react";

const RedirectOnReload = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return null;
};

export const App = () => {
  return (
    <>
      <Router>
        <RedirectOnReload />
        <Header />
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/cve" replace />} />
            <Route path="/cve" element={<CvePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </>
  );
};
