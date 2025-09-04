import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import ComingSoon from "../Components/ComingSoon/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <ComingSoon></ComingSoon>,
  },
]);

export default router;
