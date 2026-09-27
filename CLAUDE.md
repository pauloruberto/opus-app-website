# Opus website

This is the marketing site for Opus, an iPhone app for following Apple Music artists and seeing every release they put out. It has three pages: `index.html` (landing), `privacy.html` and `support.html`. They share `styles.css`, and `main.js` runs the phone feature carousel.

- The site is static: plain HTML/CSS plus minimal vanilla JS, with no framework or build step. Keep it that way so it runs on any static host.
- The look is Apple-like: light-only, system fonts, one blue accent. Colours are the tokens at the top of `styles.css`.
- Keep a single main call to action, the "Join the beta" button in the hero. Don't add a nav button or repeat the button elsewhere.
- Don't add analytics, cookies or third-party scripts unless Paulo asks.
- Every feature description must fit on 2 lines at every width.
- Screenshots in `images/` are exported at 248 px and 496 px wide (1× and 2×), as WebP with JPEG fallbacks.
- The privacy policy text is Paulo's wording. Don't rephrase it. Keep Paulo's name out of the page bodies; the footer copyright is the only place it appears.
- Once Opus is on the App Store, swap the TestFlight links for the App Store link and add `<meta name="apple-itunes-app">`.
- Once the host and domain are known, make the `og:image` and `twitter:image` URLs absolute and add `og:url`.
