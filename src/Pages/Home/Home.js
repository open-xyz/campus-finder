import React from "react";
import "./Home.css";
import Hero from "./components/Hero/Hero";
import Ranking from "./Topranking/Topranking";
import SelectCategory from "./components/Category/SelectCategory";
import usePageTitle from '../layout/metaData'
export default function Home() {
   // page title
   const pageTitle="campus-finder"
   usePageTitle(pageTitle)

  return (
    <div className="app">
      <Hero />
      <SelectCategory />
      <Ranking />
    </div>
  );
}
