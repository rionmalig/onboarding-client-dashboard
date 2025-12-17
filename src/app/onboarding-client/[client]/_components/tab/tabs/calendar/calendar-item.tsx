'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, RotateCcw } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CrawlEntity, Schedule } from "@/lib/types/business/website-crawl";
import { cn } from "@/lib/ui/utils";
import ScheduleItemEdit from "./calendar-item-edit";
import { ActionMenu } from "../../action-menu";

type CalendarItemProps = {
  crawlJob: CrawlEntity<Schedule>
  isEditing: boolean,
  onEdit: (id: string) => void
  onSave: (id: string, value: Schedule) => void
  onStatusUpdate: (id: string, status: 'accept' | 'reject', curValue: Schedule) => void
  onDelete: (id: string) => void
  onRevert: (id: string) => void
}

const typeLabels = {
  term: "Term-Based",
  recurring: "Recurring",
  "one-time": "One-Time",
};

const typeColors = {
  term: "bg-primary/10 text-primary",
  recurring: "bg-accent/10 text-accent",
  "one-time": "bg-muted text-muted-foreground",
};

const CalendarItem = ({ crawlJob, isEditing, onEdit, onSave, onStatusUpdate, onDelete, onRevert }: CalendarItemProps) => {

  const aiValue = crawlJob.ai_value as Schedule;
  const finalValue = crawlJob.final_value as Schedule;

  const aiValue_isFinalValue = aiValue === finalValue || !finalValue;
  const value = !finalValue ? aiValue : aiValue_isFinalValue ? aiValue : finalValue;

  const hasChanged = !aiValue_isFinalValue;

  const status = crawlJob.status;

  return (
    <div className="group border rounded-lg p-4 bg-muted/20 hover:bg-muted/40 transition-colors">
      <div className="flex items-start gap-3">
        {isEditing ? (
          <ScheduleItemEdit
            currentValue={value}
            onCancelClick={() => onEdit(crawlJob.id)}
            onSaveClick={(val) => onSave(crawlJob.id, val)}
          />
        ) : (
          <>
            <Badge className={typeColors[value.metadata.type]}>
              {typeLabels[value.metadata.type]}
            </Badge>
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
                      Original: {aiValue.value}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status={crawlJob.status}>
                    {status === "suggested" ? "AI Suggested" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </StatusBadge>

                  <div className="hidden group-hover:flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" onClick={() => onEdit(crawlJob.id)}  className="h-8 w-8">
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
              {value.metadata.schedule_summary && (
                <p className="text-sm text-muted-foreground mt-2">
                  {value.metadata.schedule_summary}
                </p>
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

export default CalendarItem;