"use client"

import { useContext } from "react"
import { UIStateContext } from "../_contexts/ui-state-context"

export function useUIState() {
  const context = useContext(UIStateContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}