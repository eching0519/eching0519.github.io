export type SocialMedia = {
  value: string;
  label: string;
  link: string;
};

export type Profile = {
  name: string;
  jobTitle: string;
  location: string;
  description: string;
  socialMedias: SocialMedia[];
};
