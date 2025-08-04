import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      {/* Other components and layout structure can be added here */}
      <Outlet />
      {/* You can include your ColorModeSelect component here if needed */}
    </>
  );
}