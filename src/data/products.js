const products = [
  {
    title: 'Nigiri z smażonym tuńczykiem',
    description:
      'Tuńczyk smażony, płatki tuńczyka, majonez, sos tajski, słodkie chili, wasabi 0,5 g',
    price: 5,
    img: require('../assets/img/nigiri.png'),
    label: 'Nigiri',
  },
  {
    title: 'Nigiri z marynowanym tuńczykiem',
    description:
      'Tuńczyk marynowany w sosie sojowym, majonez, kawior z czarnej latającej ryby, wasabi 0,5 g',
    price: 5,
    img: require('../assets/img/nigiritunec.png'),
    label: 'Nigiri',
  },
  {
    title: 'Nigiri z smażonym okoniem',
    description:
      'Pielony okoń morski, majonez, tajski słodki sos chili, orzechy nerkowca, wasabi 0,5 g',
    price: 4,
    img: require('../assets/img/nigiriokun.png'),
    label: 'Nigiri',
  },
  {
    title: 'Nigiri z marynowanym lucjanem',
    description:
      'Okoń morski marynowany w sosie sojowym, kawior z pomarańczowej latającej ryby, majonez, wasabi 0,5 g',
    price: 4,
    img: require('../assets/img/nigiriokunm.png'),
    label: 'Nigiri',
  },
  {
    title: 'Sushi Syake',
    description: 'Ryż, łosoś',
    price: 5,
    img: require('../assets/img/s1.png'),
    label: 'Sushi',
  },
  {
    title: 'Łosoś Pieczony Gunkan',
    description: 'Pieczony łosoś, kawior z latającej ryby, majonez',
    price: 6,
    img: require('../assets/img/s2.png'),
    label: 'Sushi',
  },
  {
    title: 'Sushi Shake Kunsei',
    description: 'Ryż, łosoś wędzony',
    price: 5,
    img: require('../assets/img/s3.png'),
    label: 'Sushi',
  },
  {
    title: 'Gunkan Kaiso',
    description: 'Arkusz Nori, ryż, wodorosty chuka, sos orzechowy',
    price: 4,
    img: require('../assets/img/s4.png'),
    label: 'Sushi',
  },
  {
    title: 'Unagi Sushi',
    description: 'Ryż, węgorz wędzony',
    price: 7,
    img: require('../assets/img/s5.png'),
    label: 'Sushi',
  },
  {
    title: 'Rolka w tempurze Missouri',
    description:
      'Rolka w tempurze z serkiem śmietankowym, łososiem wędzonym, papryką, serem Hochland',
    price: 20,
    img: require('../assets/img/r1.png'),
    label: 'Rolki',
  },
  {
    title: 'Roll Nevada',
    description:
      'Klasyczna bułka z serkiem śmietankowym, węgorzem, ogórkiem, papryką w czarnym masago',
    price: 25,
    img: require('../assets/img/r2.png'),
    label: 'Rolki',
  },
  {
    title: 'Rolka Okinawa',
    description:
      'pieczona bułka z krewetkami tygrysimi, serkiem śmietankowym, ogórkiem i sosem yaki',
    price: 19,
    img: require('../assets/img/r3.png'),
    label: 'Rolki',
  },
  {
    title: 'Roll California Light',
    description:
      'Klasyczna bułka z krabem śnieżnym, majonezem, ogórkiem sezamowym',
    price: 24,
    img: require('../assets/img/r4.png'),
    label: 'Rolki',
  },
  {
    title: 'Scorched Philadelphia Roll',
    description:
      'Klasyczna bułka z pieczonym łososiem, serkiem śmietankowym, sosem unagi i sezamem',
    price: 24,
    img: require('../assets/img/r5.png'),
    label: 'Rolki',
  },
  {
    title: 'Rolka z Boczkiem w Tempurze',
    description: 'Ciepła bułka z serkiem śmietankowym i boczkiem',
    price: 22,
    img: require('../assets/img/r6.png'),
    label: 'Rolki',
  },
  {
    title: 'Roladka z serem wędzonym z łososiem',
    description:
      'Mini roll z wędzonym łososiem, ogórkiem, serkiem śmietankowym i zielonym kawiorem masago',
    price: 23,
    img: require('../assets/img/r7.png'),
    label: 'Rolki',
  },
  {
    title: 'Kombinacja 1',
    description:
      'Pizza Pepperoni-25 cm, Pizza z Szynką/Grzybami-25 cm, Klasyczna Bułka Kalifornijska',
    price: 50,
    img: require('../assets/img/k1.png'),
    label: 'Combo',
  },
  {
    title: 'Kombinacja 2',
    description:
      'Pizza Margherita-25 cm, Pizza Gourmet-25 cm, Pizza Domowa-25 cm',
    price: 48,
    img: require('../assets/img/k2.png'),
    label: 'Combo',
  },
  {
    title: 'Kombinacja 3',
    description:
      'Pizza Monachium-25 cm, Pizza Hawajska-25 cm, Ciepła Bułka Onigara',
    price: 52,
    img: require('../assets/img/k3.png'),
    label: 'Combo',
  },
  {
    title: 'Seth Kalifornia',
    description:
      'Klasyczna bułka kalifornijska z krabem, klasyczna bułka kalifornijska z łososiem, klasyczna bułka kalifornijska light',
    price: 52,
    img: require('../assets/img/t1.png'),
    label: 'Zestawy',
  },
  {
    title: 'Zestaw Vulcan - pieczony',
    description:
      'Cheese Hot-Cap-roll, Syake Hot-Cap-roll, Ebi Hot-Cap-roll, Kappa Hot-Cap-roll,',
    price: 40,
    img: require('../assets/img/t2.png'),
    label: 'Zestawy',
  },
  {
    title: 'Ustaw klasyczny',
    description:
      'Ser Hosomaki mini, Kappa Hosomaki mini, Ebi Hosomaki mini, Syake Hosomaki mini',
    price: 40,
    img: require('../assets/img/t3.png'),
    label: 'Zestawy',
  },
  {
    title: 'Ustaw Łososia',
    description: 'Philadelphia Light, California Mix, Kunsei',
    price: 40,
    img: require('../assets/img/t4.png'),
    label: 'Zestawy',
  },
  {
    title: 'Zestaw Pieczonych Yaki',
    description: 'Philadelphia Yaki, Mussels Yaki, California Yaki',
    price: 60,
    img: require('../assets/img/t5.png'),
    label: 'Zestawy',
  },
];

export default products;
