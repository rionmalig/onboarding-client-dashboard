'use client'

import { CrawlEntity, Waiver } from "@/lib/types/business/website-crawl"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, RotateCcw } from "lucide-react"
import { getCurrentValue } from "@/lib/supabase/utils"
import { cn } from "@/lib/ui/utils"
import WaiverItemEdit from "./waiver-item-edit"
import { StatusBadge } from "@/components/ui/status-badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ActionMenu } from "../../action-menu"

type WaiverItemProps = {
  crawlJob: CrawlEntity<Waiver>
  isEditing: boolean,
  onEdit: (id: string) => void
  onSave: (id: string, value: Waiver) => void
  onStatusUpdate: (id: string, status: 'accept' | 'reject', curValue: Waiver) => void
  onDelete: (id: string) => void
  onRevert: (id: string) => void
}

const WaiverItem = ({ crawlJob, isEditing, onEdit, onSave, onStatusUpdate, onDelete, onRevert }: WaiverItemProps) => {

  const { value, hasChanged } = getCurrentValue<Waiver>(crawlJob);
  const status = crawlJob.status;

  return (
    <div className="group border rounded-lg p-4 bg-muted/20 hover:bg-muted/40 transition-colors">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {isEditing ? (
            <WaiverItemEdit
              currentValue={value}
              onCancelClick={() => onEdit(crawlJob.id)}
              onSaveClick={(val) => onSave(crawlJob.id, val)}
            />
          ) : (
            <>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex-row gap-10">

                    <p className={cn(
                      "text-foreground",
                      hasChanged && "relative"
                    )}>
                      {value.value}
                    </p>
                  </div>

                  {hasChanged && (
                    <p className="text-sm text-muted-foreground line-through mt-1">
                      Original: {value.value}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status={crawlJob.status}>
                    {status === "suggested"
                      ? "AI Suggested"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
                  </StatusBadge>

                  <div className="hidden group-hover:flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" onClick={() => onEdit(crawlJob.id)} className="h-8 w-8">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Edit</TooltipContent>
                    </Tooltip>

                    {hasChanged && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => onRevert(crawlJob.id)}>
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Revert to AI</TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
              {value.metadata.content && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {value.metadata.content}
                </p>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          {isEditing ? (
            <ActionMenu
              onActionSelect={(newStatus) => newStatus != 'delete' ? onStatusUpdate(crawlJob.id, newStatus, value) : onDelete(crawlJob.id)}
            />
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{value.metadata.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 p-4 bg-muted rounded-lg max-h-96 overflow-y-auto">
                  <p className="text-sm whitespace-pre-wrap">
                    {value.metadata.content}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  )
}

export default WaiverItem