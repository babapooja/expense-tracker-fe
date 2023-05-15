import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const ProtectedRoute = ({ children }) => {
    const currentUser = useContext(AuthContext);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    // console.log(currentUser['currentUser']);
    return children;
  };

  return (
    <BrowserRouter>
      {/* <div className="h-screen flex justify-center items-center"> */}
      <Routes>
        <Route
          path="/"
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
