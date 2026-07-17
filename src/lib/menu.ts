// Georgie's menu data, Summer 2026 (current live menu, from EXTRACTION.md section 4).
// Structured so items and prices are easy to edit. Prices are dollar amounts
// without a leading "$" (matches the printed menu). `desc` is the italic tagline
// where present; `ingredients` is the ingredient line; `detail` is the wine region.

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  ingredients?: string;
  detail?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const MENU_DISCLAIMER =
  "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness";

export const COCKTAIL_SECTIONS: MenuSection[] = [
  {
    id: "traditional-cocktails",
    title: "Traditional Cocktails",
    note: "liquor substitutions & other cocktail options available",
    items: [
      { name: "margarita", price: "13", ingredients: "Tres Agaves Organic Tequila, St Germain, Fresh House Made Sweet & Sour, Salted Rim" },
      { name: "strawberry mule", price: "13", ingredients: "Wheatley Craft Distilled Vodka, Housemade Strawberry Purée, Q Mixers Ginger Beer, Fresh Mint" },
      { name: "sangria", price: "13", ingredients: "Red Wine Blend, Cointreau, Fresh Squeezed Fruit Juices" },
      { name: "old fashioned", price: "13", ingredients: "Old Forester, Luxardo Cherry, Orange Bitters" },
    ],
  },
  {
    id: "house-crafted-cocktails",
    title: "House Crafted Cocktails",
    items: [
      { name: "the best", price: "15", desc: "bliss in a glass; namesake George Best", ingredients: "Blacklion Sustainable Vodka, Giffard Coconut & Violette Liqueurs, Fresh Lime Juice, Coconut Water" },
      { name: "georgie porgie", price: "14", desc: "luxurious, silky, decadent; namesake children's nursery rhyme", ingredients: "Disaronno, Old Forester 100p Rye, Fresh Lemon, Abricot Du Roussillon, Egg White*" },
      { name: "clooney", price: "14", desc: "cool, refreshing margarita twist; namesake George Clooney", ingredients: "Casamigos Tequila, Maize Liqueur, Fresh Lime Juice, Sweet Pepper & Herb House Syrup" },
      { name: "viva", price: "15", desc: "paloma aka mexico's national drink; namesake George Lopez", ingredients: "Lalo 100% Additive Free Tequila, Fresh Squeezed Grapefruit & Lime Juice, Agave, Tajin" },
      { name: "big brother", price: "14", desc: "tried & true hugo spritz; namesake George Orwell", ingredients: "St. Germaine Elderflower Liqueur, Castle & Key Seasonal Gin, La Marca Prosecco, Fresh Mint" },
      { name: "the force", price: "14", desc: "our espresso martini; namesake George Lucas", ingredients: "Wheatley Craft Distilled Vodka, Lussi Brown's Cold Brew, Kahlua Liqueur, Espresso" },
      { name: "quiet beatle", price: "14", desc: "approachable crowd pleaser; namesake George Harrison", ingredients: "Roots of Ruin Gin, Montenegro, Giffard Pamplemousse Grapefruit Liqueur, Fresh Lemon" },
      { name: "funkadelic", price: "14", desc: "tropical, well-loved funkaliciousness; namesake George Clinton", ingredients: "Plantation Pineapple Rum, Yellow Chartreuse, Aperix Aperitivo, Fresh Squeezed Lime" },
    ],
  },
  {
    id: "zero-proof",
    title: "Zero Proof",
    items: [
      { name: "jungle crush", price: "9", desc: "booze-less strawberry smash; George of the Jungle", ingredients: "Seedlip Garden 108, Fresh Strawberries & Basil" },
      { name: "the jetson", price: "9", desc: "incredibly delightful paloma mocktail namesake George Jetson", ingredients: "Seedlip Notas De Agave, Fresh Grapefruit & Lime" },
    ],
  },
];

