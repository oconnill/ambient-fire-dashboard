interface Props {
  humidity?: number;
}

export function Humidity({ humidity }: Props) {
  if (humidity === undefined) {
    return <div className="wx-tile">Humidity: --%</div>;
  }

  return (
    <div className="wx-tile">
      <div className="wx-label">Humidity</div>
      <div className="wx-value">{Math.round(humidity)}%</div>
    </div>
  );
}
