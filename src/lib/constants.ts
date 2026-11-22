/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT CONSTANTS
 * ---------------------------------------------------------------------------
 * Every piece of copy, contact detail, product and image used across the site
 * lives in this file. Change a value here and it updates everywhere.
 *
 * Nothing else in the codebase hard-codes business information.
 * ---------------------------------------------------------------------------
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

/** Shape used to draw the built-in SVG artwork when a photo cannot load. */
export type FruitArtVariant =
  | "round"
  | "citrus"
  | "cluster"
  | "crescent"
  | "oval"
  | "slice"
  | "spiky"
  | "berry";

export interface Product {
  /** Stable key, also used in the URL hash on the products page. */
  slug: string;
  name: string;
  /** Local-language / market name shown as a subtitle. Optional. */
  localName?: string;
  description: string;
  /** Short seasonality note shown on the card. */
  season: string;
  category: ProductCategoryId;
  /** Marks the fruits highlighted on the home page. */
  featured?: boolean;
  /**
   * Remote photograph. Replace with your own photo at any time — either a full
   * URL (add its host to `next.config.ts` → images.remotePatterns) or a file
   * placed in `/public/images/...` referenced as "/images/your-photo.jpg".
   * If the image fails to load, the SVG artwork below is shown instead.
   */
  image: string;
  /** Alt text for the photo. */
  imageAlt: string;
  /** Fallback artwork settings. */
  art: {
    variant: FruitArtVariant;
    from: string;
    to: string;
    accent?: string;
  };
}

export type ProductCategoryId =
  | "everyday"
  | "seasonal"
  | "citrus"
  | "exotic"
  | "melons";

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/* Company                                                                    */
/* -------------------------------------------------------------------------- */

export const COMPANY = {
  name: "Shree Mahakali Fruit Center",
  shortName: "Mahakali Fruit Center",
  initials: "MFC",
  nameLocal: "श्री महाकाली फ्रुट सेन्टर",
  tagline: "Fresh fruits, picked right. Every single day.",
  /** One-line description used in the hero and meta tags. */
  intro:
    "A family-run fruit business serving homes, shops and bulk buyers with farm-fresh fruit since 1990.",
  foundedOn: "01 January 1990",
  foundedYear: 1990,
  yearsOfExperience: 36,
  customersServedRange: "500 – 1000",
  productRangeSummary: "Fruits",
  /**
   * Street address is not on file yet. Fill it in and it will automatically
   * appear on the contact page, in the footer and in the structured data.
   */
  address: null as string | null,
  /** Opening hours, e.g. "Mon – Sun · 7:00 AM – 9:00 PM". Shown when set. */
  hours: null as string | null,
} as const;

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const CONTACT = {
  /** Digits only, including country code — used to build the wa.me link. */
  whatsappNumber: "919879810868",
  /** Human-readable version of the same number. */
  phoneDisplay: "+91 98798 10868",
  /** tel: link target. */
  phoneHref: "+919879810868",
  email: "sandipa025@gmail.com",
  /** Pre-filled message opened in WhatsApp when a customer taps the button. */
  whatsappMessage:
    "Hello Shree Mahakali Fruit Center, I would like to enquire about your fruits.",
} as const;

/** Ready-to-use WhatsApp deep link with the pre-filled enquiry message. */
export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

/**
 * Social profiles. Set a URL to make the icon appear in the header/footer;
 * leave it as null to hide it.
 */
export const SOCIAL = {
  instagram: null as string | null,
  facebook: null as string | null,
} as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------------- */
/* Headline statistics                                                        */
/* -------------------------------------------------------------------------- */

