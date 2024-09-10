import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _professionalExperience } from 'src/assets/data/professional-experience';

import { varFade, MotionViewport } from 'src/components/animate';

import { ProfessionalExperienceItem } from './list/professional-experience-item';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function ProfessionalExperiencesView() {
  return (
    <Box
      id="professional-experience"
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
      }}
    >
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            py: { xs: 5, md: 7 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <AnimatedDiv>
            <Typography variant="h2" sx={{ pb: { xs: 1, md: 3 } }}>
              Professional Experience
            </Typography>
          </AnimatedDiv>

          {_professionalExperience.toReversed().map((experience) => (
            <AnimatedDiv key={`experience-animated-${experience.id}`}>
              <ProfessionalExperienceItem key={experience.id} experience={experience} />
            </AnimatedDiv>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
