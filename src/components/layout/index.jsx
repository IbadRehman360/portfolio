 import Footer from "./footer";
import Header from "./header";

function LayoutComponent({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
