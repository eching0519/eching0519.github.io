import type { ITechnicalSkill } from './technical-skill';
import type { ProjectCategory } from './project-category';
import type { IDateValue, IReferenceLink } from './common';

// ----------------------------------------------------------------------

export type ISideProjectProps = {
  id: string;
  coverUrl: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdatedAt: IDateValue;
  category: ProjectCategory;
  links?: IReferenceLink[];
  technicalSkills: ITechnicalSkill[];
  isAcademicProject?: boolean;
  pending?: boolean;
  inProgress?: boolean;
};
