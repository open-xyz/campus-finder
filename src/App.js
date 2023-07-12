import "./App.css";
import SelectCategory from "./components/Category/SelectCategory";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <div>
        <Hero />
      </div>
      <SelectCategory/>
    </div>
  );
}

export default App;
