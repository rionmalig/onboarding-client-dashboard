// CLEAN ME NEXT IF EVER

import { redirect } from "next/navigation";
import ClientHeader from "./_components/client-header";
import CrawlSummary from "./_components/crawl-summary";
import TabContainer from "./_components/tab/tab-container";
import CategoryTab from "./_components/tab/tabs/category/category-tab";
import WaiverTab from "./_components/tab/tabs/waiver/waiver-tab";
import CalendarTab from "./_components/tab/tabs/calendar/calendar-tab";
import { RegistrationTab } from "./_components/tab/tabs/registration/registration-tab";
import FlagTab from "./_components/tab/tabs/flags/flag-tab";
import { createClient } from "@/lib/supabase/server";
import { TabsContent } from "@/components/ui/tab";
import { Category, CrawlEntity, RedFlag, RegistrationField, Schedule, Waiver } from "@/lib/types/business/website-crawl";

export default async function WebsiteReviewDetail({
  params,
}: {
  params: Promise<{ client: string }>
}) {
  const { client } = await params
  const supabaseClient = await createClient();
  //puta in a diffent file
  const { data: job } = await supabaseClient
    .from('clients_website_crawl_jobs')
    .select(`
      id,
      status,
      source,
      created_at,
      assigned_va_email,
      clients_hubspot (
        companyName,  
        domain
      ),
      clients_website_crawl_entities (
        *
      )
    `)
    .eq('id', client)
    .single();

  if (!job)
    return redirect('/onboarding-client')

  const categories = job.clients_website_crawl_entities.filter(e => e.type === 'category') as unknown as CrawlEntity<Category>[];
  const waivers = job.clients_website_crawl_entities.filter(e => e.type === 'waiver') as unknown as CrawlEntity<Waiver>[];
  const schedules = job.clients_website_crawl_entities.filter(e => e.type === 'schedule') as unknown as CrawlEntity<Schedule>[];
  const fields = job.clients_website_crawl_entities.filter(e => e.type === 'field') as unknown as CrawlEntity<RegistrationField>[];
  const flags = job.clients_website_crawl_entities.filter(e => e.type === 'flag') as unknown as CrawlEntity<RedFlag>[];

  return (
    <div className="space-y-6">
      <ClientHeader job={job} />

      <CrawlSummary data={{
        categories,
        waivers,
        schedules,
        fields,
        flags
      }} />

      <TabContainer data={{
        categories,
        waivers,
        schedules,
        fields,
        flags
      }}>
        {/* CLEAN THE TABS BRUH WHAT THE HELLY */}
        <TabsContent value="categories" className="space-y-4">
          <CategoryTab
            jobId={job.id}
            initialData={categories}
          />
        </TabsContent>
        <TabsContent value="waivers" className="space-y-4">
          <WaiverTab 
            jobId={job.id}
            initialData={waivers}
          />
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <CalendarTab
            jobId={job.id}
            initialData={schedules}
          />
        </TabsContent>
        <TabsContent value="registration" className="space-y-4">
          <RegistrationTab
            jobId={job.id}
            initialData={fields}
          />
        </TabsContent>

        <TabsContent value="flag" className="space-y-4">
          <FlagTab 
            jobId={job.id}
            initialData={flags}
          />
        </TabsContent>
      </TabContainer>
    </div>
  );
}
