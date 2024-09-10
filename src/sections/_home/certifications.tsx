import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { CertificationList } from './list/certification-list';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function CertificationsView() {
  return (
    <Box
      id="certifications"
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
              Certifications
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <CertificationList />
          </AnimatedDiv>
        </Stack>
      </Container>
    </Box>
  );
}
