import { create } from '@storybook/theming';
import './tailwind.css';

const lightTheme = create({
  base: 'light',
  appBg: '#f9fafb',
  colorPrimary: 'red',
  colorSecondary: '#0369a1',
  appContentBg: '#ffffff',
  barBg: '#ffffff',
  brandTitle: 'Tailwind Components',
});
const darkTheme = create({
  base: 'dark',
  appBg: '#111827',
  colorSecondary: '#0ea5e9',
  colorPrimary: 'red',
  appContentBg: '#1f2937',
  barBg: '#1f2937',
  brandTitle: 'Tailwind Components',
});

const parameters = {
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};

const preview = {
  parameters,
};

export default preview;
