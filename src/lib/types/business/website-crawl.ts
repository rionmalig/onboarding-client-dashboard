
export type EntityStatus = 'suggested' | 'edited' | 'accepted' | 'rejected';

export type JobStatus = 'pending' | 'running' | 'completed' | 'failed';

export type CrawlEntityValueUnion = Category | Waiver | Schedule | RegistrationField | RedFlag;

export type CrawlEntity<T extends CrawlEntityValueUnion> = {
  id: string;
  crawl_job_id: string;

  ai_value: T;
  final_value: T | null;

  status: EntityStatus;
  type: string;
  edited_at: string | null;
  edited_by: string | null;
}

export interface CrawlEntityValue {
  value: string;
  metadata?: Record<string, unknown>;
}

export interface Category extends CrawlEntityValue {
  metadata: {
    programs: string[];
    description?: string;
  };
}

export interface Schedule extends CrawlEntityValue {
  metadata: {
    type: 'term' | 'recurring' | 'one-time';
    schedule_summary?: string;
  };
}

export interface Waiver extends CrawlEntityValue {
  metadata: {
    title: string;
    content: string;
  };
}

export interface RegistrationField extends CrawlEntityValue {
  metadata: {
    field_name: string;
    field_type:
    | 'text'
    | 'email'
    | 'phone'
    | 'select'
    | 'checkbox'
    | 'date'
    | 'number';
    required: boolean;
    options?: string[];
  };
}

export interface RedFlag extends CrawlEntityValue {
  metadata: {
    severity: 'low' | 'medium' | 'high';
    area: string;
    recommendation?: string;
  };
}