import type { Mentor } from '@/interfaces/mentor'
import axios from 'axios'

export const getData: any = async () => {
  try {
    const data = await axios.get('https://api.discountdonkey.co.uk/')
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const data: Array<Mentor> = [
  {
    asin: 'B0B232GS29',
    title:
      'Sunday Golf Loma XL Bag - Lightweight Golf Bag with Strap and Stand – Easy to Carry Pitch n Putt Golf Bag – Golf Stand Bag for The Driving Range, Par 3 and Executive Courses, 3.4 pounds (Seafoam)',
    salesRank: 135687,
    dealCreatedAt: '2023-05-29T08:16:00',
    dealUpdatedAt: '2023-05-29T08:16:00',
    dropPercentage: 1,
    beforePrice: 207.76,
    price: 204.99,
    region: 'GB',
    brand: 'Sunday Golf',
    manufacturer: 'Sunday Golf',
    description:
      'Package contents: Only 1 duvet cover + 2 pillowcases included. Single size has only one pillowcase, not including others.\n\nMaterial: Polyester fabric, the Christmas bed linen is very soft and comfortable. The quilted set is very thin and lightweight. The high-quality bedspreads are very suitable for Christmas decoration.\n\nDesign: Colourful anime design quilt set, cute Father Christmas, cute cartoon characters and printed bedspreads with movie characters look very cute and beautiful. Bedroom decoration:\nIt is the best gift for children or friends who love anime.\n\nSize details:\nDimensions: Single, 135 x 200 cm + 1 pillowcase, 50 x 75 cm, (without filler).\nDimensions: Double, 200 x 200 cm + 2 pillowcases, 50 x 75 cm, (without filler).\nDimensions: King, 240 x 220 cm + 2 pillowcases, 50 x 75 cm (without filler).\nDimensions: Super King, 260 x 220 cm + 2 pillowcases, 50 x 75 cm (without filler).\nFor all sizes you can choose 80 x 80 cm cushion covers.\n\nPlease note: The actual colour may differ slightly from the pictures shown on the website. This is caused by many factors such as the brightness of your monitor and the light brightness.\n\nPlease note: The back of the duvet cover is even white. The blue and red backs of the image are only to highlight the picture, not the actual colour of the product.\nPlease allow for a 1 - 3 cm margin of error.',
    isAdult: false,
    categoryId: 318949011,
    categoryName: 'Sports & Outdoors',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41bZzKqLLDL.jpg',
    link: 'https://www.amazon.co.uk/dp/B0B232GS29',
  },
  {
    asin: 'B08X6NPF5V',
    title:
      "Nichiyo 'Titanic' Bedding Set - Duvet Cover and Pillowcase, Microfibre, 3D Digital Print Three-Piece Bedding (1, 180 x 210 cm + 80 x 80 cm)",
    salesRank: 175798,
    dealCreatedAt: '2023-05-29T08:16:00',
    dealUpdatedAt: '2023-05-29T08:16:00',
    dropPercentage: 1,
    beforePrice: 43.13,
    price: 42.55,
    region: 'GB',
    brand: 'NICHIYO',
    manufacturer: 'NICHIYO',
    description: 'Description\n\nSunday Bag Loma XL Seafoam',
    isAdult: false,
    categoryId: 11052681,
    categoryName: 'Home & Kitchen',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51SrylxKR4L.jpg',
    link: 'https://www.amazon.co.uk/dp/B08X6NPF5V',
  },
  {
    asin: 'B0BJQNNMXJ',
    title:
      'Beenax Resistance Bands - Exercise Bands to Build Muscle, Flexibility, Strength for Pilates, Yoga, Rehab, Stretching, Fitness, Gym, Physio, Strength Training and Workout - Men & Women',
    salesRank: 1887,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 10,
    beforePrice: 6.57,
    price: 5.94,
    region: 'GB',
    brand: 'beenax',
    manufacturer: 'Beenax',
    description: null,
    isAdult: false,
    categoryId: 318949011,
    categoryName: 'Sports & Outdoors',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/413FpfAEPLL.jpg',
    link: 'https://www.amazon.co.uk/dp/B0BJQNNMXJ',
  },
  {
    asin: 'B07K1W4G9C',
    title: 'Petface Squeaky Tennis Balls for Dogs, (Pack of 20)',
    salesRank: 2223,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 1,
    beforePrice: 22.09,
    price: 21.92,
    region: 'GB',
    brand: 'Petface',
    manufacturer: 'Petface Ltd.',
    description:
      "Product Description\n\n\nPetface single Squeaky tennis balls are ideal for interactive play indoors or outdoors. Soft for use inside or outside. Throw and fetch games are great fun for dogs. These balls can help to keep dogs fit and healthy. Great for outdoor training, instilling obedience, exercise and fun.\n\n\nSafety Warning\n\n\nIt is the responsibility of the pet owner to decide if this toy is suitable for their pet. Pets should be supervised when playing with toys. This toy is strong but not indestructible and will eventually become susceptible to 'chew' damage. Examine regularly for wear and replace if any damage could represent a health hazard. This toy may contain small parts that could represent a choking hazard. Keep out of reach of children.\n\n\nBox Contains\n\n\n20 x Tennis Ball Dog Toy",
    isAdult: false,
    categoryId: 340840031,
    categoryName: 'Pet Supplies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41cwdvMshuL.jpg',
    link: 'https://www.amazon.co.uk/dp/B07K1W4G9C',
  },
  {
    asin: 'B00N27L7HI',
    title: 'Unite TEXTURIZA Spray',
    salesRank: 33390,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 34,
    beforePrice: 34.35,
    price: 22.65,
    region: 'GB',
    brand: 'UNITE',
    manufacturer: 'Unite',
    description:
      "Dry finishing never fall flat with texturiza spray, a volume and texture spray that lasts all day, and night. This dry, translucent finishing spray delivers weightless volume and texture that's both workable and buildable. Great for all hair types. Use on dry hair only. Benefits creates volume, texture, and fullness medium, workable hold dry spray is translucent in hair hold factor: 5 (scale 1 - 10).",
    isAdult: false,
    categoryId: 117332031,
    categoryName: 'Beauty',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/21BtkU9zDUL.jpg',
    link: 'https://www.amazon.co.uk/dp/B00N27L7HI',
  },
  {
    asin: 'B0794WJ13S',
    title: 'Friends Monopoly Board Game',
    salesRank: 3339,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 1,
    beforePrice: 13.61,
    price: 13.43,
    region: 'GB',
    brand: 'Winning Moves',
    manufacturer: 'Friends Monopoly',
    description:
      'Product Description\n\nHow you doin’? It’s time to join the legendary Friends, from one of TV’s best-loved sitcoms in the Friends edition of MONOPOLY. Play as either Ross, Rachel, Phoebe, Monica, Joey or Chandler by choosing one of the exclusive tokens which are iconic to the gang; will it be Rachel’s handbag, Ross’ dinosaur, Chandler’s sweater vest or even Phoebe’s acoustic guitar? As you pi-VOT round the board you will discover the best Friends’ moments, from the unmistakable Holiday Armadillo, to the hilarious Giant Poking Device and Monica and Chandler’s eventful, yet unforgettable wedding!\n\nSafety Warning\n\nkeep away from naked flame\n\nBox Contains\n\n6 x bespoke tokens; 1 game board; 28 Title Deed cards; 1 pack of monopoly money; 32 cards; 32 bespoke green houses; 12 bespoke red hotels; 2 dice; instructions.',
    isAdult: false,
    categoryId: 468292,
    categoryName: 'Toys & Games',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/519aCX7koVL.jpg',
    link: 'https://www.amazon.co.uk/dp/B0794WJ13S',
  },
  {
    asin: 'B071YQG64M',
    title: 'Medisure Healthcare Medication Pill Storage Screw Tablet Powder Grinder Crusher x 1',
    salesRank: 81429,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: -6,
    beforePrice: 4.86,
    price: 5.15,
    region: 'GB',
    brand: 'Medisure',
    manufacturer: 'Medisure',
    description:
      'The Medisure Healthcare Pill Crusher features a small screw cap storage compartment for up to 2 different items of medication. The reverse end features a screw crusher which allows you to grind medication into powder granules for easier consumption, ideal for children and the elderly. Features and Benefits: Heavy duty plastic construction 2 tablet storage compartments Large screw grinder',
    isAdult: false,
    categoryId: 65801031,
    categoryName: 'Health & Personal Care',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41IlueHIa1L.jpg',
    link: 'https://www.amazon.co.uk/dp/B071YQG64M',
  },
  {
    asin: 'B002C6KHKS',
    title: 'Scotch 8959 Cross Weave Filament Tape, 50 mm x 50 m, Translucent (Pack of 18)',
    salesRank: 37068,
    dealCreatedAt: '2023-05-31T04:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 21,
    beforePrice: 126.32,
    price: 99.96,
    region: 'GB',
    brand: '3M',
    manufacturer: '3M',
    description:
      '3M 8959 is a general purpose tape reinforced with two-directional (cross weave) glass filaments. The polypropylene backing provides abrasion, moisture and scuff resistance.',
    isAdult: false,
    categoryId: 79903031,
    categoryName: 'DIY & Tools',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51UsYYa6tsL.jpg',
    link: 'https://www.amazon.co.uk/dp/B002C6KHKS',
  },
  {
    asin: 'B01NBJ6KZY',
    title: 'Nvidia SHIELD TV with Remote and Controller, Black',
    salesRank: 35567,
    dealCreatedAt: '2023-05-31T05:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 0,
    beforePrice: 1.43,
    price: 1.29,
    region: 'GB',
    brand: 'nVidia',
    manufacturer: 'NVIDIA',
    description:
      'Product Description\n\n\nKiller View – Movies, TV shows and games look unbelievably good with best-in-class 4K HDR or high-definition 1080p Enjoy the smoothest streaming of hundreds of PC quality games with the next generation of GeForce Get the most comprehensive search results of any streaming device with results from over 100 apps SHIELD is 3x Faster than the nearest competitor so it delivers the snappiest, easy to use streaming experience SHIELD delivers a complete entertainment experience, shipping with a remote as well as the SHIELD Game Controller.\n\n\nBox Contains\n\n\nNVIDIA',
    isAdult: false,
    categoryId: 560798,
    categoryName: 'Electronics & Photo',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31hNia29CuL.jpg',
    link: 'https://www.amazon.co.uk/dp/B01NBJ6KZY',
  },
  {
    asin: 'B00LZLJXAQ',
    title: 'Umbra Touch Toilet Brush Grey, Gray',
    salesRank: 17942,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: -48,
    beforePrice: 23.31,
    price: 34.55,
    region: 'GB',
    brand: 'Umbra',
    manufacturer: 'Umbra',
    description:
      'Product Description\nThe contemporary touch collection of bathroom accessories by umbra features a smooth, rounded design and a pleasing "soft-touch" finish. The pieces are constructed of durable, easy-to-clean moulded plastic and metal and are available in a modern color palette that adds a stylish splash to the bathroom. The slim design of the toilet brush allows it to easily fit in tight spaces. The removable liner is easy to clean and the open back allows for ventilation/easy drying. Removable brush head replacements are sold separately. Measures 3-1/2-inches in diameter by 17-1/2 inches tall. Designed by Dennis Cheng for umbra- the worldwide leader in modern, original, casual, innovative and affordable design for the home. Box Contains\n1 x Touch Toilet Brush Grey',
    isAdult: false,
    categoryId: 11052681,
    categoryName: 'Home & Kitchen',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SuQxClhoL.jpg',
    link: 'https://www.amazon.co.uk/dp/B00LZLJXAQ',
  },
  {
    asin: 'B000WL97E2',
    title: 'GBC A4+ 2x75 Micron Organise Gloss Laminating Pouches, Pack of 25, 3747515',
    salesRank: 18612,
    dealCreatedAt: '2023-05-30T09:10:00',
    dealUpdatedAt: '2023-05-30T09:10:00',
    dropPercentage: 10,
    beforePrice: 8.9,
    price: 7.98,
    region: 'GB',
    brand: 'GBC',
    manufacturer: 'Acco UK Limited',
    description:
      'Product Description\n\n\nIdeal for presentations and archiving in Standard Ring Binders as well as usable for Binding Covers, GBC Organise Laminating Pouches protect a wide range of documents, punched or unpunched, With a gloss finish and high polyethylene content, the pouches perfectly adhere to full colour prints, A4+, 2x75 Micron Gloss, Pack size: 25.\n\n\nBox Contains\n\n\n1',
    isAdult: false,
    categoryId: 192413031,
    categoryName: 'Stationery & Office Supplies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41wT2sCv6fL.jpg',
    link: 'https://www.amazon.co.uk/dp/B000WL97E2',
  },
]
