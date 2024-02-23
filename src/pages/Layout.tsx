import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Box justifyContent="space-between">
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
