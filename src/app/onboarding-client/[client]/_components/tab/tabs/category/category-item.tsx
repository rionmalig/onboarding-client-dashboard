import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react";
import { Category, CrawlEntity } from "@/lib/types/business/website-crawl";
import CategoryItemMetadata from "./category-item-metadata";
import CategoryItemHeader from "./category-item-header";
import CategoryItemEdit from "./category-item-edit";
import { ActionMenu } from "../../action-menu";

type CategoryItemProps = {
  category: CrawlEntity<Category>,
  expanded: boolean,
  editing: boolean,
  onExpand: (id: string) => void
  onEdit: (id: string) => void
  onRevert: (id: string) => void
  onSave: (id: string, value: Category) => void
  onStatusUpdate: (id: string, status: 'accept' | 'reject', curValue: Category) => void
  onDelete: (id: string) => void
};

const CategoryItem = ({ category, expanded, editing, onExpand, onEdit, onSave, onStatusUpdate, onDelete, onRevert }: CategoryItemProps) => {

  const aiValue = category.ai_value as Category;
  const finalValue = category.final_value as Category;

  const aiValue_isFinalValue = aiValue === finalValue || !finalValue;
  const value = !finalValue ? aiValue : aiValue_isFinalValue ? aiValue : finalValue;

  return (
    <div className="group border rounded-lg p-4 bg-muted/20 hover:bg-muted/40 transition-colors">
      <div className="flex items-start gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 shrink-0 mt-0.5"
          onClick={() => onExpand(category.id)}
        >
          {expanded || editing ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        <div className="flex-1">
          {!editing ? (
            <>
              <CategoryItemHeader
                value={value.value}
                hasChanged={!aiValue_isFinalValue}
                isEditing={editing}
                status={category.status}
                onEditClick={() => onEdit(category.id)}
                onRevertClick={() => onRevert(category.id)}
              />
              {expanded && (
                <CategoryItemMetadata
                  metadata={value.metadata}
                />
              )}
            </>
          ) : (
            <CategoryItemEdit
              currentValue={value}
              onCancelClick={() => onEdit(category.id)}
              onSaveClick={(newValue) => onSave(category.id, newValue)}
            />
          )}
        </div>
        {editing && (
          <ActionMenu
            onActionSelect={(newStatus) => newStatus != 'delete' ? onStatusUpdate(category.id, newStatus, value) : onDelete(category.id)}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryItem;