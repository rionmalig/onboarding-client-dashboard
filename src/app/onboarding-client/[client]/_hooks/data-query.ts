import { Database } from "@/lib/supabase/supabase";
import { CrawlEntity, CrawlEntityValueUnion } from "@/lib/types/business/website-crawl";
import { SupabaseClient } from "@supabase/supabase-js";
import { queryOptions } from "@tanstack/react-query";

export const useCrawlEntityQuery = <T extends CrawlEntityValueUnion>(ENTITY_TYPE: string, jobId: string) => {
  const query = (supabaseClient: SupabaseClient<Database>, initialData?: CrawlEntity<T>[]) => queryOptions({
    queryKey: ["clients_website_crawl_entities", ENTITY_TYPE, jobId],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from("clients_website_crawl_entities")
        .select(`*`)
        .order('ai_value')
        .eq("crawl_job_id", jobId)
        .eq('type', ENTITY_TYPE);

      if (error) throw error;

      return data.map(item => ({
        ...item,
        ai_value: {
          ...item.ai_value as unknown as T
        } as T
      }) as CrawlEntity<T>
    )},
    initialData: initialData ?? []
  });
  
  return {
    query
  }
}