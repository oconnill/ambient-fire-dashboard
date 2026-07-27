import { useEffect, useState } from "react";
import type { Weather } from "../../types/weather";

const windDirections = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];

function getWindDirection(deg: number) {
  const index = Math.floor((deg + 11.25) / 22.5) % windDirections.length;
  return windDirections[index];
}

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

interface Props {
  weather?: Weather | null;
}

export function Footer({ weather }: Props) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="wx-footer">
      <div className="wx-row">
        <span>{formatDate(now)}</span>
        <span className="wx-clock wx-blink ">{formatTime(now)}</span>
      </div>
      <div className="wx-readout">
        <span>WIND</span>
        <span className="wx-readout-value">
          {weather
            ? `${Math.round(weather.windspeedmph)} mph ${getWindDirection(weather.winddir)}`
            : "-- mph"}
        </span>
        <span>{weather ? `GUST ${Math.round(weather.windgustmph)} mph` : ""}</span>
      </div>
    </footer>
  );
}

