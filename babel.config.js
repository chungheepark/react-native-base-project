module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@constants': './src/constants',
          '@assets': './assets',
        },
      },
    ],
  ],
};
