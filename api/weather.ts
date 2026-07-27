import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const ambientResponse = await fetch(
      `https://api.ambientweather.net/v1/devices?apiKey=${process.env.AMBIENT_API_KEY}&applicationKey=${process.env.AMBIENT_APPLICATION_KEY}`
    );

    const devices = await ambientResponse.json();

    console.log("Ambient response:", JSON.stringify(devices, null, 2));

    const device = devices[0];

    const current = device.lastData;

    const coords = device.info.coords.coords;

    const forecastResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&temperature_unit=fahrenheit&timezone=auto&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
    );

    const forecast = await forecastResponse.json();

    console.log("Forecast response:", JSON.stringify(forecast, null, 2));


    res.setHeader(
      "Cache-Control",
      "s-maxage=300, stale-while-revalidate"
    );


    res.status(200).json({
      location: device.info.name,
      current,
      forecast
    });

  } catch (error) {
  console.error(error);

  res.status(500).json({
    error: error instanceof Error 
      ? error.message 
      : "Unknown error"
  });
}
}