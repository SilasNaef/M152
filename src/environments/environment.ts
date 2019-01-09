export const environment = {
  production: false,

  mountains: {
    type: 'FeatureCollection',
    features: [
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.005382, 46.577555 ]
     },
     properties: {
     id: 'eig',
     name: 'Eiger',
     el: 3967,
     url: '/e4/pages/eiger.php',
     img: './assets/img/eiger.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates: [ 9.020156, 45.931455 ]
     },
     properties: {
     id: 'mge',
     name: 'Monte Generoso',
     el: 1701,
     url: '/e4/pages/generoso.php',
     img: './assets/img/generoso.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 7.658434, 45.976653 ]
     },
     properties: {
     id: 'mat',
     name: 'Matterhorn',
     el: 4477,
     url: '/e4/pages/matterhorn.php',
     img: './assets/img/matterhorn.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.681283, 46.73697 ]
     },
     properties: {
     id: 'bri',
     name: 'Bristen',
     el: 3073,
     url: '/e4/pages/bristen.php',
     img: './assets/img/bristen.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 7.775339, 46.711302 ]
     },
     properties: {
     id: 'nie',
     name: 'Niederhorn',
     el: 1963,
     url: '/e4/pages/niederhorn.php',
     img: './assets/img/niederhorn.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.908117, 46.382328 ]
     },
     properties: {
     id: 'pbe',
     name: 'Piz Bernina',
     el: 4049,
     url: '/e4/pages/pizbernina.php',
     img: './assets/img/pizbernina.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.485215, 47.056731 ]
     },
     properties: {
     id: 'rig',
     name: 'Rigi',
     el: 1798,
     url: '/e4/pages/rigi.php',
     img: './assets/img/rigi.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.343259, 47.249403 ]
     },
     properties: {
     id: 'san',
     name: 'Säntis',
     el: 2502,
     url: '/e4/pages/santis.php',
     img: './assets/img/santis.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.437769, 46.772067 ]
     },
     properties: {
     id: 'tit',
     name: 'Titlis',
     el: 3238,
     url: '/e4/pages/titlis.php',
     img: './assets/img/titlis.jpg',
     mountainrailway: true
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.914868, 46.811151 ]
     },
     properties: {
     id: 'tod',
     name: 'Tödi',
     el: 3614,
     url: '/e4/pages/todi.php',
     img: './assets/img/todi.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 9.221249, 46.898255 ]
     },
     properties: {
     id: 'tsh',
     name: 'Tschingelhörner',
     el: 2849,
     url: '/e4/pages/tschingelhorner.php',
     img: './assets/img/tschingelhorner.jpg',
     mountainrailway: false
     }
   },
   {
     type: 'Feature',
     geometry: {
        type: 'Point',
        coordinates:  [ 8.49205, 47.349499 ]
     },
     properties: {
     id: 'uet',
     name: 'Uetliberg',
     el: 870,
     url: '/e4/pages/uetliberg.php',
     img: './assets/img/uetliberg.jpg',
     mountainrailway: true
     }
   },
   {
    type: 'Feature',
    geometry: {
       type: 'Point',
       coordinates:  [ 8.988836, 46.992828 ]
    },
    properties: {
    id: 'gla',
    name: 'foo foo',
    el: 2914,
    url: '/e4/pages/glarnisch.php',
    img: './assets/img/glarnisch.jpg',
    mountainrailway: true
    }
  }]},
  clubs: [
    [
      '1001',
      'HC Ambrì Piotta',
      '1937',
      'Luca Cereda',
      'Michele Orsi',
      'Paolo Duca',
      'Valascia',
      '2000',
      '4500',
      'Casella Postale',
      '6775',
      'Ambri',
      'info@hcap.ch',
      'amb-logo.png',
      'ambri-photo.jpg'
    ],
    [
      '1002',
      'SC Bern',
      '1931',
      'Kari Jalonen',
      'Marc Lüthi',
      'Alex Chatelain',
      'PostFinance-Arena',
      '7139',
      '9892',
      'Mingerstrasse 12B',
      '3014',
      'Bern',
      'info@scb.ch',
      'ber-logo.png',
      'bern-photo.jpg'
    ],
    [
      '1003',
      'EHC Biel',
      '1939',
      'Antti Törmänen',
      'Daniel Villard',
      'Martin Steinegger',
      'Tissot Arena',
      '4411',
      '2110',
      'Bahnhofstrasse 17',
      '2501',
      'Biel',
      'hotline@ehcb.ch',
      'bie-logo.png',
      'biel-photo.jpg'
    ],
    [
      '1004',
      'HC Davos',
      '1921',
      '',
      'Gaudenz F. Domenig',
      'René Müller',
      'Vaillant Arena',
      '3395',
      '3400',
      'Eisbahnstrasse 2',
      '7270',
      'Davos Platz',
      'nfo@hcd.ch',
      'dav-logo.png',
      'davos-photo.jpg'
    ],
    [
      '1005',
      'Fribourg-Gottéron',
      '1938',
      'Mark French',
      'Raphaël Berger',
      'Christian Dubé',
      'BCF-Arena',
      '3174',
      '3526',
      'CP 551',
      '1701',
      'Fribourg',
      'office@fribourg-gotteron.ch',
      'fri-logo.png',
      'fribourg-photo.jpg'
      ],
    [
      '1006',
      'Genève-Servette HC',
      '1905',
      'Chris McSorley',
      'Christophe Stuck',
      'Chris McSorley',
      'Les Vernets',
      '4479',
      '2656',
      'Routes des jeunes 10',
      '1227',
      'Genf',
      'nfo@gshc.ch',
      'gen-logo.png',
      'genf-photo.jpg'
    ],
    [
      '1007',
      'SCL Tigers',
      '1946',
      'Heinz Ehlers',
      'Peter Müller',
      'Marco Bayer',
      'Ilfishalle',
      '2943',
      '3107',
      'Güterstrasse 18',
      '3550',
      'Langnau',
      'nfo@scltigers.ch',
      'lan-logo.png',
      'langnau-photo.jpg'
    ],
    [
      '1008',
      'Lausanne HC',
      '1922',
      'Ville Peltonen',
      'Sacha Weibel',
      'Jan Alston',
      'Malley',
      '4610',
      '2090',
      'Case Postale 171',
      '1000',
      'Lausanne',
      'contact@lausannehc.ch',
      'lau-logo.png',
      'lausanne-photo.jpg'
    ],
    [
      '1009',
      'HC Lugano',
      '1941',
      'Greg Ireland',
      'Jean-Jacques Aeschlimann',
      'Roland Habisreutinger',
      'Cornèr Arena',
      '4200',
      '3000',
      'Casella postale 4226',
      '6904',
      'Lugano',
      'sede@hclugano.ch',
      'lug-logo.png',
      'lugano-photo.jpg'
    ],
    [
      '1010',
      'SC Rapperswil-Jona Lakers',
      '1945',
      'Jeff Tomlinson',
      'Markus Bütler',
      'Roger Maier',
      'St. Galler Kantonalbank Arena',
      '4000',
      '2100',
      'Walter-Denzler-Strasse 3',
      '8640',
      'Rapperswil',
      'info@lakers.ch',
      'rap-logo.png',
      'rapperswil-photo.jpg'
    ],
    [
      '1011',
      'ZSC Lions',
      '1930',
      'Serge Aubin',
      'Peter Zahner',
      'Sven Leuenberger',
      'Hallenstadion',
      '11200',
      '0',
      'Siewerdtstrasse 105',
      '8050',
      'Zürich',
      'info@zsclions.ch',
      'zur-logo.png',
      'zuerich-photo.jpg'
    ],
    [
      '1012',
      'EV Zug',
      '1967',
      'Dan Tangnes',
      'Patrick Lengwiler',
      'Reto Kläy',
      'Bossard Arena',
      '4848',
      '2352',
      'Weststrasse 11',
      '6303',
      'Zug',
      'info@evz.ch',
      'zug-logo.png',
      'zug-photo.jpg'
    ]
  ],
  championship: [
    ['1938', 'HC Davos', '1004'],
    ['1939', 'HC Davos', '1004'],
    ['1940', '', ''],
    ['1941', 'HC Davos', '1004'],
    ['1942', 'HC Davos', '1004'],
    ['1943', 'HC Davos', '1004'],
    ['1944', 'HC Davos', '1004'],
    ['1945', 'HC Davos', '1004'],
    ['1946', 'HC Davos', '1004'],
    ['1947', 'HC Davos', '1004'],
    ['1948', 'HC Davos', '1004'],
    ['1949', 'ZSC Lions', '1011'],
    ['1950', 'HC Davos', '1004'],
    ['1951', 'EHC Arosa', '2006'],
    ['1952', 'EHC Arosa', '2006'],
    ['1953', 'EHC Arosa', '2006'],
    ['1954', 'EHC Arosa', '2006'],
    ['1955', 'EHC Arosa', '2006'],
    ['1956', 'EHC Arosa', '2006'],
    ['1957', 'EHC Arosa', '2006'],
    ['1958', 'HC Davos', '1004'],
    ['1959', 'SC Bern', '1002'],
    ['1960', 'HC Davos', '1004'],
    ['1961', 'ZSC Lions', '1011'],
    ['1962', 'EHC Visp', '2004'],
    ['1963', 'HC Villars', '2001'],
    ['1964', 'HC Villars', '2001'],
    ['1965', 'SC Bern', '1002'],
    ['1966', 'GC Zürich', '2003'],
    ['1967', 'EHC Kloten', '2005'],
    ['1968', 'HC La Chaux-de-Fonds', '2002'],
    ['1969', 'HC La Chaux-de-Fonds', '2002'],
    ['1970', 'HC La Chaux-de-Fonds', '2002'],
    ['1971', 'HC La Chaux-de-Fonds', '2002'],
    ['1972', 'HC La Chaux-de-Fonds', '2002'],
    ['1973', 'HC La Chaux-de-Fonds', '2002'],
    ['1974', 'SC Bern', '1002'],
    ['1975', 'SC Bern', '1002'],
    ['1976', 'SCL Tigers', '1007'],
    ['1977', 'SC Bern', '1002'],
    ['1978', 'EHC Biel', '1003'],
    ['1979', 'SC Bern', '1002'],
    ['1980', 'EHC Arosa', '2006'],
    ['1981', 'EHC Biel', '1003'],
    ['1982', 'EHC Arosa', '2006'],
    ['1983', 'EHC Biel', '1003'],
    ['1984', 'HC Davos', '1004'],
    ['1985', 'HC Davos', '1004'],
    ['1986', 'HC Lugano', '1009'],
    ['1987', 'HC Lugano', '1009'],
    ['1988', 'HC Lugano', '1009'],
    ['1989', 'SC Bern', '1002'],
    ['1990', 'HC Lugano', '1009'],
    ['1991', 'SC Bern', '1002'],
    ['1992', 'SC Bern', '1002'],
    ['1993', 'EHC Kloten', '2005'],
    ['1994', 'EHC Kloten', '2005'],
    ['1995', 'EHC Kloten', '2005'],
    ['1996', 'EHC Kloten', '2005'],
    ['1997', 'SC Bern', '1002'],
    ['1998', 'EV Zug', '1012'],
    ['1999', 'HC Lugano', '1009'],
    ['2000', 'ZSC Lions', '1011'],
    ['2001', 'ZSC Lions', '1011'],
    ['2002', 'HC Davos', '1004'],
    ['2003', 'HC Lugano', '1009'],
    ['2004', 'SC Bern', '1002'],
    ['2005', 'HC Davos', '1004'],
    ['2006', 'HC Lugano', '1009'],
    ['2007', 'HC Davos', '1004'],
    ['2008', 'ZSC Lions', '1011'],
    ['2009', 'HC Davos', '1004'],
    ['2010', 'SC Bern', '1002'],
    ['2011', 'HC Davos', '1004'],
    ['2012', 'ZSC Lions', '1011'],
    ['2013', 'SC Bern', '1002'],
    ['2014', 'ZSC Lions', '1011'],
    ['2015', 'HC Davos', '1004'],
    ['2016', 'SC Bern', '1002'],
    ['2017', 'SC Bern', '1002'],
    ['2018', 'ZSC Lions', '1011']
  ]
};
