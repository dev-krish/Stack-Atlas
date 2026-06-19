    export interface CategoryScore {
  category: string;
  score: number;
  summary: string;
}

export interface ReviewReport {
  overallScore: number;
  repositoryHealthScore: number;
  categories: CategoryScore[];
  recommendations: string[];
}