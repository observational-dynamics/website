import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({                                                                                        
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Papers',
      autogenerate: {
        directory: 'papers'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Machine Learning',
      autogenerate: {
        directory: 'ml'
      }
    }]
  }), mdx(), react()],
  adapter: vercel(),
  output: 'hybrid',
  buildOptions: {
    prerender: true,
    sitemap: true,
    site: "https://website-sand-tau.vercel.app/"
  }
});