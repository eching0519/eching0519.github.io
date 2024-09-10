import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _educationRecords } from 'src/assets/data/my-profile';

import { varFade, MotionViewport } from 'src/components/animate';

import { EducationItem } from './list/education-item';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function EducationView() {
  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Container component={MotionViewport}>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                Education
              </Typography>
            </AnimatedDiv>

            <AnimatedDiv>
              <Typography sx={{ color: 'text.secondary' }}>
                My academic credentials are verified by World Education Services, ensuring the
                authenticity of my educational background.
              </Typography>
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack
              spacing={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {_educationRecords.toReversed().map((education) => (
                <AnimatedDiv key={`education-animated-${education.id}`}>
                  <EducationItem key={education.id} education={education} />
                </AnimatedDiv>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
