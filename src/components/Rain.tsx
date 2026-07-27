interface Props {
  hourlyrainin?: number;
  dailyrainin?: number;
  monthlyrainin?: number;
}

export function Rain({ hourlyrainin, dailyrainin, monthlyrainin }: Props) {
  return (
    <div className="wx-tile">
      <div className="wx-label">Rain</div>
      <div className="wx-value">{hourlyrainin !== undefined ? hourlyrainin.toFixed(2) : "--"} in/hr</div>
      <div className="wx-subvalue">
        Day {dailyrainin !== undefined ? dailyrainin.toFixed(2) : "--"} in
      </div>
      <div className="wx-subvalue">
        Month {monthlyrainin !== undefined ? monthlyrainin.toFixed(2) : "--"} in
      </div>
    </div>
  );
}
