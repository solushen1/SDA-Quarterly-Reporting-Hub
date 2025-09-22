
export type FieldType = 'text' | 'textarea' | 'number' | 'photos' | 'date';

export interface ReportField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  value: string | string[]; // string for most, string[] for photos
}

export interface ReportSection {
  id: string;
  title: string;
  fields: ReportField[];
}

export interface ReportTemplate {
  id: string;
  name: string;
  sections: ReportSection[];
}

// The active report being filled by the user
export interface Report extends ReportTemplate {}
