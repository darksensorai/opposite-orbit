// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
	sanity({
		projectId: '2freqnce',
		dataset: 'production',
		useCdn: false,
		apiVersion: "2025-02-10",
		studioBasePath: '/studio',
		stega: {
			studioUrl: "/studio",
			// previewUrls: {
			// 	published: (id) => `/blog/${id}`,
				}
			}
		})
	], 
	react()]
});
