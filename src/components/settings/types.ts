import type { ThemeDirection, ThemeColorScheme } from "src/theme/types";

export type SettingsState = {
  fontFamily: string;
  direction: ThemeDirection;
  colorScheme: ThemeColorScheme;
  primaryColor: 'default' | 'preset1' | 'preset2' | 'preset3' | 'preset4' | 'preset5';
};
