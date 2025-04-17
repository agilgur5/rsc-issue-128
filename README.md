# `react-signature-canvas` issue 128 reproduction

This is a minimal Next.js reproduction for [`react-signature-canvas` issue 128](https://github.com/agilgur5/react-signature-canvas/issues/128). See a live demo [on StackBlitz](https://stackblitz.com/~/github.com/agilgur5/rsc-issue-128). See a maintainer summary at https://github.com/agilgur5/react-signature-canvas/issues/128#issuecomment-2786913293

## Steps to Reproduce

1. Run `npm run dev`
1. Draw a signature and click the "Trim" button
1. Get a runtime error: `TypeError: trim_canvas__WEBPACK_IMPORTED_MODULE_8__ is not a function`

## Workarounds

The runtime error no longer appears when using a CJS/UMD build.

1. Replacing the ESM `import`:

   ```ts
   import SignatureCanvas from 'react-signature-canvas'
   ```

   with the CJS `require`:

   ```ts
   const { SignatureCanvas } = require('react-signature-canvas')
   ```

   This uses the UMD build instead of the ESM build.

1. Using an older version of `react-signature-canvas`, `1.0.7`.
   This is a functionally equivalent version, but _only_ has a UMD build (its build system pre-dates the ESM spec).

## Other Troubleshooting

Still has the same error when:

1. Using Next.js 13, 14, 15, and `canary`
1. Using the App Router instead of the Pages Router
1. Setting `swcMinify: false` in `next.config.js`
1. Modifying `esModuleInterop` in `tsconfig.json`

## Other Bundlers

1. The [Webpack reproduction](https://stackblitz.com/edit/rsc-issue-128-webpack) has no error.
1. The [Parcel reproduction](https://codesandbox.io/p/sandbox/rsc-issue-128-parcel-4hqrwm) has no error.
1. The [Vite reproduction](https://stackblitz.com/edit/rsc-issue-128-vite) has a similar error to Next.js, but only with `vite dev` and _not_ with `vite build && vite preview`.