export const WINE_SECTIONS: MenuSection[] = [
  {
    id: "white-wine",
    title: "White Wine",
    note: "by the glass",
    items: [
      { name: "stella rosa", price: "9", detail: "Moscato: Piedmont, Italy" },
      { name: "pieropan", price: "11", detail: "Soave Classico: Veneto, Italy" },
      { name: "j vineyards", price: "11", detail: "Pinot Gris: Napa, CA" },
      { name: "la crema", price: "12", detail: "Sauvignon Blanc: Sonoma County, CA" },
      { name: "daou reserve", price: "12", detail: "Rosé: Paso Robles, CA" },
      { name: "raeburn", price: "12", detail: "Chardonnay: Sonoma County, CA" },
    ],
  },
  {
    id: "red-wine",
    title: "Red Wine",
    note: "by the glass",
    items: [
      { name: "nicky hahn", price: "10", detail: "Pinot Noir: Monteray, CA" },
      { name: "louis m. martini prati", price: "13", detail: "Cabernet Sauvignon: Sonoma, CA" },
      { name: "siduri", price: "12", detail: "Pinot Noir: Willamette Valley, OR" },
      { name: "don miguel gascón", price: "11", detail: "Malbec: Mendoza, Argentina" },
      { name: "austin hope", price: "15", detail: "Cabernet Sauvignon: Paso Robles, CA" },
      { name: "st. francis old vine", price: "14", detail: "Zinfandel: Sonoma, CA" },
    ],
  },
  {
    id: "sparkling",
    title: "Sparkling",
    note: "by the glass",
    items: [
      { name: "101 bubbles", price: "9", detail: "Sparkling Champagne: Mendoza" },
      { name: "poema pura cava organic", price: "10", detail: "Brut: Penedes Valley, Barcelona, Spain" },
      { name: "la marca Extra Dry", price: "11", detail: "Prosecco: Veneto, Italy" },
      { name: "poema rosé cava", price: "10", detail: "Brut Rosé: Monteray, CA" },
    ],
  },
];

// Full "by the bottle" wine list, from Georgies-Wine-Menu-8-8.pdf.
// Order within each section follows the printed menu (left column, then right).
export const WINE_BOTTLE_SECTIONS: MenuSection[] = [
  {
    id: "white-wine-bottle",
    title: "White Wine",
    note: "by the bottle",
    items: [
      { name: "los cardos", price: "24", detail: "Chardonnay: Mendoza, Argentina" },
      { name: "pine ridge", price: "26", detail: "Chenin Blanc/Viognier: Napa Valley, California" },
      { name: "whitehaven", price: "28", detail: "Sauvignon Blanc: Marlborough, New Zealand" },
      { name: "nielson", price: "30", detail: "Chardonnay: Santa Barbara County, California" },
      { name: "honig", price: "31", detail: "Rutherford Sauvignon Blanc: Napa Valley, California" },
      { name: "schmitt söhne", price: "32", detail: "Riesling: Rheinhessen, Germany" },
      { name: "louis jadot", price: "35", detail: "Chardonnay: Mâcon-Villages, Burgundy, France" },
      { name: "j vineyards & winery", price: "40", detail: "Pinot Gris: California" },
      { name: "rombauer", price: "42", detail: "Sauvignon Blanc: Napa-Lake Counties, California" },
      { name: "sonoma cutrer", price: "45", detail: "Chardonnay: Windsor, California" },
      { name: "patz & hall", price: "75", detail: "Chardonnay: Sonoma, California" },
      { name: "rombauer", price: "75", detail: "Chardonnay: Napa Valley, California" },
    ],
  },
  {
    id: "red-wine-bottle",
    title: "Red Wine",
    note: "by the bottle",
    items: [
      { name: "altos los hormigas", price: "28", detail: "Malbec Clásico: Mendoza, Argentina" },
      { name: "banfi rosa regale", price: "31", detail: "Sparkling Brachetto d'Acqui: Piedmont, Italy" },
      { name: "cloudline cellars", price: "35", detail: "Pinot Noir: Willamette Valley, Oregon" },
      { name: "louis m. martini", price: "40", detail: "Cabernet Sauvignon: Sonoma, California" },
      { name: "tenute silvio nardi 2016", price: "48", detail: "Rosso di Montalcino: Tuscany, Italy" },
      { name: "finca ambrosia, \"precioso\"", price: "50", detail: "Malbec: Tupungato, Mendoza, Argentina" },
      { name: "mullan road cellars", price: "60", detail: "Cabernet Sauvignon: Columbia Valley, Washington" },
      { name: "clos la coutale", price: "60", detail: "Malbec: Southwest France" },
      { name: "educated guess", price: "60", detail: "Cabernet Sauvignon: Napa County, California" },
      { name: "roserock drouhin oregon", price: "63", detail: "Pinot Noir: Eola-Amity Hills, Oregon" },
      { name: "bootleg prequel", price: "65", detail: "Pinot Noir: Eola-Amity Hills, Oregon" },
      { name: "viña cobos bramare 2019", price: "65", detail: "Malbec: Luján de Cuyo, Mendoza, Argentina" },
      { name: "sequoia grove", price: "82", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "crossbarn", price: "80", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "patz & hall", price: "85", detail: "Pinot Noir: Sonoma, California" },
      { name: "tenuta di nozzole la forra", price: "95", detail: "Chianti Classico: Tuscany, Italy" },
      { name: "orin swift abstract", price: "95", detail: "Blend: California" },
      { name: "tenuta san guido guidalberto", price: "99", detail: "Toscana: Tuscany, Italy" },
      { name: "michele chiarlo tortoniano 2017", price: "99", detail: "Barolo: Piedmont, Italy" },
      { name: "maggy hawk stormin'", price: "104", detail: "Pinot Noir: Anderson Valley, California" },
      { name: "château montelena", price: "170", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "caymus", price: "250", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "château montelena, the montelena estate", price: "320", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "tenuta san guido sassicaia", price: "400", detail: "Bolgheri Sassicaia: Tuscany, Italy" },
      { name: "darioush darius ii 2019", price: "400", detail: "Cabernet Sauvignon: Napa Valley, California" },
      { name: "cardinale", price: "500", detail: "Cabernet Sauvignon: Napa Valley, California" },
    ],
  },
  {
    id: "champagne-bottle",
    title: "Champagne",
    note: "by the bottle",
    items: [
      { name: "luc belaire rare lux", price: "49", detail: "Champagne Brut: Burgundy, France" },
      { name: "bodegas naveran 'dama'", price: "52", detail: "Brut Cava: Catalunya, Spain" },
      { name: "piper-heidsieck", price: "58", detail: "Champagne Brut: Champagne, France" },
      { name: "drappier carte d'or", price: "58", detail: "Brut: Champagne, France" },
      { name: "legrass & hass", price: "90", detail: "Champagne Brut Legras Intuition (NV): Champagne, France" },
      { name: "veuve clicquot", price: "100", detail: "Champagne Brut: Champagne, France" },
      { name: "taittinger", price: "120", detail: "Brut: Champagne, France" },
      { name: "lekool champagne", price: "129", detail: "Champagne Grand Cru: Champagne, France" },
      { name: "blanc de blancs", price: "159", detail: "Champagne Brut Blanc de Blancs: Champagne, France" },
      { name: "dom pérignon", price: "500", detail: "Brut: Champagne, France" },
    ],
  },
  {
    id: "sparkling-rose-bottle",
    title: "Sparkling Rosé",
    note: "by the bottle",
    items: [
      { name: "miraval", price: "48", detail: "Côtes de Provence Rosé: Provence, France" },
      { name: "saint-hilaire", price: "50", detail: "Crémant De Limoux Brut Rosé: Languedoc-Roussillon, France" },
      { name: "piper-heidsieck", price: "54", detail: "Sparkling Rosé: Champagne, France" },
      { name: "laurent-perrier cuvee rosé", price: "169", detail: "Sparkling Rosé: Champagne, France" },
    ],
  },
  {
    id: "prosecco-bottle",
    title: "Prosecco",
    note: "by the bottle",
    items: [
      { name: "la marca", price: "19", detail: "Extra Dry Prosecco: Veneto, Italy" },
      { name: "la luca", price: "21", detail: "Prosecco: Veneto, Italy" },
      { name: "tiamo", price: "27", detail: "Prosecco: North East Italy" },
    ],
  },
  {
    id: "magnum-bottle",
    title: "Magnum Bottles",
    note: "by the bottle",
    items: [
      { name: "la marca", price: "70", detail: "Extra Dry Prosecco: Veneto, Italy" },
      { name: "aix cote d aix", price: "135", detail: "Rosé: Aix-en-Provence, France" },
      { name: "taittinger", price: "300", detail: "Brut La Française" },
      { name: "veuve clicquot", price: "400", detail: "Brut: Reims, France" },
    ],
  },
];

