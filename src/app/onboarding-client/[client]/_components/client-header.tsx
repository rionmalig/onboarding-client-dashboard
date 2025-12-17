import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Clock,
  ArrowLeft,
  Mail,
} from "lucide-react"
import Link from "next/link";
import ReviewJobStatusBadge from "../../_components/review-job-status-badge";
import { formatDistanceToNow } from "date-fns";
import { JobStatus } from "@/lib/types/business/website-crawl";

type ClientHeaderProps = {
  job: {
    id: string;
    status: string | null;
    source: string | null;
    created_at: string;
    assigned_va_email: string | null;
    clients_hubspot: {
      companyName: string | null;
      domain: string | null;
    };
  }
}

const ClientHeader = ({ job }: ClientHeaderProps) => {
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-4">
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link href="/onboarding-client">
            <ArrowLeft className="h-4 w-4" />
            Back to Reviews
          </Link>
        </Button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">{job.clients_hubspot.companyName}</h1>
            {/* fix this later bruh */}
            <ReviewJobStatusBadge status={job.status as JobStatus} />
          </div>
          <a
            href={job.clients_hubspot.domain
              ? job.clients_hubspot.domain.startsWith("http")
                ? job.clients_hubspot.domain
                : `https://${job.clients_hubspot.domain}`
              : ""}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline mt-1"
          >
            {job.clients_hubspot.domain}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
      <div className="text-right text-sm text-muted-foreground space-y-1">
        <div className="flex items-center gap-2 justify-end">
          <Clock className="h-4 w-4" />
          Created {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </div>
        {job.assigned_va_email && (
          <div className="flex items-center gap-2 justify-end">
            <Mail className="h-4 w-4" />
            job.assigned_va_email
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientHeader;