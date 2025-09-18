import type { IDateValue } from './common';
import type { IAnalysisSkill } from './analysis-skill';
import type { DataAnalysisCategory } from './data-analysis-category';

// ----------------------------------------------------------------------

export type IDataAnalysisProps = {
  id: string;
  coverUrl: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdatedAt: IDateValue;
  category: DataAnalysisCategory;
  analysisSkills: IAnalysisSkill[];
  htmlContentPath?: string;
  isAcademicProject?: boolean;
};
