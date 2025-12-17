import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TextArea from "@/components/ui/text-area";
import { RedFlag } from "@/lib/types/business/website-crawl";
import { Check, X } from "lucide-react";
import { useState } from "react";

type FlagItemEdit = {
  currentValue: RedFlag
  onSaveClick: (newValue: RedFlag) => void
  onCancelClick: () => void;
}

const FlagItemEdit = ({ currentValue, onSaveClick, onCancelClick }: FlagItemEdit) => {

  const [editValue, setEditValue] = useState<RedFlag>(currentValue);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Select value={editValue.metadata.severity} onValueChange={(v) => setEditValue(prev => ({
          ...prev,
          metadata: {
            ...prev.metadata,
            severity: v as RedFlag['metadata']['severity']
          }
        }))}
        >
          <SelectTrigger className="w-32 h-7 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
        <div>
            <Input
              value={editValue.metadata.area}
              onChange={(e) => setEditValue(prev => ({
                ...prev,
                metadata: {
                  ...prev.metadata,
                  area: e.target.value
                }
              }))}
              placeholder="e.g., Waivers, Pricing, Compliance"
              className="w-32 h-7 text-xs"
            />
          </div>
      </div>
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
        <div className="mt-3 space-y-3 bg-background/80">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Recommendation:</label>
            <TextArea
              value={editValue.metadata.recommendation}
              onChange={(e) => setEditValue(prev => ({
                ...prev,
                metadata: {
                  ...prev.metadata,
                  recommendation: e.target.value
                }
              }))}
              placeholder="How to address this issue..."
              className="text-sm min-h-20"
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

export default FlagItemEdit;