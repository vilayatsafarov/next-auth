import Head from "next/head";
import Layout from "../Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import AOS from 'aos'
import React from 'react';

import { useEffect } from "react";
function Home() {
  const { t } = useTranslation();

  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  })

  return (
    <Layout>
      <Head>
        <title>Gamboo || Home</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Head>
      <div data-aos={"fade-right"} className=" h-[63vh] flex justify-center items-center">
        <div className="w-full lg:w-1/2 px-16  text-left">
          <h2 className=" tracking-[2px] text-[40px] font-bold">
            {t("common:bit")}
          </h2>
          {t("common:me")}
        </div>
      </div>
    </Layout>
  );
}
export default React.memo(Home);
