import type { PaperProps } from '@mui/material/Paper';
import type { IDataAnalysisProps } from 'src/types/data-analysis';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { DataAnalysisModal } from 'src/components/data-analysis-modal';

type DataAnalysisItemProps = PaperProps & {
  project: IDataAnalysisProps;
};

export function DataAnalysisItem({ project, sx, ...other }: DataAnalysisItemProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
        <Box
          sx={{
            position: 'relative',
            cursor: 'pointer',
            '&:hover': {
              '& .overlay': {
                opacity: 1,
              },
            },
          }}
          onClick={handleOpenModal}
        >
          <Image src={project.coverUrl} alt={project.title} ratio="14/9" />
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              View Analysis
            </Typography>
          </Box>
        </Box>

        <Box sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
          <Typography
            variant="h6"
            noWrap
            onClick={handleOpenModal}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.main',
                textDecoration: 'underline',
              },
            }}
          >
            {project.title}
          </Typography>

          <Typography variant="body2" sx={{ mt: 0.5, mb: 0.75, color: 'info.main' }}>
            {project.subtitle}
          </Typography>
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
            {project.analysisSkills.map((skill, index) => (
              <React.Fragment key={`analysis-skill-${index}`}>
                {skill.models.map((model, idx) => (
                  <Label key={`model-${index}-${idx}`}>{model}</Label>
                ))}
                {skill.libraries?.map((library, idx) => (
                  <Label key={`library-${index}-${idx}`}>{library}</Label>
                ))}
                {skill.framework && <Label>{skill.framework}</Label>}
                {skill.tools?.map((tool, idx) => (
                  <Label key={`tool-${index}-${idx}`}>{tool}</Label>
                ))}
              </React.Fragment>
            ))}
          </Box>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          sx={{
            p: (theme) => theme.spacing(3),
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

      {project.htmlContentPath && (
        <DataAnalysisModal
          open={modalOpen}
          onClose={handleCloseModal}
          title={project.title}
          htmlContentPath={project.htmlContentPath}
        />
      )}
    </>
  );
}
