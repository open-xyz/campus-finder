import "./App.css";
import SelectCategory from "./components/Category/SelectCategory";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* tera hero section ko sahi kar problem de raha hai responsiveness mein chahiya toh ek bar comment kar ka dekh le */}
      <Hero />
      <SelectCategory/>  
    </div>
  );
}

export default App;
