// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/build-your-own-AIChatbot/',
  integrations: [
    // Must run before Starlight so ```mermaid fences are transformed.
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'Build Your Own AI Chatbot',
      description:
        'A free, build-along guide to a self-hosted SEA-LION 9B + RAG Taglish assistant — the Apolaki Solar Brain — at ~₱0 per query.',
      logo: { src: './src/assets/apolaki-logo.svg', alt: 'Apolaki' },
      customCss: ['./src/styles/apolaki.css'],
      social: [
        { icon: 'external', label: 'Resume', href: 'https://sreenivas-sadhu-prabhakara.github.io/resume/' },
      ],
      sidebar: [
        { label: 'Start here', items: [
          { label: 'Introduction', link: '/' },
          { label: '00 · Prerequisites', link: '/00-prerequisites/' },
        ]},
        { label: 'Build the brain', items: [
          { label: '01 · Serving stack', link: '/01-serving-stack/' },
          { label: '02 · Data layer', link: '/02-data-layer/' },
          { label: '03 · Ingestion & RAG', link: '/03-ingestion-rag/' },
          { label: '04 · The solar brain', link: '/04-solar-brain/' },
          { label: '05 · Guardrails', link: '/05-guardrails/' },
          { label: '06 · Chat service', link: '/06-chat-service/' },
        ]},
        { label: 'Make it shine', items: [
          { label: '07 · Taglish voice LoRA', link: '/07-taglish-lora/' },
          { label: '08 · Go live', link: '/08-go-live/' },
        ]},
        { label: 'Reference', items: [
          { label: 'Appendix', link: '/99-appendix/' },
          { label: 'Contact', link: '/contact/' },
        ]},
      ],
    }),
  ],
});
