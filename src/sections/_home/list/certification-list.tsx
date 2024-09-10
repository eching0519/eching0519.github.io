import type { ICertificationProps } from 'src/types/certification';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';

import { _certifications } from 'src/assets/data/my-profile';

import { Image } from 'src/components/image';

import { CertificationItem } from './certification-item';

export function CertificationList() {
  const [open, setOpen] = useState(false);
  const [certification, setCertification] = useState<ICertificationProps | null>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
    setCertification(null);
  }, []);

  const imageBackdrop = (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <Image
        id={`certification-${certification?.id}`}
        alt={certification?.title}
        src={certification?.image}
      />
    </Backdrop>
  );

  const handleSelectCertification = useCallback((cert: ICertificationProps) => {
    setCertification(cert);
    setOpen(true);
  }, []);

  return (
    <>
      {imageBackdrop}
      <Box
        columnGap={4}
        display="grid"
        rowGap={{ xs: 4, md: 5 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {_certifications.map((it) => (
          <CertificationItem
            key={it.id}
            certification={it}
            onSelectCertification={() => handleSelectCertification(it)}
          />
        ))}
      </Box>
    </>
  );
}
