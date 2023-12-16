import { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, { plugins: [] });
  },
};

export default config;