export const BEER_SECTION: MenuSection = {
  id: "beer",
  title: "Beer",
  items: [
    { name: "austin east cider", price: "6" },
    { name: "coors banquet", price: "5" },
    { name: "guinness", price: "9" },
    { name: "high noon", price: "7" },
    { name: "la fin due monde", price: "9" },
    { name: "lagunitas ipa", price: "8" },
    { name: "michelob ultra", price: "6" },
    { name: "miller lite", price: "6" },
    { name: "modelo", price: "6" },
    { name: "pbr", price: "5" },
    { name: "peroni", price: "8" },
    { name: "oberon", price: "7" },
    { name: "stella artois", price: "8" },
  ],
};

export const NOSH_SECTION: MenuSection = {
  id: "nosh",
  title: "Nosh",
  items: [
    { name: "charcuterie board", price: "sm 12 / lg 21", detail: "Daily Chef Selections; vegetarian option available" },
    { name: "gourmet hotdog", price: "6.5", detail: "Truffle Mayo, Housemade Relish, Stoneground Mustard" },
    { name: "marinated olives", price: "8" },
    { name: "marcona almonds", price: "5" },
  ],
};

export const HAPPY_HOUR = {
  title: "Happy Hour",
  when: "every day til 6pm",
  deals: [
    "1/2 Price ALL Beers & Wine by the Glass",
    "$5 Gourmet Hotdogs, Weller Reserve, Tito's",
    "$10 Charcuterie Boards",
  ],
};
