type SortByT = "mostPopular" | "newest" | "lowestPrice" | "highestPrice";

type SizeT = "34" | "36" | "38" | "40" | "42" | "44" | "46" | "48" | "50" |
  "52" | "54" | "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL";

type ColorT = "black" | "brown" | "beige" | "brey" | "white" | "blue" | "petrol" |
  "turquoise" | "green" | "olive" | "yellow" | "orange" | "red" | "pink" |
  "lilac" | "gold" | "silver" | "multi-coloured" ;

type NewInT = "this week" | "last week" | "last month";

type MaterialT =  "braided" | "cashmere" | "cashmere (100%)" | "chiffon" |
  "cord" | "cotton" | "cotton(100%)" | "crocheted" | "denim" | "gleece" |
  "hardshell" | "imitation leather" | "jersey" | "knits" | "lace" | "leather" |
  "linen" | "linen (100%)" | "lyocell (100%)" | "mesh" | "mohair" |
  "other material" | "polyester" | "ribbed" | "satin" | "sequins" | "silk" |
  "silk (100%)" | "softshell" | "sweat" | "textile" | "viscose" |
  "viscose (100%)" | "wool" | "wool (100%)";

type FitT =  "regular fit" | "slim fit" | "loose fit" | "oversized";

type LengthT = "normal" | "short" | "extra short" | "long" | "thigh-length" |
  "knee-length" | "calf-length";

type PatternT =  "plain" | "checked" | "colorful" | "print" | "polka dot" |
  "floral" | "animal print" | "burnout" | "camouflage" | "color gradient" |
  "herringbone" | "marl" | "paisley" | "photo print" | "pinstriped" | "striped";

type ShapeT = "straight" | "fitted" | "flared" | "tapered" | "cocoon" |
  "boody-hugging";


export type FilterValueType = {
  sortBy: SortByT;
  brand: string;
  size: SizeT;
  color: ColorT;
  // price: [number, number]; // TODO
  newIn: NewInT;
  material: MaterialT;
  fit: FitT;
  length: LengthT;
  pattern: PatternT;
  shape: ShapeT;
}

type FilterOption<T> = {
  name: string;
  value: T
};

export type FilterT<Name extends keyof FilterValueType> = {
  name: Name;
  placeholder: string;
  options: FilterOption<FilterValueType[Name]>[];
  multiple: boolean;
  onSubmit: () => void;
};

export type ClothingFiltersT = {
  primaryFilters: FilterT<keyof FilterValueType>[];
  secondaryFilters: FilterT<keyof FilterValueType>[];
};
