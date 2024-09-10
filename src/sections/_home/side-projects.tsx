import { useRef } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { SideProjectList } from './list/side-project-list';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function SideProjectsView() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <Box
      id="side-project"
      component="section"
      ref={sectionRef}
      sx={{
        pt: { xs: 3, md: 5 },
      }}
    >
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            py: { xs: 3, md: 5 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <AnimatedDiv>
            <Typography variant="h2">Side Projects</Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography sx={{ color: 'text.secondary' }}>
              I&apos;m passionate about developing innovative solutions.
              <br />
              Here are some of my side projects that showcase my skills:
            </Typography>
          </AnimatedDiv>
        </Stack>

        <AnimatedDiv>
          <SideProjectList sectionRef={sectionRef} />
        </AnimatedDiv>
      </Container>
    </Box>
  );
}
