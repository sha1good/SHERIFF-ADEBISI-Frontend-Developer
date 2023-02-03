import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import MailList from "./components/MailList/MailList"
import "./global.css";
import { useSelector } from "react-redux";

const App = () => {
  
  const  { currentUser } = useSelector((state) => state.user)
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <MailList />
        <Footer />
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/register" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
