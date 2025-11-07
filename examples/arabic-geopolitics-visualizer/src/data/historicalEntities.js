export const historicalEntities = [
  {
    id: 'dilmun',
    names: {
      ar: 'حضارة دلمون',
      latin: 'Dilmun',
    },
    start: -1000,
    end: -600,
    region: 'Golfe Persique',
    era: 'Antiquité',
    capital: 'Qalʿat al-Bahreïn',
    area: '200 000 km² (approx.)',
    population: '≈ 50 000 habitants',
    summary:
      "Centre commercial reliant la Mésopotamie et la vallée de l'Indus, situé dans l'actuel Bahreïn.",
    source: 'https://www.britannica.com/place/Dilmun',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [50.2, 26.5],
            [50.8, 26.5],
            [50.8, 25.6],
            [50.2, 25.6],
            [50.2, 26.5],
          ],
        ],
      },
      properties: {
        fill: '#38bdf8',
      },
    },
    events: [
      {
        year: -650,
        label: 'Rôle de relais maritime',
        description:
          "Dilmun devient une étape clé des échanges entre la Mésopotamie et la vallée de l'Indus.",
        coordinates: [50.5, 26.1],
      },
    ],
  },
  {
    id: 'sheba',
    names: {
      ar: 'مملكة سبأ',
      latin: 'Royaume de Saba',
    },
    start: -800,
    end: -275,
    region: 'Péninsule Arabique',
    era: 'Antiquité',
    capital: 'Marib',
    area: '350 000 km² (approx.)',
    population: '≈ 300 000 habitants',
    summary:
      'Royaume sud-arabique prospère basé sur le commerce de la myrrhe et de l’encens.',
    source: 'https://www.britannica.com/place/Saba-people',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [43, 17.5],
            [48, 17.5],
            [48, 13],
            [43, 13],
            [43, 17.5],
          ],
        ],
      },
      properties: {
        fill: '#22d3ee',
      },
    },
    events: [
      {
        year: -575,
        label: 'Construction du barrage de Marib',
        description:
          'Ouvrage hydrauliqe majeur qui assure la prospérité agricole du royaume.',
        coordinates: [45.2, 15.5],
      },
    ],
  },
  {
    id: 'rashidun',
    names: {
      ar: 'الخلافة الراشدة',
      latin: 'Califat Rachidun',
    },
    start: 632,
    end: 661,
    region: 'Péninsule Arabique',
    era: 'Premiers califats',
    capital: 'Médine puis Koufa',
    area: '6 000 000 km² (approx.)',
    population: '≈ 18 millions',
    summary:
      'Premier califat islamique unifiant la majeure partie de la péninsule arabique et lançant des conquêtes rapides.',
    source: 'https://www.britannica.com/place/Rashidun-caliphate',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [34, 33],
            [50, 33],
            [58, 24],
            [56, 13],
            [46, 12],
            [38, 16],
            [34, 21],
            [34, 33],
          ],
        ],
      },
      properties: {
        fill: '#f97316',
      },
    },
    events: [
      {
        year: 636,
        label: 'Bataille d’al-Yarmouk',
        description: 'Victoire décisive sur l’Empire byzantin ouvrant la voie au contrôle du Levant.',
        coordinates: [36.1, 32.7],
      },
      {
        year: 640,
        label: 'Conquête de l’Égypte',
        description: 'Amr ibn al-As conquiert l’Égypte, offrant au califat une façade méditerranéenne.',
        coordinates: [30.8, 30.0],
      },
    ],
  },
  {
    id: 'umayyad',
    names: {
      ar: 'الخلافة الأموية',
      latin: 'Califat Omeyyade',
    },
    start: 661,
    end: 750,
    region: 'Levant',
    era: 'Premiers califats',
    capital: 'Damas',
    area: '11 100 000 km² (approx.)',
    population: '≈ 25 millions',
    summary:
      'Expansion maximale du monde arabe vers l’Espagne et l’Asie centrale sous un pouvoir centralisé à Damas.',
    source: 'https://www.britannica.com/place/Umayyad-dynasty',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [10, 37],
            [35, 37],
            [58, 32],
            [58, 20],
            [30, 12],
            [10, 20],
            [10, 37],
          ],
        ],
      },
      properties: {
        fill: '#ef4444',
      },
    },
    events: [
      {
        year: 711,
        label: 'Entrée en al-Andalus',
        description: 'Tariq ibn Ziyad traverse Gibraltar et amorce la présence musulmane en Ibérie.',
        coordinates: [-5.3, 36.1],
      },
    ],
  },
  {
    id: 'abbasid',
    names: {
      ar: 'الخلافة العباسية',
      latin: 'Califat Abbasside',
    },
    start: 750,
    end: 1258,
    region: 'Mésopotamie',
    era: 'Moyen Âge',
    capital: 'Bagdad',
    area: '8 000 000 km² (approx.)',
    population: '≈ 30 millions',
    summary:
      'Âge d’or de la civilisation islamique, marqué par un rayonnement scientifique et culturel.',
    source: 'https://www.britannica.com/place/Abbasid-dynasty',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [12, 37],
            [33, 37],
            [56, 33],
            [56, 20],
            [40, 15],
            [18, 22],
            [12, 30],
            [12, 37],
          ],
        ],
      },
      properties: {
        fill: '#a855f7',
      },
    },
    events: [
      {
        year: 762,
        label: 'Fondation de Bagdad',
        description: 'Al-Mansur fonde la « Cité ronde » qui devient capitale du califat.',
        coordinates: [44.4, 33.4],
      },
      {
        year: 830,
        label: 'Maison de la sagesse',
        description:
          'Institution savante abritant traducteurs, scientifiques et philosophes de tout le monde islamique.',
        coordinates: [44.4, 33.3],
      },
    ],
  },
  {
    id: 'fatimid',
    names: {
      ar: 'الدولة الفاطمية',
      latin: 'Califat Fatimide',
    },
    start: 909,
    end: 1171,
    region: 'Maghreb',
    era: 'Moyen Âge',
    capital: 'Mahdia puis Le Caire',
    area: '4 100 000 km² (approx.)',
    population: '≈ 15 millions',
    summary:
      'Dynastie chiite ismaélienne contrôlant le Maghreb et l’Égypte et fondant Le Caire.',
    source: 'https://www.britannica.com/topic/Fatimid-dynasty',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-10, 37],
            [30, 37],
            [30, 24],
            [10, 20],
            [-10, 28],
            [-10, 37],
          ],
        ],
      },
      properties: {
        fill: '#facc15',
      },
    },
    events: [
      {
        year: 969,
        label: 'Fondation du Caire',
        description: 'Jawhar al-Siqilli fonde al-Qahira, future capitale fatimide.',
        coordinates: [31.2, 30.1],
      },
    ],
  },
  {
    id: 'ottoman',
    names: {
      ar: 'الدولة العثمانية',
      latin: 'Empire ottoman',
    },
    start: 1517,
    end: 1918,
    region: 'Empire Ottoman',
    era: 'Période moderne',
    capital: 'Istanbul',
    area: '5 200 000 km² (territoires arabes)',
    population: '≈ 25 millions',
    summary:
      'Intégration de la majorité des provinces arabes à l’Empire ottoman après la conquête mamelouke.',
    source: 'https://www.britannica.com/place/Ottoman-Empire',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-6, 37],
            [36, 37],
            [50, 35],
            [56, 22],
            [30, 12],
            [10, 12],
            [-6, 25],
            [-6, 37],
          ],
        ],
      },
      properties: {
        fill: '#3b82f6',
      },
    },
    events: [
      {
        year: 1798,
        label: 'Campagne d’Égypte',
        description: 'Expédition française de Bonaparte qui révèle les faiblesses de la domination ottomane.',
        coordinates: [30.0, 30.8],
      },
      {
        year: 1861,
        label: 'Réformes tanzimat dans les provinces arabes',
        description: 'Modernisation administrative et juridique touchant Syrie, Irak et Égypte.',
        coordinates: [36.3, 33.5],
      },
    ],
  },
  {
    id: 'arab-league',
    names: {
      ar: 'جامعة الدول العربية',
      latin: 'Ligue arabe',
    },
    start: 1945,
    end: 2024,
    region: 'Monde arabe',
    era: 'Époque contemporaine',
    capital: 'Le Caire',
    area: '13 000 000 km² (États membres)',
    population: '≈ 450 millions',
    summary:
      'Organisation régionale regroupant 22 États arabes visant la coopération politique et économique.',
    source: 'https://www.lasportal.org/',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-17, 37],
            [60, 37],
            [60, 10],
            [-17, 10],
            [-17, 37],
          ],
        ],
      },
      properties: {
        fill: '#10b981',
      },
    },
    events: [
      {
        year: 1967,
        label: 'Sommet de Khartoum',
        description: 'Déclaration des « trois non » après la guerre des Six Jours.',
        coordinates: [32.5, 15.6],
      },
      {
        year: 2002,
        label: 'Initiative de paix arabe',
        description: 'Proposition saoudienne pour une paix globale au Moyen-Orient.',
        coordinates: [46.7, 24.7],
      },
    ],
  },
  {
    id: 'saudi',
    names: {
      ar: 'المملكة العربية السعودية',
      latin: 'Royaume d’Arabie saoudite',
    },
    start: 1932,
    end: 2024,
    region: 'Golfe Persique',
    era: 'Époque contemporaine',
    capital: 'Riyad',
    area: '2 150 000 km²',
    population: '≈ 36 millions',
    summary:
      'Unification de la péninsule sous la dynastie saoudienne et puissance pétrolière majeure.',
    source: 'https://www.britannica.com/place/Saudi-Arabia',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [34, 32],
            [39, 32],
            [55, 29],
            [56, 17],
            [50, 12],
            [38, 16],
            [34, 21],
            [34, 32],
          ],
        ],
      },
      properties: {
        fill: '#f59e0b',
      },
    },
    events: [
      {
        year: 1938,
        label: 'Découverte du pétrole à Dammam',
        description: 'Débuts de l’exploitation pétrolière qui transforme l’économie du pays.',
        coordinates: [50.1, 26.4],
      },
    ],
  },
  {
    id: 'modern-magreb',
    names: {
      ar: 'المغرب العربي',
      latin: 'États du Maghreb',
    },
    start: 1956,
    end: 2024,
    region: 'Maghreb',
    era: 'Époque contemporaine',
    capital: 'Capitales multiples',
    area: '3 500 000 km²',
    population: '≈ 105 millions',
    summary:
      'Indépendance progressive du Maroc, de l’Algérie, de la Tunisie, de la Libye et de la Mauritanie.',
    source: 'https://www.britannica.com/place/Maghreb',
    geometry: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-17, 37],
            [10, 37],
            [10, 28],
            [-9, 24],
            [-17, 20],
            [-17, 37],
          ],
        ],
      },
      properties: {
        fill: '#4ade80',
      },
    },
    events: [
      {
        year: 1956,
        label: 'Indépendance du Maroc et de la Tunisie',
        description:
          'Fin du protectorat français et émergence de nouveaux États dans le Maghreb occidental.',
        coordinates: [-6.8, 33.9],
      },
      {
        year: 1962,
        label: 'Indépendance de l’Algérie',
        description: 'Accords d’Évian mettant fin à la guerre d’Algérie.',
        coordinates: [3.0, 36.7],
      },
    ],
  },
];

export const regions = [
  'Toutes les régions',
  'Péninsule Arabique',
  'Golfe Persique',
  'Levant',
  'Maghreb',
  'Mésopotamie',
  'Empire Ottoman',
  'Monde arabe',
];

export const eras = [
  'Toutes les périodes',
  'Antiquité',
  'Premiers califats',
  'Moyen Âge',
  'Période moderne',
  'Époque contemporaine',
];
