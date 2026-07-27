import { Temperature } from "./components/Temperature";
import { Humidity } from "./components/Humidity";
import { Wind } from "./components/Wind";
import { Rain } from "./components/Rain";
import { UV } from "./components/UV";
import { Indoor } from "./components/Indoor";
import { Pressure } from "./components/Pressure";
import { Forecast } from "./components/Forecast";
import { Footer } from "./components/Footer";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const { weather, forecast, loading, error } = useWeather();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="wx-screen">
      <header className="wx-header">
        <h1>NAT'L WEATHER SERVICE FORECAST</h1>
      </header>
      <main className="wx-body">
        <Temperature
          temperature={weather?.tempf}
          feelsLike={weather?.feelsLike}
          dewPoint={weather?.dewPoint}
        />
        <div className="wx-grid">
          <Humidity humidity={weather?.humidity} />
          <Wind
            windspeedmph={weather?.windspeedmph}
            windgustmph={weather?.windgustmph}
            winddir={weather?.winddir}
          />
          <Rain
            hourlyrainin={weather?.hourlyrainin}
            dailyrainin={weather?.dailyrainin}
            monthlyrainin={weather?.monthlyrainin}
          />
          <UV uv={weather?.uv} solarradiation={weather?.solarradiation} />
          <Indoor tempinf={weather?.tempinf} humidityin={weather?.humidityin} />
          <Pressure baromrelin={weather?.baromrelin} baromabsin={weather?.baromabsin} />
        </div>
        {forecast ? <Forecast forecast={forecast} /> : null}
      </main>
      <Footer weather={weather} />
    </div>
  );
}