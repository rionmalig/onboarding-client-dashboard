'use client'

import { TableBody } from "@/components/ui/table"
import ReviewJobsTableRow from "./review-jobs-table-row"
import { useCrawlJobQuery } from "../_hooks/jobs-query";
import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useUIState } from "../_hooks/context";

const ReviewJobsTableBody = () => {
  const supabaseClient = createClient();
  const { crawlJobQuery } = useCrawlJobQuery(supabaseClient);
  const { searchFilter } = useUIState();

  const { data: jobs } = useQuery(crawlJobQuery)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      (job.clients_hubspot.companyName && job.clients_hubspot.companyName.toLowerCase().includes(searchFilter.searchFilter.toLowerCase())) ||
      (job.clients_hubspot.domain && job.clients_hubspot.domain.toLowerCase().includes(searchFilter.jobstatusFilter.toLowerCase()));
    const matchesStatus = searchFilter.jobstatusFilter === "all" || job.status === searchFilter.jobstatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <TableBody>
      {(filteredJobs).map((job) => (
        <ReviewJobsTableRow
          key={job.id}
          job={job}
        />
      ))}
    </TableBody>
  )
}

export default ReviewJobsTableBody