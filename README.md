# Pinch

A recipe scaler that runs entirely in your browser. Paste a messy ingredient list, say how many it serves (or what tin you're baking in), and every quantity rescales instantly, shown as friendly fractions instead of long decimals.

> **Level 1 · App #3** of my 20-app learning series.

## Features

- **Reads plain text.** Paste lines like `2 cups flour`, `1/2 tsp salt`, `3 eggs` and each one is split into quantity, unit and ingredient. Understands `1/2`, `1 1/2`, `1-1/2`, `1½`, `0.75`, ranges like `2-3`, and `a pinch of`.
- **Scale by servings or by tin size.** Set the original and new servings, or enter the recipe's tin and your tin (round, square or rectangle, in cm or inches) and it scales by area.
- **Friendly fractions.** Results read like a cookbook: `4 ½`, `⅓`, `⅜`, not `4.4999`.
- **Unit toggle.** *As written*, *US cups & spoons*, or *UK metric (g, ml)*.
- **Weights, not just volume.** Cups convert to grams using a typical weight per ingredient (plain flour 125 g, sugar 200 g, rice 185 g, butter 227 g, and about 30 more); other cups are treated as 240 ml.
- **Tidies awkward amounts.** 48 tsp becomes 1 cup; 13 tsp becomes 4⅓ tbsp; metric amounts round to 375 g, 450 g, 1.5 kg.
- **Sensible rounding for whole items.** Eggs and cloves round to whole numbers (with the exact figure shown underneath), onions and cans to halves.
- **Recipe library.** Save recipes with a name, servings, ingredients and method. Search across all of it. Stored in your browser's localStorage.
- **Shopping list.** Build one from several recipes, combine duplicates (1 cup + 2 cups flour = 3 cups), add your own items and tick things off.
- **Share links.** Share a recipe as a compressed link; whoever opens it sees a preview and can choose **Save this recipe to your library**. The recipe lives in the part of the URL after the `#`, so nothing is uploaded anywhere.
- **Export / Import.** Back up the whole library as a JSON file and merge it back in later.
- **Light and dark mode**, and a mobile-friendly layout with a bottom tab bar.

### Safety and limits for shared and imported data

Links and files go through one validator: name up to 120 characters, ingredients up to 6,000 characters / 150 lines, method up to 12,000 characters, servings between 0 and 1,000, at most 500 recipes, import files up to 2 MB. Decompressed links are capped at 64 KB so a small link can't expand into something huge. All recipe text is rendered as plain text, never HTML.

A share link is a copy of the recipe, not a reference to your library, so later edits aren't shared. Links point at wherever the page is served from, so host the file somewhere if you want other people to open them.

## Tech

- A single `index.html` with plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
- `localStorage` for the library, shopping list and settings.
- `CompressionStream` / `DecompressionStream` (deflate) plus base64url for share links, with an uncompressed fallback for older browsers.
- The native `<dialog>` element, CSS custom properties for theming, and `prefers-color-scheme` for the default theme.

## Run it

Open `index.html` in a modern browser. That's it.

For share links and saved data to behave like a real site, serve the folder, for example:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000`.

## Build log

- **Scaler core.** Regex-based line parser (quantity, unit, ingredient), fraction snapping to kitchen-friendly values, instant rescaling by servings.
- **Units and weights.** Everything converts through ml and grams; a per-ingredient density table turns cups into grams; tidy-up rules choose cup, tablespoon or teaspoon so the amount is something a real measure can show; whole items round sensibly.
- **Library, tins and shopping list.** Saved recipes with search, area-based tin scaling, a merged and tickable shopping list, and a light/dark, mobile-first redesign.
- **Sharing.** Compressed share links, a validator with size limits, a preview-and-save flow for incoming recipes, and JSON export/import.

## Licence

[MIT](LICENSE)
