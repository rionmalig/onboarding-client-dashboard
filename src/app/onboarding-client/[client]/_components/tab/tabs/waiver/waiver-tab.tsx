'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";
import WaiverItem from "./waiver-item";
import { CrawlEntity, Waiver } from "@/lib/types/business/website-crawl";
import { createClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCrawlEntityMutation } from "@/app/onboarding-client/[client]/_hooks/data-mutation";
import { useCrawlEntityQuery } from "@/app/onboarding-client/[client]/_hooks/data-query";

type WaiverTabProps = {
  jobId: string,
  initialData: CrawlEntity<Waiver>[],
}

const ENTITY_TYPE = 'waiver';

const WaiverTab = ({ jobId, initialData }: WaiverTabProps) => {

  const supabaseClient = createClient();
  const queryClient = useQueryClient();

  const [editingIds, setEditingIds] = useState<Set<string>>(new Set());

  const { query } = useCrawlEntityQuery<Waiver>(ENTITY_TYPE, jobId);
  const { deleteEntity, updateEntity, createEntity, updateStatus, revertEntity } = useCrawlEntityMutation<Waiver>(ENTITY_TYPE, jobId, supabaseClient);

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

   const { data: waivers } = useQuery(query(supabaseClient, initialData))
   
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
          <FileText className="h-5 w-5 text-accent" />
          Waivers
          <Badge variant="secondary" className="ml-2">{waivers.length}</Badge>
        </CardTitle>
        <Button size="sm" variant="outline" onClick={async () => await createMutation.mutateAsync()}>
          <Plus className="h-4 w-4 mr-1" />
          Add Waiver
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {waivers.map((waiver) => (
          <WaiverItem
            key={waiver.id}
            crawlJob={waiver}
            isEditing={editingIds.has(waiver.id)}
            onEdit={toggleEdit}
            onSave={async (id, value) => await updateMutation.mutateAsync({ id, value, prevStatus: waiver.status })}
            onStatusUpdate={async (id, status, curValue) => await updateStatusMutation.mutateAsync({ id, status, curValue, prevStatus: waiver.status })}
            onDelete={async (id) => await deleteMutation.mutateAsync(id)}
            onRevert={async (id) => await revertEntityMutation.mutateAsync({ id, value: waiver.ai_value, prevStatus: waiver.status })}
          />
        ))}
        {waivers.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {"No waivers found. Click \"Add Waiver\" to create one."}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default WaiverTab;