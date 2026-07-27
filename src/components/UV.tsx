interface Props {
  uv?: number;
  solarradiation?: number;
}

export function UV({ uv, solarradiation }: Props) {
  return (
    <div className="wx-tile">
      <div className="wx-label">UV</div>
      <div className="wx-value">{uv !== undefined ? uv : "--"}</div>
      <div className="wx-subvalue">
        Solar {solarradiation !== undefined ? Math.round(solarradiation) : "--"}
      </div>
    </div>
  );
}
