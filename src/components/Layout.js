import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
