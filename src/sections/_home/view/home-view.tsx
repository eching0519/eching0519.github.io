import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { EducationView } from '../education';
import { ProfileHero } from '../profile-hero';
import { SideProjectsView } from '../side-projects';
import { CertificationsView } from '../certifications';
import { ProfessionalExperiencesView } from '../professional-experience';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <ProfileHero />

      <SideProjectsView />

      <ProfessionalExperiencesView />

      <EducationView />

      <CertificationsView />
    </>
  );
}
