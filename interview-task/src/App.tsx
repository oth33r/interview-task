import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Spinner from "./components/Spinner";
import Article from "./pages/Article";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Articles = lazy(() => import("@/pages/Articles"));

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Suspense fallback={<Spinner />}>
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
            path="/:articleId"
            element={
              <ProtectedRoute>
                <Article />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <ErrorPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
