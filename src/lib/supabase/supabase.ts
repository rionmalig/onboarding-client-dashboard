export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      "(backup) client_confusion_points": {
        Row: {
          clientid: string | null
          confusion_id: string
          created_at: string
          description: string | null
          difficulty_to_fix: number | null
          feature_area: string | null
          likeliness_to_impact_many: number | null
          meetingid: string | null
          negative_impact: number | null
          priority_score: number | null
          related_issues: string | null
          resolved_in_call: boolean | null
          suggested_improvements: string | null
          title: string | null
          transcript_evidence: string | null
          transcript_link: string | null
        }
        Insert: {
          clientid?: string | null
          confusion_id: string
          created_at?: string
          description?: string | null
          difficulty_to_fix?: number | null
          feature_area?: string | null
          likeliness_to_impact_many?: number | null
          meetingid?: string | null
          negative_impact?: number | null
          priority_score?: number | null
          related_issues?: string | null
          resolved_in_call?: boolean | null
          suggested_improvements?: string | null
          title?: string | null
          transcript_evidence?: string | null
          transcript_link?: string | null
        }
        Update: {
          clientid?: string | null
          confusion_id?: string
          created_at?: string
          description?: string | null
          difficulty_to_fix?: number | null
          feature_area?: string | null
          likeliness_to_impact_many?: number | null
          meetingid?: string | null
          negative_impact?: number | null
          priority_score?: number | null
          related_issues?: string | null
          resolved_in_call?: boolean | null
          suggested_improvements?: string | null
          title?: string | null
          transcript_evidence?: string | null
          transcript_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "(backup) client_confusion_points_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "backup_client_confusion_points_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      "(backup) cs_transcript_analysis": {
        Row: {
          agendaexecutionrating: number | null
          agendaexecutionreason: string | null
          analysisId: string
          buildingexcitementrating: number | null
          buildingexcitementreason: string | null
          churnriskrating: number | null
          churnriskreason: string | null
          clientid: string
          clientname: string | null
          fppprocessingrating: number | null
          fppprocessingreason: string | null
          meetingId: string
          npsrating: number | null
          npsreason: string | null
          Overall_Impact: number | null
          transcript: string | null
        }
        Insert: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisId?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          clientid: string
          clientname?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingId: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
          transcript?: string | null
        }
        Update: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisId?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          clientid?: string
          clientname?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingId?: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cs_transcript_analysis (backup)_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
          {
            foreignKeyName: "csm_transcript_analysis_duplicate_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
        ]
      }
      "(backup) csm_action_agent_support_agenda": {
        Row: {
          call_agenda: string[]
          call_date: string | null
          call_title: string | null
          clientname: string | null
          csm_email: string | null
          id: number
          meetingid: string | null
        }
        Insert: {
          call_agenda: string[]
          call_date?: string | null
          call_title?: string | null
          clientname?: string | null
          csm_email?: string | null
          id?: number
          meetingid?: string | null
        }
        Update: {
          call_agenda?: string[]
          call_date?: string | null
          call_title?: string | null
          clientname?: string | null
          csm_email?: string | null
          id?: number
          meetingid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_action_agent_support_agenda_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      "(backup) meetings": {
        Row: {
          clariid: string | null
          clientid: string
          meetingdatetime: string
          meetingid: string
          meetingname: string
          participants: string | null
          transcript: string | null
        }
        Insert: {
          clariid?: string | null
          clientid: string
          meetingdatetime: string
          meetingid?: string
          meetingname: string
          participants?: string | null
          transcript?: string | null
        }
        Update: {
          clariid?: string | null
          clientid?: string
          meetingdatetime?: string
          meetingid?: string
          meetingname?: string
          participants?: string | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meetings (backup)_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
        ]
      }
      "(backup) product_analysis_issues": {
        Row: {
          acceptance_criteria: string | null
          ai_explanation: string | null
          assigned_to: string | null
          call_summary: string | null
          category: string | null
          churn_risk_score: number | null
          clientid: string
          created_at: string
          historical_context: Json | null
          meetingid: string | null
          related_keywords: string | null
          risk_justification: Json | null
          severity: string | null
          status: string | null
          ticket_id: string
          time_estimates: Json | null
          time_urgency_score: number | null
          title: string | null
          user_story: string | null
          work_to_be_done: string | null
        }
        Insert: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          call_summary?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid: string
          created_at: string
          historical_context?: Json | null
          meetingid?: string | null
          related_keywords?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id: string
          time_estimates?: Json | null
          time_urgency_score?: number | null
          title?: string | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Update: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          call_summary?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid?: string
          created_at?: string
          historical_context?: Json | null
          meetingid?: string | null
          related_keywords?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id?: string
          time_estimates?: Json | null
          time_urgency_score?: number | null
          title?: string | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "(backup) product_analysis_issues_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "product_analysis_issues (backup)_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      "(backup) risk_classification_tracker": {
        Row: {
          clientid: string
          current_level: string | null
          high_risk_flag: boolean | null
          history: string | null
          meetingid: string | null
          reported_at: string | null
          summary: string | null
        }
        Insert: {
          clientid: string
          current_level?: string | null
          high_risk_flag?: boolean | null
          history?: string | null
          meetingid?: string | null
          reported_at?: string | null
          summary?: string | null
        }
        Update: {
          clientid?: string
          current_level?: string | null
          high_risk_flag?: boolean | null
          history?: string | null
          meetingid?: string | null
          reported_at?: string | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "(backup) risk_classification_tracker_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: true
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "(backup) risk_classification_tracker_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      "72_hour_tracker": {
        Row: {
          category: string | null
          clientid: string | null
          reported_at: string
          summary: string | null
          task_done: boolean | null
          ticket_id: string
        }
        Insert: {
          category?: string | null
          clientid?: string | null
          reported_at: string
          summary?: string | null
          task_done?: boolean | null
          ticket_id: string
        }
        Update: {
          category?: string | null
          clientid?: string | null
          reported_at?: string
          summary?: string | null
          task_done?: boolean | null
          ticket_id?: string
        }
        Relationships: []
      }
      AA: {
        Row: {
          client: string | null
          created_at: string
          csm: string | null
          done: boolean
          id: number
          task: string | null
        }
        Insert: {
          client?: string | null
          created_at?: string
          csm?: string | null
          done?: boolean
          id?: number
          task?: string | null
        }
        Update: {
          client?: string | null
          created_at?: string
          csm?: string | null
          done?: boolean
          id?: number
          task?: string | null
        }
        Relationships: []
      }
      ae_analysis_info: {
        Row: {
          ae_analysis_id: string
          clientid: string | null
        }
        Insert: {
          ae_analysis_id?: string
          clientid?: string | null
        }
        Update: {
          ae_analysis_id?: string
          clientid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ae_analysis_info_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
        ]
      }
      ae_tracker_availability_logs: {
        Row: {
          ae_email: string
          day_checked: string | null
          endTime: string | null
          id: string
          startTime: string | null
        }
        Insert: {
          ae_email: string
          day_checked?: string | null
          endTime?: string | null
          id?: string
          startTime?: string | null
        }
        Update: {
          ae_email?: string
          day_checked?: string | null
          endTime?: string | null
          id?: string
          startTime?: string | null
        }
        Relationships: []
      }
      ai_sports_coach_conversation_history: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      assignments_task_assigner: {
        Row: {
          assigned_at: string | null
          id: string
          task_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          id?: string
          task_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          id?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_assignments_task"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_task_assigner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_assignments_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_task_assigner"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_log_cnc: {
        Row: {
          event_type: string
          id: number
          timestamp: string
          user_id: number
        }
        Insert: {
          event_type: string
          id?: never
          timestamp?: string
          user_id: number
        }
        Update: {
          event_type?: string
          id?: never
          timestamp?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "attendance_log_cnc_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_cnc"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_records: {
        Row: {
          created_at: string
          employee_name: string
          event_type: string
          id: number
          is_holiday: boolean
          is_pto: boolean
          is_sick: boolean
          record_date: string
          time_in: string | null
          time_out: string | null
        }
        Insert: {
          created_at?: string
          employee_name: string
          event_type: string
          id?: number
          is_holiday?: boolean
          is_pto?: boolean
          is_sick?: boolean
          record_date: string
          time_in?: string | null
          time_out?: string | null
        }
        Update: {
          created_at?: string
          employee_name?: string
          event_type?: string
          id?: number
          is_holiday?: boolean
          is_pto?: boolean
          is_sick?: boolean
          record_date?: string
          time_in?: string | null
          time_out?: string | null
        }
        Relationships: []
      }
      attendance_test: {
        Row: {
          clocked_in: string | null
          clocked_out: string | null
          date: string | null
          id: number
          leave_type: string | null
          user_id: string
          username: string
        }
        Insert: {
          clocked_in?: string | null
          clocked_out?: string | null
          date?: string | null
          id?: number
          leave_type?: string | null
          user_id: string
          username: string
        }
        Update: {
          clocked_in?: string | null
          clocked_out?: string | null
          date?: string | null
          id?: number
          leave_type?: string | null
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      bda_call_booked_demo: {
        Row: {
          company_name: string
          description: string | null
          estimated_annual_revenue: string | null
          estimated_company_size: string | null
          industry_sector: string | null
          key_offerings: string | null
          location: string | null
          notable_investors: string | null
          recent_funding_rounds: string | null
          target_market: string | null
          website_url: string | null
        }
        Insert: {
          company_name?: string
          description?: string | null
          estimated_annual_revenue?: string | null
          estimated_company_size?: string | null
          industry_sector?: string | null
          key_offerings?: string | null
          location?: string | null
          notable_investors?: string | null
          recent_funding_rounds?: string | null
          target_market?: string | null
          website_url?: string | null
        }
        Update: {
          company_name?: string
          description?: string | null
          estimated_annual_revenue?: string | null
          estimated_company_size?: string | null
          industry_sector?: string | null
          key_offerings?: string | null
          location?: string | null
          notable_investors?: string | null
          recent_funding_rounds?: string | null
          target_market?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      bda_followup_log: {
        Row: {
          call_id: string | null
          contact_id: string | null
          created_at: string
          demo_booked_decision: boolean
          email_body: string | null
          email_sent: boolean
          id: number
          is_icp: string | null
          sms_body: string
          sms_sent: boolean
        }
        Insert: {
          call_id?: string | null
          contact_id?: string | null
          created_at?: string
          demo_booked_decision: boolean
          email_body?: string | null
          email_sent?: boolean
          id?: number
          is_icp?: string | null
          sms_body?: string
          sms_sent?: boolean
        }
        Update: {
          call_id?: string | null
          contact_id?: string | null
          created_at?: string
          demo_booked_decision?: boolean
          email_body?: string | null
          email_sent?: boolean
          id?: number
          is_icp?: string | null
          sms_body?: string
          sms_sent?: boolean
        }
        Relationships: []
      }
      cakemail_campaigns_chat_history: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      cakemail_temp_api_holder: {
        Row: {
          created_at: string
          id: string
          key: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          key?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          key?: string | null
        }
        Relationships: []
      }
      call_details: {
        Row: {
          call_id: string
          call_title: string
          clari_call_lkin: string
          csm_email: string | null
          hubspot_company_id: string | null
          id: string
          participants: string | null
          time: string
          transcript: string | null
        }
        Insert: {
          call_id: string
          call_title: string
          clari_call_lkin: string
          csm_email?: string | null
          hubspot_company_id?: string | null
          id?: string
          participants?: string | null
          time?: string
          transcript?: string | null
        }
        Update: {
          call_id?: string
          call_title?: string
          clari_call_lkin?: string
          csm_email?: string | null
          hubspot_company_id?: string | null
          id?: string
          participants?: string | null
          time?: string
          transcript?: string | null
        }
        Relationships: []
      }
      calls: {
        Row: {
          call_id: string
          call_name: string
          csm_email: string
          id: string
        }
        Insert: {
          call_id: string
          call_name: string
          csm_email: string
          id?: string
        }
        Update: {
          call_id?: string
          call_name?: string
          csm_email?: string
          id?: string
        }
        Relationships: []
      }
      client_confusion_points: {
        Row: {
          clientid: string | null
          confusion_id: string
          created_at: string
          description: string | null
          difficulty_to_fix: number | null
          feature_area: string | null
          likeliness_to_impact_many: number | null
          meetingid: string | null
          negative_impact: number | null
          priority_score: number | null
          related_issues: string | null
          resolved_in_call: boolean | null
          suggested_improvements: string | null
          title: string | null
          transcript_evidence: string | null
          transcript_link: string | null
        }
        Insert: {
          clientid?: string | null
          confusion_id: string
          created_at?: string
          description?: string | null
          difficulty_to_fix?: number | null
          feature_area?: string | null
          likeliness_to_impact_many?: number | null
          meetingid?: string | null
          negative_impact?: number | null
          priority_score?: number | null
          related_issues?: string | null
          resolved_in_call?: boolean | null
          suggested_improvements?: string | null
          title?: string | null
          transcript_evidence?: string | null
          transcript_link?: string | null
        }
        Update: {
          clientid?: string | null
          confusion_id?: string
          created_at?: string
          description?: string | null
          difficulty_to_fix?: number | null
          feature_area?: string | null
          likeliness_to_impact_many?: number | null
          meetingid?: string | null
          negative_impact?: number | null
          priority_score?: number | null
          related_issues?: string | null
          resolved_in_call?: boolean | null
          suggested_improvements?: string | null
          title?: string | null
          transcript_evidence?: string | null
          transcript_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_confusion_points_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "client_confusion_points_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      client_master_records: {
        Row: {
          analysis_context: Json | null
          client_business_name: string | null
          client_id: string
          created_at: string
          hupsot_id: string | null
          latest_interaction: Json | null
          latest_run: string | null
          master_record_data: Json | null
          strategic_advisory: Json | null
        }
        Insert: {
          analysis_context?: Json | null
          client_business_name?: string | null
          client_id?: string
          created_at?: string
          hupsot_id?: string | null
          latest_interaction?: Json | null
          latest_run?: string | null
          master_record_data?: Json | null
          strategic_advisory?: Json | null
        }
        Update: {
          analysis_context?: Json | null
          client_business_name?: string | null
          client_id?: string
          created_at?: string
          hupsot_id?: string | null
          latest_interaction?: Json | null
          latest_run?: string | null
          master_record_data?: Json | null
          strategic_advisory?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "client_master_records_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
        ]
      }
      clientpulse_roles: {
        Row: {
          abbreviation: string | null
          created_at: string
          description: string | null
          id: string
          permissions: Json | null
          role: string | null
        }
        Insert: {
          abbreviation?: string | null
          created_at?: string
          description?: string | null
          id?: string
          permissions?: Json | null
          role?: string | null
        }
        Update: {
          abbreviation?: string | null
          created_at?: string
          description?: string | null
          id?: string
          permissions?: Json | null
          role?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          clientid: string
          clientname: string
          domainname: string | null
          hubspotID: string | null
        }
        Insert: {
          clientid?: string
          clientname: string
          domainname?: string | null
          hubspotID?: string | null
        }
        Update: {
          clientid?: string
          clientname?: string
          domainname?: string | null
          hubspotID?: string | null
        }
        Relationships: []
      }
      clients_hubspot: {
        Row: {
          companyId: string | null
          companyName: string | null
          contact_email: string | null
          created_at: string
          csm: string | null
          domain: string | null
          hubspotCompanyLink: string | null
          id: string
          next_meeting: string | null
        }
        Insert: {
          companyId?: string | null
          companyName?: string | null
          contact_email?: string | null
          created_at: string
          csm?: string | null
          domain?: string | null
          hubspotCompanyLink?: string | null
          id?: string
          next_meeting?: string | null
        }
        Update: {
          companyId?: string | null
          companyName?: string | null
          contact_email?: string | null
          created_at?: string
          csm?: string | null
          domain?: string | null
          hubspotCompanyLink?: string | null
          id?: string
          next_meeting?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_hubspot_csm_fkey"
            columns: ["csm"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["email"]
          },
        ]
      }
      clients_hubspot_risk_classification: {
        Row: {
          churn_risk: Json | null
          classification_rationale: Json | null
          comments: Json | null
          companyId: string
          date_analyzed: string
          email_draft: Json | null
          id: string
          meetingId: string | null
          required_actions: Json | null
        }
        Insert: {
          churn_risk?: Json | null
          classification_rationale?: Json | null
          comments?: Json | null
          companyId: string
          date_analyzed?: string
          email_draft?: Json | null
          id?: string
          meetingId?: string | null
          required_actions?: Json | null
        }
        Update: {
          churn_risk?: Json | null
          classification_rationale?: Json | null
          comments?: Json | null
          companyId?: string
          date_analyzed?: string
          email_draft?: Json | null
          id?: string
          meetingId?: string | null
          required_actions?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_hubspot_risk_classification_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
          {
            foreignKeyName: "clients_hubspot_risk_classification_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: true
            referencedRelation: "csm_meetings"
            referencedColumns: ["meetingId"]
          },
        ]
      }
      clients_website_crawl_entities: {
        Row: {
          ai_value: Json
          crawl_job_id: string
          edited_at: string | null
          edited_by: string | null
          final_value: Json | null
          id: string
          status: string
          type: string
        }
        Insert: {
          ai_value: Json
          crawl_job_id: string
          edited_at?: string | null
          edited_by?: string | null
          final_value?: Json | null
          id?: string
          status: string
          type: string
        }
        Update: {
          ai_value?: Json
          crawl_job_id?: string
          edited_at?: string | null
          edited_by?: string | null
          final_value?: Json | null
          id?: string
          status?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_website_crawl_entities_crawl_job_id_fkey"
            columns: ["crawl_job_id"]
            isOneToOne: false
            referencedRelation: "clients_website_crawl_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      clients_website_crawl_entity_logs: {
        Row: {
          crawl_entity_id: string
          created_at: string
          created_by: string | null
          event: string | null
          event_description: string | null
          id: string
          value: Json | null
        }
        Insert: {
          crawl_entity_id: string
          created_at?: string
          created_by?: string | null
          event?: string | null
          event_description?: string | null
          id?: string
          value?: Json | null
        }
        Update: {
          crawl_entity_id?: string
          created_at?: string
          created_by?: string | null
          event?: string | null
          event_description?: string | null
          id?: string
          value?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_website_crawl_entity_logs_crawl_entity_id_fkey"
            columns: ["crawl_entity_id"]
            isOneToOne: false
            referencedRelation: "clients_website_crawl_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      clients_website_crawl_jobs: {
        Row: {
          assigned_va_email: string | null
          client_id: string
          created_at: string
          id: string
          raw_crawl_data: Json | null
          scrape_id: string
          source: string | null
          status: string | null
        }
        Insert: {
          assigned_va_email?: string | null
          client_id?: string
          created_at?: string
          id?: string
          raw_crawl_data?: Json | null
          scrape_id: string
          source?: string | null
          status?: string | null
        }
        Update: {
          assigned_va_email?: string | null
          client_id?: string
          created_at?: string
          id?: string
          raw_crawl_data?: Json | null
          scrape_id?: string
          source?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_website_scrape_job_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["id"]
          },
        ]
      }
      clockinclockout_attendance_log: {
        Row: {
          event_type: Database["public"]["Enums"]["clockinclockout_event_type"]
          id: string
          timestamp: string
          user_id: string
        }
        Insert: {
          event_type: Database["public"]["Enums"]["clockinclockout_event_type"]
          id?: string
          timestamp?: string
          user_id: string
        }
        Update: {
          event_type?: Database["public"]["Enums"]["clockinclockout_event_type"]
          id?: string
          timestamp?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clockinclockout_attendance_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "clockinclockout_users"
            referencedColumns: ["id"]
          },
        ]
      }
      clockinclockout_leave_requests: {
        Row: {
          id: string
          manager_email: string
          request_date: string[]
          status: Database["public"]["Enums"]["clockinclockout_request_status"]
          user_id: string
        }
        Insert: {
          id?: string
          manager_email: string
          request_date: string[]
          status?: Database["public"]["Enums"]["clockinclockout_request_status"]
          user_id: string
        }
        Update: {
          id?: string
          manager_email?: string
          request_date?: string[]
          status?: Database["public"]["Enums"]["clockinclockout_request_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clockinclockout_leave_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "clockinclockout_users"
            referencedColumns: ["id"]
          },
        ]
      }
      clockinclockout_users: {
        Row: {
          current_status: Database["public"]["Enums"]["clockinclockout_user_status"]
          email: string
          id: string
          role: Database["public"]["Enums"]["clockinclockout_user_role"]
        }
        Insert: {
          current_status?: Database["public"]["Enums"]["clockinclockout_user_status"]
          email: string
          id: string
          role?: Database["public"]["Enums"]["clockinclockout_user_role"]
        }
        Update: {
          current_status?: Database["public"]["Enums"]["clockinclockout_user_status"]
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["clockinclockout_user_role"]
        }
        Relationships: []
      }
      contacted_refer_a_friend: {
        Row: {
          created_at: string
          email: string | null
          id: string
          last_contacted: string | null
          phone_number: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          last_contacted?: string | null
          phone_number?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          last_contacted?: string | null
          phone_number?: string | null
        }
        Relationships: []
      }
      corporate_event_outreach_embed_lead_counter: {
        Row: {
          lead_counter: number
          league_id: number
          orgnization_name: string | null
        }
        Insert: {
          lead_counter: number
          league_id?: number
          orgnization_name?: string | null
        }
        Update: {
          lead_counter?: number
          league_id?: number
          orgnization_name?: string | null
        }
        Relationships: []
      }
      corporate_event_outreach_gen_leads: {
        Row: {
          client_name: string | null
          lead_list: Json | null
          lead_list_id: string
          organization_name: string | null
          sent_full_list: boolean | null
          time_created: string
          user_email: string | null
          version_page: string | null
        }
        Insert: {
          client_name?: string | null
          lead_list?: Json | null
          lead_list_id?: string
          organization_name?: string | null
          sent_full_list?: boolean | null
          time_created?: string
          user_email?: string | null
          version_page?: string | null
        }
        Update: {
          client_name?: string | null
          lead_list?: Json | null
          lead_list_id?: string
          organization_name?: string | null
          sent_full_list?: boolean | null
          time_created?: string
          user_email?: string | null
          version_page?: string | null
        }
        Relationships: []
      }
      cs_client_memory: {
        Row: {
          account_name: string | null
          cs_memory: Json[] | null
          deal_id: string | null
          generated_on: string | null
          memoryid: string
          timestamp: string | null
        }
        Insert: {
          account_name?: string | null
          cs_memory?: Json[] | null
          deal_id?: string | null
          generated_on?: string | null
          memoryid?: string
          timestamp?: string | null
        }
        Update: {
          account_name?: string | null
          cs_memory?: Json[] | null
          deal_id?: string | null
          generated_on?: string | null
          memoryid?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      cs_transcript_analysis: {
        Row: {
          agendaexecutionrating: number | null
          agendaexecutionreason: string | null
          analysisid: string
          buildingexcitementrating: number | null
          buildingexcitementreason: string | null
          churnriskrating: number | null
          churnriskreason: string | null
          clientid: string
          clientname: string | null
          fppprocessingrating: number | null
          fppprocessingreason: string | null
          meetingid: string
          npsrating: number | null
          npsreason: string | null
          Overall_Impact: number | null
          transcript: string | null
        }
        Insert: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisid?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          clientid: string
          clientname?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingid: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
          transcript?: string | null
        }
        Update: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisid?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          clientid?: string
          clientname?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingid?: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transcriptanalysis_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "transcriptanalysis_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      csm_action_agent_support_agenda: {
        Row: {
          actionId: string
          callAgenda: string[]
          callName: string | null
          comments: Json | null
          companyName: string | null
          csmEmail: string | null
          meetingDateTime: string | null
          meetingId: string | null
        }
        Insert: {
          actionId?: string
          callAgenda: string[]
          callName?: string | null
          comments?: Json | null
          companyName?: string | null
          csmEmail?: string | null
          meetingDateTime?: string | null
          meetingId?: string | null
        }
        Update: {
          actionId?: string
          callAgenda?: string[]
          callName?: string | null
          comments?: Json | null
          companyName?: string | null
          csmEmail?: string | null
          meetingDateTime?: string | null
          meetingId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_action_agent_support_agenda_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: false
            referencedRelation: "csm_meetings"
            referencedColumns: ["meetingId"]
          },
        ]
      }
      csm_action_items: {
        Row: {
          actionItem: string | null
          clientItemId: number
          clientname: string | null
          csm: string | null
          csmEmail: string
          dateCreated: string | null
          dateFinished: string | null
          deadline: string | null
          excerpt: string | null
          historical_context: string | null
          knowledge_base_links: string | null
          product_connection: string | null
          status: boolean
          urgency: string | null
        }
        Insert: {
          actionItem?: string | null
          clientItemId?: number
          clientname?: string | null
          csm?: string | null
          csmEmail: string
          dateCreated?: string | null
          dateFinished?: string | null
          deadline?: string | null
          excerpt?: string | null
          historical_context?: string | null
          knowledge_base_links?: string | null
          product_connection?: string | null
          status?: boolean
          urgency?: string | null
        }
        Update: {
          actionItem?: string | null
          clientItemId?: number
          clientname?: string | null
          csm?: string | null
          csmEmail?: string
          dateCreated?: string | null
          dateFinished?: string | null
          deadline?: string | null
          excerpt?: string | null
          historical_context?: string | null
          knowledge_base_links?: string | null
          product_connection?: string | null
          status?: boolean
          urgency?: string | null
        }
        Relationships: []
      }
      csm_client_confusion_points: {
        Row: {
          companyId: string
          confusionId: string
          created_at: string | null
          description: string | null
          difficulty_to_fix: string | null
          feature_area: string | null
          historical_context: Json | null
          likeliness_to_impact_many: string | null
          meetingId: string
          negative_impact: string | null
          priority_score: string | null
          resolved_in_call: boolean | null
          status: string | null
          suggested_improvements: string[] | null
          title: string | null
          transcript_evidence: string | null
          urgency_analysis: Json | null
        }
        Insert: {
          companyId: string
          confusionId?: string
          created_at?: string | null
          description?: string | null
          difficulty_to_fix?: string | null
          feature_area?: string | null
          historical_context?: Json | null
          likeliness_to_impact_many?: string | null
          meetingId: string
          negative_impact?: string | null
          priority_score?: string | null
          resolved_in_call?: boolean | null
          status?: string | null
          suggested_improvements?: string[] | null
          title?: string | null
          transcript_evidence?: string | null
          urgency_analysis?: Json | null
        }
        Update: {
          companyId?: string
          confusionId?: string
          created_at?: string | null
          description?: string | null
          difficulty_to_fix?: string | null
          feature_area?: string | null
          historical_context?: Json | null
          likeliness_to_impact_many?: string | null
          meetingId?: string
          negative_impact?: string | null
          priority_score?: string | null
          resolved_in_call?: boolean | null
          status?: string | null
          suggested_improvements?: string[] | null
          title?: string | null
          transcript_evidence?: string | null
          urgency_analysis?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_client_confusion_points_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
          {
            foreignKeyName: "csm_client_confusion_points_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: false
            referencedRelation: "csm_meetings"
            referencedColumns: ["meetingId"]
          },
        ]
      }
      csm_client_master_analysis: {
        Row: {
          company_id: string
          created_at: string
          gdrive_document_link: string
          generated_analysis_text: string
          id: string
          version: number
        }
        Insert: {
          company_id: string
          created_at?: string
          gdrive_document_link: string
          generated_analysis_text: string
          id?: string
          version: number
        }
        Update: {
          company_id?: string
          created_at?: string
          gdrive_document_link?: string
          generated_analysis_text?: string
          id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "csm_client_master_analysis_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      csm_daily_summeries: {
        Row: {
          average_daily_score: number | null
          daily_performance_summary: string | null
          date: string
          flagged_risks_summary: string | null
          id: string
          total_calls_processed: number | null
        }
        Insert: {
          average_daily_score?: number | null
          daily_performance_summary?: string | null
          date: string
          flagged_risks_summary?: string | null
          id?: string
          total_calls_processed?: number | null
        }
        Update: {
          average_daily_score?: number | null
          daily_performance_summary?: string | null
          date?: string
          flagged_risks_summary?: string | null
          id?: string
          total_calls_processed?: number | null
        }
        Relationships: []
      }
      csm_meetings: {
        Row: {
          callDuration: string | null
          clariCallLink: string | null
          clariId: string
          companyId: string
          contactName: string | null
          csmEmail: string | null
          icaluid: string | null
          meetingDateTime: string
          meetingId: string
          meetingName: string | null
          next_meeting: string | null
          participants: string | null
          transcript: string | null
        }
        Insert: {
          callDuration?: string | null
          clariCallLink?: string | null
          clariId: string
          companyId: string
          contactName?: string | null
          csmEmail?: string | null
          icaluid?: string | null
          meetingDateTime: string
          meetingId?: string
          meetingName?: string | null
          next_meeting?: string | null
          participants?: string | null
          transcript?: string | null
        }
        Update: {
          callDuration?: string | null
          clariCallLink?: string | null
          clariId?: string
          companyId?: string
          contactName?: string | null
          csmEmail?: string | null
          icaluid?: string | null
          meetingDateTime?: string
          meetingId?: string
          meetingName?: string | null
          next_meeting?: string | null
          participants?: string | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meetings_new_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      csm_meetings_duplicate_meeting_sync: {
        Row: {
          clariCallLink: string | null
          clariId: string | null
          companyId: string
          csmEmail: string | null
          meetingDateTime: string
          meetingId: string
          meetingName: string | null
          participants: string | null
        }
        Insert: {
          clariCallLink?: string | null
          clariId?: string | null
          companyId: string
          csmEmail?: string | null
          meetingDateTime: string
          meetingId?: string
          meetingName?: string | null
          participants?: string | null
        }
        Update: {
          clariCallLink?: string | null
          clariId?: string | null
          companyId?: string
          csmEmail?: string | null
          meetingDateTime?: string
          meetingId?: string
          meetingName?: string | null
          participants?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_meetings_duplicate_meeting_sync_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      "csm_meetings_latest meeting sync": {
        Row: {
          clariCallLink: string | null
          clariId: string | null
          companyId: string
          csmEmail: string | null
          meetingDateTime: string
          meetingId: string
          meetingName: string | null
          participants: string | null
          transcript: string | null
        }
        Insert: {
          clariCallLink?: string | null
          clariId?: string | null
          companyId: string
          csmEmail?: string | null
          meetingDateTime: string
          meetingId?: string
          meetingName?: string | null
          participants?: string | null
          transcript?: string | null
        }
        Update: {
          clariCallLink?: string | null
          clariId?: string | null
          companyId?: string
          csmEmail?: string | null
          meetingDateTime?: string
          meetingId?: string
          meetingName?: string | null
          participants?: string | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_meetings_latest meeting sync_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      csm_product_analysis_documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: string
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      csm_product_analysis_issues: {
        Row: {
          acceptance_criteria: string[] | null
          ai_explanation: Json | null
          ai_feedback: Json | null
          assignedTo: string | null
          category: string | null
          churn_risk_score: string | null
          comments: Json | null
          companyId: string
          created_at: string | null
          historical_context: Json | null
          issueId: string
          jira_link: string | null
          meetingId: string
          related_keywords: string[] | null
          risk_justification: Json | null
          severity: string | null
          status: string | null
          time_estimates: Json | null
          time_urgency_score: string | null
          title: string | null
          urgency_analysis: Json | null
          user_story: string | null
          work_to_be_done: string[] | null
        }
        Insert: {
          acceptance_criteria?: string[] | null
          ai_explanation?: Json | null
          ai_feedback?: Json | null
          assignedTo?: string | null
          category?: string | null
          churn_risk_score?: string | null
          comments?: Json | null
          companyId: string
          created_at?: string | null
          historical_context?: Json | null
          issueId?: string
          jira_link?: string | null
          meetingId: string
          related_keywords?: string[] | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          time_estimates?: Json | null
          time_urgency_score?: string | null
          title?: string | null
          urgency_analysis?: Json | null
          user_story?: string | null
          work_to_be_done?: string[] | null
        }
        Update: {
          acceptance_criteria?: string[] | null
          ai_explanation?: Json | null
          ai_feedback?: Json | null
          assignedTo?: string | null
          category?: string | null
          churn_risk_score?: string | null
          comments?: Json | null
          companyId?: string
          created_at?: string | null
          historical_context?: Json | null
          issueId?: string
          jira_link?: string | null
          meetingId?: string
          related_keywords?: string[] | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          time_estimates?: Json | null
          time_urgency_score?: string | null
          title?: string | null
          urgency_analysis?: Json | null
          user_story?: string | null
          work_to_be_done?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_product_analysis_issues_assignedTo_fkey"
            columns: ["assignedTo"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "csm_product_analysis_issues_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: false
            referencedRelation: "csm_meetings"
            referencedColumns: ["meetingId"]
          },
          {
            foreignKeyName: "product_analysis_issues_new_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      csm_transcript_analysis: {
        Row: {
          agendaexecutionrating: number | null
          agendaexecutionreason: string | null
          analysisId: string
          buildingexcitementrating: number | null
          buildingexcitementreason: string | null
          churnriskrating: number | null
          churnriskreason: string | null
          companyId: string | null
          companyName: string | null
          fppprocessingrating: number | null
          fppprocessingreason: string | null
          meetingDateTime: string | null
          meetingId: string
          npsrating: number | null
          npsreason: string | null
          Overall_Impact: number | null
        }
        Insert: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisId?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          companyId?: string | null
          companyName?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingDateTime?: string | null
          meetingId: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
        }
        Update: {
          agendaexecutionrating?: number | null
          agendaexecutionreason?: string | null
          analysisId?: string
          buildingexcitementrating?: number | null
          buildingexcitementreason?: string | null
          churnriskrating?: number | null
          churnriskreason?: string | null
          companyId?: string | null
          companyName?: string | null
          fppprocessingrating?: number | null
          fppprocessingreason?: string | null
          meetingDateTime?: string | null
          meetingId?: string
          npsrating?: number | null
          npsreason?: string | null
          Overall_Impact?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "csm_transcript_analysis_new_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
          {
            foreignKeyName: "csm_transcript_analysis_new_meetingId_fkey"
            columns: ["meetingId"]
            isOneToOne: false
            referencedRelation: "csm_meetings"
            referencedColumns: ["meetingId"]
          },
        ]
      }
      customer_support: {
        Row: {
          content: string | null
          created_at: string | null
          embedding: string | null
          id: string
          metadata: Json | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      dallas_list: {
        Row: {
          city_state: string | null
          crawl_id: string | null
          created_at: string
          for_query_concat: string | null
          group_category: string | null
          group_contact_number: string | null
          group_email: string | null
          group_name: string | null
          group_url_found: string | null
          id: number
          last_scraped_at: string | null
          lead_gen_status: string | null
          notes: string | null
          scrape_status: string | null
          source_of_group: string | null
          updated_at: string | null
          url_source_of_group: string | null
        }
        Insert: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Update: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Relationships: []
      }
      dallas_scrape_directory: {
        Row: {
          contact_department: string | null
          contact_email: string | null
          contact_number: string | null
          contact_person: string | null
          contact_role: string | null
          contact_sport: string | null
          created_at: string
          department_category: string | null
          group_id: number | null
          id: number
          original_group_name: string | null
          website_source: string | null
        }
        Insert: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Update: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Relationships: []
      }
      deals_hubspot: {
        Row: {
          archived: boolean | null
          bda_ae_deal_evaluation_metrics: Json | null
          churnRisk: string | null
          closedAt: string | null
          companyId: string | null
          contract_heroku_verification_properties: Json | null
          contract_information: Json | null
          createdAt: string | null
          cs_deal_info: Json | null
          deal_csr: string | null
          deal_information: Json | null
          deal_sdr: string | null
          dealId: string
          dealName: string | null
          dealStage: string | null
          pipeline: string | null
          updatedAt: string | null
          url: string | null
        }
        Insert: {
          archived?: boolean | null
          bda_ae_deal_evaluation_metrics?: Json | null
          churnRisk?: string | null
          closedAt?: string | null
          companyId?: string | null
          contract_heroku_verification_properties?: Json | null
          contract_information?: Json | null
          createdAt?: string | null
          cs_deal_info?: Json | null
          deal_csr?: string | null
          deal_information?: Json | null
          deal_sdr?: string | null
          dealId: string
          dealName?: string | null
          dealStage?: string | null
          pipeline?: string | null
          updatedAt?: string | null
          url?: string | null
        }
        Update: {
          archived?: boolean | null
          bda_ae_deal_evaluation_metrics?: Json | null
          churnRisk?: string | null
          closedAt?: string | null
          companyId?: string | null
          contract_heroku_verification_properties?: Json | null
          contract_information?: Json | null
          createdAt?: string | null
          cs_deal_info?: Json | null
          deal_csr?: string | null
          deal_information?: Json | null
          deal_sdr?: string | null
          dealId?: string
          dealName?: string | null
          dealStage?: string | null
          pipeline?: string | null
          updatedAt?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_hubspot_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
          {
            foreignKeyName: "deals_hubspot_companyId_fkey1"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "clients_hubspot"
            referencedColumns: ["companyId"]
          },
        ]
      }
      documents_client_docs: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      documents_email: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      DustinDom_attendance_log: {
        Row: {
          event_type: string | null
          id: string
          timestamp: string | null
          user_id: string
        }
        Insert: {
          event_type?: string | null
          id?: string
          timestamp?: string | null
          user_id?: string
        }
        Update: {
          event_type?: string | null
          id?: string
          timestamp?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "DustinDom_attendance_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "DustinDom_users"
            referencedColumns: ["id"]
          },
        ]
      }
      DustinDom_leave_requests: {
        Row: {
          id: string
          manager_email: string | null
          request_date: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          id?: string
          manager_email?: string | null
          request_date?: string | null
          status?: string | null
          user_id?: string
        }
        Update: {
          id?: string
          manager_email?: string | null
          request_date?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "DustinDom_leave_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "DustinDom_users"
            referencedColumns: ["id"]
          },
        ]
      }
      DustinDom_users: {
        Row: {
          current_status: string | null
          email: string
          id: string
          password: string | null
          role: string | null
        }
        Insert: {
          current_status?: string | null
          email?: string
          id?: string
          password?: string | null
          role?: string | null
        }
        Update: {
          current_status?: string | null
          email?: string
          id?: string
          password?: string | null
          role?: string | null
        }
        Relationships: []
      }
      email_drafter_knowledgebase: {
        Row: {
          initialMessage: string | null
          response: string | null
          subsequent: string | null
          uuid: string
        }
        Insert: {
          initialMessage?: string | null
          response?: string | null
          subsequent?: string | null
          uuid?: string
        }
        Update: {
          initialMessage?: string | null
          response?: string | null
          subsequent?: string | null
          uuid?: string
        }
        Relationships: []
      }
      email_drafter_vector_table: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      email_support: {
        Row: {
          content: string | null
          created_at: string | null
          embedding: string | null
          id: string
          metadata: Json | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_trickle_test: {
        Row: {
          body: string | null
          created_at: string
          from_email: string
          id: string
          subject: string | null
          to_email: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          from_email: string
          id?: string
          subject?: string | null
          to_email: string
        }
        Update: {
          body?: string | null
          created_at?: string
          from_email?: string
          id?: string
          subject?: string | null
          to_email?: string
        }
        Relationships: []
      }
      employee_attendance: {
        Row: {
          clockin_display: string | null
          clockin_time: string | null
          clockout_display: string | null
          clockout_time: string | null
          date: string
          id: number
          name: string
          slack_id: string
        }
        Insert: {
          clockin_display?: string | null
          clockin_time?: string | null
          clockout_display?: string | null
          clockout_time?: string | null
          date: string
          id?: number
          name: string
          slack_id: string
        }
        Update: {
          clockin_display?: string | null
          clockin_time?: string | null
          clockout_display?: string | null
          clockout_time?: string | null
          date?: string
          id?: number
          name?: string
          slack_id?: string
        }
        Relationships: []
      }
      employee_leaves: {
        Row: {
          approved_by: string | null
          created_at: string | null
          id: number
          leave_type: string | null
          name: string
          request_id: number | null
          requested_date: string
          slack_id: string
          status: string | null
        }
        Insert: {
          approved_by?: string | null
          created_at?: string | null
          id?: number
          leave_type?: string | null
          name: string
          request_id?: number | null
          requested_date: string
          slack_id: string
          status?: string | null
        }
        Update: {
          approved_by?: string | null
          created_at?: string | null
          id?: number
          leave_type?: string | null
          name?: string
          request_id?: number | null
          requested_date?: string
          slack_id?: string
          status?: string | null
        }
        Relationships: []
      }
      employees: {
        Row: {
          avatarUrl: string | null
          email: string | null
          hubspotId: string | null
          id: string
          name: string | null
          position: string | null
        }
        Insert: {
          avatarUrl?: string | null
          email?: string | null
          hubspotId?: string | null
          id?: string
          name?: string | null
          position?: string | null
        }
        Update: {
          avatarUrl?: string | null
          email?: string | null
          hubspotId?: string | null
          id?: string
          name?: string | null
          position?: string | null
        }
        Relationships: []
      }
      employees_charles: {
        Row: {
          base_salary_monthly: number
          created_at: string
          email: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          base_salary_monthly: number
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Update: {
          base_salary_monthly?: number
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      exchange_rate_chat: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      fromusnews_midschools_directory: {
        Row: {
          city_state: string | null
          classification: string | null
          contact_number: string | null
          created_at: string
          department: string | null
          email: string | null
          id: string
          name: string | null
          role: string | null
          school_name: string | null
          sheets_school_name: string | null
          source_url: string | null
        }
        Insert: {
          city_state?: string | null
          classification?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
          school_name?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Update: {
          city_state?: string | null
          classification?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
          school_name?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Relationships: []
      }
      fromusnews_midschools_directory2: {
        Row: {
          city_state: string | null
          classification: string | null
          contact_number: string | null
          created_at: string
          department: string | null
          email: string | null
          id: string
          name: string | null
          role: string | null
          school_name: string | null
          sheets_school_name: string | null
          source_url: string | null
        }
        Insert: {
          city_state?: string | null
          classification?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
          school_name?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Update: {
          city_state?: string | null
          classification?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
          school_name?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Relationships: []
      }
      fromusnews_midschools_list: {
        Row: {
          city_state: string | null
          created_at: string
          id: string
          school_contact_number: string | null
          school_email: string | null
          school_name: string | null
          sheets_city_state: string | null
          sheets_school_name: string | null
          source_url: string | null
        }
        Insert: {
          city_state?: string | null
          created_at?: string
          id?: string
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          sheets_city_state?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Update: {
          city_state?: string | null
          created_at?: string
          id?: string
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          sheets_city_state?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Relationships: []
      }
      fromusnews_midschools_list2: {
        Row: {
          city_state: string | null
          created_at: string
          id: string
          school_contact_number: string | null
          school_email: string | null
          school_name: string | null
          sheets_city_state: string | null
          sheets_school_name: string | null
          source_url: string | null
        }
        Insert: {
          city_state?: string | null
          created_at?: string
          id?: string
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          sheets_city_state?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Update: {
          city_state?: string | null
          created_at?: string
          id?: string
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          sheets_city_state?: string | null
          sheets_school_name?: string | null
          source_url?: string | null
        }
        Relationships: []
      }
      game_recap_logs: {
        Row: {
          away_score: number | null
          away_team: string | null
          created_at: string
          game_date: string | null
          game_start_time: string | null
          home_score: number | null
          home_team: string | null
          id: string
          keywords: string | null
          league_id: number | null
          location_type: string | null
          metadata: Json | null
          recap_body: Json | null
          recap_headline: string | null
          recap_title: string | null
          result: string | null
          summary: string | null
        }
        Insert: {
          away_score?: number | null
          away_team?: string | null
          created_at?: string
          game_date?: string | null
          game_start_time?: string | null
          home_score?: number | null
          home_team?: string | null
          id?: string
          keywords?: string | null
          league_id?: number | null
          location_type?: string | null
          metadata?: Json | null
          recap_body?: Json | null
          recap_headline?: string | null
          recap_title?: string | null
          result?: string | null
          summary?: string | null
        }
        Update: {
          away_score?: number | null
          away_team?: string | null
          created_at?: string
          game_date?: string | null
          game_start_time?: string | null
          home_score?: number | null
          home_team?: string | null
          id?: string
          keywords?: string | null
          league_id?: number | null
          location_type?: string | null
          metadata?: Json | null
          recap_body?: Json | null
          recap_headline?: string | null
          recap_title?: string | null
          result?: string | null
          summary?: string | null
        }
        Relationships: []
      }
      got_soccer_directory: {
        Row: {
          city_state: string | null
          contact_number: string | null
          created_at: string
          department: string | null
          email: string | null
          id: number
          name: string | null
          role: string | null
          school_contact_number: string | null
          school_email: string | null
          school_name: string | null
          url: string | null
        }
        Insert: {
          city_state?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: number
          name?: string | null
          role?: string | null
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          url?: string | null
        }
        Update: {
          city_state?: string | null
          contact_number?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          id?: number
          name?: string | null
          role?: string | null
          school_contact_number?: string | null
          school_email?: string | null
          school_name?: string | null
          url?: string | null
        }
        Relationships: []
      }
      in_person_meeting_analysis: {
        Row: {
          company_name: string
          date_call: string
          document_id: string
          email_subject: string
          full_analysis: Json
          playbook_rep: string
        }
        Insert: {
          company_name: string
          date_call: string
          document_id: string
          email_subject: string
          full_analysis: Json
          playbook_rep: string
        }
        Update: {
          company_name?: string
          date_call?: string
          document_id?: string
          email_subject?: string
          full_analysis?: Json
          playbook_rep?: string
        }
        Relationships: []
      }
      jira_ticket: {
        Row: {
          content: string | null
          created_at: string | null
          embedding: string | null
          id: string
          metadata: Json | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      jira_ticket_backup_20250105: {
        Row: {
          content: string | null
          created_at: string | null
          embedding: string | null
          id: string | null
          metadata: Json | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string | null
          metadata?: Json | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string | null
          metadata?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      jira_ticket_duplicate: {
        Row: {
          content: string | null
          created_at: string | null
          embedding: string | null
          id: string
          metadata: Json | null
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      lead_generation: {
        Row: {
          address: string | null
          contact_id: string
          email: string | null
          internationalPhoneNumber: number | null
          lead_score: number | null
          lead_score_reason: string | null
          organization: string | null
          pageURL: string | null
          phoneNumber: string | null
          phoneNumberCountry: string | null
          phoneNumberCountryCode: string | null
          rating: number | null
          rating_count: number | null
          websiteURL: string | null
        }
        Insert: {
          address?: string | null
          contact_id?: string
          email?: string | null
          internationalPhoneNumber?: number | null
          lead_score?: number | null
          lead_score_reason?: string | null
          organization?: string | null
          pageURL?: string | null
          phoneNumber?: string | null
          phoneNumberCountry?: string | null
          phoneNumberCountryCode?: string | null
          rating?: number | null
          rating_count?: number | null
          websiteURL?: string | null
        }
        Update: {
          address?: string | null
          contact_id?: string
          email?: string | null
          internationalPhoneNumber?: number | null
          lead_score?: number | null
          lead_score_reason?: string | null
          organization?: string | null
          pageURL?: string | null
          phoneNumber?: string | null
          phoneNumberCountry?: string | null
          phoneNumberCountryCode?: string | null
          rating?: number | null
          rating_count?: number | null
          websiteURL?: string | null
        }
        Relationships: []
      }
      leadtest: {
        Row: {
          address: string | null
          attributes: string | null
          category: string | null
          city: string | null
          currentStatus: string | null
          error: string | null
          friday: string | null
          id: string | null
          imgUrl: string | null
          info: string | null
          "Lead Score": number | null
          monday: string | null
          nat: string | null
          phoneNumber: string | null
          placeUrl: string
          plusCode: string | null
          plusCode_1: string | null
          pricing: string | null
          rating: number | null
          Reasoning: string | null
          reviewCount: number | null
          saturday: string | null
          sunday: string | null
          title: string | null
          tuesday: string | null
          website: string | null
          wednesday: string | null
        }
        Insert: {
          address?: string | null
          attributes?: string | null
          category?: string | null
          city?: string | null
          currentStatus?: string | null
          error?: string | null
          friday?: string | null
          id?: string | null
          imgUrl?: string | null
          info?: string | null
          "Lead Score"?: number | null
          monday?: string | null
          nat?: string | null
          phoneNumber?: string | null
          placeUrl: string
          plusCode?: string | null
          plusCode_1?: string | null
          pricing?: string | null
          rating?: number | null
          Reasoning?: string | null
          reviewCount?: number | null
          saturday?: string | null
          sunday?: string | null
          title?: string | null
          tuesday?: string | null
          website?: string | null
          wednesday?: string | null
        }
        Update: {
          address?: string | null
          attributes?: string | null
          category?: string | null
          city?: string | null
          currentStatus?: string | null
          error?: string | null
          friday?: string | null
          id?: string | null
          imgUrl?: string | null
          info?: string | null
          "Lead Score"?: number | null
          monday?: string | null
          nat?: string | null
          phoneNumber?: string | null
          placeUrl?: string
          plusCode?: string | null
          plusCode_1?: string | null
          pricing?: string | null
          rating?: number | null
          Reasoning?: string | null
          reviewCount?: number | null
          saturday?: string | null
          sunday?: string | null
          title?: string | null
          tuesday?: string | null
          website?: string | null
          wednesday?: string | null
        }
        Relationships: []
      }
      leave_requests_cnc: {
        Row: {
          end_date: string | null
          id: number
          manager_email: string
          reason: string | null
          request_date: string
          start_date: string | null
          status: string
          user_id: number
        }
        Insert: {
          end_date?: string | null
          id?: never
          manager_email: string
          reason?: string | null
          request_date: string
          start_date?: string | null
          status?: string
          user_id: number
        }
        Update: {
          end_date?: string | null
          id?: never
          manager_email?: string
          reason?: string | null
          request_date?: string
          start_date?: string | null
          status?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "leave_requests_cnc_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_cnc"
            referencedColumns: ["id"]
          },
        ]
      }
      "Liv bot": {
        Row: {
          call_id: string | null
          call_name: string | null
          csm: string | null
          id: string
        }
        Insert: {
          call_id?: string | null
          call_name?: string | null
          csm?: string | null
          id?: string
        }
        Update: {
          call_id?: string | null
          call_name?: string | null
          csm?: string | null
          id?: string
        }
        Relationships: []
      }
      liv_bot: {
        Row: {
          account_name: string | null
          call_id: string | null
          call_title: string | null
          deal_id: string | null
          id: string
          link: string | null
          time: string | null
          transcript: string | null
        }
        Insert: {
          account_name?: string | null
          call_id?: string | null
          call_title?: string | null
          deal_id?: string | null
          id?: string
          link?: string | null
          time?: string | null
          transcript?: string | null
        }
        Update: {
          account_name?: string | null
          call_id?: string | null
          call_title?: string | null
          deal_id?: string | null
          id?: string
          link?: string | null
          time?: string | null
          transcript?: string | null
        }
        Relationships: []
      }
      meetings: {
        Row: {
          clariid: string | null
          clientid: string
          meetingdatetime: string
          meetingid: string
          meetingname: string
          participants: string | null
          transcript: string | null
        }
        Insert: {
          clariid?: string | null
          clientid: string
          meetingdatetime: string
          meetingid?: string
          meetingname: string
          participants?: string | null
          transcript?: string | null
        }
        Update: {
          clariid?: string | null
          clientid?: string
          meetingdatetime?: string
          meetingid?: string
          meetingname?: string
          participants?: string | null
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meetings_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
        ]
      }
      michigan_list: {
        Row: {
          city_state: string | null
          crawl_id: string | null
          created_at: string
          for_query_concat: string | null
          group_category: string | null
          group_contact_number: string | null
          group_email: string | null
          group_name: string | null
          group_url_found: string | null
          id: number
          is_location_correct: boolean | null
          last_scraped_at: string | null
          lead_gen_status: string | null
          notes: string | null
          scrape_status: string | null
          source_of_group: string | null
          updated_at: string | null
          url_source_of_group: string | null
        }
        Insert: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          is_location_correct?: boolean | null
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Update: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          is_location_correct?: boolean | null
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Relationships: []
      }
      michigan_scrape_directory: {
        Row: {
          contact_department: string | null
          contact_email: string | null
          contact_number: string | null
          contact_person: string | null
          contact_role: string | null
          contact_sport: string | null
          created_at: string
          department_category: string | null
          group_id: number | null
          id: number
          original_group_name: string | null
          website_source: string | null
        }
        Insert: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Update: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "michigan_scrape_directory_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "michigan_list"
            referencedColumns: ["id"]
          },
        ]
      }
      minnesota_list: {
        Row: {
          city_state: string | null
          crawl_id: string | null
          created_at: string
          for_query_concat: string | null
          group_category: string | null
          group_contact_number: string | null
          group_email: string | null
          group_name: string | null
          group_url_found: string | null
          id: number
          last_scraped_at: string | null
          lead_gen_status: string | null
          notes: string | null
          scrape_status: string | null
          source_of_group: string | null
          updated_at: string | null
          url_source_of_group: string | null
        }
        Insert: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Update: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Relationships: []
      }
      minnesota_scrape_directory: {
        Row: {
          contact_department: string | null
          contact_email: string | null
          contact_number: string | null
          contact_person: string | null
          contact_role: string | null
          contact_sport: string | null
          created_at: string
          department_category: string | null
          group_id: number | null
          id: number
          original_group_name: string | null
          website_source: string | null
        }
        Insert: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Update: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "minnesota_scrape_directory_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "minnesota_list"
            referencedColumns: ["id"]
          },
        ]
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      n8n_chat_histories_gmail: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      nevada_list: {
        Row: {
          city_state: string | null
          crawl_id: string | null
          created_at: string
          for_query_concat: string | null
          group_category: string | null
          group_contact_number: string | null
          group_email: string | null
          group_name: string | null
          group_url_found: string | null
          id: number
          last_scraped_at: string | null
          lead_gen_status: string | null
          notes: string | null
          scrape_status: string | null
          source_of_group: string | null
          updated_at: string | null
          url_source_of_group: string | null
        }
        Insert: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Update: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Relationships: []
      }
      nevada_scrape_directory: {
        Row: {
          contact_department: string | null
          contact_email: string | null
          contact_number: string | null
          contact_person: string | null
          contact_role: string | null
          contact_sport: string | null
          created_at: string
          department_category: string | null
          group_id: number | null
          id: number
          original_group_name: string | null
          website_source: string | null
        }
        Insert: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Update: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nevada_scrape_directory_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "nevada_list"
            referencedColumns: ["id"]
          },
        ]
      }
      "New Leads": {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          phone_number: string | null
          position: string | null
          website: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone_number?: string | null
          position?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone_number?: string | null
          position?: string | null
          website?: string | null
        }
        Relationships: []
      }
      nj_ms_directory: {
        Row: {
          contact_department: string | null
          contact_email: string | null
          contact_number: string | null
          contact_person: string | null
          contact_role: string | null
          contact_sport: string | null
          created_at: string
          department_category: string | null
          group_id: number | null
          id: number
          original_group_name: string | null
          website_source: string | null
        }
        Insert: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Update: {
          contact_department?: string | null
          contact_email?: string | null
          contact_number?: string | null
          contact_person?: string | null
          contact_role?: string | null
          contact_sport?: string | null
          created_at?: string
          department_category?: string | null
          group_id?: number | null
          id?: number
          original_group_name?: string | null
          website_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nj_ms_directory_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "nj_ms_list"
            referencedColumns: ["id"]
          },
        ]
      }
      nj_ms_list: {
        Row: {
          city_state: string | null
          crawl_id: string | null
          created_at: string
          for_query_concat: string | null
          group_category: string | null
          group_contact_number: string | null
          group_email: string | null
          group_name: string | null
          group_url_found: string | null
          id: number
          last_scraped_at: string | null
          lead_gen_status: string | null
          notes: string | null
          scrape_status: string | null
          source_of_group: string | null
          updated_at: string | null
          url_source_of_group: string | null
        }
        Insert: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Update: {
          city_state?: string | null
          crawl_id?: string | null
          created_at?: string
          for_query_concat?: string | null
          group_category?: string | null
          group_contact_number?: string | null
          group_email?: string | null
          group_name?: string | null
          group_url_found?: string | null
          id?: number
          last_scraped_at?: string | null
          lead_gen_status?: string | null
          notes?: string | null
          scrape_status?: string | null
          source_of_group?: string | null
          updated_at?: string | null
          url_source_of_group?: string | null
        }
        Relationships: []
      }
      norfolk_scrape: {
        Row: {
          email: string | null
          error: string | null
          id: number
          internationalPhoneNumber: string | null
          pageUrl: string | null
          phoneNumber: string | null
          phoneNumberCountry: string | null
          phoneNumberCountryCode: string | null
          query: string | null
          timestamp: string | null
        }
        Insert: {
          email?: string | null
          error?: string | null
          id: number
          internationalPhoneNumber?: string | null
          pageUrl?: string | null
          phoneNumber?: string | null
          phoneNumberCountry?: string | null
          phoneNumberCountryCode?: string | null
          query?: string | null
          timestamp?: string | null
        }
        Update: {
          email?: string | null
          error?: string | null
          id?: number
          internationalPhoneNumber?: string | null
          pageUrl?: string | null
          phoneNumber?: string | null
          phoneNumberCountry?: string | null
          phoneNumberCountryCode?: string | null
          query?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      onboarding_agent_last_sent: {
        Row: {
          company_id: string | null
          company_name: string | null
          id: string
          last_nudged_date: string
        }
        Insert: {
          company_id?: string | null
          company_name?: string | null
          id?: string
          last_nudged_date?: string
        }
        Update: {
          company_id?: string | null
          company_name?: string | null
          id?: string
          last_nudged_date?: string
        }
        Relationships: []
      }
      onboarding_schedule: {
        Row: {
          barr_deal_valuation: number | null
          business_name: string | null
          call_name: string | null
          client_email: string | null
          client_id: string | null
          client_name: string | null
          close_date: string | null
          csm_email: string | null
          days_since_deal_closed: number | null
          deal_id: number | null
          deal_val: number | null
          domain_name: string | null
          exp_annual_revenue: number | null
          fpp_client_tier: string | null
          hubspot_id: number | null
          icaluid: string | null
          id: number
          markdown: string | null
          monthly_fee: number | null
          next_meeting_date: string | null
          processed_last_90_days: number | null
          processed_this_month: number | null
          processed_this_year: number | null
          processing_healthscore: number | null
          reported_at: string | null
          target_fpp_date: string | null
          transcript_id: string | null
        }
        Insert: {
          barr_deal_valuation?: number | null
          business_name?: string | null
          call_name?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          close_date?: string | null
          csm_email?: string | null
          days_since_deal_closed?: number | null
          deal_id?: number | null
          deal_val?: number | null
          domain_name?: string | null
          exp_annual_revenue?: number | null
          fpp_client_tier?: string | null
          hubspot_id?: number | null
          icaluid?: string | null
          id?: number
          markdown?: string | null
          monthly_fee?: number | null
          next_meeting_date?: string | null
          processed_last_90_days?: number | null
          processed_this_month?: number | null
          processed_this_year?: number | null
          processing_healthscore?: number | null
          reported_at?: string | null
          target_fpp_date?: string | null
          transcript_id?: string | null
        }
        Update: {
          barr_deal_valuation?: number | null
          business_name?: string | null
          call_name?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          close_date?: string | null
          csm_email?: string | null
          days_since_deal_closed?: number | null
          deal_id?: number | null
          deal_val?: number | null
          domain_name?: string | null
          exp_annual_revenue?: number | null
          fpp_client_tier?: string | null
          hubspot_id?: number | null
          icaluid?: string | null
          id?: number
          markdown?: string | null
          monthly_fee?: number | null
          next_meeting_date?: string | null
          processed_last_90_days?: number | null
          processed_this_month?: number | null
          processed_this_year?: number | null
          processing_healthscore?: number | null
          reported_at?: string | null
          target_fpp_date?: string | null
          transcript_id?: string | null
        }
        Relationships: []
      }
      "Parking pass codes": {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          "Full name": string | null
          id: number
          Last_name: string | null
          parking_code: string | null
          used: boolean | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          "Full name"?: string | null
          id?: number
          Last_name?: string | null
          parking_code?: string | null
          used?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          "Full name"?: string | null
          id?: number
          Last_name?: string | null
          parking_code?: string | null
          used?: boolean | null
        }
        Relationships: []
      }
      playbook_sports_master_knowledge_base: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      practice_plan_database: {
        Row: {
          created_at: string
          last_updated: string | null
          league_id: number | null
          plan_id: string
          planData: Json | null
          team_id: number | null
          teamName: string | null
        }
        Insert: {
          created_at?: string
          last_updated?: string | null
          league_id?: number | null
          plan_id?: string
          planData?: Json | null
          team_id?: number | null
          teamName?: string | null
        }
        Update: {
          created_at?: string
          last_updated?: string | null
          league_id?: number | null
          plan_id?: string
          planData?: Json | null
          team_id?: number | null
          teamName?: string | null
        }
        Relationships: []
      }
      Pre_demo_analysis: {
        Row: {
          company_name: string
          date_to_sent: string
          event_rep_name: string | null
          html_email: Json | null
          id: number
          is_sent: boolean
        }
        Insert: {
          company_name: string
          date_to_sent: string
          event_rep_name?: string | null
          html_email?: Json | null
          id?: number
          is_sent?: boolean
        }
        Update: {
          company_name?: string
          date_to_sent?: string
          event_rep_name?: string | null
          html_email?: Json | null
          id?: number
          is_sent?: boolean
        }
        Relationships: []
      }
      product_analysis_issues: {
        Row: {
          acceptance_criteria: string | null
          ai_explanation: string | null
          assigned_to: string | null
          call_summary: string | null
          category: string | null
          churn_risk_score: number | null
          clientid: string
          created_at: string
          historical_context: Json | null
          meetingid: string | null
          related_keywords: string | null
          risk_justification: Json | null
          severity: string | null
          status: string | null
          ticket_id: string
          time_estimates: Json | null
          time_urgency_score: number | null
          title: string | null
          user_story: string | null
          work_to_be_done: string | null
        }
        Insert: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          call_summary?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid: string
          created_at: string
          historical_context?: Json | null
          meetingid?: string | null
          related_keywords?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id: string
          time_estimates?: Json | null
          time_urgency_score?: number | null
          title?: string | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Update: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          call_summary?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid?: string
          created_at?: string
          historical_context?: Json | null
          meetingid?: string | null
          related_keywords?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id?: string
          time_estimates?: Json | null
          time_urgency_score?: number | null
          title?: string | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_analysis_issues_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "product_analysis_issues_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      product_analysis_issues_backup: {
        Row: {
          acceptance_criteria: string | null
          ai_explanation: string | null
          assigned_to: string | null
          category: string | null
          churn_risk_score: number | null
          clientid: string | null
          created_at: string | null
          historical_context: Json | null
          meetingid: string | null
          risk_justification: Json | null
          severity: string | null
          status: string | null
          ticket_id: string | null
          time_estimates: Json | null
          time_urgency_score: number | null
          user_story: string | null
          work_to_be_done: string | null
        }
        Insert: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid?: string | null
          created_at?: string | null
          historical_context?: Json | null
          meetingid?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id?: string | null
          time_estimates?: Json | null
          time_urgency_score?: number | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Update: {
          acceptance_criteria?: string | null
          ai_explanation?: string | null
          assigned_to?: string | null
          category?: string | null
          churn_risk_score?: number | null
          clientid?: string | null
          created_at?: string | null
          historical_context?: Json | null
          meetingid?: string | null
          risk_justification?: Json | null
          severity?: string | null
          status?: string | null
          ticket_id?: string | null
          time_estimates?: Json | null
          time_urgency_score?: number | null
          user_story?: string | null
          work_to_be_done?: string | null
        }
        Relationships: []
      }
      raw_transcript: {
        Row: {
          content: string | null
          embedding: string
          metadata: Json
          transcriptid: string
        }
        Insert: {
          content?: string | null
          embedding: string
          metadata: Json
          transcriptid?: string
        }
        Update: {
          content?: string | null
          embedding?: string
          metadata?: Json
          transcriptid?: string
        }
        Relationships: []
      }
      Rion_attendance_log: {
        Row: {
          event_type: string
          id: number
          timestamp: string
          user_id: number
        }
        Insert: {
          event_type: string
          id?: number
          timestamp?: string
          user_id: number
        }
        Update: {
          event_type?: string
          id?: number
          timestamp?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Rion_attendance_log_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "Rion_users"
            referencedColumns: ["id"]
          },
        ]
      }
      Rion_leave_requests: {
        Row: {
          id: number
          manager_email: string | null
          request_date: string
          status: string
          user_id: number
        }
        Insert: {
          id?: number
          manager_email?: string | null
          request_date: string
          status?: string
          user_id: number
        }
        Update: {
          id?: number
          manager_email?: string | null
          request_date?: string
          status?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Rion_leave_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "Rion_users"
            referencedColumns: ["id"]
          },
        ]
      }
      Rion_users: {
        Row: {
          current_status: string
          email: string
          id: number
          role: string
        }
        Insert: {
          current_status: string
          email: string
          id?: number
          role: string
        }
        Update: {
          current_status?: string
          email?: string
          id?: number
          role?: string
        }
        Relationships: []
      }
      risk_classification_tracker: {
        Row: {
          clientid: string
          current_level: string | null
          high_risk_flag: boolean | null
          history: string | null
          meetingid: string | null
          reported_at: string | null
          summary: string | null
        }
        Insert: {
          clientid: string
          current_level?: string | null
          high_risk_flag?: boolean | null
          history?: string | null
          meetingid?: string | null
          reported_at?: string | null
          summary?: string | null
        }
        Update: {
          clientid?: string
          current_level?: string | null
          high_risk_flag?: boolean | null
          history?: string | null
          meetingid?: string | null
          reported_at?: string | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risk_classification_tracker_clientid_fkey"
            columns: ["clientid"]
            isOneToOne: true
            referencedRelation: "clients"
            referencedColumns: ["clientid"]
          },
          {
            foreignKeyName: "risk_classification_tracker_meetingid_fkey"
            columns: ["meetingid"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["meetingid"]
          },
        ]
      }
      sales_to_cs_handoff: {
        Row: {
          ae_rating: Json | null
          client_goals: Json | null
          deal_id: number | null
          deal_name: string | null
          financial_impacts: Json | null
          financial_info: Json | null
          id: number
          objectives: Json | null
          org_dynamics: Json | null
          paint_points: Json | null
          playbook_reps: Json | null
          product_gaps: Json | null
          stakeholder_info: Json | null
        }
        Insert: {
          ae_rating?: Json | null
          client_goals?: Json | null
          deal_id?: number | null
          deal_name?: string | null
          financial_impacts?: Json | null
          financial_info?: Json | null
          id?: number
          objectives?: Json | null
          org_dynamics?: Json | null
          paint_points?: Json | null
          playbook_reps?: Json | null
          product_gaps?: Json | null
          stakeholder_info?: Json | null
        }
        Update: {
          ae_rating?: Json | null
          client_goals?: Json | null
          deal_id?: number | null
          deal_name?: string | null
          financial_impacts?: Json | null
          financial_info?: Json | null
          id?: number
          objectives?: Json | null
          org_dynamics?: Json | null
          paint_points?: Json | null
          playbook_reps?: Json | null
          product_gaps?: Json | null
          stakeholder_info?: Json | null
        }
        Relationships: []
      }
      salesmsg_secrets: {
        Row: {
          client_id: string
          client_secret: string
          id: string
          last_updated: string | null
          refresh_token: string
          service_name: string
        }
        Insert: {
          client_id: string
          client_secret: string
          id?: string
          last_updated?: string | null
          refresh_token: string
          service_name: string
        }
        Update: {
          client_id?: string
          client_secret?: string
          id?: string
          last_updated?: string | null
          refresh_token?: string
          service_name?: string
        }
        Relationships: []
      }
      "sample vector": {
        Row: {
          "Actionable Advice to Reduce Churn (1-10)": number | null
          "Churn Risk Impact Summary": string | null
          "Clarity of Feedback to Train CSM (1-10)": number | null
          "Explanation - Actionable Advice": string | null
          "Explanation - Clarity": string | null
          "Explanation - Specificity": string | null
          "Specificity & Avoiding General Comments (1-10)": number | null
          Tags: string | null
        }
        Insert: {
          "Actionable Advice to Reduce Churn (1-10)"?: number | null
          "Churn Risk Impact Summary"?: string | null
          "Clarity of Feedback to Train CSM (1-10)"?: number | null
          "Explanation - Actionable Advice"?: string | null
          "Explanation - Clarity"?: string | null
          "Explanation - Specificity"?: string | null
          "Specificity & Avoiding General Comments (1-10)"?: number | null
          Tags?: string | null
        }
        Update: {
          "Actionable Advice to Reduce Churn (1-10)"?: number | null
          "Churn Risk Impact Summary"?: string | null
          "Clarity of Feedback to Train CSM (1-10)"?: number | null
          "Explanation - Actionable Advice"?: string | null
          "Explanation - Clarity"?: string | null
          "Explanation - Specificity"?: string | null
          "Specificity & Avoiding General Comments (1-10)"?: number | null
          Tags?: string | null
        }
        Relationships: []
      }
      smartreview_logs: {
        Row: {
          created_at: string
          days_past_to_email: number | null
          email: string | null
          email_body: string | null
          has_been_sent: boolean | null
          id: string
          league_id: number | null
          program_type: string | null
          review_link: string | null
          review_platform: string | null
        }
        Insert: {
          created_at: string
          days_past_to_email?: number | null
          email?: string | null
          email_body?: string | null
          has_been_sent?: boolean | null
          id?: string
          league_id?: number | null
          program_type?: string | null
          review_link?: string | null
          review_platform?: string | null
        }
        Update: {
          created_at?: string
          days_past_to_email?: number | null
          email?: string | null
          email_body?: string | null
          has_been_sent?: boolean | null
          id?: string
          league_id?: number | null
          program_type?: string | null
          review_link?: string | null
          review_platform?: string | null
        }
        Relationships: []
      }
      sports_coach_conversation_history: {
        Row: {
          created_at: string
          id: number
          message: string | null
          session_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
          session_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
          session_id?: string
        }
        Relationships: []
      }
      sports_in_venues: {
        Row: {
          city: string | null
          event_id: string
          sports: string | null
          state: string | null
          venue: string
        }
        Insert: {
          city?: string | null
          event_id?: string
          sports?: string | null
          state?: string | null
          venue: string
        }
        Update: {
          city?: string | null
          event_id?: string
          sports?: string | null
          state?: string | null
          venue?: string
        }
        Relationships: []
      }
      structured_jira_db: {
        Row: {
          assignee: string | null
          category: string | null
          created_at: string
          jira_id: string
          original_description: string | null
          status: string | null
        }
        Insert: {
          assignee?: string | null
          category?: string | null
          created_at: string
          jira_id: string
          original_description?: string | null
          status?: string | null
        }
        Update: {
          assignee?: string | null
          category?: string | null
          created_at?: string
          jira_id?: string
          original_description?: string | null
          status?: string | null
        }
        Relationships: []
      }
      task_assignments: {
        Row: {
          task_id: string
          user_id: string
        }
        Insert: {
          task_id: string
          user_id: string
        }
        Update: {
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_assignments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "todo_app_bj_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "task_assignments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "todo_app_bj_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      task_management_table: {
        Row: {
          createdAt: string | null
          description: string | null
          due_date: string | null
          id: string
          status: Database["public"]["Enums"]["task_status_enum_new"] | null
          title: string
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["task_status_enum_new"] | null
          title: string
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["task_status_enum_new"] | null
          title?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
      tasks_task_assigner: {
        Row: {
          created_at: string
          date_completed: string | null
          description: string | null
          due_date: string | null
          id: string
          status: Database["public"]["Enums"]["task_status_enum"]
          title: string
        }
        Insert: {
          created_at?: string
          date_completed?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["task_status_enum"]
          title: string
        }
        Update: {
          created_at?: string
          date_completed?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: Database["public"]["Enums"]["task_status_enum"]
          title?: string
        }
        Relationships: []
      }
      "teammate ai inbound leads": {
        Row: {
          email: string | null
          id: number
          name: string | null
          offer_page: string | null
          organization: string | null
          submission_time: string
          website: string | null
        }
        Insert: {
          email?: string | null
          id?: number
          name?: string | null
          offer_page?: string | null
          organization?: string | null
          submission_time?: string
          website?: string | null
        }
        Update: {
          email?: string | null
          id?: number
          name?: string | null
          offer_page?: string | null
          organization?: string | null
          submission_time?: string
          website?: string | null
        }
        Relationships: []
      }
      "teammate newsletter": {
        Row: {
          created_at: string
          email: string | null
          id: number
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
        }
        Relationships: []
      }
      ticket_availability_knowledgebase: {
        Row: {
          availability: string | null
          city: string | null
          event_date: string | null
          home_team: string | null
          home_team_flag: boolean | null
          level: string | null
          local_time: string | null
          max_price: number | null
          min_price: number | null
          notes: string | null
          opposing_team: string | null
          sale_end_date: string | null
          sale_start_date: string | null
          sport: string | null
          team_search: string | null
          ticketmaster_id: string
          venue: string | null
        }
        Insert: {
          availability?: string | null
          city?: string | null
          event_date?: string | null
          home_team?: string | null
          home_team_flag?: boolean | null
          level?: string | null
          local_time?: string | null
          max_price?: number | null
          min_price?: number | null
          notes?: string | null
          opposing_team?: string | null
          sale_end_date?: string | null
          sale_start_date?: string | null
          sport?: string | null
          team_search?: string | null
          ticketmaster_id: string
          venue?: string | null
        }
        Update: {
          availability?: string | null
          city?: string | null
          event_date?: string | null
          home_team?: string | null
          home_team_flag?: boolean | null
          level?: string | null
          local_time?: string | null
          max_price?: number | null
          min_price?: number | null
          notes?: string | null
          opposing_team?: string | null
          sale_end_date?: string | null
          sale_start_date?: string | null
          sport?: string | null
          team_search?: string | null
          ticketmaster_id?: string
          venue?: string | null
        }
        Relationships: []
      }
      tms: {
        Row: {
          created_at: string
          employee_name: string | null
          id: string
          time_in: string | null
          time_out: string | null
        }
        Insert: {
          created_at?: string
          employee_name?: string | null
          id?: string
          time_in?: string | null
          time_out?: string | null
        }
        Update: {
          created_at?: string
          employee_name?: string | null
          id?: string
          time_in?: string | null
          time_out?: string | null
        }
        Relationships: []
      }
      todo_app_bj_task_assignments: {
        Row: {
          id: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todo_app_bj_task_assignments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "todo_app_bj_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "todo_app_bj_task_assignments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "todo_app_bj_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      todo_app_bj_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          is_complete: boolean | null
          task_id: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          is_complete?: boolean | null
          task_id?: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          is_complete?: boolean | null
          task_id?: string
          title?: string
        }
        Relationships: []
      }
      todo_app_bj_users: {
        Row: {
          created_at: string
          email: string | null
          password: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          password?: string | null
          user_id?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          password?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      users_cnc: {
        Row: {
          current_status: string
          email: string
          id: number
          password_hash: string | null
          role: string
        }
        Insert: {
          current_status?: string
          email: string
          id?: never
          password_hash?: string | null
          role: string
        }
        Update: {
          current_status?: string
          email?: string
          id?: never
          password_hash?: string | null
          role?: string
        }
        Relationships: []
      }
      users_task_assigner: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
          role: Database["public"]["Enums"]["role_enum"] | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Relationships: []
      }
      "Webpage source": {
        Row: {
          email: string | null
          id: string
          "Phone num": string | null
          Webpage: string
          webpage2: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          "Phone num"?: string | null
          Webpage: string
          webpage2?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          "Phone num"?: string | null
          Webpage?: string
          webpage2?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authenticate_user: {
        Args: { user_email: string; user_password: string }
        Returns: Json
      }
      generate_random_code: { Args: { length: number }; Returns: string }
      get_clients_with_details: {
        Args: {
          filter_company_id?: string
          filter_high_priority?: boolean
          limit_count?: number
        }
        Returns: {
          arr_value: number
          barr_deal_valuation: string
          churn_risk: string
          churn_risk_score: number
          closedAt: string
          companyId: string
          companyName: string
          csm: string
          dealId: string
          dealStage: string
          domain: string
          hubspotCompanyLink: string
          latest_meeting_datetime: string
          pipeline: string
          total_issues: number
          unresolved_issues: number
        }[]
      }
      get_company_details: {
        Args: { company_id_param: string }
        Returns: {
          arr: string
          avg_churn_risk_score: string
          companyId: string
          companyName: string
          confusion_points: Json
          domain: string
          email: string
          hubspotCompanyLink: string
          issues: Json
          meetings: Json
          monthly_fee: string
          next_meeting: string
          next_meeting_agenda: string[]
          non_code_issues: number
          open_issues: number
          processing_score: string
          risk_classifications: Json
          total_agenda_items: number
          total_confusion_points: number
          total_issues: number
          total_meetings: number
        }[]
      }
      get_issues_with_details: {
        Args: {
          p_company_id?: string
          p_csm_email?: string
          p_issue_id?: string
          p_limit?: number
        }
        Returns: {
          acceptance_criteria: Json
          ai_explanation: Json
          ai_feedback: Json
          assignedTo: string
          category: string
          churn_risk_score: string
          clariCallLink: string
          comments: Json
          companyId: string
          companyName: string
          createdAt: string
          historical_context: Json
          issueId: string
          jira_link: string
          meetingId: string
          related_keywords: Json
          risk_justification: Json
          severity: string
          status: string
          time_estimates: Json
          time_urgency_score: string
          title: string
          urgency_analysis: Json
          user_story: string
          work_to_be_done: Json
        }[]
      }
      has_clocked_in_today: { Args: never; Returns: boolean }
      match_csm_product_analysis_documents: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_csm_product_analysis_documents_client: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_csm_product_analysis_documents_global: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_jira: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_email_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_email_drafter_vector_table: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_jira_issues: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_jira_issues_2: {
        Args: { filter?: Json; match_count: number; query_embedding: string }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      match_playbook_sports_master_knowledge_base: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      update_jira_ticket: {
        Args: {
          new_content: string
          new_embedding: string
          new_metadata: Json
          ticket_id: string
        }
        Returns: {
          content: string
          id: string
          metadata: Json
          similarity: number
        }[]
      }
      verify_password: {
        Args: { user_email: string; user_password: string }
        Returns: {
          is_valid: boolean
        }[]
      }
    }
    Enums: {
      clockinclockout_event_type: "clock_in" | "clock_out" | "sick_leave"
      clockinclockout_request_status:
        | "pending"
        | "approved"
        | "denied"
        | "overlapping_request_date"
      clockinclockout_user_role: "employee" | "manager"
      clockinclockout_user_status:
        | "clocked_out"
        | "clocked_in"
        | "on_sick_leave"
      role_enum: "ADMIN" | "EMPLOYEE"
      task_status_enum:
        | "todo"
        | "in_progress"
        | "completed"
        | "on_hold"
        | "archived"
      task_status_enum_new: "pending" | "completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      clockinclockout_event_type: ["clock_in", "clock_out", "sick_leave"],
      clockinclockout_request_status: [
        "pending",
        "approved",
        "denied",
        "overlapping_request_date",
      ],
      clockinclockout_user_role: ["employee", "manager"],
      clockinclockout_user_status: [
        "clocked_out",
        "clocked_in",
        "on_sick_leave",
      ],
      role_enum: ["ADMIN", "EMPLOYEE"],
      task_status_enum: [
        "todo",
        "in_progress",
        "completed",
        "on_hold",
        "archived",
      ],
      task_status_enum_new: ["pending", "completed"],
    },
  },
} as const
