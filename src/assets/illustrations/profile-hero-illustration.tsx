import type { BoxProps } from '@mui/material/Box';

import { memo } from 'react';

import Box from '@mui/material/Box';

import { CONFIG } from 'src/config-global';

import { Shape } from './components/shape';
import { CirclePattern } from './components/circle-pattern';
import { TrianglePattern } from './components/shape-pattern';

// ----------------------------------------------------------------------

function ProfileHeroIllustration({ sx, ...other }: BoxProps) {
  const baseStyles = {
    zIndex: 8,
    position: 'absolute',
  } as const;

  const renderCharacter = (
    <Box
      component="img"
      alt="Teacher hero"
      src={`${CONFIG.assetsDir}/assets/images/home/hero.png`}
      sx={{
        ...baseStyles,
        right: 34,
        width: 486,
        bottom: 39,
        height: 680,
      }}
    />
  );

  const renderShapes = (
    <>
      <TrianglePattern sx={{ left: 10, top: 0 }} />
      <CirclePattern sx={{ top: 0, left: 10, opacity: 0.48, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
    </>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 670, height: 670, position: 'relative', ...sx }}
      {...other}
    >
      {renderCharacter}
      {renderShapes}
    </Box>
  );
}

export default memo(ProfileHeroIllustration);
