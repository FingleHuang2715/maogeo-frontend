# CLAUDE.md - maogeo-frontend

Next.js 16 (App Router) decoupled frontend.

## Key Rules
- Avoid percent-encoded folder names in `src/app/`.
- Use ES Modules (`next.config.mjs`) for configuration with clean 301 redirects.
- Ensure all component CSS files in `src/styles/` are properly imported in `src/app/globals.css`.
