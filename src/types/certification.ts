import type { IDateValue, IReferenceLink } from './common';

export type ICertificationProps = {
  id: string;
  title: string;
  organization: string;
  logo: string;
  date: IDateValue;
  image?: string;
  links?: IReferenceLink[];
};
