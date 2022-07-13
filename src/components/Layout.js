import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="content font-merri overflow-x-hidden">{children}</div>
      {/* when adding a componenet to the same componet
       */}
      <Footer />
    </div>
  );
}

export default Layout;
