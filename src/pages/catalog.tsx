import { Pagination } from "@/components/common"
import {
  CatalogCard,
  useCatalogFilters,
} from "@/features/catalog"

export function CatalogPage() {
  const {
    paginatedItems,
    totalPages,
    currentPage,
    setCurrentPage,
  } = useCatalogFilters()

  return (
    <div className="flex flex-col gap-6">
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
