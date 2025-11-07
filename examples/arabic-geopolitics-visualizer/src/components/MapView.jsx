import React, { useMemo } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { baseMap } from '../data/baseMap.js';

const WIDTH = 900;
const HEIGHT = 540;

export default function MapView({ entities, selectedYear, onSelectEntity }) {
  const projection = useMemo(
    () =>
      geoMercator()
        .center([35, 25])
        .scale(700)
        .translate([WIDTH / 2, HEIGHT / 1.75]),
    []
  );

  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  const annotations = useMemo(() => {
    const windowSize = Math.max(40, Math.round(Math.abs(selectedYear) / 15));

    return entities
      .flatMap((entity) =>
        entity.events
          .filter((event) => Math.abs(event.year - selectedYear) <= windowSize)
          .map((event) => ({
            ...event,
            entityId: entity.id,
          }))
      )
      .slice(0, 6);
  }, [entities, selectedYear]);

  return (
    <div className="map-wrapper">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="Carte historique du monde arabe">
        <defs>
          <radialGradient id="baseGlow" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.15)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.6)" />
          </radialGradient>
        </defs>

        {baseMap.features.map((feature) => (
          <path
            key={feature.properties.name}
            d={pathGenerator(feature)}
            fill="url(#baseGlow)"
            stroke="rgba(148, 163, 184, 0.35)"
            strokeWidth={1.5}
          />
        ))}

        {entities.map((entity) => {
          const { properties } = entity.geometry;
          const centroid = pathGenerator.centroid(entity.geometry);
          return (
            <g key={entity.id}>
              <path
                d={pathGenerator(entity.geometry)}
                fill={properties.fill}
                fillOpacity={0.65}
                stroke="#0f172a"
                strokeWidth={1.2}
                tabIndex={0}
                onMouseEnter={() => onSelectEntity(entity)}
                onFocus={() => onSelectEntity(entity)}
                onClick={() => onSelectEntity(entity)}
              />
              {centroid && (
                <text className="entity-label" x={centroid[0]} y={centroid[1]} textAnchor="middle">
                  {entity.names.ar}
                </text>
              )}
            </g>
          );
        })}

        {annotations.map((event) => {
          const [lon, lat] = event.coordinates;
          const [x, y] = projection([lon, lat]);
          return (
            <g key={`${event.entityId}-${event.year}-${event.label}`}>
              <circle className="annotation-dot" cx={x} cy={y} r={6} />
              <text className="annotation-label" x={x + 10} y={y - 8}>
                {event.year < 0 ? `${Math.abs(event.year)} av. J.-C.` : event.year}: {event.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
