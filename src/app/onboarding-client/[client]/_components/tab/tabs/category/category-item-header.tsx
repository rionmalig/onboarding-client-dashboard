import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { EntityStatus } from "@/lib/types/business/website-crawl";
import { cn } from "@/lib/ui/utils";
import { Pencil, RotateCcw } from "lucide-react";

type CategoryItemHeaderProps = {
  value: string,
  status: EntityStatus,
  isEditing: boolean,
  hasChanged: boolean
  onEditClick: () => void
  onRevertClick: () => void
}

const CategoryItemHeader = ({ value, status, hasChanged, onEditClick, onRevertClick }: CategoryItemHeaderProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex-row gap-10">

          <p className={cn(
            "text-foreground",
            hasChanged && "relative"
          )}>
            {value}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <StatusBadge status={status}>
          {status === "suggested"
            ? "AI Suggested"
            : status.charAt(0).toUpperCase() + status.slice(1)}
        </StatusBadge>

        <div className="hidden group-hover:flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" onClick={onEditClick} className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit</TooltipContent>
          </Tooltip>

          {hasChanged && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={onRevertClick}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Revert to AI</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryItemHeader;