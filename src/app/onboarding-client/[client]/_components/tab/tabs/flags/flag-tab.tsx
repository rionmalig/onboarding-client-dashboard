'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Plus } from "lucide-react";
import FlagItem from "./flag-item";
import { CrawlEntity, RedFlag } from "@/lib/types/business/website-crawl";
import { createClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getCurrentValue } from "@/lib/supabase/utils";
import { useCrawlEntityMutation } from "@/app/onboarding-client/[client]/_hooks/data-mutation";
import { useCrawlEntityQuery } from "@/app/onboarding-client/[client]/_hooks/data-query";

type FlagTabProps = {
  jobId: string,
  initialData: CrawlEntity<RedFlag>[],
}

const ENTITY_TYPE = 'flag';

const FlagTab = ({ jobId, initialData }: FlagTabProps) => {

  const supabaseClient = createClient();
  const queryClient = useQueryClient();

  const [editingIds, setEditingIds] = useState<Set<string>>(new Set());

  const { query } = useCrawlEntityQuery<RedFlag>(ENTITY_TYPE, jobId);
  const { deleteEntity, updateEntity, createEntity, updateStatus, revertEntity } = useCrawlEntityMutation<RedFlag>(ENTITY_TYPE, jobId, supabaseClient);

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

  const { data: flags } = useQuery(query(supabaseClient, initialData));

  const sortedFlags = [...flags].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };

    const { value: a_value } = getCurrentValue<RedFlag>(a);
    const { value: b_value } = getCurrentValue<RedFlag>(b);
    return order[a_value.metadata.severity] - order[b_value.metadata.severity];
  });

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
    <Card className="animate-fade-in border-destructive/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Red Flags
          <Badge variant="destructive" className="ml-2">{flags.length}</Badge>
        </CardTitle>
        <Button size="sm" variant="outline" onClick={async () => await createMutation.mutateAsync()}>
          <Plus className="h-4 w-4 mr-1" />
          Add Flag
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {sortedFlags.map((flag) => (
          <FlagItem key={flag.id}
            crawlJob={flag}
            isEditing={editingIds.has(flag.id)}
            onEdit={toggleEdit}
            onSave={async (id, value) => await updateMutation.mutateAsync({ id, value, prevStatus: flag.status })}
            onStatusUpdate={async (id, status, curValue) => await updateStatusMutation.mutateAsync({ id, status, curValue, prevStatus: flag.status})}
            onDelete={async (id) => await deleteMutation.mutateAsync(id)}
            onRevert={async (id) => await revertEntityMutation.mutateAsync({ id, value: flag.ai_value, prevStatus: flag.status })}
          />
        ))}
        {flags.length === 0 && (
          <div className="text-center py-8">
            <p className="text-success font-medium">No red flags found!</p>
            <p className="text-sm text-muted-foreground mt-1">
              {"The AI didn't detect any issues with this website."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default FlagTab;