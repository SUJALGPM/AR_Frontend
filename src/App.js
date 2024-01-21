import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home.js';
import CommonPage from "./pages/CommonPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import DetailReport from './pages/Reports/DetailReport.js';
import DoctorReport from './pages/Reports/DoctorReport.js';
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/commonPage"
              element={
                <ProtectedRoute>
                  <CommonPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/detailReport"
              element={
                <ProtectedRoute>
                  <DetailReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctorReport"
              element={
                <ProtectedRoute>
                  <DoctorReport />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
