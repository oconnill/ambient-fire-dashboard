interface Props {
  baromrelin?: number;
  baromabsin?: number;
}

export function Pressure({ baromrelin, baromabsin }: Props) {
  return (
    <div className="wx-tile">
      <div className="wx-label">Pressure</div>
      <div className="wx-value">{baromrelin !== undefined ? baromrelin.toFixed(2) : "--"} in</div>
      <div className="wx-subvalue">
        Abs {baromabsin !== undefined ? baromabsin.toFixed(2) : "--"} in
      </div>
    </div>
  );
}
