module.exports = {
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-astro')
  ],
}
