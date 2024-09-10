import type { IEducationProps } from 'src/types/education';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  education: IEducationProps;
  isVertical?: boolean;
};

export function EducationItem({ education, isVertical }: Props) {
  const renderLogo = (
    <Box gap={2} display="flex" alignItems="center" justifyContent="space-between">
      <Image
        alt={education.institution}
        src={education.logo}
        sx={{ height: 48, borderRadius: 1 }}
      />

      {education.wesVerified && <Label color="success">Verified by WES</Label>}
    </Box>
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
          {education.title}
        </Typography>

        <Typography variant="body2">
          {fDate(education.startDate, 'MMM YYYY')} - {fDate(education.endDate, 'MMM YYYY')}
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
          {education.institution}
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
          {education.location}
        </Box>
      </Box>
    </Box>
  );

  const renderTexts = education.descriptions && (
    <Stack sx={{ minWidth: 0 }}>
      <List
        sx={{
          color: 'primary.main',
          listStyleType: 'disc',
          listStylePosition: 'inside',
          fontSize: 12,
          py: 0,
        }}
      >
        {education.descriptions.map((it, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <Typography component="span" color="text.primary" fontSize={12}>
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
      key={`education-${education.id}`}
    >
      <Stack spacing={1} sx={{ p: 3, minWidth: 0, flexGrow: 1 }}>
        {renderLogo}
        {renderTop}
        {renderTexts}
      </Stack>
    </Card>
  );
}
