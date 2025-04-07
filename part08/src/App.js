import './App.css';
import abaBanner from "./images/aba-banner.png";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
        <section id="background-img-banner">
        <img src={abaBanner} alt="aba banner" />
    </section>

    <Carousel />
    </div>
  );
}

export default App;
