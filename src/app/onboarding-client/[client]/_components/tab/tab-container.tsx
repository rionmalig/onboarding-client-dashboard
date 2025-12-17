import { Tabs } from "@/components/ui/tab";
import TabButtons from "./tab-buttons";
import { ReactNode } from "react";
import { Category, CrawlEntity, RedFlag, RegistrationField, Schedule, Waiver } from "@/lib/types/business/website-crawl";

type TabContainerProps = {
  data: {
    categories: CrawlEntity<Category>[],
    waivers: CrawlEntity<Waiver>[],
    schedules: CrawlEntity<Schedule>[],
    fields: CrawlEntity<RegistrationField>[],
    flags: CrawlEntity<RedFlag>[]
  },
  children?: ReactNode
}
const TabContainer = ({ data, children }: TabContainerProps) => {
  return (
    <Tabs defaultValue="categories" className="space-y-6">
      <TabButtons data={data} />
      {children}
    </Tabs>
  )
}

export default TabContainer;