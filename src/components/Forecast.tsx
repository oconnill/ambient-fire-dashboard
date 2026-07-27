import type { ForecastDay } from "../types/forecast.ts";

export type ForecastProps = {
  forecast: ForecastDay[];
};

export function Forecast({ forecast }: ForecastProps) {
  return (
    <div className="forecast">
      {forecast.map((day) => (
        <div key={day.date} className="forecast-card">
          <h3>{day.label}</h3>
          <p>{day.condition}</p>
          <p>
            {day.high}°
            {" / "}
            {day.low}°
          </p>
          <p>{day.precipitationChance}% rain</p>
        </div>
      ))}
    </div>
  );
}
