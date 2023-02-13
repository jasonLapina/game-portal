import Categories from "./Categories";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Categories />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
