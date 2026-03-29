import { PageHeader, Pagination } from "@/components/common"
import { Button } from "@/components/ui/button"
import {
  CatalogToolbar,
  CatalogCard,
  useCatalogFilters,
  CatalogEmpty,
} from "@/features/catalog"
import PathConstants from "@/routes/path-constants"
import { PlusCircle } from "lucide-react"
import { Link } from "@tanstack/react-router"

// CatalogPage component - Displays a list of tests with filtering and pagination.
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
    <div className="flex flex-col min-h-screen gap-6">
      <PageHeader
        title="Browse Tests"
        description="Explore your tests or discover public tests from the community."
      >
        <Button asChild size="sm">
          <Link to={PathConstants.MY_TESTS}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Test
          </Link>
        </Button>
      </PageHeader>
      <CatalogToolbar
        filterParams={filters}
        resultCount={resultCount}
        onSearchChange={handleFilterChange}
        clearFilters={clearFilters}
      />

        {paginatedItems.length === 0 ? (
          <CatalogEmpty />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedItems.map((test) => (
              <CatalogCard key={test.id} test={test} />
            ))}
          </div>
        )}
      <div className="mt-auto py-6 border-t bg-background">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      </div>
    </div>
  )
}
