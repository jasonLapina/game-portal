import { Box } from "@chakra-ui/react";
import Categories from "./Categories";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Categories />
      <Box margin='56px auto' as='main' maxW='1300px'>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
