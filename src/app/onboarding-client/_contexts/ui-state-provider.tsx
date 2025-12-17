"use client"

import { useState } from "react"
import { UIStateContext } from "./ui-state-context"
import { CrawlJobCount, SearchFilter } from "@/lib/types/application/onboarding-client/context-types"


export function UIStateProvider({ children }: { children: React.ReactNode }) {
  const [searchFilter, setSearchFilter] = useState<SearchFilter>({
    jobstatusFilter: 'all',
    searchFilter: ''
  })

  const [jobCount, setJobCount] = useState<CrawlJobCount>({
    completed: 0,
    failed: 0,
    inProgress: 0
  })

  return (
    <UIStateContext.Provider value={{
      searchFilter,
      jobCount,
      setJobCount: (obj) => {
        setJobCount(obj)
      },
      setSearchFilter: (obj) => {
        setSearchFilter(obj)
      },
    }}>
      {children}
    </UIStateContext.Provider>
  )
}
