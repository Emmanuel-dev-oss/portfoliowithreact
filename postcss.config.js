import { Component } from 'react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅ use new package
    autoprefixer: {},
  },
}

