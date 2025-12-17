import { WebsiteCrawlJob, Category, Waiver, CalendarLogic, RegistrationField, RedFlag } from "@/lib/types/business/website-crawl";

export const mockJobs: WebsiteCrawlJob[] = [
  {
    id: "job-1",
    client_id: "client-001",
    client_name: "Sunshine Sports Academy",
    client_website_url: "https://sunshinesports.com",
    assigned_va_email: "va@playbook.com",
    status: "completed",
    source: "slack:#api-requests",
    created_at: "2024-12-08T10:30:00Z",
    updated_at: "2024-12-08T10:45:00Z",
  },
  {
    id: "job-2",
    client_id: "client-002",
    client_name: "Mountain Youth Center",
    client_website_url: "https://mountainyouth.org",
    assigned_va_email: "va@playbook.com",
    status: "running",
    source: "slack:#api-requests",
    created_at: "2024-12-08T11:00:00Z",
    updated_at: "2024-12-08T11:00:00Z",
  },
  {
    id: "job-3",
    client_id: "client-003",
    client_name: "Creative Arts Studio",
    client_website_url: "https://creativeartstudio.com",
    assigned_va_email: "va@playbook.com",
    status: "failed",
    source: "slack:#api-requests",
    created_at: "2024-12-07T14:20:00Z",
    updated_at: "2024-12-07T14:25:00Z",
    error_message: "Failed to crawl website: Connection timeout",
  },
  {
    id: "job-4",
    client_id: "client-004",
    client_name: "Elite Tennis Club",
    client_website_url: "https://elitetennis.net",
    assigned_va_email: "va@playbook.com",
    status: "pending",
    source: "slack:#api-requests",
    created_at: "2024-12-08T12:00:00Z",
    updated_at: "2024-12-08T12:00:00Z",
  },
];

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    job_id: "job-1",
    entity_type: "category",
    ai_value: "Basketball Programs",
    final_value: "Basketball Programs",
    status: "accepted",
    edited_by: "va@playbook.com",
    edited_at: "2024-12-08T11:00:00Z",
    metadata: {
      programs: ["Youth Basketball", "Adult League", "Summer Camp"],
      description: "All basketball-related programs and camps",
    },
  },
  {
    id: "cat-2",
    job_id: "job-1",
    entity_type: "category",
    ai_value: "Soccer Training",
    final_value: "Soccer & Futsal",
    status: "edited",
    edited_by: "va@playbook.com",
    edited_at: "2024-12-08T11:05:00Z",
    metadata: {
      programs: ["Soccer Academy", "Futsal League"],
      description: "Soccer and futsal programs",
    },
  },
  {
    id: "cat-3",
    job_id: "job-1",
    entity_type: "category",
    ai_value: "Swimming Lessons",
    final_value: "Swimming Lessons",
    status: "suggested",
    metadata: {
      programs: ["Beginner Swim", "Advanced Swim", "Adult Swim"],
      description: "Swimming instruction for all ages",
    },
  },
];

export const mockWaivers: Waiver[] = [
  {
    id: "waiver-1",
    job_id: "job-1",
    entity_type: "waiver",
    ai_value: "Standard Liability Waiver",
    final_value: "Standard Liability Waiver",
    status: "suggested",
    metadata: {
      title: "Liability Release and Waiver",
      content_preview: "I hereby release and forever discharge Sunshine Sports Academy from any and all claims, demands, damages...",
    },
  },
  {
    id: "waiver-2",
    job_id: "job-1",
    entity_type: "waiver",
    ai_value: "Photo/Video Release",
    final_value: "Media Release Form",
    status: "edited",
    edited_by: "va@playbook.com",
    edited_at: "2024-12-08T11:10:00Z",
    metadata: {
      title: "Media Release Form",
      content_preview: "I grant permission for photographs and videos of my child to be used for promotional purposes...",
    },
  },
];

export const mockCalendarLogic: CalendarLogic[] = [
  {
    id: "cal-1",
    job_id: "job-1",
    entity_type: "calendar_logic",
    ai_value: "Fall Term: September - December, Spring Term: January - May",
    final_value: "Fall Term: September - December, Spring Term: January - May",
    status: "accepted",
    metadata: {
      type: "term",
      schedule_summary: "Two main terms with summer camps in between",
    },
  },
  {
    id: "cal-2",
    job_id: "job-1",
    entity_type: "calendar_logic",
    ai_value: "Weekly sessions on Saturdays 9AM-12PM",
    final_value: "Weekly sessions on Saturdays 9AM-12PM",
    status: "suggested",
    metadata: {
      type: "recurring",
      schedule_summary: "Weekend programs run every Saturday morning",
    },
  },
];

export const mockRegistrationFields: RegistrationField[] = [
  {
    id: "field-1",
    job_id: "job-1",
    entity_type: "registration_field",
    ai_value: "Participant Name",
    final_value: "Participant Full Name",
    status: "edited",
    edited_by: "va@playbook.com",
    edited_at: "2024-12-08T11:15:00Z",
    metadata: {
      field_name: "participant_name",
      field_type: "text",
      required: true,
    },
  },
  {
    id: "field-2",
    job_id: "job-1",
    entity_type: "registration_field",
    ai_value: "Date of Birth",
    final_value: "Date of Birth",
    status: "suggested",
    metadata: {
      field_name: "date_of_birth",
      field_type: "date",
      required: true,
    },
  },
  {
    id: "field-3",
    job_id: "job-1",
    entity_type: "registration_field",
    ai_value: "Emergency Contact",
    final_value: "Emergency Contact",
    status: "suggested",
    metadata: {
      field_name: "emergency_contact",
      field_type: "text",
      required: true,
    },
  },
  {
    id: "field-4",
    job_id: "job-1",
    entity_type: "registration_field",
    ai_value: "T-Shirt Size",
    final_value: "T-Shirt Size",
    status: "suggested",
    metadata: {
      field_name: "tshirt_size",
      field_type: "select",
      required: false,
      options: ["XS", "S", "M", "L", "XL"],
    },
  },
];

export const mockRedFlags: RedFlag[] = [
  {
    id: "flag-1",
    job_id: "job-1",
    entity_type: "red_flag",
    ai_value: "Missing medical information consent",
    final_value: "Missing medical information consent",
    status: "suggested",
    metadata: {
      severity: "high",
      area: "Waivers",
      recommendation: "Add a medical information release form for participants",
    },
  },
  {
    id: "flag-2",
    job_id: "job-1",
    entity_type: "red_flag",
    ai_value: "Inconsistent pricing on multiple pages",
    final_value: "Inconsistent pricing on multiple pages",
    status: "suggested",
    metadata: {
      severity: "medium",
      area: "Pricing",
      recommendation: "Review and standardize pricing information across all program pages",
    },
  },
];
