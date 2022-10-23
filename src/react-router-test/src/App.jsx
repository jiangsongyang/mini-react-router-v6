import "./App.css";
import { BrowserRouter, Routes, Route } from "../../";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <div>this is home</div>;
}
function About() {
  return <div>this is About</div>;
}

export default App;
