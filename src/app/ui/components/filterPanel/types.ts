type FilterName =
  "sortBy" |
  "brand" |
  "size" |
  "color" |
  "price" |
  "newIn" |
  "material" |
  "specialtySizes" |
  "multipack" |
  "fit" |
  "length" |
  "pattern" |
  "shape";

type FilterT = {
  name: FilterName;
  placeholder: string;
  options: string[];
  onSubmit: () => void;
};

export type ClothingFiltersT = {
  primaryFilters: FilterT[];
  secondaryFilters: FilterT[];
};
