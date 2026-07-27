export async function getWeather() {

  const response = await fetch("/api/weather");

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  return response.json();

}