import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/rootLayout";
import Home from "../pages/home/home";
import Virtualization from "../pages/virtualization/virtualization";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/virtualization-react-window",
        element: <Virtualization />,
      },
    ],
  },
  
],
);
