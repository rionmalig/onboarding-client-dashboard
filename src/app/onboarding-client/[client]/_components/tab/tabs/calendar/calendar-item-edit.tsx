'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TextArea from "@/components/ui/text-area";
import { Schedule } from "@/lib/types/business/website-crawl";
import { Check, X } from "lucide-react";
import { useState } from "react";

type ScheduleItemEditProps = {
  currentValue: Schedule
  onSaveClick: (newValue: Schedule) => void
  onCancelClick: () => void;
}

const ScheduleItemEdit = ({ currentValue, onCancelClick, onSaveClick }: ScheduleItemEditProps) => {
  const [editValue, setEditValue] = useState<Schedule>(currentValue);

  return (
    <>
      <Select value={editValue.metadata.type} onValueChange={(v) => setEditValue(prev => {
        const next = {
          ...prev,
          metadata: {
            ...prev.metadata,
            type: v as Schedule['metadata']['type']
          }
        }
        return next;
      })}>
        <SelectTrigger className="w-32 h-7 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="term">Term-Based</SelectItem>
          <SelectItem value="recurring">Recurring</SelectItem>
          <SelectItem value="one-time">One-Time</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex-1">
        <div className="flex items-start gap-2">
          <Input
            value={editValue.value}
            onChange={(e) => setEditValue(prev => {
              const next = {
                ...prev,
                value: e.target.value
              };
              return next;
            })}
            className="flex-1"
            autoFocus
          />
        </div>
        <div className="mt-3 space-y-3">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Schedule Summary:</label>
            <TextArea
              value={editValue.metadata.schedule_summary}
              onChange={(e) => setEditValue(prev => {
                const next = {
                  ...prev,
                  metadata: {
                    ...prev.metadata,
                    schedule_summary: e.target.value.length !== 0 ? e.target.value : undefined
                  }
                };
                return next;
              })}
              placeholder="Summary of the schedule..."
              className="text-sm min-h-[60px]"
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="gap-1"
              size="sm"
              onClick={() => onSaveClick(editValue)}
            >
              <Check className="h-3 w-3" />
              Save
            </Button>
            <Button
              className="gap-1"
              size="sm"
              variant="outline"
              onClick={onCancelClick}
            >
              <X className="h-3 w-3" />
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScheduleItemEdit;