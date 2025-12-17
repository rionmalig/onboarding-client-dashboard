'use client'

import { useState } from "react";
import { Check, X, Pencil, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/ui/utils";
import { EntityStatus } from "@/lib/types/business/website-crawl";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { StatusBadge } from "@/components/ui/status-badge";
import TextArea from "@/components/ui/text-area";

interface EditableFieldProps {
  value: string;
  aiValue: string;
  status: EntityStatus;
  onSave: (newValue: string, newStatus: EntityStatus) => void;
  multiline?: boolean;
  className?: string;
}

export function EditableField({
  value,
  aiValue,
  status,
  onSave,
  multiline = false,
  className
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const hasChanged = value !== aiValue;

  const handleSave = () => {
    onSave(editValue, editValue !== aiValue ? "edited" : "suggested");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleAccept = () => {
    onSave(value, "accepted");
  };

  const handleRevert = () => {
    onSave(aiValue, "suggested");
    setEditValue(aiValue);
  };

  const InputComponent = multiline ? TextArea : Input;

  return (
    <div className={className}>
      {isEditing ? (
        <div className="flex items-start gap-2">
          <InputComponent
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1"
            autoFocus
          />
          <Button size="icon" variant="ghost" onClick={handleSave} className="text-success hover:text-success">
            <Check className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={handleCancel} className="text-destructive hover:text-destructive">
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className={cn(
              "text-foreground",
              hasChanged && "relative"
            )}>
              {value}
            </p>
            {hasChanged && (
              <p className="text-sm text-muted-foreground line-through mt-1">
                Original: {aiValue}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <StatusBadge status={status}>
              {status === "suggested" ? "AI Suggested" : status.charAt(0).toUpperCase() + status.slice(1)}
            </StatusBadge>
            {status === "suggested" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost" onClick={handleAccept} className="h-8 w-8">
                    <Check className="h-4 w-4 text-success" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Accept</TooltipContent>
              </Tooltip>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)} className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
            {hasChanged && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost" onClick={handleRevert} className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Revert to AI</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
