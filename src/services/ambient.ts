export async function getWeather() {

  const response = await fetch("/api/weather");

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Weather request failed: ${response.status} - ${body.slice(0,200)}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const body = await response.text().catch(() => "");
    throw new Error(`Expected JSON response but received: ${body.slice(0,200)}`);
  }

  return response.json();

}