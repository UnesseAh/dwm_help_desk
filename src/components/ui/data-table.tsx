import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

export type FilterOption = {
  label: string
  value: string
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="space-y-4">
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const filterVariant = header.column.columnDef.meta?.filterVariant as string | undefined;
                  const providedOptions = header.column.columnDef.meta?.filterOptions as FilterOption[] | undefined;
                  
                  // Extract unique items dynamically if no custom filterOptions are provided
                  const filterOptions = React.useMemo(() => {
                    if (filterVariant !== "multi-select") return [];
                    if (providedOptions) return providedOptions; // Use custom options (e.g., ROLE_OPTIONS)

                    // Fallback: Generate options dynamically from data
                    const values = data.map((row: any) => {
                      return header.column.columnDef.accessorKey
                        ? (header.column.columnDef.accessorKey as string).split('.').reduce((obj, key) => obj?.[key], row)
                        : null;
                    });
                    const uniqueValues = Array.from(new Set(values)).filter(Boolean) as string[];
                    return uniqueValues.map((val) => ({ label: val, value: val }));
                  }, [data, filterVariant, providedOptions, header.column.columnDef.accessorKey]);

                  return (
                    <TableHead key={header.id} className="align-top py-4">
                      {header.isPlaceholder ? null : (
                        <div className="space-y-2">
                          <div className="font-semibold text-foreground">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                          
                          {header.column.getCanFilter() ? (
                            // CONDITION 1: Handle Multi-Select Filter Variant
                            filterVariant === "multi-select" ? (
                              <DataTableMultiSelectFilter
                                options={filterOptions}
                                value={(header.column.getFilterValue() as string[]) ?? []}
                                onChange={(newValue) => 
                                  header.column.setFilterValue(newValue.length ? newValue : undefined)
                                }
                              />
                            ) : (
                              // CONDITION 2: Default to Text input fallback
                              <Input
                                placeholder={`Filter...`}
                                value={(header.column.getFilterValue() ?? "") as string}
                                onChange={(event) =>
                                  header.column.setFilterValue(event.target.value)
                                }
                                className="h-8 w-full min-w-[100px] text-xs"
                              />
                            )
                          ) : (
                            <div className="h-8" /> 
                          )}
                        </div>
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination UI */}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{table.getFilteredRowModel().rows.length === 0 ? 0 : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}</span> to <span className="font-semibold text-foreground">{Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getFilteredRowModel().rows.length)}</span> of <span className="font-semibold text-foreground">{table.getFilteredRowModel().rows.length}</span> results
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <select value={table.getState().pagination.pageSize} onChange={(e) => table.setPageSize(Number(e.target.value))} className="h-8 w-[70px] rounded-md border border-input bg-transparent px-2 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-ring dark:bg-card text-foreground" >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize} className="bg-background text-foreground">{pageSize}</option>
              ))}
            </select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium text-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}><ChevronsLeft className="h-4 w-4" /></Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}><ChevronRight className="h-4 w-4" /></Button>
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}><ChevronsRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ==========================================================================
   Internal Popover Component for Multi-Select Filter
   ========================================================================== */
function DataTableMultiSelectFilter({
  options,
  value,
  onChange,
}: {
  options: FilterOption[]
  value: string[]
  onChange: (value: string[]) => void
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Closes popover automatically if clicking completely outside component
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleOption = (optionValue: string) => {
    const isSelected = value.includes(optionValue)
    if (isSelected) {
      onChange(value.filter((val) => val !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  return (
    <div ref={containerRef} className="relative w-full min-w-[120px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-1 text-xs shadow-sm transition-colors hover:bg-accent text-left font-normal text-muted-foreground"
      >
        <span>
          {value.length === 0
            ? "Sélectionner..."
            : `${value.length} sélectionné${value.length > 1 ? "s" : ""}`}
        </span>
        <span className="text-[10px] opacity-50">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 z-50 max-h-48 w-full overflow-y-auto rounded-md border bg-popover p-2 shadow-md text-popover-foreground">
          {options.length === 0 ? (
            <div className="py-1 text-center text-xs text-muted-foreground">Aucun résultat</div>
          ) : (
            <div className="space-y-1">
              {options.map((option) => {
                const isChecked = value.includes(option.value)
                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 rounded px-2 py-1 text-xs hover:bg-accent cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleOption(option.value)}
                      className="h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="truncate text-foreground font-medium">{option.label}</span>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}