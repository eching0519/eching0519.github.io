import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useTheme, useMediaQuery } from '@mui/material';

import { Iconify } from '../iconify';

// ----------------------------------------------------------------------

type DataAnalysisModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  htmlContentPath: string;
};

export function DataAnalysisModal({
  open,
  onClose,
  title,
  htmlContentPath,
}: DataAnalysisModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenInNewTab = () => {
    window.open(htmlContentPath, '_blank');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isMobile && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<Iconify icon="carbon:launch" />}
              onClick={handleOpenInNewTab}
              sx={{ mr: 1 }}
            >
              Open in New Tab
            </Button>
          )}
          <IconButton onClick={onClose} size="small">
            <Iconify icon="carbon:close" />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent
        sx={{
          px: 0,
          pb: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          component="iframe"
          src={htmlContentPath}
          title={`${title} - Data Analysis Report`}
          sx={{
            width: '100%',
            height: '70vh',
            border: 'none',
            borderRadius: 1,
          }}
        />
      </DialogContent>

      {isMobile && (
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Iconify icon="carbon:launch" />}
            onClick={handleOpenInNewTab}
            fullWidth
          >
            Open in New Tab
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
