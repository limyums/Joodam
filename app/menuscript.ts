import { Menu } from '@/types/menu';

export const Appetizer: Menu[] = [
  {
    id: 1,
    title: 'Edamame',
    title_ko: '에다마메',
    description: 'buttered stir-fried soybeans',
    option: '',
    price: 9,
    spicy: 0,
    rice: 0,
    gf: true,
    ve: true,
  },
  {
    id: 2,
    title: 'Corn cheese',
    title_ko: '콘치즈',
    description:
      'corn kernels in our house-made mayo sauce topped with mozzarella and hashbrowns',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 3,
    title: 'Fries',
    title_ko: '감자튀김',
    description: '',
    option: '',
    price: 7,
    spicy: 0,
    rice: 0,
    gf: true,
    ve: true,
  },
  {
    id: 4,
    title: 'Mandoo',
    title_ko: '만두',
    description: ' Deep fried Korean Bulgogi dumplings (8pcs)',
    option: '',
    price: 12,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
];

export const Anju: Menu[] = [
  {
    id: 1,
    title: 'Korean Fried Chicken',
    title_ko: '닭강정',
    description:
      'battered & deep-fried chicken thighs served with korean style sweet and spicy sauce',
    option: '',
    price: 18,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 2,
    title: 'Padak',
    title_ko: '파닭',
    description:
      'battered & deep-fried chicken thighs topped with thinly slice green onions dressed with korean style mustard',
    option: '',
    price: 20,
    spicy: 2,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 3,
    title: 'Chicken wings',
    title_ko: '치킨윙',
    description: 'chicken wings with sweet and spicy sauce10pcs',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 4,
    title: 'Peach Shrimp',
    title_ko: '피치새우',
    description:
      'battered and deep-fried shrimp with house-made peach sauce with mixed greens and veggies (6pcs)',
    option: '',
    price: 19,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 5,
    title: 'Assorted Sausages',
    title_ko: '모둠소세지',
    description:
      'pan-fried assorted smoked sausages with our house-made mustard sauce',
    option: '',
    price: 25,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 6,
    title: 'Seafood Pajeon',
    title_ko: '해물파전',
    description:
      'pan-fried korean style pancake with green onions, shrimp and squid',
    option: '',
    price: 21,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 7,
    title: 'Tteok Bokki with Mandoo',
    title_ko: '떡볶이',
    description:
      'stir-fried rice cake, fish cake and hard-boiled egg in house-made spicy sauce topped with deep-fried Mandoo',
    option: '',
    price: 23,
    spicy: 4,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 8,
    title: 'Spicy Chicken Softbone',
    title_ko: '닭오돌뼈',
    description: 'stir-fried chicken cartilage in special spicy sauce',
    option: '',
    price: 14,
    spicy: 3,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 9,
    title: 'Yukhoe',
    title_ko: '육회',
    description:
      'korean style raw steak beef tartare marinated in house-made soy dressing',
    option: '',
    price: 26,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 10,
    title: 'Bul Jokbal',
    title_ko: '불족발',
    description: 'stir-fried braised pork feet with special spicy sauce',
    option: '',
    price: 32,
    spicy: 4,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 11,
    title: 'Japchae',
    title_ko: '잡채',
    description: 'stir-fried sweet potato noodles with beef and veggies',
    option: '',
    price: 22,
    spicy: 0,
    rice: 0,
    gf: true,
    ve: true,
  },
];

export const Hotpot: Menu[] = [
  {
    id: 1,
    title: 'Soon Tofu',
    title_ko: '순두부',
    description: 'spicy salt tofu soup with veggies, Beef or seafood or suk uh',
    option: ['Seafood or Beef $38', 'Suk-Uh $40'],
    price: 0,
    spicy: 3,
    rice: 2,
    gf: true,
    ve: false,
  },
  {
    id: 2,
    title: 'Budae Jjigae',
    title_ko: '부대찌개',
    description:
      'spicy broth with mixed proteins (spam, sausages), veggies, slice cheese and noodle  + extra noodles $3',
    option: '',
    price: 37,
    spicy: 2,
    rice: 2,
    gf: false,
    ve: false,
  },
  {
    id: 3,
    title: 'Jjambbong tang',
    title_ko: '짬뽕탕',
    description:
      'spicy broth with stir-fried veggies and assorted seafood and udon noodel + extra udon noodles $5',
    option: '',
    price: 37,
    spicy: 6,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 4,
    title: 'Odeng tang ',
    title_ko: '오뎅탕',
    description: 'seafood broth soup with fish balls and fish cakes',
    option: '',
    price: 19,
    spicy: 2,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 5,
    title: 'Mussel soup',
    title_ko: '홍합탕',
    description: 'seafood broth soup with mussels',
    option: '',
    price: 23,
    spicy: 2,
    rice: 0,
    gf: false,
    ve: false,
  },
];

export const Meal: Menu[] = [
  {
    id: 1,
    title: 'Bibimbab',
    title_ko: '비빔밥',
    description:
      'rice, topped with bean spouts, carrots, mushroom, zuccini, mixed greens, a ssuny side-up egg',
    option: ['Vege $15', 'Bulgogi $17', 'Yukhoe $20'],
    price: 0,
    spicy: 1,
    rice: 0,
    gf: true,
    ve: true,
  },
  {
    id: 2,
    title: 'Bulgogi',
    title_ko: '불고기',
    description: 'stir-fried korean style marinated beef with veggies',
    option: '',
    price: 22,
    spicy: 0,
    rice: 1,
    gf: false,
    ve: false,
  },
  {
    id: 3,
    title: 'LAgalbi ',
    title_ko: 'LA갈비',
    description: 'grilled korean style marinated beef short ribs',
    option: '',
    price: 34,
    spicy: 0,
    rice: 1,
    gf: false,
    ve: false,
  },
  {
    id: 4,
    title: 'CheeseBuldak',
    title_ko: '치즈불닭',
    description:
      'stir-fried chicken in special spicy sauce topped with mozzarella',
    option: '',
    price: 25,
    spicy: 4,
    rice: 1,
    gf: false,
    ve: false,
  },
  {
    id: 5,
    title: 'Thin sliced pork',
    title_ko: '대패삼겹숙주볶음',
    description:
      'thin sliced pork belly stir fried with bean sprouts and green onions',
    option: '',
    price: 18,
    spicy: 0,
    rice: 1,
    gf: true,
    ve: false,
  },
  {
    id: 6,
    title: 'Mool NaengMyun',
    title_ko: '물냉면',
    description:
      'cold buckwheat noodles with house-made beef flavor broth + bibim sauce $2, + extra noodles $5',
    option: '',
    price: 18,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: true,
  },
  {
    id: 7,
    title: 'Bibim NaengMyun',
    title_ko: '비빔냉면',
    description:
      'cold buckwheeat noodles with house-made sweet & spicy sauce + extra noodles $5',
    option: '',
    price: 18,
    spicy: 3,
    rice: 0,
    gf: false,
    ve: true,
  },
  {
    id: 8,
    title: 'Yukhoe Bibim NaengMyun',
    title_ko: '육회냉면',
    description:
      'cold buckwheat noodles with house-made sweet & spicy sauce topped with marinated beef tartare + extra noodles $5',
    option: '',
    price: 22,
    spicy: 3,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 9,
    title: 'Jjambbong Pasta',
    title_ko: '짬뽕파스타',
    description:
      'stir-fried veggies and seafood in our spicy broth with linguine',
    option: '',
    price: 25,
    spicy: 5,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 10,
    title: 'Bulgogi cream pasta',
    title_ko: '불고기크림파스타',
    description: 'linguine with creamy sauce and bulgogi',
    option: '',
    price: 19,
    spicy: 2,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 11,
    title: 'Add Steamed Rice',
    title_ko: '',
    description: '',
    option: '',
    price: 3,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
];

export const Dessert: Menu[] = [
  {
    id: 1,
    title: 'Kong Bingsoo',
    title_ko: '콩빙수',
    description:
      'red beans, rice cake, condensed milk, milk powder & roasted soybean powder',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 2,
    title: 'Strawberry Bingsoo',
    title_ko: '딸기빙수',
    description:
      '100% real strawberry, vanilla ice cream, milk powder & condensed milk',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 3,
    title: 'Mango Bingsoo',
    title_ko: '망고빙수',
    description:
      '100% real mango, vanilla ice cream, milk powder & condensed milk',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 4,
    title: 'Coffee Bingoo',
    title_ko: '커피빙수',
    description: 'Espresso, Vanilla ice cram, milk powder & condensed milk',
    option: '',
    price: 14,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 5,
    title: 'Oreo Croffle',
    title_ko: '오레오 크로플',
    description: 'Croffle, Whipped cream, Choco syrup, Oreo',
    option: '',
    price: 9,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 6,
    title: 'Kong Croffle',
    title_ko: '콩 크로플',
    description: 'Croffle, Vanilla ice cream, Roasted soybean powder',
    option: '',
    price: 9,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 7,
    title: 'Cheese Cake',
    title_ko: '치즈케이크',
    description: '',
    option: [
      'choco & cheese cake & choco syrup',
      'chesse cake & strawberry syrup',
    ],
    price: 6,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
  {
    id: 8,
    title: 'Ice Cream',
    title_ko: '아이스크림',
    description: '',
    option: ['Vanila', 'Green tea'],
    price: 4,
    spicy: 0,
    rice: 0,
    gf: false,
    ve: false,
  },
];
