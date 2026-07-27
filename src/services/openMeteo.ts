export async function getForecast(
  lat: number,
  lon: number
) {

  const url = new URL(
    "https://api.open-meteo.com/v1/forecast"
  );


  url.searchParams.set(
    "latitude",
    lat.toString()
  );

  url.searchParams.set(
    "longitude",
    lon.toString()
  );


  url.searchParams.set(
    "temperature_unit",
    "fahrenheit"
  );


  url.searchParams.set(
    "timezone",
    "auto"
  );


  url.searchParams.set(
    "daily",
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "sunrise",
      "sunset"
    ].join(",")
  );


  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Open Meteo failed");
  }


  return response.json();
}