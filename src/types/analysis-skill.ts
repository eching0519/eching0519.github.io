export type AnalysisFramework = 'CRISP-DM';

export type AnalysisModel =
  | 'Multiple Regression'
  | 'K-Means'
  | 'KNN'
  | 'Decision Tree'
  | 'Random Forest'
  | 'Monte Carlo Simulation';

export type AnalysisLibrary =
  | 'tidyverse'
  | 'ggplot2'
  | 'rpart'
  | 'plotly'
  | 'scikit-learn'
  | 'Pandas'
  | 'Numpy'
  | 'Matplotlib'
  | 'seaborn';

export type AnalysisTool = 'Jupyter' | 'RStudio';

export type IAnalysisSkill = {
  models: AnalysisModel[];
  framework?: AnalysisFramework;
  libraries?: AnalysisLibrary[];
  tools?: AnalysisTool[];
};
