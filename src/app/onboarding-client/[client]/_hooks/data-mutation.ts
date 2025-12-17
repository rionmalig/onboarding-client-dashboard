import { Database } from "@/lib/supabase/supabase";
import { CrawlEntityValueUnion } from "@/lib/types/business/website-crawl";
import { SupabaseClient } from "@supabase/supabase-js";
import { mutationOptions } from "@tanstack/react-query";

type CrawlEntityValueTypes = 'category' | 'waiver' | 'schedule' | 'field' | 'flag'

// create value map
  const defaultValue: Record<CrawlEntityValueTypes, CrawlEntityValueUnion> = {
    category: {
      value: 'A new value category',
      metadata: {
        programs: [],
        description: undefined
      }
    },
    waiver: {
      value: 'A new waiver',
      metadata: {
        title: 'Create waiver title',
        content: 'Add content'
      }
    },
    schedule: {
      value: 'A new schedule',
      metadata: {
        type: 'one-time'
      }
    },
    field: {
      value: 'A new field',
      metadata: {
        field_name: 'a_field',
        field_type: 'text',
        required: false
      }
    },
    flag: {
      value: 'A new flag',
      metadata: {
        severity: 'low',
        area: 'Area'
      }
    }
  }


export const useCrawlEntityMutation = <T extends CrawlEntityValueUnion>(ENTITY_TYPE: CrawlEntityValueTypes, jobId: string, supabaseClient: SupabaseClient<Database>) => {
  
  const updateStatus = () => mutationOptions({
    mutationFn: async (payload: { id: string, status: 'accept' | 'reject', curValue: T, prevStatus: string }) => {
      const { id, status, curValue, prevStatus } = payload;
      await supabaseClient
        .from('clients_website_crawl_entities')
        .update({
          status: {
            accept: 'accepted',
            reject: 'rejected'
          }[status]
        })
        .eq('id', id)
      
      // create log
      await supabaseClient
        .from('clients_website_crawl_entity_logs')
        .insert({
          crawl_entity_id: id,
          event: 'status update',
          event_description: `${prevStatus} → ${status}`,
          value: {
            ...curValue
          },
        })
      return id;
    }
  })

  const createEntity = () => mutationOptions({
    mutationFn: async () => {
      const newInsert = defaultValue[ENTITY_TYPE] as T;
      return await supabaseClient
        .from('clients_website_crawl_entities')
        .insert({
          ai_value: {
            ...newInsert
          },
          status: 'suggested',
          type: ENTITY_TYPE,
          crawl_job_id: jobId
        })
    }
  })
  const updateEntity = () => mutationOptions({
    mutationFn: async (payload: { id: string, value: T, prevStatus: string }) => {
      const { value, id, prevStatus } = payload;
      // update
      const updateRes = await supabaseClient
        .from('clients_website_crawl_entities')
        .update({
          final_value: {
            ...value
          },
          edited_at: new Date().toISOString(),
          status: 'edited'
        })
        .eq('id', id)

      if (updateRes.error)
        throw updateRes.error;

      // create log
      await supabaseClient
        .from('clients_website_crawl_entity_logs')
        .insert({
          crawl_entity_id: id,
          event: 'update',
          event_description: `${prevStatus} → edited`,
          value: {
            ...value
          },
        })
      return id;
    }
  })

  const revertEntity = () => mutationOptions({
    mutationFn: async (payload: { id: string, value: T, prevStatus: string }) => {
      const { value, id, prevStatus } = payload;
      // update
      const updateRes = await supabaseClient
        .from('clients_website_crawl_entities')
        .update({
          final_value: null,
          edited_at: new Date().toISOString(),
          status: 'suggested'
        })
        .eq('id', id)

      if (updateRes.error)
        throw updateRes.error;

      // create log
      await supabaseClient
        .from('clients_website_crawl_entity_logs')
        .insert({
          crawl_entity_id: id,
          event: 'revert',
          event_description: `${prevStatus} → suggested`,
          value: {
            ...value
          },
        })
      return id;
    }
  })

  const deleteEntity = () => mutationOptions({
    mutationFn: async (id: string) => {
      return await supabaseClient
        .from('clients_website_crawl_entities')
        .delete()
        .eq('id', id)
    }
  })

  return {
    createEntity,
    deleteEntity,
    updateEntity,
    updateStatus,
    revertEntity
  }
}