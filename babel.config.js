module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^@assets/(.+)': './assets/\\1',
          '^@shared/(.+)': './src/shared/\\1',
          '^@features/(.+)': './src/features/\\1',
          '^@entities/(.+)': './src/entities/\\1',
          '^@screens/(.+)': './src/screens/\\1',
          '^@entities$': './src/entities/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    development: {
      plugins: ['babel-plugin-styled-components'],
    },
  },
};
