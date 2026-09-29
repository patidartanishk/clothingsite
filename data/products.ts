export interface Product {
  id: string;
  name: string;
  category: "clothing" | "footwear" | "bags";
  subcategory: string;
  image: string;
  description?: string;
  tags?: string[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export const STORE_INFO = {
  name: "AKHILESH COLLECTION",
  subtitle: "Ready-Made Garments & Footwear Shop",
  location: "Main Market, Subheda, Barwahi",
  phonePrimary: "9956690680",
  phoneSecondary: "7007406127",
  whatsappNumber: "919956690680",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Main+Market+Subheda+Barwahi",
  openingNote: "Visit our showroom at Main Market, Subheda, Barwahi to experience the complete collection in person."
};

export const getWhatsAppLink = (productName?: string) => {
  if (!productName) {
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Akhilesh Collection, I would like to inquire about your collection.")}`;
  }
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Akhilesh Collection, I am interested in inquiring about "${productName}". Could you please share more details and availability?`)}`;
};

export const CLOTHING_PRODUCTS: Product[] = [
  {
    id: "cl-1",
    name: "Classic White Oxford Shirt",
    category: "clothing",
    subcategory: "shirts",
    image: "/assets/clothing/shirt-1.jpg",
    description: "Tailored from 100% premium long-staple cotton, featuring a structured button-down collar and mother-of-pearl buttons. Ideal for office or smart-casual occasions.",
    tags: ["Cotton", "Formal", "Breathable"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "cl-2",
    name: "Beige Linen Resort Shirt",
    category: "clothing",
    subcategory: "shirts",
    image: "/assets/clothing/shirt-2.jpg",
    description: "Breathable pure linen construction with a relaxed camp collar. Designed for warm-weather elegance and comfortable daily wear.",
    tags: ["Pure Linen", "Summer", "Casual"],
    isNewArrival: true
  },
  {
    id: "cl-3",
    name: "Olive Corduroy Overshirt",
    category: "clothing",
    subcategory: "shirts",
    image: "/assets/clothing/shirt-3.jpg",
    description: "Textured fine-wale corduroy with dual chest flap pockets. Perfect for layering over tees during seasonal transitions.",
    tags: ["Corduroy", "Layering", "Vintage"],
    isFeatured: true
  },
  {
    id: "cl-4",
    name: "Heavyweight Minimal Black Tee",
    category: "clothing",
    subcategory: "t-shirts",
    image: "/assets/clothing/tshirt-1.jpg",
    description: "Crafted from 240 GSM organic combed cotton with a ribbed collar that retains shape wash after wash.",
    tags: ["240 GSM", "Minimalist", "Oversized"],
    isNewArrival: true
  },
  {
    id: "cl-5",
    name: "Organic Off-White Ribbed Tee",
    category: "clothing",
    subcategory: "t-shirts",
    image: "/assets/clothing/tshirt-2.jpg",
    description: "Ultra-soft micro-ribbed crewneck t-shirt with a modern boxy silhouette and dropped shoulders.",
    tags: ["Organic", "Modern Fit", "Everyday"]
  },
  {
    id: "cl-6",
    name: "Sand Beige Essential Pocket Tee",
    category: "clothing",
    subcategory: "t-shirts",
    image: "/assets/clothing/tshirt-3.jpg",
    description: "Garment-dyed neutral pocket t-shirt made with pre-shrunk cotton for a lived-in luxury texture.",
    tags: ["Garment Dyed", "Neutral", "Comfort"]
  },
  {
    id: "cl-7",
    name: "Selvedge Raw Indigo Slim Denim",
    category: "clothing",
    subcategory: "jeans",
    image: "/assets/clothing/jeans-1.jpg",
    description: "Authentic 13.5 oz Japanese-style selvedge denim woven on vintage shuttle looms. Features clean copper rivets and a tailored slim taper.",
    tags: ["Selvedge", "Raw Denim", "Slim Fit"],
    isFeatured: true
  },
  {
    id: "cl-8",
    name: "Washed Charcoal Tapered Jeans",
    category: "clothing",
    subcategory: "jeans",
    image: "/assets/clothing/jeans-2.jpg",
    description: "Mid-weight stretch cotton denim in a mineral faded charcoal wash with custom matte hardware.",
    tags: ["Stretch", "Tapered", "Charcoal"],
    isNewArrival: true
  },
  {
    id: "cl-9",
    name: "Vintage Stonewash Relaxed Jeans",
    category: "clothing",
    subcategory: "jeans",
    image: "/assets/clothing/jeans-3.jpg",
    description: "Classic 90s inspired straight-leg jeans with authentic stone wash distressing and reinforced stitching.",
    tags: ["Straight Fit", "Classic", "Durable"]
  },
  {
    id: "cl-10",
    name: "Tailored Pleated Wool Trousers",
    category: "clothing",
    subcategory: "trousers",
    image: "/assets/clothing/trousers-1.jpg",
    description: "Refined single-pleat trousers in charcoal wool blend with side adjusters and a sharp pressed crease.",
    tags: ["Wool Blend", "Pleated", "Formal"],
    isFeatured: true
  },
  {
    id: "cl-11",
    name: "Slim Stretch Chino Pants",
    category: "clothing",
    subcategory: "trousers",
    image: "/assets/clothing/trousers-2.jpg",
    description: "Versatile khaki stretch chinos featuring clean slant pockets and a modern streamlined ankle opening.",
    tags: ["Chino", "Stretch", "Smart Casual"]
  },
  {
    id: "cl-12",
    name: "Oatmeal French Terry Hoodie",
    category: "clothing",
    subcategory: "hoodies",
    image: "/assets/clothing/hoodies-1.jpg",
    description: "Heavyweight 400 GSM loopback cotton terry hoodie with a double-layered hood and clean seamless pocketing.",
    tags: ["400 GSM", "Heavyweight", "Minimal"],
    isNewArrival: true
  },
  {
    id: "cl-13",
    name: "Contemporary Structured Bomber",
    category: "clothing",
    subcategory: "jackets",
    image: "/assets/clothing/jackets-1.jpg",
    description: "Sleek matte-finish water-resistant bomber jacket with ribbed collar, hem, and premium gunmetal two-way zipper.",
    tags: ["Bomber", "Water Resistant", "Modern"],
    isFeatured: true
  },
  {
    id: "cl-14",
    name: "Minimalist Tailored Overcoat",
    category: "clothing",
    subcategory: "jackets",
    image: "/assets/clothing/jackets-2.jpg",
    description: "Notch lapel single-breasted wool blend coat featuring clean hand-finished pockets and unstructured shoulders.",
    tags: ["Tailored", "Wool Blend", "Editorial"]
  }
];

export const FOOTWEAR_PRODUCTS: Product[] = [
  {
    id: "fw-1",
    name: "Aerodynamic Performance Runner",
    category: "footwear",
    subcategory: "sports shoes",
    image: "/assets/footwear/sports-1.jpg",
    description: "Engineered mesh upper with responsive cushioned midsole and high-traction rubber outsole for all-day agility.",
    tags: ["Breathable", "Cushioned", "Lightweight"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "fw-2",
    name: "Trail Tech Low-Top Trainer",
    category: "footwear",
    subcategory: "sports shoes",
    image: "/assets/footwear/sports-2.jpg",
    description: "Rugged synthetic overlays with quick-lace toggle system and reinforced toe-cap for enhanced durability.",
    tags: ["Trail Ready", "Traction", "Modern"]
  },
  {
    id: "fw-3",
    name: "Minimalist Full-Grain White Sneaker",
    category: "footwear",
    subcategory: "casual shoes",
    image: "/assets/footwear/casual-1.jpg",
    description: "Handcrafted from buttery Italian-finish calf leather with gold stamped accents and stitched rubber cupsole.",
    tags: ["Calf Leather", "Handcrafted", "Essential"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "fw-4",
    name: "Retro Suede Court Sneaker",
    category: "footwear",
    subcategory: "casual shoes",
    image: "/assets/footwear/casual-2.jpg",
    description: "Suede and canvas hybrid with retro gum outsole, padded collar, and vintage tonal styling.",
    tags: ["Suede", "Gum Sole", "Retro"]
  },
  {
    id: "fw-5",
    name: "Handcrafted Leather Oxford Derby",
    category: "footwear",
    subcategory: "formal shoes",
    image: "/assets/footwear/formal-1.jpg",
    description: "Formal closed-lacing dress shoe crafted in polished deep brown leather with Goodyear welted leather sole.",
    tags: ["Full Grain", "Goodyear Welt", "Formal"],
    isFeatured: true
  },
  {
    id: "fw-6",
    name: "Burnished Tan Wingtip Brogue",
    category: "footwear",
    subcategory: "formal shoes",
    image: "/assets/footwear/formal-2.jpg",
    description: "Intricate laser brogue perforations with hand-burnished medallion toe and cushioned leather footbed.",
    tags: ["Brogue", "Hand Burnished", "Heritage"]
  },
  {
    id: "fw-7",
    name: "Suede Penny Loafers (Mocha)",
    category: "footwear",
    subcategory: "loafers",
    image: "/assets/footwear/loafers-1.jpg",
    description: "Supple unlined mocha brown suede with classic penny saddle strap and flexible leather sole.",
    tags: ["Suede", "Penny Strap", "Smart Casual"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "fw-8",
    name: "Polished Black Horsebit Loafer",
    category: "footwear",
    subcategory: "loafers",
    image: "/assets/footwear/loafers-2.jpg",
    description: "Premium smooth leather shoe topped with gold-tone horsebit hardware and stacked leather heel.",
    tags: ["Horsebit", "Smooth Leather", "Luxury"]
  },
  {
    id: "fw-9",
    name: "Ergonomic Leather Slide Sandals",
    category: "footwear",
    subcategory: "sandals",
    image: "/assets/footwear/sandals-1.jpg",
    description: "Dual adjustable leather straps paired with contoured cork footbed and shock-absorbing EVA sole.",
    tags: ["Cork Footbed", "Leather", "Ergonomic"]
  },
  {
    id: "fw-10",
    name: "Minimalist Suede Mule Slippers",
    category: "footwear",
    subcategory: "slippers",
    image: "/assets/footwear/slippers-1.jpg",
    description: "Slip-on closed-toe mule in soft taupe suede with shearling-lined inner footbed and outdoor rubber base.",
    tags: ["Slip On", "Comfort", "Lounge"]
  }
];

export const BAGS_PRODUCTS: Product[] = [
  {
    id: "bg-1",
    name: "Executive Matte Black Commuter Pack",
    category: "bags",
    subcategory: "backpacks",
    image: "/assets/bags/backpack-1.jpg",
    description: "Waterproof polyurethane coated matte shell with dedicated 16-inch padded laptop compartment and hidden anti-theft zip.",
    tags: ["Waterproof", "16-inch Laptop", "Ergonomic"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "bg-2",
    name: "Roll-Top Canvas Urban Pack",
    category: "bags",
    subcategory: "backpacks",
    image: "/assets/bags/backpack-2.jpg",
    description: "Heavy-duty 16oz waxed cotton canvas with magnetic FIDLOCK buckle and expandable top capacity.",
    tags: ["Waxed Canvas", "Roll-Top", "Expandable"]
  },
  {
    id: "bg-3",
    name: "Full-Grain Leather Weekender Duffel",
    category: "bags",
    subcategory: "travel bags",
    image: "/assets/bags/travel-1.jpg",
    description: "Spacious 45L travel duffle crafted with vegetable-tanned leather, heavy-duty brass YKK zippers, and padded shoulder strap.",
    tags: ["Leather", "45L Travel", "Brass Hardware"],
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: "bg-4",
    name: "Ballistic Tech Overnight Carry-On",
    category: "bags",
    subcategory: "travel bags",
    image: "/assets/bags/travel-2.jpg",
    description: "Cordura ballistic nylon carry-on with clam-shell opening, garment tie-down straps, and TSA pass-through trolley sleeve.",
    tags: ["Cordura", "Clamshell", "TSA Approved"]
  },
  {
    id: "bg-5",
    name: "Slim Structured Leather Briefcase",
    category: "bags",
    subcategory: "laptop bags",
    image: "/assets/bags/laptop-1.jpg",
    description: "Sleek professional briefcase designed with magnetic closure, microfiber lining, and compartments for chargers and documents.",
    tags: ["Briefcase", "Slim Profile", "Office"],
    isFeatured: true
  },
  {
    id: "bg-6",
    name: "Tech Folio Organizer Laptop Sleeve",
    category: "bags",
    subcategory: "laptop bags",
    image: "/assets/bags/laptop-2.jpg",
    description: "Padded protective sleeve with magnetic flap and zippered exterior cables pocket. Fits laptops up to 14.5 inches.",
    tags: ["Minimalist", "Protection", "Sleeve"]
  },
  {
    id: "bg-7",
    name: "Heritage Waxed Canvas Gym Duffle",
    category: "bags",
    subcategory: "duffle bags",
    image: "/assets/bags/duffle-1.jpg",
    description: "Compact 30L cylindrical duffle featuring moisture-resistant lining and a separate ventilated footwear tunnel.",
    tags: ["Gym & Daily", "Ventilated", "Canvas"],
    isNewArrival: true
  },
  {
    id: "bg-8",
    name: "Minimalist Modern Weekender Bag",
    category: "bags",
    subcategory: "duffle bags",
    image: "/assets/bags/duffle-2.jpg",
    description: "Streamlined contemporary weekender in charcoal melange fabric with dual grab handles and detachable cross strap.",
    tags: ["Charcoal Melange", "Weekender", "Lightweight"]
  },
  {
    id: "bg-9",
    name: "Crossbody Tactical Sling Bag",
    category: "bags",
    subcategory: "sling bags",
    image: "/assets/bags/sling-1.jpg",
    description: "Compact hands-free urban sling featuring waterproof zippers, quick-release shoulder strap, and key leash.",
    tags: ["Crossbody", "Quick Release", "Urban"],
    isFeatured: true
  },
  {
    id: "bg-10",
    name: "Everyday Urban Leather Chest Pack",
    category: "bags",
    subcategory: "sling bags",
    image: "/assets/bags/sling-2.jpg",
    description: "Supple pebble-grain black leather sling bag designed for phone, wallet, sunglasses, and daily essentials.",
    tags: ["Pebble Grain", "Chest Pack", "Minimalist"]
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...CLOTHING_PRODUCTS,
  ...FOOTWEAR_PRODUCTS,
  ...BAGS_PRODUCTS
];

export const NEW_ARRIVALS: Product[] = ALL_PRODUCTS.filter(p => p.isNewArrival);
