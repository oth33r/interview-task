import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Articles = lazy(() => import("@/pages/Articles"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Articles />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <ErrorPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
