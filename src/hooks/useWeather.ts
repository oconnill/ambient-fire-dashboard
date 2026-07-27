import { useEffect, useState } from "react";
import { getWeather } from "../services/ambient";
import { weatherCodeToText } from "../helpers/weatherCodeToText";
import type { ForecastDay } from "../types/forecast.ts";
import type { Weather } from "../types/weather";

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getWeather();

        if (!ignore) {
          // API returns { location, current, forecast }
          if (data && typeof data === "object" && "current" in data) {
            setWeather(data.current ?? null);
            setLocation(data.location ?? null);

            const rawForecast = data.forecast;
            if (
              rawForecast &&
              rawForecast.daily &&
              Array.isArray(rawForecast.daily.time) &&
              Array.isArray(rawForecast.daily.temperature_2m_max) &&
              Array.isArray(rawForecast.daily.temperature_2m_min) &&
              Array.isArray(rawForecast.daily.precipitation_probability_max) &&
              Array.isArray(rawForecast.daily.weather_code)
            ) {
              const forecastDays: ForecastDay[] = rawForecast.daily.time.map(
                (date: string, index: number) => ({
                  date,
                  label: new Date(date).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  }),
                  high: Math.round(rawForecast.daily.temperature_2m_max[index]),
                  low: Math.round(rawForecast.daily.temperature_2m_min[index]),
                  precipitationChance: Math.round(rawForecast.daily.precipitation_probability_max[index]),
                  condition: weatherCodeToText(rawForecast.daily.weather_code[index]),
                })
              );
              setForecast(forecastDays);
            } else {
              setForecast(null);
            }
          } else {
            // fallback for older service shape
            setWeather(data ?? null);
          }
        }
      } catch (err) {
        console.error(err);

        if (!ignore) {
          setError("Unable to load weather.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    weather,
    location,
    forecast,
    loading,
    error,
  };
}