import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RegistrationField } from "@/lib/types/business/website-crawl";
import { Check, Plus, X } from "lucide-react";
import { useState } from "react";
import { ActionMenu } from "../../action-menu";

type RegistrationItemEditProps = {
  currentValue: RegistrationField
  onSaveClick: (newValue: RegistrationField) => void
  onCancelClick: () => void;
  onActionSelect: (action: "accept" | "delete" | "reject") => void
}

const RegistrationItemEdit = ({ currentValue, onSaveClick, onCancelClick, onActionSelect }: RegistrationItemEditProps) => {

  const [editValue, setEditValue] = useState<RegistrationField>(currentValue);
  const [newOption, setNewOption] = useState('');

  return (
    <>
      <td className="p-3" colSpan={5}>
        <div className="space-y-4 bg-muted/30">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Field Name (Internal):</label>
              <Input
                value={editValue.value}
                onChange={(e) => setEditValue(prev => ({
                  ...prev,
                  value: e.target.value
                }))}
                placeholder="e.g., participant_name"
                className="h-8 text-sm"
              />
            </div>
            <div className="flex flex-row items-start gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block justify-items-center">Field Type:</label>
                <Select
                  value={editValue.metadata.field_type}
                  onValueChange={(v) => setEditValue(prev => ({
                    ...prev,
                    metadata: {
                      ...prev.metadata,
                      field_type: v as RegistrationField['metadata']['field_type']
                    }
                  }))}
                >
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="select">Dropdown</SelectItem>
                    <SelectItem value="checkbox">Checkbox</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ActionMenu onActionSelect={onActionSelect} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              checked={editValue.metadata.required}
              onCheckedChange={(e) => setEditValue(prev => ({
                ...prev,
                metadata: {
                  ...prev.metadata,
                  required: e
                }
              }))}
            />
            <label className="text-sm">Required field</label>
          </div>

          {editValue.metadata.field_type === "select" && (
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Dropdown Options:</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(editValue.metadata.options ?? []).map((option, idx) => (
                  <Badge key={idx} variant="outline" className="bg-background gap-1 pr-1">
                    {option}
                    <button
                      onClick={() => setEditValue(prev => ({
                        ...prev,
                        metadata: {
                          ...prev.metadata,
                          options: (prev.metadata.options ?? []).filter((_, i) => idx !== i)
                        }
                      }))}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Add an option..."
                  className="h-8 text-sm"
                />
                <Button size="sm" variant="outline" onClick={() => {
                  setEditValue(prev => ({
                    ...prev,
                    metadata: {
                      ...prev.metadata,
                      options: [...prev.metadata.options ?? [], newOption]
                    }
                  }));
                  setNewOption('');
                }}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

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
      </td>
    </>
  )
}

export default RegistrationItemEdit;