# Elyvora Studio portfolio

A responsive, static portfolio with a black-and-gold visual theme and nine interactive website demonstrations. The demos include photo-led banners, responsive navigation, and sample inquiry, reservation, and order-request flows. They run locally in sandboxed `srcdoc` previews; no framework, build step, or server-side application is required.

## Personalize the site

1. Open `config.js` and update the brand, contact details, and image paths.
2. Add the portrait image at `assets/portrait.png` (or keep `.jpg` if you prefer).
3. Add the certificate image at `assets/certificate.png`.
4. Keep the filenames and paths in `config.js` in sync if you choose different names.

The portrait and certificate files were not present in the supplied project when this portfolio was prepared. Until they are added, the site displays branded placeholders in their place.

The contact form validates its fields and opens a pre-filled email in the visitor's email application. It does not send messages to a server. A hosted form service or custom backend is needed for direct website submissions.

The project previews do not collect payment information or process payments. Sample inquiry and newsletter forms only show local confirmation messages; they do not send or store submissions. Demo contact email addresses use the reserved `example.org` domain and are fictional. Demo banner photography is loaded from Unsplash and requires an internet connection; the layouts retain their dark-gold fallback backgrounds if the photos are unavailable.

## Preview locally

Open `index.html` in a modern browser. The site uses relative file paths and can also be served from a local static-file server if preferred.

## Publish with GitHub Pages

1. Create a GitHub repository for the website and add the files in this folder to the repository root.
2. Add the `assets` folder with the portrait and certificate files before publishing.
3. Push the default branch to GitHub.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the default branch and the `/(root)` folder, then save.
7. Wait for the Pages deployment workflow to finish. GitHub will show the published URL in the Pages settings.

This project is prepared for GitHub Pages, but it has not been published. No GitHub repository or deployment was available during development.
