import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import WeddingTimeline from "./WeddingTimeline/WeddingTimeline";
import TopNames from "./TopNames/TopNames";
import WhenWhere from "./WhenWhere/WhenWhere";

function App() {
  return (
    <div className="App">
      <TopNames />
      <AboutUs />
      <WeddingTimeline />
    </div>
  );
}

export default App;
