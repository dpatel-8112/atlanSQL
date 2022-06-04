import React from "react";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* <div>AtlanSQL | Run Your Queries here !!!</div> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
