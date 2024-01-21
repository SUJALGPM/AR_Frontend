import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home.js';
import CommonPage from "./pages/CommonPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import DetailReport from './pages/Reports/DetailReport.js';
import DoctorReport from './pages/Reports/DoctorReport.js';
import AddDoctor from "./pages/Doctors/AddDoctor.js";
import AddCategory from './pages/Admin/AddCategory.js';

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
            <Route
              path="/addDoctor"
              element={
                <ProtectedRoute>
                  <AddDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addCategory"
              element={
                <ProtectedRoute>
                  <AddCategory />
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
