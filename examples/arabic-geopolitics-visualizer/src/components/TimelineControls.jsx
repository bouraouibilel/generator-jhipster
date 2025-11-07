import React from 'react';

const increments = [25, 50, 100];

export default function TimelineControls({
  selectedYear,
  onYearChange,
  step,
  onStepChange,
  minYear,
  maxYear,
}) {
  return (
    <div className="controls">
      <label>
        Année sélectionnée
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={selectedYear}
          step={step}
          onChange={(event) => onYearChange(Number(event.target.value))}
        />
        <strong>{selectedYear < 0 ? `${Math.abs(selectedYear)} av. J.-C.` : `${selectedYear} apr. J.-C.`}</strong>
      </label>

      <label>
        Incrément temporel
        <select value={step} onChange={(event) => onStepChange(Number(event.target.value))}>
          {increments.map((value) => (
            <option key={value} value={value}>
              {value} ans
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
