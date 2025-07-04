import { createBrowserRouter } from "react-router";
import App from "./App";
import LoginMain from "./pages/login/login-main";
import SignupMain from "./pages/signup/signup-main";
import HomeMain from "./pages/home/home-main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomeMain/>},
      { path: "signup", element: <SignupMain /> },
      { path: "login", element: <LoginMain /> },
    ],
  },
]);
