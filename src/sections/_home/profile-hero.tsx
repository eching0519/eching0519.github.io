import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';
import { _profile, _technicalSkills } from 'src/assets/data/my-profile';
import ProfileHeroIllustration from 'src/assets/illustrations/profile-hero-illustration';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }: { children: React.ReactNode }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function ProfileHero({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const renderSocials = _profile.socialMedias.map((social) => (
    <IconButton key={social.value} color="inherit" href={social.link} target="_blank">
      {(social.value === 'twitter' && (
        <SvgColor
          width={20}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
        />
      )) || (
        <Box
          component="img"
          loading="lazy"
          alt={social.label}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
          sx={{ width: 20, height: 20 }}
        />
      )}
    </IconButton>
  ));

  const renderTechnicalSkills = (
    <AnimatedDiv>
      <Box gap={1} display="flex" flexWrap="wrap" sx={{ maxWidth: 480, color: 'text.secondary' }}>
        {_technicalSkills.flat().map((it) => it.skills.map((skill) => <Label>{skill}</Label>))}
      </Box>
    </AnimatedDiv>
  );

  const renderContent = (
    <Stack
      component={MotionViewport}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <AnimatedDiv>
        <Typography variant="h1">
          {'Hi! This is '}
          <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
            {_profile.name}
          </Box>
          {', a '}
          <Box component="span" sx={{ color: 'text.secondary' }}>
            {_profile.jobTitle}
          </Box>
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Box display="flex" justifyContent="end">
          <Box
            gap={0.5}
            display="flex"
            alignItems="center"
            sx={{ mt: 2, typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify width={18} icon="carbon:location" />
            {_profile.location}
          </Box>
        </Box>

        <Typography sx={{ mt: 1, maxWidth: 480, color: 'text.secondary' }}>
          {_profile.description}
        </Typography>

        <AnimatedDiv>
          <Box
            display="flex"
            sx={{ mt: { xs: 3, sm: 5 }, justifyContent: { xs: 'center', md: 'start' } }}
          >
            {renderSocials}
          </Box>
        </AnimatedDiv>

        <Divider sx={{ borderStyle: 'dashed', my: 2 }} />
      </AnimatedDiv>

      {renderTechnicalSkills}
    </Stack>
  );

  return (
    <Box
      id="home"
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
        pt: 10,
        pb: 5,
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          pt: 15,
          display: 'flex',
          alignItems: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            {renderContent}
          </Grid>

          <Grid xs={12} md={6} lg={7} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ProfileHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
