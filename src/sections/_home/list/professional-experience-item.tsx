import type { IProfessionalExperienceProps } from 'src/types/professional-experience';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  experience: IProfessionalExperienceProps;
  isVertical?: boolean;
};

export function ProfessionalExperienceItem({ experience, isVertical }: Props) {
  const renderImage = (
    <Image
      alt={experience.company}
      src={experience.converUrl}
      sx={{
        width: 1,
        flexShrink: 0,
        maxWidth: { xs: 1, sm: 260 },
        aspectRatio: { xs: '5/2', sm: '1/1' },
        ...(isVertical && {
          maxWidth: 1,
        }),
      }}
    />
  );

  const renderTop = (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography color="inherit" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          {experience.jobTitle}
        </Typography>

        <Typography variant="body2">
          {fDate(experience.startDate, 'MMM YYYY')} - {fDate(experience.endDate, 'MMM YYYY')}
        </Typography>
      </Box>
      <Box
        gap={1}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography variant="overline" sx={{ color: 'primary.main', flexGrow: 1 }}>
          {experience.company}
        </Typography>

        <Box
          gap={0.5}
          alignItems="center"
          sx={{
            typography: 'caption',
            color: 'text.disabled',
            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        >
          <Iconify width={18} icon="carbon:location" />
          {experience.location}
        </Box>
      </Box>
    </Box>
  );

  const renderTexts = (
    <Stack sx={{ minWidth: 0 }}>
      <List
        sx={{
          color: 'primary.main',
          listStyleType: 'disc',
          listStylePosition: 'inside',
          typography: 'body2',
        }}
      >
        {experience.descriptions.map((it, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <Typography component="span" color="text.primary">
              {it}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': { boxShadow: (theme) => theme.customShadows.z24 },
        ...(isVertical && { flexDirection: 'column' }),
      }}
      key={`professional-experience-${experience.id}`}
    >
      {renderImage}

      <Stack spacing={1} sx={{ p: 3, minWidth: 0, flexGrow: 1 }}>
        {renderTop}

        <Box gap={1} display="flex" flexWrap="wrap" sx={{ pt: 1 }}>
          {experience.technicalSkills.map((it, index) =>
            it.skills.map((skill, idx) => (
              <Label key={`project-tech-${index}-${idx}`}>{skill}</Label>
            ))
          )}
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderTexts}
      </Stack>
    </Card>
  );
}
