'use client'

import { FormInput, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CrawlEntity, RegistrationField } from "@/lib/types/business/website-crawl";
import RegistrationItem from "./registration-item";
import { createClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCrawlEntityMutation } from "@/app/onboarding-client/[client]/_hooks/data-mutation";
import { useCrawlEntityQuery } from "@/app/onboarding-client/[client]/_hooks/data-query";

interface RegistrationTabProps {
  jobId: string,
  initialData: CrawlEntity<RegistrationField>[],
}

const ENTITY_TYPE = 'field';

export function RegistrationTab({ jobId }: RegistrationTabProps) {

  const supabaseClient = createClient();
  const queryClient = useQueryClient();

  const { query } = useCrawlEntityQuery<RegistrationField>(ENTITY_TYPE, jobId);
  const { deleteEntity, updateEntity, createEntity, updateStatus, revertEntity } = useCrawlEntityMutation<RegistrationField>(ENTITY_TYPE, jobId, supabaseClient);

  const [editingIds, setEditingIds] = useState<Set<string>>(new Set());

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

  const { data: fields } = useQuery(query(supabaseClient));

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
          <FormInput className="h-5 w-5 text-accent" />
          Registration Fields
          <Badge variant="secondary" className="ml-2">{fields.length}</Badge>
        </CardTitle>
        <Button size="sm" variant="outline" onClick={async () => await createMutation.mutateAsync()}>
          <Plus className="h-4 w-4 mr-1" />
          Add Field
        </Button>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium text-sm">Field Name</th>
                <th className="text-left p-3 font-medium text-sm">Type</th>
                <th className="text-left p-3 font-medium text-sm">Required</th>
                <th className="text-left p-3 font-medium text-sm">Status</th>
                <th className="text-right p-3 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field) => (
                <RegistrationItem
                  key={field.id}
                  crawlJob={field}
                  isEditing={editingIds.has(field.id)}
                  onEdit={toggleEdit}
                  onSave={async (id, value) => await updateMutation.mutateAsync({ id, value, prevStatus: field.status })}
                  onStatusUpdate={async (id, status, curValue) => await updateStatusMutation.mutateAsync({ id, status, curValue, prevStatus: field.status })}
                  onDelete={async (id) => await deleteMutation.mutateAsync(id)}
                  onRevert={async (id) => await revertEntityMutation.mutateAsync({ id, value: field.ai_value, prevStatus: field.status })}
                />
              ))}
            </tbody>
          </table>
        </div>
        {fields.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {"No registration fields found. Click \"Add Field\" to create one."}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
