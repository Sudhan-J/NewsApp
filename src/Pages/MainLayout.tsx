import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
        <div className="flex flex-col">
            <div>
                {/* header her */}
                Header
            </div>
            <div>
                {/* main content here */}
                <Outlet></Outlet>
            </div>
            <div>
                {/* footer here */}
                Footer
            </div>
        </div>
        </>
    );
}