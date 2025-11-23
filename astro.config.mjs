import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    starlight({
      title: 'unmuter.org',
      description: 'When every oversight body stayed silent. We record what happened.',

      sidebar: [
        {
          label: 'SBS Harness Case',
          items: [
            { label: 'Case Summary', link: '/sbs/summary' },
            { label: 'Timeline (2022–2025)', link: '/sbs/timeline' },
            { label: 'Documents Archive', link: '/sbs/documents' },
            { label: 'Oversight Chain', link: '/sbs/oversight' },
            { label: 'Policy & Legal Map', link: '/sbs/policy-map' },
            { label: 'Impact on Our Family', link: '/sbs/impact' },
          ],
        },

        {
          label: 'Institutions',
          items: [
            { label: 'Ombudsman WA', link: '/institutions/ombudsman' },
            { label: 'EOC WA', link: '/institutions/eoc' },
            { label: 'AHRC (DDA)', link: '/institutions/ahrc' },
            { label: 'PTA / SBS', link: '/institutions/pta-sbs' },
          ],
        },

        {
          label: 'Theory & Crosslinks',
          items: [
            { label: 'How Oversight Fails in Practice', link: '/analysis/oversight-failure' },
            { label: 'Link to unseenbeings: Illusion Matrix', link: '/crosslinks/matrix' },
          ],
        },

        {
          label: 'About',
          items: [
            { label: 'About unmuter', link: '/about' },
            { label: 'Methodology', link: '/methodology' },
          ],
        },
      ],

      customCss: ['./src/styles/starlight.css'],
    }),

    sitemap({
      filter: (page) => typeof page?.url === 'string',
    }),
  ],
});