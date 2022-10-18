import Weatherblock from "./components/Weatherblock";
import CurrentWeather from "./components/CurrentWeather";
import './App.scss'
function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <div className="hourlyWeather">
        <Weatherblock type={0} />
        <Weatherblock type={0} />
        <Weatherblock type={0} />
        <Weatherblock type={0} />
        <Weatherblock type={0} />
        <Weatherblock type={0} />
        <Weatherblock type={0} />
      </div>
      <div className="dailyWeather">
        <Weatherblock type={1} />
        <Weatherblock type={1} />
        <Weatherblock type={1} />
        <Weatherblock type={1} />
        <Weatherblock type={1} />
        <Weatherblock type={1} />
        <Weatherblock type={1} />
      </div>
    </div>
  );
}

export default App;
