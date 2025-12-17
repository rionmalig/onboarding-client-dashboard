import { JobStatus } from "@/lib/types/business/website-crawl";
import { cn } from "@/lib/ui/utils";
import { cva } from "class-variance-authority";
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react";

const jobStatusVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      status: {
        pending: "bg-muted text-muted-foreground",
        running: "bg-ai-badge/15 text-ai-badge",
        completed: "bg-accepted-badge/15 text-accepted-badge",
        failed: "bg-destructive/15 text-destructive",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
);

interface ReviewJobStatusBadgeProps {
  status: JobStatus;
  className?: string;
}

const statusIcons = {
  pending: Clock,
  running: Loader2,
  completed: CheckCircle,
  failed: XCircle,
};

const statusLabels = {
  pending: "Pending",
  running: "Running",
  completed: "Completed",
  failed: "Failed",
};

export default function ReviewJobStatusBadge({ status, className }: ReviewJobStatusBadgeProps) {
  const Icon = statusIcons[status];

  return (
    <span className={cn(jobStatusVariants({ status }), className)}>
      <Icon className={cn("h-3.5 w-3.5", status === "running" && "animate-spin")} />
      {statusLabels[status]}
    </span>
  );
}
