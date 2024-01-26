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
import DoctorList from "./pages/Doctors/DoctorList.js";
import AddCategory from './pages/Admin/AddCategory.js';
import CategoryList from "./pages/Admin/CategoryList.js";
import AddFilter from "./pages/Admin/AddFilter.js";
import ListFilter from "./pages/Admin/ListFilter.js";
import AddMR from "./pages/MR/AddMR.js";
import ListMRs from "./pages/MR/ListMRs.js";
import SuperAdmin from "./pages/Admin/SuperAdmin.js";
import ContentAdmin from "./pages/Admin/ContentAdmin.js";
import ReportAdmin from "./pages/Admin/ReportAdmin.js";
import Dashboard from './pages/Dashboard.js';
import Setting from "./pages/Setting.js";
import PasswordReset from './pages/PasswordReset.js';

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
              path="/"
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
                path="/resetpassword"
                element={
                  <PublicRoute>
                    <PasswordReset />
                  </PublicRoute>
                }
              />
            {/* <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            /> */}
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
              path="/doctorList"
              element={
                <ProtectedRoute>
                  <DoctorList />
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
            <Route
              path="/categoryList"
              element={
                <ProtectedRoute>
                  <CategoryList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addFilter"
              element={
                <ProtectedRoute>
                  <AddFilter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/filterList"
              element={
                <ProtectedRoute>
                  <ListFilter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addMRs"
              element={
                <ProtectedRoute>
                  <AddMR />
                </ProtectedRoute>
              }
            />
            <Route
              path="/listMRs"
              element={
                <ProtectedRoute>
                  <ListMRs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/superAdmin"
              element={
                <ProtectedRoute>
                  <SuperAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contentAdmin"
              element={
                <ProtectedRoute>
                  <ContentAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reportAdmin"
              element={
                <ProtectedRoute>
                  <ReportAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dash"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute>
                  <Setting />
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
