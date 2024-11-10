import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-10">
      <Outlet />
    </div>
  );
};

export default RootLayout;
