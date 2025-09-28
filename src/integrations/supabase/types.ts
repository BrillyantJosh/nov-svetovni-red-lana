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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      event_rooms: {
        Row: {
          created_at: string
          event_id: string
          id: string
          room_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
          id?: string
          room_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
          id?: string
          room_id?: string
        }
        Relationships: []
      }
      event_seen_on: {
        Row: {
          event_id: string
          first_seen_at: string | null
          relay: string
        }
        Insert: {
          event_id: string
          first_seen_at?: string | null
          relay: string
        }
        Update: {
          event_id?: string
          first_seen_at?: string | null
          relay?: string
        }
        Relationships: []
      }
      event_tags: {
        Row: {
          event_id: string
          tag: string
          tag_id: number
          v0: string | null
          v1: string | null
          v2: string | null
          v3: string | null
        }
        Insert: {
          event_id: string
          tag: string
          tag_id?: number
          v0?: string | null
          v1?: string | null
          v2?: string | null
          v3?: string | null
        }
        Update: {
          event_id?: string
          tag?: string
          tag_id?: number
          v0?: string | null
          v1?: string | null
          v2?: string | null
          v3?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_tags_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          content: string
          created_at: number
          id: string
          keep: Database["public"]["Enums"]["retention_class"] | null
          kind: number
          last_touched: string | null
          pubkey: string
          relay: string | null
          seen_at: string | null
          sig: string
        }
        Insert: {
          content: string
          created_at: number
          id: string
          keep?: Database["public"]["Enums"]["retention_class"] | null
          kind: number
          last_touched?: string | null
          pubkey: string
          relay?: string | null
          seen_at?: string | null
          sig: string
        }
        Update: {
          content?: string
          created_at?: number
          id?: string
          keep?: Database["public"]["Enums"]["retention_class"] | null
          kind?: number
          last_touched?: string | null
          pubkey?: string
          relay?: string | null
          seen_at?: string | null
          sig?: string
        }
        Relationships: []
      }
      follows: {
        Row: {
          follows: string
          updated_at: string | null
          who: string
        }
        Insert: {
          follows: string
          updated_at?: string | null
          who: string
        }
        Update: {
          follows?: string
          updated_at?: string | null
          who?: string
        }
        Relationships: []
      }
      heads: {
        Row: {
          created_at: number
          d: string
          event_id: string
          kind: number
          pubkey: string
        }
        Insert: {
          created_at: number
          d?: string
          event_id: string
          kind: number
          pubkey: string
        }
        Update: {
          created_at?: number
          d?: string
          event_id?: string
          kind?: number
          pubkey?: string
        }
        Relationships: [
          {
            foreignKeyName: "heads_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      languages: {
        Row: {
          code: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      link_metadata_cache: {
        Row: {
          cached_at: string
          created_at: string
          description: string | null
          expires_at: string
          id: string
          image_url: string | null
          site_name: string | null
          title: string | null
          updated_at: string
          url: string
        }
        Insert: {
          cached_at?: string
          created_at?: string
          description?: string | null
          expires_at?: string
          id?: string
          image_url?: string | null
          site_name?: string | null
          title?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          cached_at?: string
          created_at?: string
          description?: string | null
          expires_at?: string
          id?: string
          image_url?: string | null
          site_name?: string | null
          title?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      opened_threads: {
        Row: {
          first_opened_at: string | null
          last_opened_at: string | null
          root_event_id: string
          who: string
        }
        Insert: {
          first_opened_at?: string | null
          last_opened_at?: string | null
          root_event_id: string
          who: string
        }
        Update: {
          first_opened_at?: string | null
          last_opened_at?: string | null
          root_event_id?: string
          who?: string
        }
        Relationships: [
          {
            foreignKeyName: "opened_threads_root_event_id_fkey"
            columns: ["root_event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          full_name: string | null
          id: string
          lana_wallet_id: string | null
          lash: number | null
          nostr_id_hex: string | null
          picture: string | null
          tags_o: string[] | null
          tags_t: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          full_name?: string | null
          id?: string
          lana_wallet_id?: string | null
          lash?: number | null
          nostr_id_hex?: string | null
          picture?: string | null
          tags_o?: string[] | null
          tags_t?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          full_name?: string | null
          id?: string
          lana_wallet_id?: string | null
          lash?: number | null
          nostr_id_hex?: string | null
          picture?: string | null
          tags_o?: string[] | null
          tags_t?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      pubkey_relays: {
        Row: {
          can_read: boolean | null
          can_write: boolean | null
          pubkey: string
          relay: string
          updated_at: string | null
        }
        Insert: {
          can_read?: boolean | null
          can_write?: boolean | null
          pubkey: string
          relay: string
          updated_at?: string | null
        }
        Update: {
          can_read?: boolean | null
          can_write?: boolean | null
          pubkey?: string
          relay?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      relay_cursors: {
        Row: {
          last_ok_at: string | null
          relay: string
          since_created_at: number
          stream: string
          who: string
        }
        Insert: {
          last_ok_at?: string | null
          relay: string
          since_created_at?: number
          stream: string
          who: string
        }
        Update: {
          last_ok_at?: string | null
          relay?: string
          since_created_at?: number
          stream?: string
          who?: string
        }
        Relationships: []
      }
      relay_health: {
        Row: {
          fail_streak: number | null
          last_ok_at: string | null
          latency_ms: number | null
          relay: string
          score: number
        }
        Insert: {
          fail_streak?: number | null
          last_ok_at?: string | null
          latency_ms?: number | null
          relay: string
          score?: number
        }
        Update: {
          fail_streak?: number | null
          last_ok_at?: string | null
          latency_ms?: number | null
          relay?: string
          score?: number
        }
        Relationships: []
      }
      relays: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string | null
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      room_admins: {
        Row: {
          can_create_rooms: boolean
          created_at: string
          granted_by: string | null
          id: string
          is_super_admin: boolean
          updated_at: string
          user_hex_id: string
        }
        Insert: {
          can_create_rooms?: boolean
          created_at?: string
          granted_by?: string | null
          id?: string
          is_super_admin?: boolean
          updated_at?: string
          user_hex_id: string
        }
        Update: {
          can_create_rooms?: boolean
          created_at?: string
          granted_by?: string | null
          id?: string
          is_super_admin?: boolean
          updated_at?: string
          user_hex_id?: string
        }
        Relationships: []
      }
      room_permissions: {
        Row: {
          can_admin: boolean
          can_read: boolean
          can_write: boolean
          created_at: string
          granted_by: string
          id: string
          room_id: string
          updated_at: string
          user_hex_id: string
        }
        Insert: {
          can_admin?: boolean
          can_read?: boolean
          can_write?: boolean
          created_at?: string
          granted_by: string
          id?: string
          room_id: string
          updated_at?: string
          user_hex_id: string
        }
        Update: {
          can_admin?: boolean
          can_read?: boolean
          can_write?: boolean
          created_at?: string
          granted_by?: string
          id?: string
          room_id?: string
          updated_at?: string
          user_hex_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "room_permissions_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_public_read: boolean
          is_public_write: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_public_read?: boolean
          is_public_write?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_public_read?: boolean
          is_public_write?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      saved_notes: {
        Row: {
          event_id: string
          saved_at: string | null
          who: string
        }
        Insert: {
          event_id: string
          saved_at?: string | null
          who: string
        }
        Update: {
          event_id?: string
          saved_at?: string | null
          who?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_notes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      sync_status: {
        Row: {
          created_at: string
          error_message: string | null
          events_synced: number | null
          id: string
          last_sync_at: string | null
          relay_url: string
          sync_status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          events_synced?: number | null
          id?: string
          last_sync_at?: string | null
          relay_url: string
          sync_status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          events_synced?: number | null
          id?: string
          last_sync_at?: string | null
          relay_url?: string
          sync_status?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bump_cursor: {
        Args: {
          p_relay: string
          p_since: number
          p_stream: string
          p_who: string
        }
        Returns: undefined
      }
      create_room_as_admin: {
        Args: {
          p_description?: string
          p_is_public_read?: boolean
          p_is_public_write?: boolean
          p_name: string
          p_user_hex_id: string
        }
        Returns: string
      }
      delete_room_as_admin: {
        Args: { p_room_id: string; p_user_hex_id: string }
        Returns: undefined
      }
      get_current_user_hex_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_room_permissions_as_admin: {
        Args: { p_requester_hex_id: string; p_room_id?: string }
        Returns: {
          can_admin: boolean
          can_read: boolean
          can_write: boolean
          created_at: string
          granted_by: string
          id: string
          room_id: string
          updated_at: string
          user_display_name: string
          user_full_name: string
          user_hex_id: string
        }[]
      }
      grant_room_permission_as_admin: {
        Args: {
          p_can_admin?: boolean
          p_can_read?: boolean
          p_can_write?: boolean
          p_granter_hex_id: string
          p_room_id: string
          p_user_hex_id: string
        }
        Returns: undefined
      }
      ingest_event: {
        Args: {
          ev: Json
          p_keep?: Database["public"]["Enums"]["retention_class"]
          p_relay?: string
        }
        Returns: undefined
      }
      is_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      revoke_room_permission_as_admin: {
        Args: {
          p_revoker_hex_id: string
          p_room_id: string
          p_user_hex_id: string
        }
        Returns: undefined
      }
      update_room_as_admin: {
        Args: {
          p_description?: string
          p_is_public_read?: boolean
          p_is_public_write?: boolean
          p_name?: string
          p_room_id: string
          p_user_hex_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      retention_class: "permanent" | "window" | "scoped" | "drop"
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
  public: {
    Enums: {
      retention_class: ["permanent", "window", "scoped", "drop"],
    },
  },
} as const
