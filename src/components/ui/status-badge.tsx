import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ui/utils";
import { Sparkles, Pencil, Check, AlertTriangle } from "lucide-react";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      status: {
        suggested: "bg-ai-badge/15 text-ai-badge border border-ai-badge/30",
        edited: "bg-edited-badge/15 text-edited-badge border border-edited-badge/30",
        accepted: "bg-accepted-badge/15 text-accepted-badge border border-accepted-badge/30",
        rejected: "bg-destructive/15 text-destructive border border-destructive/30",
        warning: "bg-warning/15 text-warning border border-warning/30",
      },
    },
    defaultVariants: {
      status: "suggested",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof statusBadgeVariants> {
  showIcon?: boolean;
}

const statusIcons = {
  suggested: Sparkles,
  edited: Pencil,
  accepted: Check,
  rejected: AlertTriangle,
  warning: AlertTriangle,
};

export function StatusBadge({
  className,
  status,
  showIcon = true,
  children,
  ...props
}: StatusBadgeProps) {
  const Icon = status ? statusIcons[status] : Sparkles;

  return (
    <span className={cn(statusBadgeVariants({ status }), className)} {...props}>
      {showIcon && <Icon className="h-3 w-3" />}
      {children}
    </span>
  );
}
