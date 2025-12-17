import { Badge } from "@/components/ui/badge";
import { Category, CrawlEntity, RedFlag, RegistrationField, Schedule, Waiver } from "@/lib/types/business/website-crawl";
import { Sparkles } from "lucide-react";

type CrawlSummaryProps = {
  data: {
    categories: CrawlEntity<Category>[],
    waivers: CrawlEntity<Waiver>[],
    schedules: CrawlEntity<Schedule>[],
    fields: CrawlEntity<RegistrationField>[],
    flags: CrawlEntity<RedFlag>[]
  }
}
const CrawlSummary = ({ data }: CrawlSummaryProps) => {
  const { categories, waivers, schedules, fields, flags } = data;
  const suggestedCount =
    categories.filter(c => c.status === "suggested").length +
    waivers.filter(w => w.status === "suggested").length +
    schedules.filter(c => c.status === "suggested").length +
    fields.filter(f => f.status === "suggested").length +
    flags.filter(f => f.status === "suggested").length;

  return (
    <div className="bg-card border rounded-lg p-4 flex flex-wrap items-center gap-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-ai-badge" />
        <span className="font-medium">AI Suggestions Pending:</span>
        <Badge variant="secondary">{suggestedCount}</Badge>
      </div>
      <div className="h-6 w-px bg-border" />
      <div className="flex gap-4 text-sm">
        <span><strong>{categories.length}</strong> Categories</span>
        <span><strong>{waivers.length}</strong> Waivers</span>
        <span><strong>{schedules.length}</strong> Schedules</span>
        <span><strong>{fields.length}</strong> Fields</span>
        <span className="text-destructive"><strong>{flags.length}</strong> Red Flags</span>
      </div>
    </div>
  )
}

export default CrawlSummary;