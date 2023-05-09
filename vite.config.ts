import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default defineConfig(({command, mode, ssrBuild}) => {
//   if (mode =="production"){
//     return {
//       plugins: [react()],
//       base: "/vite/",
//     }
//   }
//   return {
//     plugins: [react()],
//     base: "/vite/",
//     clearSreen: false,
//     logLevel: "info",
//     envDir: "direnv",
//     server:{
//       port: 3000,
//       strictPort: true,
//     },
  
//     preview :{
//       port:8000
//     }
//   }
// });
