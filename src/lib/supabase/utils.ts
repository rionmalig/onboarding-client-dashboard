import { CrawlEntity, CrawlEntityValueUnion } from "../types/business/website-crawl";

export const getCurrentValue = <T extends CrawlEntityValueUnion>(crawlEntity: CrawlEntity) => {
  const aiValue = crawlEntity.ai_value as T;
  const finalValue = crawlEntity.final_value as T;

  const hasChanged = !!finalValue && aiValue !== finalValue;
  const value = !finalValue ? aiValue : !hasChanged ? aiValue : finalValue;

  return { value, hasChanged }
}