export const STATS = [
  {
    value: `${COMPANY.yearsOfExperience}+`,
    label: "Years of serving",
    detail: `Trading fruit since ${COMPANY.foundedYear}`,
  },
  {
    value: COMPANY.customersServedRange,
    label: "Customers served",
    detail: "Families, retailers and bulk buyers",
  },
  {
    value: "15+",
    label: "Fruit varieties",
    detail: "Sourced fresh through the season",
  },
  {
    value: "365",
    label: "Days a year",
    detail: "Fresh stock arriving daily",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export const VALUE_PROPS = [
  {
    title: "Hand-picked quality",
    description:
      "Every crate is opened and checked before it reaches our counter. Bruised or under-ripe fruit never makes it to you.",
    icon: "leaf",
  },
  {
    title: "Fresh stock daily",
    description:
      "We buy early each morning so the fruit you take home was still in the market at sunrise.",
    icon: "sunrise",
  },
  {
    title: "Honest pricing",
    description:
      "Straightforward rates with no inflated margins — the same fair price for a single kilo or a full carton.",
    icon: "tag",
  },
  {
    title: "Bulk & festive orders",
    description:
      "Gifting hampers, pooja orders, office supply or wedding quantities — tell us the date and we will have it ready.",
    icon: "box",
  },
  {
    title: "Three decades of trust",
    description: `Serving the same neighbourhood since ${COMPANY.foundedYear}, with customers who now shop with their grandchildren.`,
    icon: "shield",
  },
  {
    title: "A quick WhatsApp away",
    description:
      "Send us a message for today's rates and availability. No forms, no waiting — just a reply.",
    icon: "chat",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* What we do                                                                 */
/* -------------------------------------------------------------------------- */

export const SERVICES = [
  {
    title: "Retail fruit counter",
    description:
      "Walk in and pick from the day's fresh arrivals — weighed, cleaned and packed while you wait.",
  },
  {
    title: "Bulk & wholesale supply",
    description:
      "Carton-quantity supply for shops, hotels, caterers, juice centres and offices at wholesale rates.",
  },
  {
    title: "Seasonal specials",
    description:
      "Alphonso and Kesar mangoes in summer, fresh grapes in winter — the best of each season as it arrives.",
  },
  {
    title: "Gift & festive hampers",
    description:
      "Mixed fruit baskets arranged for festivals, weddings, pooja occasions and corporate gifting.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Story / milestones                                                         */
/* -------------------------------------------------------------------------- */

export const STORY_PARAGRAPHS = [
  `Shree Mahakali Fruit Center opened its shutters on ${COMPANY.foundedOn}. What began as a modest fruit counter has grown, one customer at a time, into a shop the neighbourhood relies on for its daily fruit.`,
  `The work itself has not changed much in ${COMPANY.yearsOfExperience} years. We still reach the market before dawn, still taste before we buy, and still refuse anything we would not serve at our own table. Bananas, grapes, mangoes and everything in between — if it is on our counter, it passed that test.`,
  `Over the years we have served somewhere between ${COMPANY.customersServedRange} customers: families picking up a kilo on the way home, shopkeepers stocking their own counters, and hosts ordering by the carton for a wedding. The scale changes; the standard does not.`,
] as const;

export const MILESTONES = [
  {
    year: "1990",
    title: "The shop opens",
    description:
      "Shree Mahakali Fruit Center begins trading on 1 January 1990 with a single counter and a handful of regulars.",
  },
  {
    year: "2000s",
    title: "Growing the range",
    description:
      "Seasonal mangoes, grapes and imported varieties are added as customers start asking for more than the everyday staples.",
  },
  {
    year: "2010s",
    title: "Supplying in bulk",
    description:
      "Shops, caterers and juice centres begin sourcing from us by the carton alongside our walk-in customers.",
  },
  {
    year: "Today",
    title: "Same counter, same promise",
    description: `${COMPANY.yearsOfExperience} years on, fresh stock still arrives every morning and the fruit is still chosen by hand.`,
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Products                                                                   */
/* -------------------------------------------------------------------------- */

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "everyday",
    label: "Everyday favourites",
    description: "The fruit that leaves our counter every single day.",
  },
  {
    id: "seasonal",
    label: "Seasonal picks",
    description: "Here for a few months a year, and worth the wait.",
  },
  {
    id: "citrus",
    label: "Citrus",
    description: "Juicy, sharp and full of vitamin C.",
  },
  {
    id: "melons",
    label: "Melons",
    description: "Chilled, sweet and made for Indian summers.",
  },
  {
    id: "exotic",
    label: "Exotic & imported",
    description: "Something a little different, sourced on request.",
  },
];

/**
 * Photographs are loaded from a remote CDN. If any URL stops working the card
 * falls back to hand-drawn SVG artwork automatically — so the site never shows
 * a broken image. To use your own photo, drop it in `/public/images/` and set
 * `image: "/images/<file>"`.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "banana",
    name: "Banana",
    localName: "केला",
    description:
      "Our signature fruit. Ripened naturally and sold by the dozen or by the hand, sweet right through to the tip.",
    season: "All year round",
    category: "everyday",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A bunch of fresh ripe bananas",
    art: { variant: "crescent", from: "#FDE68A", to: "#F59E0B", accent: "#92400E" },
  },
  {
    slug: "grapes",
    name: "Grapes",
    localName: "अंगूर",
    description:
      "Firm, seedless green and black grapes that arrive in tight bunches and stay crisp for days.",
    season: "December to April",
    category: "everyday",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh bunches of green and black grapes",
    art: { variant: "cluster", from: "#D8B4FE", to: "#6B21A8", accent: "#2E7D4F" },
  },
  {
    slug: "mango",
    name: "Mango",
    localName: "आम",
    description:
      "Alphonso, Kesar and Badam in season — carbide-free, box-ripened and sold the moment they are ready.",
    season: "March to June",
    category: "seasonal",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Ripe yellow mangoes",
    art: { variant: "oval", from: "#FCD34D", to: "#EA580C", accent: "#2E7D4F" },
  },
  {
    slug: "apple",
    name: "Apple",
    localName: "सेब",
    description:
      "Kashmiri, Shimla and imported varieties — crunchy, cold-stored and polished clean before display.",
    season: "All year round",
    category: "everyday",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Red apples stacked together",
    art: { variant: "round", from: "#FCA5A5", to: "#B91C1C", accent: "#2E7D4F" },
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    localName: "अनार",
    description:
      "Heavy, deep-red anar with full arils — the kind that stains your fingers the moment you open it.",
    season: "September to February",
    category: "everyday",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Whole and halved pomegranates",
    art: { variant: "round", from: "#FDA4AF", to: "#9F1239", accent: "#2E7D4F" },
  },
  {
    slug: "orange",
    name: "Orange",
    localName: "संतरा",
    description:
      "Nagpur santra with loose skin and plenty of juice, picked for sweetness rather than size.",
    season: "November to March",
    category: "citrus",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh oranges with leaves",
    art: { variant: "citrus", from: "#FDBA74", to: "#EA580C", accent: "#2E7D4F" },
  },
  {
    slug: "sweet-lime",
    name: "Sweet Lime",
    localName: "मोसंबी",
    description:
      "Thin-skinned mosambi chosen specially for juicing — heavy in the hand and low on bitterness.",
    season: "October to March",
    category: "citrus",
    image:
      "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sweet lime fruit cut in half",
    art: { variant: "citrus", from: "#BEF264", to: "#4D7C0F", accent: "#2E7D4F" },
  },
  {
    slug: "watermelon",
    name: "Watermelon",
    localName: "तरबूज",
    description:
      "Thumped and checked before it is sold. Deep red inside, crisp and properly sweet.",
    season: "March to July",
    category: "melons",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Slices of fresh red watermelon",
    art: { variant: "slice", from: "#FB7185", to: "#BE123C", accent: "#2E7D4F" },
  },
  {
    slug: "muskmelon",
    name: "Muskmelon",
    localName: "खरबूजा",
    description:
      "Fragrant, soft-fleshed kharbuja — you can usually smell a ripe one before you pick it up.",
    season: "March to July",
    category: "melons",
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Muskmelon cut open on a table",
    art: { variant: "round", from: "#FDE68A", to: "#D97706", accent: "#2E7D4F" },
  },
  {
    slug: "papaya",
    name: "Papaya",
    localName: "पपीता",
    description:
      "Firm orange-fleshed papaya, sold whole or halved so you can see exactly what you are buying.",
    season: "All year round",
    category: "everyday",
    image:
      "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Ripe papaya sliced open",
    art: { variant: "oval", from: "#FDBA74", to: "#C2410C", accent: "#2E7D4F" },
  },
  {
    slug: "guava",
    name: "Guava",
    localName: "अमरूद",
    description:
      "Crisp white and pink-centre amrood — eaten firm with a pinch of salt, the way it should be.",
    season: "August to February",
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh green guavas",
    art: { variant: "round", from: "#D9F99D", to: "#4D7C0F", accent: "#2E7D4F" },
  },
  {
    slug: "chikoo",
    name: "Chikoo",
    localName: "चीकू",
    description:
      "Grainy, honey-sweet sapota from the Gujarat belt, ripened to the exact point of softness.",
    season: "November to March",
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chikoo sapota fruit",
    art: { variant: "oval", from: "#D6BFA6", to: "#78350F", accent: "#2E7D4F" },
  },
  {
    slug: "custard-apple",
    name: "Custard Apple",
    localName: "सीताफल",
    description:
      "Sitaphal with thick, creamy pulp. Sold just short of ripe so it is perfect by the time you get home.",
    season: "September to December",
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Custard apple sitaphal fruit",
    art: { variant: "round", from: "#BBF7D0", to: "#15803D", accent: "#166534" },
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    localName: "अनानास",
    description:
      "Golden, aromatic pineapple — we will peel and core it for you if you are taking it straight home.",
    season: "All year round",
    category: "exotic",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Whole fresh pineapple",
    art: { variant: "spiky", from: "#FDE68A", to: "#B45309", accent: "#15803D" },
  },
  {
    slug: "dragon-fruit",
    name: "Dragon Fruit",
    localName: "ड्रैगन फ्रूट",
    description:
      "One of our specialities — bright pink skin, white or red flesh, always sold at peak freshness.",
    season: "June to November",
    category: "exotic",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dragon fruit cut in half",
    art: { variant: "spiky", from: "#F9A8D4", to: "#BE185D", accent: "#15803D" },
  },
  {
    slug: "kiwi",
    name: "Kiwi",
    localName: "कीवी",
    description:
      "Imported kiwi sold firm or ready-to-eat, kept chilled so it never turns mushy on the shelf.",
    season: "All year round",
    category: "exotic",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kiwi fruit sliced in half",
    art: { variant: "citrus", from: "#BEF264", to: "#3F6212", accent: "#1C2B23" },
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    localName: "स्ट्रॉबेरी",
    description:
      "Mahabaleshwar strawberries in winter — sorted the same day they arrive so only the good ones go out.",
    season: "December to March",
    category: "seasonal",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh red strawberries",
    art: { variant: "berry", from: "#FB7185", to: "#9F1239", accent: "#15803D" },
  },
  {
    slug: "pear",
    name: "Pear",
    localName: "नाशपाती",
    description:
      "Crunchy nashpati and soft imported pears, both kept cold so the texture holds.",
    season: "July to December",
    category: "exotic",
    image:
      "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh green pears",
    art: { variant: "oval", from: "#D9F99D", to: "#65A30D", accent: "#2E7D4F" },
  },
];

/** Fruits highlighted on the home page. */
export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured);

/* -------------------------------------------------------------------------- */
/* Gallery                                                                    */
/* -------------------------------------------------------------------------- */

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  /** Rendered taller in the masonry grid. */
  tall?: boolean;
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/shopfront.webp",
    alt: "The shopfront of Shree Mahakali Fruit Center",
    caption: "Our shop — the same address since 1990",
  },
  {
    src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
    alt: "A colourful display of assorted fresh fruit",
    caption: "The counter, first thing in the morning",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80",
    alt: "Crates of fresh fruit stacked at a market",
    caption: "Fresh crates arriving from the mandi",
  },
  {
    src: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80",
    alt: "Bananas arranged in a row",
    caption: "Bananas, ripened the natural way",
  },
  {
    src: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=80",
    alt: "Assorted fresh fruit arranged on a surface",
    caption: "A season's worth of colour",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Red apples arranged neatly",
    caption: "Sorted, polished and stacked by hand",
  },
];

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export const TESTIMONIALS = [
  {
    quote:
      "I have been buying fruit here since my children were small. The quality has never once slipped.",
    author: "A regular customer",
    role: "Shopping with us for over 20 years",
  },
  {
    quote:
      "We order by the carton for our juice counter. The rates are fair and the stock is always fresh.",
    author: "Local juice centre",
    role: "Bulk buyer",
  },
  {
    quote:
      "They picked out the mangoes for my daughter's wedding themselves. Not one box disappointed.",
    author: "Festive order customer",
    role: "Bulk & gifting",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const SEO = {
  /** Set this once the site is live, e.g. "https://mahakalifruitcenter.com". */
  siteUrl: "https://mahakalifruitcenter.com",
  defaultTitle: `${COMPANY.name} — Fresh Fruits Since ${COMPANY.foundedYear}`,
  titleTemplate: `%s | ${COMPANY.shortName}`,
  description: `${COMPANY.name} has been supplying farm-fresh bananas, grapes, mangoes and seasonal fruit for over ${COMPANY.yearsOfExperience} years. Retail counter, bulk orders and festive hampers. WhatsApp us for today's rates.`,
  keywords: [
    "fruit shop",
    "fresh fruits",
    "banana supplier",
    "mango seller",
    "grapes",
    "wholesale fruits",
    "fruit center",
    "Mahakali Fruit Center",
  ],
} as const;
