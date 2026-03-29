import { useMemo } from "react";
import { CATALOG_TESTS } from "../mock-data";
import type { CatalogFilterParams } from "../types";

/**
 * useCatalogTests hook - Filters and sorts catalog tests based on provided parameters.
 * Returns a memoized list of tests that match the criteria.
 */
export function useCatalogTests({
  search,
  category,
  difficulty,
  ownership,
  sortBy = "newest"
}: CatalogFilterParams) {

  const filtered = useMemo(() => {
    let result = [...CATALOG_TESTS]

    if (search?.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      )
    }

    if (category)    result = result.filter((t) => t.category === category);
    if (difficulty)  result = result.filter((t) => t.difficulty === difficulty);
    if (ownership)   result = result.filter((t) => t.ownership === ownership);

    result.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
        case "attempts":
          return b.attemptsCount - a.attemptsCount
        default:
          return 0
      }
    })
    return result
  }, [search, category, difficulty, sortBy, ownership])
  
  return filtered;
}