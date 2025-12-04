import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          {/* header her */}
          <Header/>
        </div>
        <div className = "flex-1">
          {/* main content here */}
          <Outlet></Outlet>
        </div>
        <div>
          {/* footer here */}
          <Footer/>
        </div>
      </div>
    </>
  );
}