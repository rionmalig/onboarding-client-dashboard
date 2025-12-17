'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import { Category } from "@/lib/types/business/website-crawl";
import { Check, Plus, X } from "lucide-react";
import { useState } from "react";


type CategoryItemEditProps = {
  currentValue: Category
  onSaveClick: (newValue: Category) => void
  onCancelClick: () => void;
}

const CategoryItemEdit = ({ currentValue, onCancelClick, onSaveClick }: CategoryItemEditProps) => {

  const [editValue, setEditValue] = useState<Category>(currentValue);
  const [newProgram, setNewProgram] = useState('');
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
      <div className="mt-3 pl-4 border-l-2 border-accent/30">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Programs:</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {editValue.metadata.programs.map((program, idx) => (
                <Badge key={idx} variant="outline" className="bg-background gap-1 pr-1">
                  {program}
                  <button
                    onClick={() => setEditValue(prev => {
                      const next = {
                        ...prev,
                        metadata: {
                          ...prev.metadata,
                          programs: prev.metadata.programs.filter((p, i) => i !== idx)
                        }
                      }
                      return next;
                    })}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newProgram}
                onChange={(e) => setNewProgram(e.target.value)}
                placeholder="Add a program..."
                className="h-8 text-sm"
                
              />
              <Button size="sm" variant="outline" onClick={() => {
                setEditValue(prev => {
                  const next = {
                    ...prev,
                    metadata: {
                      ...prev.metadata,
                      programs: [...prev.metadata.programs, newProgram]
                    }
                  }
                  return next;
                })
                setNewProgram('')
              }}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Description:</label>
            <TextArea
              value={editValue.metadata.description}
              onChange={(e) => setEditValue(prev => {
                const next = {
                  ...prev,
                  metadata: {
                    ...prev.metadata,
                    description: e.target.value
                  }
                }
                return next;
              })}
              placeholder="Category description..."
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

export default CategoryItemEdit;