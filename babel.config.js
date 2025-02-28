module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    '@fullstory/react-native',
    [
      '@fullstory/babel-plugin-annotate-react',
      {
        native: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
