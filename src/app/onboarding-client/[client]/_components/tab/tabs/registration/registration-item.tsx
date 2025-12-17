'use client'

import { CrawlEntity, RegistrationField } from "@/lib/types/business/website-crawl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, RotateCcw } from "lucide-react";
import { getCurrentValue } from "@/lib/supabase/utils";
import { cn } from "@/lib/ui/utils";
import RegistrationItemEdit from "./registration-item-edit";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type RegistrationItemProps = {
  crawlJob: CrawlEntity<RegistrationField>
  isEditing: boolean,
  onEdit: (id: string) => void
  onSave: (id: string, value: RegistrationField) => void
  onStatusUpdate: (id: string, status: 'accept' | 'reject', curValue: RegistrationField) => void
  onDelete: (id: string) => void
  onRevert: (id: string) => void
}

const fieldTypeLabels: Record<string, string> = {
  text: "Text",
  email: "Email",
  phone: "Phone",
  select: "Dropdown",
  checkbox: "Checkbox",
  date: "Date",
  number: "Number",
};

const RegistrationItem = ({ crawlJob, isEditing, onEdit, onSave, onStatusUpdate, onDelete, onRevert }: RegistrationItemProps) => {

  const { value, hasChanged } = getCurrentValue<RegistrationField>(crawlJob);
  const status = crawlJob.status;

  return (
    <tr className="border-t hover:bg-muted/30 transition-colors">
      {isEditing ? (
        <RegistrationItemEdit
          currentValue={value}
          onSaveClick={(val) => onSave(crawlJob.id, val)}
          onCancelClick={() => onEdit(crawlJob.id)}
          onActionSelect={(newStatus) => newStatus != 'delete' ? onStatusUpdate(crawlJob.id, newStatus, value) : onDelete(crawlJob.id)}
        />
      ) : (
        <>
          <td className="p-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex-row gap-10">

                  <p className={
                    cn(
                      "text-foreground",
                      hasChanged && "relative"
                    )}>
                    {value.value}
                  </p>
                </div >

                {hasChanged && (
                  <p className="text-sm text-muted-foreground line-through mt-1">
                    Original: {crawlJob.ai_value.value}
                  </p>
                )}
              </div >
            </div >
            <p className="text-xs text-muted-foreground mt-2">{value.metadata.field_name}</p>
          </td >
          <td className="p-3">
            <Badge variant="outline">
              {fieldTypeLabels[value.metadata.field_type]}
            </Badge>
          </td>
          <td className="p-3">
            {value.metadata.required ? (
              <Badge className="bg-accent/10 text-accent">Required</Badge>
            ) : (
              <Badge variant="secondary">Optional</Badge>
            )}
          </td>
          <td className="p-3">
            <StatusBadge status={status}>
              {status === "suggested"
                ? "AI Suggested"
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </StatusBadge>
          </td>
          <td className="p-3 text-right">
            <div className="flex justify-end gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => onEdit(crawlJob.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
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
          </td>
        </>
      )}
    </tr >
  )
}

export default RegistrationItem;