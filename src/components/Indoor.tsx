interface Props {
  tempinf?: number;
  humidityin?: number;
}

export function Indoor({ tempinf, humidityin }: Props) {
  return (
    <div className="wx-tile">
      <div className="wx-label">Indoor</div>
      <div className="wx-value">{tempinf !== undefined ? Math.round(tempinf) : "--"}°</div>
      <div className="wx-subvalue">
        Humidity {humidityin !== undefined ? Math.round(humidityin) : "--"}%
      </div>
    </div>
  );
}
