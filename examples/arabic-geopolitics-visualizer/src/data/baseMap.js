export const baseMap = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Afrique du Nord' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-25, 38],
            [10, 38],
            [10, 10],
            [-25, 10],
            [-25, 38],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Moyen-Orient' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [10, 40],
            [65, 40],
            [65, 10],
            [10, 10],
            [10, 40],
          ],
        ],
      },
    },
  ],
};
