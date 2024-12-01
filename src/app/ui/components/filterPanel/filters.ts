import { onFilterApply } from "./utils";
import { ClothingFiltersT } from "./types";

export const clothingFilters: ClothingFiltersT = {
  primaryFilters: [
    {
      name: 'sortBy',
      placeholder: 'Sort by', // t(l.sortBy)
      options: ['static options'],
      onSubmit: onFilterApply
    },
    {
      name: 'brand',
      placeholder: 'Brand', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'size',
      placeholder: 'Size', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'color',
      placeholder: 'Color', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'price',
      placeholder: 'Price', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'newIn',
      placeholder: 'New in', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'material',
      placeholder: 'Material', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'specialtySizes',
      placeholder: 'Specialty sizes', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'multipack',
      placeholder: 'Multipack', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'fit',
      placeholder: 'Fit', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'length',
      placeholder: 'Length', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
  ],
  secondaryFilters: [
    {
      name: 'pattern',
      placeholder: 'Pattern', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    },
    {
      name: 'shape',
      placeholder: 'Shape', // t(l.sortBy)
      options: [],
      onSubmit: onFilterApply
    }
  ]
};
