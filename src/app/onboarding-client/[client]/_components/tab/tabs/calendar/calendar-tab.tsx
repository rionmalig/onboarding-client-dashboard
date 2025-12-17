'use client'

import { Calendar, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CalendarItem from "./calendar-item";
import { CrawlEntity, Schedule } from "@/lib/types/business/website-crawl";
import { createClient } from "@/lib/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCrawlEntityMutation } from "@/app/onboarding-client/[client]/_hooks/data-mutation";
import { useCrawlEntityQuery } from "@/app/onboarding-client/[client]/_hooks/data-query";

type CalendarTabProps = {
  jobId: string,
  initialData: CrawlEntity<Schedule>[],
}

const ENTITY_TYPE = 'schedule';

const CalendarTab = ({ jobId, initialData }: CalendarTabProps) => {
  const supabaseClient = createClient();
  const queryClient = useQueryClient();

  const [editingIds, setEditingIds] = useState<Set<string>>(new Set());

  const { query } = useCrawlEntityQuery<Schedule>(ENTITY_TYPE, jobId);
  const { deleteEntity, updateEntity, createEntity, updateStatus, revertEntity } = useCrawlEntityMutation<Schedule>(ENTITY_TYPE, jobId, supabaseClient);

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

  const { data: schedules } = useQuery(query(supabaseClient, initialData))

/*   const saveEdit = async (id: string, value: CrawlEntityValue) => {
    const { error } = await supabaseClient
      .from('clients_website_crawl_entities')
      .update({
        final_value: value as unknown as Json,
        edited_at: new Date().toISOString(),
        status: 'edited'
      })
      .eq('id', id)
    if (error)
      alert(error)
    toggleEdit(id);
    queryClient.invalidateQueries({
      queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId]
    })
  }

  const updateStatus = async (id: string, newStatus: 'accept' | 'reject') => {
    const { error } = await supabaseClient
      .from('clients_website_crawl_entities')
      .update({
        status: {
          accept: 'accepted',
          reject: 'rejected'
        }[newStatus]
      })
      .eq('id', id)
    if (error)
      alert(error)
    toggleEdit(id);
    queryClient.invalidateQueries({
      queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId]
    })
  }
 */
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
          <Calendar className="h-5 w-5 text-accent" />
          Calendar Logic
          <Badge variant="secondary" className="ml-2">{schedules.length}</Badge>
        </CardTitle>
        <Button size="sm" variant="outline" onClick={async () => await createMutation.mutateAsync()}>
          <Plus className="h-4 w-4 mr-1" />
          Add Schedule
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {schedules.map((item) => (
          <CalendarItem 
            key={item.id} 
            crawlJob={item}
            isEditing={editingIds.has(item.id)}
            onEdit={toggleEdit}
            onSave={async (id, value) => await updateMutation.mutateAsync({ id, value, prevStatus: item.status })}
            onStatusUpdate={async (id, status, curValue) => await updateStatusMutation.mutateAsync({ id, status, curValue, prevStatus: item.status})}
            onDelete={async (id) => await deleteMutation.mutateAsync(id)}
            onRevert={async (id) => await revertEntityMutation.mutateAsync({ id, value: item.ai_value, prevStatus: item.status })}
          />
        ))}
        {schedules.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            {"No calendar logic found. Click \"Add Schedule\" to create one."}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default CalendarTab;