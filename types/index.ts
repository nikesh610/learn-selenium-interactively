export interface TopicData {
  slug: string;
  title: string;
  description: string;
  content: string;
  snippet: string;
}

export interface CodeExecutionRequest {
  code: string;
}

export interface CodeExecutionResponse {
  output: string;
  error?: string;
  success: boolean;
}