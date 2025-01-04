import { Outlet } from "react-router-dom";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
