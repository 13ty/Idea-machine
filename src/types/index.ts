export interface ModelConfig {
  type: 'ollama' | 'external';
  endpoint: string;
  modelName: string;
  parameters: {
    temperature: number;
    maxTokens: number;
  };
}

export interface ResponseSegment {
  id: string;
  content: string;
  type: 'ui' | 'feature' | 'architecture' | 'technical';
  metadata?: {
    tags?: string[];
    priority?: 'high' | 'medium' | 'low';
    complexity?: number;
  };
}

export interface PerformanceMetrics {
  wordCount: number;
  wordsPerMinute: number;
  timestamp: Date;
}

export interface PromptTemplate {
  id: string;
  name: string;
  template: string;
  category: string;
}
