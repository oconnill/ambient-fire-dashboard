export interface Coordinates {
  lat: number;
  lon: number;
}

export interface CurrentWeather {
  tempf: number;
  humidity: number;
  windspeedmph: number;
  windgustmph: number;
  winddir: number;
  uv: number;
  dailyrainin: number;
  feelsLike: number;
  dewPoint: number;
  baromrelin: number;
}

export interface AmbientDevice {
  lastData: CurrentWeather;
  info: {
    name: string;
    coords: {
      coords: Coordinates;
    };
  };
}
export interface Weather {
  tempf: number;
  feelsLike?: number;
  humidity: number;
  winddir: number;
  windspeedmph: number;
  windgustmph: number;
  maxdailygust?: number;
  uv: number;
  solarradiation?: number;
  hourlyrainin: number;
  eventrainin?: number;
  dailyrainin: number;
  weeklyrainin?: number;
  monthlyrainin: number;
  yearlyrainin?: number;
  totalrainin?: number;
  battout?: number;
  tempinf?: number;
  humidityin?: number;
  baromrelin: number;
  baromabsin?: number;
  feelsLikein?: number;
  dewPoint?: number;
  dewPointin?: number;
  lastRain?: string;
}