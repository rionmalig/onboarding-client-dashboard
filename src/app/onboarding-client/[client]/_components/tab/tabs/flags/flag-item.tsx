'use client'

import { Badge } from "@/components/ui/badge"
import { CrawlEntity, RedFlag } from "@/lib/types/business/website-crawl"
import { Button } from "@/components/ui/button"
import { Pencil, RotateCcw } from "lucide-react"
import { cn } from "@/lib/ui/utils"
import { getCurrentValue } from "@/lib/supabase/utils"
import { StatusBadge } from "@/components/ui/status-badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import FlagItemEdit from "./flag-item-edit"
import { ActionMenu } from "../../action-menu"

type FlagItemProps = {
  crawlJob: CrawlEntity<RedFlag>
  isEditing: boolean,
  onEdit: (id: string) => void
  onSave: (id: string, value: RedFlag) => void
  onStatusUpdate: (id: string, status: 'accept' | 'reject', curValue: RedFlag) => void
  onDelete: (id: string) => void
  onRevert: (id: string) => void
}

const severityColors = {
  low: "bg-muted text-muted-foreground border-muted",
  medium: "bg-warning/10 text-warning border-warning/30",
  high: "bg-destructive/10 text-destructive border-destructive/30",
};

const severityLabels = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const FlagItem = ({ crawlJob, isEditing, onEdit, onSave, onStatusUpdate, onDelete, onRevert }: FlagItemProps) => {

  const { value, hasChanged } = getCurrentValue<RedFlag>(crawlJob);
  const status = crawlJob.status;

  return (
    <div className={cn("group border rounded-lg p-4 transition-colors", !isEditing && severityColors[value.metadata.severity])}>
      <div className="flex items-start gap-3">
        {isEditing ? (
          <FlagItemEdit
            currentValue={value}
            onSaveClick={(val) => onSave(crawlJob.id, val)}
            onCancelClick={() => onEdit(crawlJob.id)}
          />
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Badge className={severityColors[value.metadata.severity]}>
                {severityLabels[value.metadata.severity]} Severity
              </Badge>
              <Badge variant="outline" className="bg-background">
                {value.metadata.area}
              </Badge>
            </div>
            <div className="flex-1">
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
                      Original: {crawlJob.ai_value.value}
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
              {value.metadata.recommendation && (
                <div className="mt-3 p-3 bg-background/80 rounded border">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Recommendation:</p>
                  <p className="text-sm">{value.metadata.recommendation}</p>
                </div>
              )}
            </div>
          </>
        )}
        {isEditing && (
          <ActionMenu
            onActionSelect={(newStatus) => newStatus != 'delete' ? onStatusUpdate(crawlJob.id, newStatus, value) : onDelete(crawlJob.id)}
          />
        )}
      </div >
    </div >
  )
}

export default FlagItem;