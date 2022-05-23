import Head from "next/head";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../atoms/Header";
function Layout(props) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem("id") === null ||
        localStorage.getItem("id") === "undefined"
      ) {
        router.pathname === "/dashboard" && router.push("/login");
      }
    } else {
      console.log("Hello brother");
    }
    document.body.oncontextmenu = function () {
      return false;
    };
    document.onselectstart = function (e) {
      return false;
    };
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == 85) {
        return false;
      }
    };
  });

  return (
    <div className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {router.pathname === "/dashboard" ? (
        console.log(" This is Dashboard")
      ) : (
        <>
          <Header auth={props.auth} />
          <Navbar />
        </>
      )}
      {props.children}
      {router.pathname === "/dashboard" ? (
        console.log(" This is Dashboard")
      ) : (
        <>
          <Fotter />
        </>
      )}
    </div>
  );
}

export default React.memo(Layout);
