import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';

import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { defaultSettings } from 'src/components/settings';

import { createTheme } from './create-theme';
import { schemeConfig } from './scheme-config';
import { RTL } from './with-settings/right-to-left';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const theme = createTheme(defaultSettings);

  return (
    <CssVarsProvider
      theme={theme}
      defaultMode={schemeConfig.defaultMode}
      modeStorageKey={schemeConfig.modeStorageKey}
    >
      <CssBaseline />
      <RTL direction={defaultSettings.direction}>{children}</RTL>
    </CssVarsProvider>
  );
}
