import resolve from '@rollup/plugin-node-resolve';

 export default {
 input: 'DisplayMap.tsx',
 output: {
     dir: './out/',
     format: 'iife'
 },
 // filter functions in the YAML Configuration for the Vector Tiles
 onwarn: function (message) {
     if (/mapsjs.bundle.js/.test(message) && /Use of eval/.test(message)) return;
     console.error(message);
 },
 plugins: [resolve()]
 };