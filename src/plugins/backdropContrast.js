export default function () {
  return function ({ config, matchUtilities, theme, variants }) {
    matchUtilities(
      {
        'backdrop-contrast': (value) => {
          return {
            '--tw-backdrop-contrast': `contrast(${value})`,
            ...(config('mode') === 'jit' ? { 'backdrop-filter': 'var(--tw-backdrop-filter)' } : {}),
          }
        },
      },
      {
        values: theme('backdropContrast'),
        variants: variants('backdropContrast'),
        type: 'any',
      }
    )
  }
}
