# Opus website

This is the marketing site for Opus, an iPhone app for following Apple Music artists and seeing every release they put out. It has three pages: `index.html` (landing), `privacy.html` and `support.html`. They share `styles.css`, and `main.js` runs the phone feature carousel.

- The site is static: plain HTML/CSS plus minimal vanilla JS, with no framework or build step. Keep it that way so it runs on any static host.
- The look is Apple-like: light-only, system fonts, one blue accent. Colours are the tokens at the top of `styles.css`.
- Keep a single main call to action, the "Join the beta" button in the hero. Don't add a nav button or repeat the button elsewhere.
- Don't add analytics, cookies or third-party scripts unless Paulo asks.
- Every feature description must fit on 2 lines at every width.
- Screenshots in `images/` are exported at 248 px and 496 px wide (1× and 2×), as WebP with JPEG fallbacks.
- The app icon images (`images/icon-{light,dark}-*`, `apple-touch-icon.png`, `favicon.ico`, the icon in `images/og.png`) are rendered from the app's Icon Composer file (`iOS Apps/Opus/Design/opus_icon.icon`) with Xcode's `ictool`. The hero icon follows the visitor's light/dark setting; the rest of the page stays light. `favicon.svg` is a flat vector copy with its own dark-mode colours.
- The privacy policy text is Paulo's wording. Don't rephrase it. Keep Paulo's name out of the page bodies; the footer copyright is the only place it appears.
- Every page has `<meta name="apple-itunes-app" content="app-id=1449888309">` (the Smart App Banner shows once Opus is live). At launch, swap the TestFlight links for the App Store link.
- It's hosted on GitHub Pages at https://opusapp.ca (the `CNAME` file). Canonical and Open Graph URLs are absolute on that domain.
- Link to pages without `.html` (`privacy`, `support`); GitHub Pages serves `privacy.html` at `/privacy`. The local preview uses `npx serve`, which does the same.
