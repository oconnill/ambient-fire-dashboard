interface Props {
  windspeedmph?: number;
  windgustmph?: number;
  winddir?: number;
}

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

export function Wind({ windspeedmph, windgustmph, winddir }: Props) {
  if (windspeedmph === undefined || winddir === undefined) {
    return <div className="wx-tile">Wind: -- mph</div>;
  }

  return (
    <div className="wx-tile">
      <div className="wx-label">Wind</div>
      <div className="wx-value">
        {Math.round(windspeedmph)} mph {getWindDirection(winddir)}
      </div>
      <div className="wx-subvalue">Gust {windgustmph ? Math.round(windgustmph) : "--"} mph</div>
    </div>
  );
}
