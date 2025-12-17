import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import { Waiver } from "@/lib/types/business/website-crawl";
import { Check, X } from "lucide-react";
import { useState } from "react";

type WaiverItemEditProps = {
  currentValue: Waiver
  onSaveClick: (newValue: Waiver) => void
  onCancelClick: () => void;
}


const WaiverItemEdit = ({ currentValue, onCancelClick, onSaveClick }: WaiverItemEditProps) => {

  const [editValue, setEditValue] = useState<Waiver>(currentValue);

  return (
    <>
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
      <div className="mt-3 space-y-3 bg-muted/30">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Title:</label>
          <Input
            value={editValue.metadata.title}
            onChange={(e) => setEditValue(prev => ({
              ...prev,
              metadata: {
                ...prev.metadata,
                title: e.target.value
              }
            }))}
            placeholder="Waiver title..."
            className="h-8 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Content Preview:</label>
          <TextArea
            value={editValue.metadata.content}
            onChange={(e) => setEditValue(prev => ({
              ...prev,
              metadata: {
                ...prev.metadata,
                content: e.target.value
              }
            }))}
            placeholder="Waiver content..."
            className="text-sm min-h-[100px]"
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
    </>
  )
}

export default WaiverItemEdit;