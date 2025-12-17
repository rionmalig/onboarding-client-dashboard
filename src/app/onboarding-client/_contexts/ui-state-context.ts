"use client"

import { CrawlJobCount, SearchFilter } from "@/lib/types/application/onboarding-client/context-types"
import { createContext } from "react"

export type UIStateContextValue = {
  searchFilter: SearchFilter
  jobCount: CrawlJobCount,
  setJobCount: (jobCount: CrawlJobCount) => void
  setSearchFilter: (filter: SearchFilter) => void
}

export const UIStateContext = createContext<UIStateContextValue | null>(null)