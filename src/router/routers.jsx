import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: (<Home />),
//       },
//       {
//         path: '/aboutUs',
//         element: (<AboutUs />)
//       },
//       {
//         path:"/contactUs",
//         element:(<Contact/>)
//       }
//     ],
//   },
// ],
//   {
//     basename: "/Twwir2/",
//   }
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/contactUs", element: <Contact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
