import { JobStatus } from "../../business/website-crawl"

export type SearchFilter = {
  searchFilter: string,
  jobstatusFilter: JobStatus | 'all'
}

export type CrawlJobCount = {
  completed: number,
  inProgress: number
  failed: number
}