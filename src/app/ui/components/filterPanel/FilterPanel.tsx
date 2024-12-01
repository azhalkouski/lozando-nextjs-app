"use client"

import { useState } from "react";
import Filter from "./Filter";
import { clothingFilters } from "./filters";

import styles from "./styles.module.css";
import { FilterT, FilterValueType } from "./types";

export default function FilterPanel() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function expandSecondaryFilters() {
    setIsExpanded(true);
  };

  function renderFilters(filters: FilterT<keyof FilterValueType>[]) {
    return filters.map((filter) => {
      const { name, placeholder, options, onSubmit, multiple } = filter;
  
      return (
        <Filter
          key={name}
          name={name}
          placeholder={placeholder}
          options={options}
          onSubmit={onSubmit}
          multiple={multiple}
        />
      );
    })
  }

  return (
    <div className={styles.filtersContainer}>
      {
        renderFilters(clothingFilters.primaryFilters)
      }

      {
        isExpanded
          ? renderFilters(clothingFilters.secondaryFilters)
          : (
            <button onClick={expandSecondaryFilters}>Show all filters</button>
          )
      }
    </div>
  );
};
