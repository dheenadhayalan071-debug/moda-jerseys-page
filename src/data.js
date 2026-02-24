// src/data.js

export const categories = [
  { 
    id: 'retro', 
    name: 'Retro Kits', 
    image: 'https://i.ibb.co/1fhSty2p/1000370961-removebg-preview.png' // Messi Cover
  },
  { 
    id: 'basketball', 
    name: 'NBA Swingman', 
    image: 'https://i.ibb.co/SwzCnBkj/1000371139-removebg-preview.png' // Celtics Cover
  },
  { 
    id: 'collar', 
    name: 'Streetwear Collar', 
    image: 'https://i.ibb.co/S4bNLysS/1000371125-removebg-preview.png' // Saint Black Cover
  },
  { 
    id: 'ferrari', 
    name: 'Ferrari Special', 
    image: 'https://i.ibb.co/99t1LpGS/1000371094-removebg-preview.png' // Ferrari Cover
  },
];

export const products = [
  // --- HERO ITEM (The "Hot Deal") ---
  {
    id: 1,
    name: 'Argentina Messi #10 (World Cup Ed.)',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/dwWhWfsy/1000370963-removebg-preview.png', // FRONT
      'https://i.ibb.co/1fhSty2p/1000370961-removebg-preview.png'  // PASTE BACK IMAGE HERE
    ],
    isHot: true, 
  },

  // --- FERRARI ---
  {
    id: 2,
    name: 'Scuderia Ferrari Racing Tee',
    price: 349,
    category: 'ferrari',
    images: [
      'https://i.ibb.co/v4K0tt9V/1000371091-removebg-preview.png',
      'https://i.ibb.co/99t1LpGS/1000371094-removebg-preview.png' // PASTE BACK IMAGE HERE
    ],
    isHot: false,
  },

  // --- RETRO KITS (Price 349) ---
  {
    id: 3,
    name: 'Inter Milan Figo #7',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/XrVJnMwt/1000371167-removebg-preview.png',
      'https://i.ibb.co/FbFnxb6p/1000371163-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 4,
    name: 'France Retro Zidane #10',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/6czynyfH/1000370965-removebg-preview.png',
      'https://i.ibb.co/67LC7RNG/1000370967-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 5,
    name: 'Italia Maldini #3',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/wFdRVY5X/1000371172-removebg-preview.png',
      'https://i.ibb.co/0y4K5PKm/1000371170-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 6,
    name: 'Neymar Jr #10 (Santos/Black)',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/Kj9SkPwj/1000370959-removebg-preview.png',
      'https://i.ibb.co/39GD8FK5/1000370969-removebg-preview.png'
    ],
    isHot: false,
  },
    {
    id: 18,
    name: 'Nakata 8 (Japan/Red)',
    price: 349,
    category: 'retro',
    images: [
      'https://i.ibb.co/TxgTKqd9/1000374094-removebg-preview-1.png',
      'https://i.ibb.co/vC9QtnYt/1000374092-removebg-preview-1.png'
    ],
    isHot: false,
  },

  // --- BASKETBALL / NBA (Price 249) ---
  {
    id: 7,
    name: 'Boston Celtics Brown #7',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/qMcTh4S7/1000371139-removebg-preview.png',
      'https://i.ibb.co/pv81T1sd/1000371147-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 8,
    name: 'Dallas Mavericks Kidd #5',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/3Y9XMP6h/1000371153-removebg-preview.png',
      'https://i.ibb.co/nsfK751p/1000371151-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 9,
    name: 'Miami Heat Wade #3',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/0RN0xjfq/1000371157-removebg-preview.png',
      'https://i.ibb.co/vxgcXpxQ/1000371143-removebg-preview-1.png'
    ],
    isHot: false,
  },
  {
    id: 10,
    name: 'Lakers Kobe Bryant #8',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/XkVNs5HT/1000371149-removebg-preview.png',
      'https://i.ibb.co/tMR9QqLt/1000371155-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 11,
    name: 'Orlando Magic O\'Neal #32',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/8LLkqg04/1000371161-removebg-preview.png',
      'https://i.ibb.co/jPRGVKn5/1000371145-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 13,
    name: 'NY Knicks Retro #1',
    price: 249,
    category: 'basketball',
    images: [
      'https://i.ibb.co/3mykSSkj/1000371159-removebg-preview.png', // Placeholder (Shaq)
      'https://i.ibb.co/spzBb68H/1000371141-removebg-preview.png'
    ],
    isHot: false,
  },

  // --- STREETWEAR / COLLAR (Price 349) ---
  {
    id: 14,
    name: 'Saint Black Zip Edition',
    price: 349,
    category: 'collar',
    images: [
      'https://i.ibb.co/4wQjH5JN/1000371125-removebg-preview.png',
      'https://i.ibb.co/cSyhJTVP/1000371129-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 15,
    name: 'YourBrand Sports White',
    price: 349,
    category: 'collar',
    images: [
      'https://i.ibb.co/DgHpjbqH/1000371137-removebg-preview.png',
      'https://i.ibb.co/vxzHGr90/1000371131-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 16,
    name: 'Brand State Sports Div',
    price: 349,
    category: 'collar',
    images: [
      'https://i.ibb.co/j9wsyZc5/1000371135-removebg-preview.png',
      'https://i.ibb.co/LhQtQwZk/1000371135-removebg-preview.png'
    ],
    isHot: false,
  },
  {
    id: 17,
    name: 'Juventus Style Stripe',
    price: 349,
    category: 'collar',
    images: [
      'https://i.ibb.co/prPtdmmf/1000371133-removebg-preview.png',
      'https://i.ibb.co/xSbPkr1Z/1000371127-removebg-preview.png'
    ],
    isHot: false,
  }
];
