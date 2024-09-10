import type { IDateValue } from './common';
import type { ITechnicalSkill } from './technical-skill';

export type IProfessionalExperienceProps = {
  id: string;
  jobTitle: string;
  company: string;
  startDate: IDateValue;
  endDate: IDateValue;
  descriptions: string[];
  location: string;
  converUrl: string;
  technicalSkills: ITechnicalSkill[];
};
