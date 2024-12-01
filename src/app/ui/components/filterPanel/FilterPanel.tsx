"use client"

import { useState } from "react";
import { clothingFilters } from "./filters";

import styles from "./styles.module.css";

export default function FilterPanel() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function expandSecondaryFilters() {
    setIsExpanded(true);
  };

  return (
    <div className={styles.filtersContainer}>
      {clothingFilters.primaryFilters.map((pFilter) => {
        return (
          <div key={pFilter.name} >{pFilter.placeholder}</div>
        );
      })}

      {
        isExpanded
          ? (
            clothingFilters.secondaryFilters.map((pFilter) => {
              return (
                <div key={pFilter.name} >{pFilter.placeholder}</div>
              );
            })
          )
          : (
            <button onClick={expandSecondaryFilters}>Show all filters</button>
          )
      }
    </div>
  );
};
