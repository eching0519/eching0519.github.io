import type { ICertificationProps } from 'src/types/certification';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  certification: ICertificationProps;
  onSelectCertification: () => void;
};

export function CertificationItem({ certification, onSelectCertification }: Props) {
  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'unset',
          height: '100%',
        }}
        onClick={onSelectCertification}
        disabled={!certification.image}
      >
        <Stack sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }} textAlign="left" flexGrow={1}>
          <Box gap={2} display="flex" alignItems="center">
            <Image
              alt={certification.organization}
              src={certification.logo}
              sx={{ width: 48, height: 48, borderRadius: 1 }}
            />
          </Box>

          <Box sx={{ mt: 3 }} flexGrow={1}>
            <Typography color="inherit" variant="h6">
              {certification.title}
            </Typography>

            <Typography variant="body2" sx={{ mt: 0.5, mb: 0.75, color: 'info.main' }}>
              {certification.organization}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed', my: 1 }} />
        <Box
          sx={{
            typography: 'body2',
            color: 'text.secondary',
            p: (theme) => theme.spacing(0, 3, 1, 3),
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Earned on: {fDate(certification.date, 'MMM YYYY')}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
