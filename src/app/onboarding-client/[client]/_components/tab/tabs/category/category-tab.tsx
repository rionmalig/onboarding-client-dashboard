'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, Plus } from "lucide-react";
import CategoryItem from "./category-item";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { Category, CrawlEntity } from "@/lib/types/business/website-crawl";
import { useCrawlEntityQuery } from "@/app/onboarding-client/[client]/_hooks/data-query";
import { useCrawlEntityMutation } from "@/app/onboarding-client/[client]/_hooks/data-mutation";

interface CategoryTabProps {
  jobId: string,
  initialData: CrawlEntity<Category>[]
}

const ENTITY_TYPE = 'category';

const CategoryTab = ({ initialData, jobId }: CategoryTabProps) => {
  const supabaseClient = createClient();
  const queryClient = useQueryClient();

  const { query: getCategories } = useCrawlEntityQuery<Category>(ENTITY_TYPE, jobId);
  const { deleteEntity, updateEntity, createEntity, updateStatus, revertEntity } = useCrawlEntityMutation<Category>(ENTITY_TYPE, jobId, supabaseClient);

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [editingIds, setEditingIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleEdit = (id: string) => {
    setEditingIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const { data: categories } = useQuery(getCategories(supabaseClient, initialData));

  const deleteMutation = useMutation({
    ...deleteEntity(),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId]
    })
  })

  const updateMutation = useMutation({
    ...updateEntity(),
    onSuccess: (id) => {
      toggleEdit(id)
      queryClient
        .invalidateQueries({ queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId] })
    }
  })

  const createMutation = useMutation({
    ...createEntity(),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId]
    })
  })

  const updateStatusMutation = useMutation({
    ...updateStatus(),
    onSuccess: (id) => {
      toggleEdit(id)
      queryClient
        .invalidateQueries({ queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId] })
    }
  })

  const revertEntityMutation = useMutation({
    ...revertEntity(),
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId] })
    }
  })


  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FolderOpen className="h-5 w-5 text-accent" />
          Categories / Programs
          <Badge variant="secondary" className="ml-2">{categories.length}</Badge>
        </CardTitle>
        <Button size="sm" variant="outline" onClick={async () => await createMutation.mutateAsync()}>
          <Plus className="h-4 w-4 mr-1" />
          Add Category
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            expanded={expandedIds.has(category.id)}
            editing={editingIds.has(category.id)}
            onExpand={toggleExpand}
            onEdit={toggleEdit}
            onSave={async (id, value) => await updateMutation.mutateAsync({ id, value, prevStatus: category.status})}
            onStatusUpdate={async (id, status, curValue) => await updateStatusMutation.mutateAsync({ id, status, curValue, prevStatus: category.status})}
            onDelete={async (id) => await deleteMutation.mutateAsync(id)}
            onRevert={async (id) => await revertEntityMutation.mutateAsync({ id, value: category.ai_value, prevStatus: category.status })}
          />
        ))}
        {categories.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {"No categories found. Click \"Add Category\" to create one."}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
export default CategoryTab;