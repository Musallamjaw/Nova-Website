import { Outlet } from "react-router-dom";
import Navbar from "../organism/Navbar";
export default function RootLayout() {
  return (
    <div className=" relative ">
      <Navbar/>
      <Outlet />
    </div>
  );
}
