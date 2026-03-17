import { useState } from "react"
import { ITEMS_PER_PAGE } from "../constants"
import type { CatalogFilterParams } from "../types"
import { useCatalogTests } from "./use-catalog-tests"
import { usePagination } from "@/shared/hooks/use-pagination"

/**
 * Hook for managing catalog page filters and pagination state.
 * Handles search, category, difficulty, sorting, and ownership filters.
 * Fetches filtered test list and provides computed values like result count.
 * Automatically resets pagination when filters change.
 */
export function useCatalogFilters() {
  const [filters, setFilters] = useState<CatalogFilterParams>({
    search: "",
    sortBy: "newest",
    ownership: "public"
  });

  const filteredTests = useCatalogTests({...filters})

  const { paginatedItems, currentPage, totalPages, setCurrentPage } = 
    usePagination(filteredTests, ITEMS_PER_PAGE)

  function resetPageToStart() {
    setCurrentPage(1)
  }

  const handleFilterChange = <K extends keyof CatalogFilterParams>(
      key: K, 
      value: CatalogFilterParams[K]
    ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    resetPageToStart()
  }

  function clearFilters() {
    setFilters((prev) => ({
      ownership: prev.ownership,
      search: "",
      sortBy: "newest"
    }));
    resetPageToStart()
  }

  return {
    filters,
    // Computed values
    paginatedItems,
    totalPages,
    currentPage,
    resultCount: filteredTests.length,
    // Handlers
    handleFilterChange,
    clearFilters,
    setCurrentPage,
  }
}
