'use client'

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search } from "lucide-react";
import { useUIState } from "../_hooks/context";
import { JobStatus } from "@/lib/types/business/website-crawl";

const SearchFilter = () => {
  const { searchFilter, setSearchFilter } = useUIState()
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by client name or website..."
          className="pl-10"
          value={searchFilter.searchFilter}
          onChange={(e) => setSearchFilter({
            ...searchFilter,
            searchFilter: e.target.value
          })}
        />
      </div>
      <Select
        value={searchFilter.jobstatusFilter}
        onValueChange={(v) => setSearchFilter({
          ...searchFilter,
          jobstatusFilter: v as JobStatus | 'all'
        })}
      >
        <SelectTrigger className="w-full sm:w-48">
          <Filter className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="running">Running</SelectItem>
          <SelectItem value="failed">Failed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SearchFilter;