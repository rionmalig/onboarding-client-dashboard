import { Tabs } from "@/components/ui/tab";
import TabButtons from "./tab-buttons";
import { ReactNode } from "react";
import { CrawlEntity } from "@/lib/types/business/website-crawl";

type TabContainerProps = {
  data: {
    categories: CrawlEntity[],
    waivers: CrawlEntity[],
    schedules: CrawlEntity[],
    fields: CrawlEntity[],
    flags: CrawlEntity[]
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