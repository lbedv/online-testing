import { Pagination } from "@/components/common"
import {
  CatalogToolbar,
  CatalogCard,
  useCatalogFilters,
} from "@/features/catalog"

export function CatalogPage() {
  const {
    filters,
    paginatedItems,
    totalPages,
    currentPage,
    resultCount,
    handleFilterChange,
    clearFilters,
    setCurrentPage,
  } = useCatalogFilters()

  return (
    <div className="flex flex-col gap-6">
      <CatalogToolbar
        filterParams={filters}
        resultCount={resultCount}
        onSearchChange={handleFilterChange}
        clearFilters={clearFilters}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedItems.map((test) => (
          <CatalogCard key={test.id} test={test} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
