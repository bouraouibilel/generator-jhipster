import React, { useMemo } from 'react';

export default function InfoPanel({ selectedYear, selectedEntity, activeEntities }) {
  const visibleEntities = useMemo(
    () =>
      [...activeEntities].sort((a, b) => (a.start ?? 0) - (b.start ?? 0)),
    [activeEntities]
  );

  return (
    <aside className="info-panel">
      <header>
        <h2>Informations {selectedYear < 0 ? `${Math.abs(selectedYear)} av. J.-C.` : `${selectedYear}`}</h2>
        <p>
          Survolez ou touchez une entité politique pour consulter ses détails, sa capitale et des
          ressources complémentaires.
        </p>
      </header>

      {selectedEntity ? (
        <section className="info-card" aria-live="polite">
          <strong>
            {selectedEntity.names.latin} — {selectedEntity.names.ar}
          </strong>
          <span>
            <strong>Période :</strong> {formatYear(selectedEntity.start)} → {formatYear(selectedEntity.end)}
          </span>
          <span>
            <strong>Capitale :</strong> {selectedEntity.capital}
          </span>
          <span>
            <strong>Population :</strong> {selectedEntity.population}
          </span>
          <span>
            <strong>Superficie :</strong> {selectedEntity.area}
          </span>
          <p>{selectedEntity.summary}</p>
          <a href={selectedEntity.source} target="_blank" rel="noreferrer">
            Consulter la source
          </a>
        </section>
      ) : (
        <section className="info-card">
          <strong>Explorer la chronologie</strong>
          <p>
            Utilisez le curseur temporel et les filtres pour visualiser l’évolution des frontières et
            des pouvoirs dans le monde arabe.
          </p>
        </section>
      )}

      <section>
        <h3>Entités actives</h3>
        <div className="event-list">
          {visibleEntities.length === 0 && <span>Aucune entité enregistrée pour cette période.</span>}
          {visibleEntities.map((entity) => (
            <article key={entity.id} className="event-item">
              <strong>{entity.names.latin}</strong>
              <span>{entity.names.ar}</span>
              <span>
                {formatYear(entity.start)} → {formatYear(entity.end)}
              </span>
              <span>{entity.region} · {entity.era}</span>
            </article>
          ))}
        </div>
      </section>

      {selectedEntity && selectedEntity.events?.length > 0 && (
        <section>
          <h3>Événements clés</h3>
          <div className="event-list">
            {selectedEntity.events.map((event) => (
              <article key={`${selectedEntity.id}-${event.year}`} className="event-item">
                <strong>{event.label}</strong>
                <span>{formatYear(event.year)}</span>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}

function formatYear(year) {
  return year < 0 ? `${Math.abs(year)} av. J.-C.` : `${year}`;
}
