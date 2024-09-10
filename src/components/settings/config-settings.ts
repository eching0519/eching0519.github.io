import { defaultFont } from "src/theme/core";

import type { SettingsState } from "./types";

export const defaultSettings: SettingsState = {
  colorScheme: 'light',
  direction: 'ltr',
  primaryColor: 'preset3',
  fontFamily: defaultFont,
} as const;
