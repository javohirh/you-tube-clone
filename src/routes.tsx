import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import HomePage from "./pages/HomePage";
import ChannelPage from "./pages/ChannelPage";
import VideoPage from "./pages/VideoPage";

const routes = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "channel",
    element: <ChannelPage />,
  },
  {
    path: "video",
    element: <VideoPage />,
  },
]);

export default routes;
