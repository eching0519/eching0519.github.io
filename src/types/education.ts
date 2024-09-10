import type { IDateValue } from './common';

export type IEducationProps = {
  id: string;
  title: string;
  institution: string;
  startDate: IDateValue;
  endDate: IDateValue;
  descriptions?: string[];
  location: string;
  logo: string;
  wesVerified: boolean;
};
