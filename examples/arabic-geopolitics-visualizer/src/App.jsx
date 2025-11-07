import React, { useEffect, useMemo, useState } from 'react';
import TimelineControls from './components/TimelineControls.jsx';
import MapView from './components/MapView.jsx';
import InfoPanel from './components/InfoPanel.jsx';
import { historicalEntities, regions, eras } from './data/historicalEntities.js';

const MIN_YEAR = -1000;
const MAX_YEAR = 2024;

export default function App() {
  const [selectedYear, setSelectedYear] = useState(632);
  const [step, setStep] = useState(50);
  const [regionFilter, setRegionFilter] = useState('Toutes les régions');
  const [eraFilter, setEraFilter] = useState('Toutes les périodes');
  const [selectedEntity, setSelectedEntity] = useState(null);

  const filteredEntities = useMemo(() => {
    return historicalEntities.filter((entity) => {
      const matchesYear = entity.start <= selectedYear && entity.end >= selectedYear;
      const matchesRegion =
        regionFilter === 'Toutes les régions' || entity.region === regionFilter;
      const matchesEra = eraFilter === 'Toutes les périodes' || entity.era === eraFilter;
      return matchesYear && matchesRegion && matchesEra;
    });
  }, [selectedYear, regionFilter, eraFilter]);

  const legendItems = useMemo(() => {
    const uniques = new Map();
    filteredEntities.forEach((entity) => {
      const key = entity.era;
      if (!uniques.has(key)) {
        uniques.set(key, {
          era: entity.era,
          color: entity.geometry.properties.fill,
        });
      }
    });
    return Array.from(uniques.values());
  }, [filteredEntities]);

  useEffect(() => {
    if (!selectedEntity || !filteredEntities.some((entity) => entity.id === selectedEntity.id)) {
      setSelectedEntity(filteredEntities[0] ?? null);
    }
  }, [filteredEntities, selectedEntity]);

  useEffect(() => {
    const min = Math.max(MIN_YEAR, selectedYear - step);
    const max = Math.min(MAX_YEAR, selectedYear + step);
    if (selectedEntity && (selectedEntity.end < min || selectedEntity.start > max)) {
      setSelectedEntity(null);
    }
  }, [selectedYear, step, selectedEntity]);

  return (
    <div className="app-container">
      <main className="main-panel">
        <section className="map-panel">
          <div className="map-header">
            <div>
              <h1>Évolution géopolitique du monde arabe</h1>
              <p>
                Explorez deux millénaires d’histoire pour comprendre la fluidité des frontières et des
                pouvoirs du monde arabe.
              </p>
            </div>
            <div className="select-group">
              <label>
                Région
                <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Période
                <select value={eraFilter} onChange={(event) => setEraFilter(event.target.value)}>
                  {eras.map((era) => (
                    <option key={era} value={era}>
                      {era}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <TimelineControls
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            step={step}
            onStepChange={setStep}
            minYear={MIN_YEAR}
            maxYear={MAX_YEAR}
          />

          {legendItems.length > 0 && (
            <div className="legend" aria-label="Légende des entités visibles">
              {legendItems.map((item) => (
                <span key={item.era} className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: item.color }} />
                  {item.era}
                </span>
              ))}
            </div>
          )}

          <MapView
            entities={filteredEntities}
            selectedYear={selectedYear}
            onSelectEntity={setSelectedEntity}
          />
        </section>
      </main>

      <InfoPanel
        selectedYear={selectedYear}
        selectedEntity={selectedEntity}
        activeEntities={filteredEntities}
      />
    </div>
  );
}
