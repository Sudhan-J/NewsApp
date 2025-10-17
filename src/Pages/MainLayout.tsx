import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          {/* header her */}
          <Header/>
        </div>
        <div className = "w-full">
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