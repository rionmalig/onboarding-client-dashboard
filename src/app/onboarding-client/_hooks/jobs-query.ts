import { Database } from "@/lib/supabase/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { queryOptions } from "@tanstack/react-query"

export const useCrawlJobQuery = (supabaseClient: SupabaseClient<Database>) => {
  const crawlJobQuery = queryOptions({
    queryKey: ["clients_website_crawl_jobs"],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from('clients_website_crawl_jobs')
        .select(`
      id,
      status,
      source,
      created_at,
      clients_hubspot (
        id,
        companyName,  
        domain
      )
      `)
      if (!data)
        return []
      if (error)
        throw error
      return data
    },
    initialData: []
  })

  return {
    crawlJobQuery
  }
}