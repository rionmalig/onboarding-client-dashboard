'use client'

import { ForwardRefExoticComponent, RefAttributes, useEffect, useRef, useState } from 'react'
import { MoreHorizontal, Check, X, Trash2, LucideProps } from 'lucide-react'
import '../../page.css'

type ActionMenuProps = {
  onActionSelect: (action: 'delete' | 'accept' | 'reject') => void
}
export function ActionMenu({ onActionSelect }: ActionMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg border p-1.5 hover:bg-gray-100"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 p-2 origin-top-right rounded-xl border bg-white shadow-lg animate-in">
          <MenuItem
            onClick={() => onActionSelect('accept')}
            icon={Check}
            label="Accept"
          />
          <MenuItem
            onClick={() => onActionSelect('reject')}
            icon={X}
            label="Reject"
          />

          <div className="my-1 h-px bg-gray-200" />

          <MenuItem
            onClick={() => onActionSelect('delete')}
            icon={Trash2}
            label="Delete"
            className="text-red-600 hover:bg-red-50"
          />
        </div>
      )}
    </div>
  )
}

function MenuItem({ icon: Icon, label, className = '', onClick }: {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  label: string
  className?: string
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100 ${className}`}>
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
}
