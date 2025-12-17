'use client'

import { TableCell, TableRow } from "@/components/ui/table";
import { ExternalLink, Eye, RotateCcw } from "lucide-react";
import ReviewJobStatusBadge from "./review-job-status-badge";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JobStatus } from "@/lib/types/business/website-crawl";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

type ReviewJobsTableRowProps = {
  job: {
    id: string;
    status: string | null;
    source: string | null;
    created_at: string;
    clients_hubspot: {
      companyName: string | null;
      domain: string | null;
      id: string;
    };
  }
}



const ReviewJobsTableRow = ({ job }: ReviewJobsTableRowProps) => {
  const queryClient = useQueryClient();

  const retryCrawlJob = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_N8N_BASE_URL}/crawl-retry`, {
      job_id: job.id,
      client_id: job.clients_hubspot.id
    }).catch(e => {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data);
      }
    })

    queryClient.invalidateQueries({
      queryKey: ['clients_website_crawl_jobs']
    })
  }

  return (
    <TableRow key={job.id} className="hover:bg-muted/30 transition-colors">
      <TableCell className="font-medium">{job.clients_hubspot.companyName}</TableCell>
      <TableCell>
        {
          job.clients_hubspot.domain ? (
            <a
              href={job.clients_hubspot.domain
                ? job.clients_hubspot.domain.startsWith("http")
                  ? job.clients_hubspot.domain
                  : `https://${job.clients_hubspot.domain}`
                : ""}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              {job.clients_hubspot.domain}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <p>
              No Domain
            </p>
          )
        }
        
      </TableCell>
      <TableCell>
        <ReviewJobStatusBadge status={job.status as JobStatus} />
      </TableCell>
      <TableCell className="text-muted-foreground text-sm">
        {job.source}
      </TableCell>
      <TableCell className="text-muted-foreground text-sm">
        {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
      </TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
          {job.status === "completed" && (
            <Button asChild size="sm" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href={`onboarding-client/${job.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                Review
              </Link>
            </Button>
          )}
          {job.status === "failed" && (
            <Button size="sm" variant="outline" onClick={retryCrawlJob}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Retry
            </Button>
          )}
          {job.status === "running" && (
            <span className="text-sm text-muted-foreground">Processing...</span>
          )}
          {job.status === "pending" && (
            <span className="text-sm text-muted-foreground">Waiting...</span>
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ReviewJobsTableRow;