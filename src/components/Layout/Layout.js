import { Box } from "@chakra-ui/react";
import Categories from "./Categories";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Categories />
      <Box margin='80px auto' as='main' maxW='1300px'>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
