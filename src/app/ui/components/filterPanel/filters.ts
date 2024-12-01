import { onFilterApply } from "./utils";
import { ClothingFiltersT } from "./types";

type SortByT = "mostPopular" | "newest" | "lowestPrice" | "highestPrice";

export const clothingFilters: ClothingFiltersT = {
  primaryFilters: [
    {
      name: 'sortBy',
      placeholder: 'Sort by', // t(l.sortBy)
      options: [
        {name: 'Most Popular', value: 'mostPopular'},
        {name: 'Newest', value: 'newst'},
        {name: 'Lowest Price', value: 'lowestPrice'},
        {name: 'Highest Price', value: 'highestPrice'},
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      // since there will be hundreds of brands, brands will be fetch from
      // the rest api service and options will be populated dynamically
      name: 'brand',
      placeholder: 'Brand', // t(l.sortBy)
      options: [],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      name: 'size',
      placeholder: 'Size', // t(l.sortBy)
      options: [
        {name: "34", value: "34"},
        {name: "36", value: "36"},
        {name: "38", value: "38"},
        {name: "40", value: "40"},
        {name: "42", value: "42"},
        {name: "44", value: "44"},
        {name: "46", value: "46"},
        {name: "48", value: "48"},
        {name: "50", value: "50"},
        {name: "52", value: "52"},
        {name: "54", value: "54"},
        {name: "XXS", value: "XXS"},
        {name: "XS", value: "XS"},
        {name: "S", value: "S"},
        {name: "M", value: "M"},
        {name: "L", value: "L"},
        {name: "XL", value: "XL"},
        {name: "XXL", value: "XXL"},
        {name: "3XL", value: "3XL"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      name: 'color',
      placeholder: 'Color', // t(l.sortBy)
      options: [
        {name: "Black", value: "black"},
        {name: "Brown", value: "brown"},
        {name: "Beige", value: "beige"},
        {name: "Brey", value: "brey"},
        {name: "White", value: "white"},
        {name: "Blue", value: "blue"},
        {name: "Petrol", value: "petrol"},
        {name: "Turquoise", value: "turquoise"},
        {name: "Green", value: "green"},
        {name: "Olive", value: "olive"},
        {name: "Yellow", value: "yellow"},
        {name: "Orange", value: "orange"},
        {name: "Red", value: "red"},
        {name: "Pink", value: "pink"},
        {name: "Lilac", value: "lilac"},
        {name: "Gold", value: "gold"},
        {name: "Silver", value: "silver"},
        {name: "Multi-colored", value: "multi-coloured"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    // { // TODO
    //   name: 'price',
    //   placeholder: 'Price', // t(l.sortBy)
    //   options: [],
    //   multiple: false,
    //   onSubmit: onFilterApply
    // },
    {
      name: 'newIn',
      placeholder: 'New in', // t(l.sortBy)
      options: [
        {name: "This week", value: "this week"},
        {name: "Last week", value: "last week"},
        {name: "Last month", value: "last month"}
      ],
      multiple: false,
      onSubmit: onFilterApply
    },
    {
      name: 'material',
      placeholder: 'Material', // t(l.sortBy)
      options: [
        {name: "Braided", value: "braided"},
        {name: "Cashmere", value: "cashmere"},
        {name: "Cashmere (100%)", value: "cashmere (100%)"},
        {name: "Chiffon", value: "chiffon"},
        {name: "Cord", value: "cord"},
        {name: "Cotton", value: "cotton"},
        {name: "Cotton (100%)", value: "cotton(100%)"},
        {name: "Crocheted", value: "crocheted"},
        {name: "Denim", value: "denim"},
        {name: "Gleece", value: "gleece"},
        {name: "Hardshell", value: "hardshell"},
        {name: "Imitation leather", value: "imitation leather"},
        {name: "Jersey", value: "jersey"},
        {name: "Knits", value: "knits"},
        {name: "Lace", value: "lace"},
        {name: "Leather", value: "leather"},
        {name: "Linen", value: "linen"},
        {name: "Linen (100%)", value: "linen (100%)"},
        {name: "Lyocell (100%)", value: "lyocell (100%)"},
        {name: "Mesh", value: "mesh"},
        {name: "Mohair", value: "mohair"},
        {name: "Polyester", value: "polyester"},
        {name: "Ribbed", value: "ribbed"},
        {name: "Satin", value: "satin"},
        {name: "Sequins", value: "sequins"},
        {name: "Silk", value: "silk"},
        {name: "Silk (100%)", value: "silk (100%)"},
        {name: "Softshell", value: "softshell"},
        {name: "Sweat", value: "sweat"},
        {name: "Textile", value: "textile"},
        {name: "Viscose", value: "viscose"},
        {name: "Viscose (100%)", value: "viscose (100%)"},
        {name: "Wool", value: "wool"},
        {name: "Wool (100%)", value: "wool (100%)"},
        {name: "Other material", value: "other material"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      name: 'fit',
      placeholder: 'Fit', // t(l.sortBy)
      options: [
        {name: "Regular fit", value: "regular fit"},
        {name: "Slim fit", value: "slim fit"},
        {name: "Loose fit", value: "loose fit"},
        {name: "Oversized", value: "oversized"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      name: 'length',
      placeholder: 'Length', // t(l.sortBy)
      options: [
        {name: "Normal", value: "normal"},
        {name: "Short", value: "short"},
        {name: "Extra short", value: "extra short"},
        {name: "Long", value: "long"},
        {name: "Thigh-length", value: "thigh-length"},
        {name: "Knee-length", value: "knee-length"},
        {name: "Calf-length", value: "calf-length"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
  ],
  secondaryFilters: [
    {
      name: 'pattern',
      placeholder: 'Pattern', // t(l.sortBy)
      options: [
        { name: "Plain", value: "plain"},
        { name: "Checked", value: "checked"},
        { name: "Colorful", value: "colorful"},
        { name: "Print", value: "print"},
        { name: "Polka dot", value: "polka dot"},
        { name: "Floral", value: "floral"},
        { name: "Animal print", value: "animal print"},
        { name: "Burnout", value: "burnout"},
        { name: "Camouflage", value: "camouflage"},
        { name: "Color gradient", value: "color gradient"},
        { name: "Herringbone", value: "herringbone"},
        { name: "Marl", value: "marl"},
        { name: "Paisley", value: "paisley"},
        { name: "Photo print", value: "photo print"},
        { name: "Pinstriped", value: "pinstriped"},
        { name: "Striped", value: "striped"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    },
    {
      name: 'shape',
      placeholder: 'Shape', // t(l.sortBy)
      options: [
        { name: "Straight", value: "straight"},
        { name: "Fitted", value: "fitted"},
        { name: "Flared", value: "flared"},
        { name: "Tapered", value: "tapered"},
        { name: "Cocoon", value: "cocoon"},
        { name: "Boody-hugging", value: "boody-hugging"}
      ],
      multiple: true,
      onSubmit: onFilterApply
    }
  ]
};
