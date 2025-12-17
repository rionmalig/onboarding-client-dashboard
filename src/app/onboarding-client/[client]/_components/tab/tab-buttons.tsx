import { Badge } from "@/components/ui/badge";
import { TabsList, TabsTrigger } from "@/components/ui/tab";
import { Category, CrawlEntity, RedFlag, RegistrationField, Schedule, Waiver } from "@/lib/types/business/website-crawl";

type TabButtonsProps = {
  data: {
    categories: CrawlEntity<Category>[],
    waivers: CrawlEntity<Waiver>[],
    schedules: CrawlEntity<Schedule>[],
    fields: CrawlEntity<RegistrationField>[],
    flags: CrawlEntity<RedFlag>[]
  }
}


const TabButtons = ({ data }: TabButtonsProps) => {
  const { categories, waivers, schedules, flags, fields } = data
  return (
    <TabsList className="bg-muted/50 p-1">
      <TabsTrigger value="categories" className="data-[state=active]:bg-background">
        Categories
        <Badge variant="secondary" className="ml-2">{categories.length}</Badge>
      </TabsTrigger>
      <TabsTrigger value="waivers" className="data-[state=active]:bg-background">
        Waivers
        <Badge variant="secondary" className="ml-2">{waivers.length}</Badge>
      </TabsTrigger>
      <TabsTrigger value="calendar" className="data-[state=active]:bg-background">
        Calendar
        <Badge variant="secondary" className="ml-2">{schedules.length}</Badge>
      </TabsTrigger>
      <TabsTrigger value="registration" className="data-[state=active]:bg-background">
        Registration Fields
        <Badge variant="secondary" className="ml-2">{fields.length}</Badge>
      </TabsTrigger>
      <TabsTrigger value="flag" className="data-[state=active]:bg-background">
        Red Flags
        {flags.length > 0 && (
          <Badge variant="destructive" className="ml-2">{flags.length}</Badge>
        )}
      </TabsTrigger>
    </TabsList>
  )
}

export default TabButtons;