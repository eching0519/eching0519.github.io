import type { IDataAnalysisProps } from 'src/types/data-analysis';

import { CONFIG } from 'src/config-global';

import { DataAnalysisCategory } from 'src/types/data-analysis-category';

// ----------------------------------------------------------------------

export const _dataAnalysis: IDataAnalysisProps[] = [
  {
    id: 'da-001',
    coverUrl: `${CONFIG.assetsDir}/assets/images/analysis/london-bike-sharing.png`,
    title: 'London Bike Sharing',
    subtitle: 'EDA and Machine Learning for Bike Sharing Patterns',
    description:
      'A comprehensive analysis of London bike sharing data using R for exploratory data analysis and machine learning. The project includes data visualization, pattern recognition, and predictive modeling to understand bike sharing trends and optimize bike distribution strategies.',
    lastUpdatedAt: 'Dec 15, 2024',
    category: DataAnalysisCategory.r,
    analysisSkills: [
      {
        framework: 'CRISP-DM',
        models: ['Multiple Regression', 'K-Means', 'Decision Tree', 'Random Forest'],
        libraries: ['tidyverse', 'ggplot2', 'rpart', 'plotly'],
        tools: ['RStudio'],
      },
    ],
    htmlContentPath: '/assets/analysis/london-bike-sharing.html',
    isAcademicProject: true,
  },
  {
    id: 'da-002',
    coverUrl: `${CONFIG.assetsDir}/assets/images/analysis/hotel-booking-analysis.png`,
    title: 'Hotel Booking Analysis',
    subtitle: 'Machine Learning Models for Business Insights',
    description:
      'A comprehensive hotel booking analysis following the CRISP-DM process using Python. The project employs machine learning models including KNN, K-Means clustering, and Monte Carlo simulation to address key business issues and help hotels make data-driven decisions for better customer service and revenue optimization.',
    lastUpdatedAt: 'Nov 28, 2024',
    category: DataAnalysisCategory.python,
    analysisSkills: [
      {
        framework: 'CRISP-DM',
        models: ['KNN', 'K-Means', 'Monte Carlo Simulation'],
        libraries: ['scikit-learn', 'Pandas', 'Numpy', 'Matplotlib', 'seaborn'],
        tools: ['Jupyter'],
      },
    ],
    htmlContentPath: '/assets/analysis/hotel-booking.html',
    isAcademicProject: true,
  },
];
