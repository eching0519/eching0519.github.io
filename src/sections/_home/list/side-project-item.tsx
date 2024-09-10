import type { PaperProps } from '@mui/material/Paper';
import type { ISideProjectProps } from 'src/types/side-project';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';

type SideProjectItemProps = PaperProps & {
  project: ISideProjectProps;
};

export function SideProjectItem({ project, sx, ...other }: SideProjectItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Image src={project.coverUrl} alt={project.title} ratio="14/9" />

      <Box sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
        <Link
          component={RouterLink}
          href={project.links == null ? '#' : (project.links.at(0)?.url ?? '#')}
          color="inherit"
          variant="h6"
          noWrap
        >
          {project.title}
        </Link>

        <Typography variant="body2" sx={{ mt: 0.5, mb: 0.75, color: 'info.main' }}>
          {project.subtitle}
        </Typography>

        {project.links && (
          <Stack
            spacing={1}
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
          >
            {project.links?.map((it, index) => (
              <Link
                key={`side-project-link-${index}`}
                href={it.url}
                variant="subtitle2"
                sx={{ color: 'text.primary' }}
                target="_blank"
              >
                {it.title}
              </Link>
            ))}
          </Stack>
        )}
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack
        gap={0.8}
        sx={{
          typography: 'body2',
          color: 'text.secondary',
          p: (theme) => theme.spacing(2, 3, 3, 3),
        }}
      >
        <Box gap={1} display="flex" flexWrap="wrap">
          <Label color="primary">{project.category}</Label>
          {project.pending && <Label color="error">Pending</Label>}
          {project.inProgress && <Label color="secondary">In Progress</Label>}
          {project.technicalSkills.map((it, index) =>
            it.skills.map((skill, idx) => (
              <Label key={`project-tech-${index}-${idx}`}>{skill}</Label>
            ))
          )}
        </Box>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: (theme) => theme.spacing(1, 3, 1, 3), textAlign: 'end' }}>
        <Typography variant="caption" color="text.disabled">
          Last updated: {fDate(project.lastUpdatedAt)}
        </Typography>
      </Box>

      <Box
        sx={{
          p: (theme) => theme.spacing(1, 3, 3, 3),
          flexGrow: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {project.description}
        </Typography>
      </Box>

      {project.isAcademicProject && (
        <Box
          sx={{
            px: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="caption" color="text.disabled">
            This project is part of an academic initiative.
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
