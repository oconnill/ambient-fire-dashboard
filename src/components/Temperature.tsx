interface Props {
  temperature?: number;
  feelsLike?: number;
  dewPoint?: number;
}

export function Temperature({ temperature, feelsLike, dewPoint }: Props) {
  if (temperature === undefined) {
    return (
      <div className="wx-tile wx-large-tile">
        <div className="wx-label">Temperature</div>
        <div className="wx-value-large">--°</div>
      </div>
    );
  }

  return (
    <div className="wx-tile wx-large-tile">
      <div className="wx-label">Temperature</div>
      <div className="wx-value-large">{Math.round(temperature)}°</div>
      <div className="wx-subvalue">
        Feels like {feelsLike !== undefined ? Math.round(feelsLike) : "--"}°
      </div>
      <div className="wx-subvalue">
        Dew point {dewPoint !== undefined ? Math.round(dewPoint) : "--"}°
      </div>
    </div>
  );
}