import React from "react";
import "./Home.css";
import Hero from "./components/Hero/Hero";
import Ranking from "./Topranking/Topranking";
import SelectCategory from "./components/Category/SelectCategory";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <SelectCategory />
      <Ranking />
    </div>
  );
}
