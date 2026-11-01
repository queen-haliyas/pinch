# Scale & Simmer (Pinch)

One app for all your recipes. Scale any recipe to any number of people, cook from it step by step, plan the week and shop from one merged list. Runs entirely in your browser and installs on your phone like an app.

> **Level 1 · App #3** of my 20-app learning series. This is Pinch grown up: the original Pinch is still here as [`pinch-classic.html`](pinch-classic.html).

## What it does

- **Search home.** Type a few letters (`banana`) and a dropdown lists matching recipes, by name or ingredient.
- **Scale to any number of people.** Every amount rescales, as friendly fractions, in As written, Metric or US cups. Turn on *Show the maths* to see the working.
- **Vegan version of every recipe.** One tap to switch. Your own recipes can get one written by AI.
- **18 starter recipes** plus your own. Add by form, by pasting a list, or with AI (see below).
- **Tin and dish size.** Works for any recipe: enter the recipe's tin and yours (round, square, rectangle, cm or inches) and it scales by area.
- **Cook mode.** Big text, one step at a time, timers found in the method with a beep, an ingredients panel, Read aloud, and the screen stays awake.
- **Plan tab.** Pick meals for the week; get one shopping list with matching items added together, tick-offs, copy, and a total cost.
- **Pantry tab.** List what you have; get recipes ranked by how much you already own, scaled to your numbers.
- **Cost per portion, nutrition and allergens.** Prices are yours; calories are a rough estimate; allergens are matched by ingredient name only, so always check labels.
- **Converter.** Cups to grams for butter, flour and more, oven temperatures, and a pack-size helper.
- **Share links.** Send any recipe as a link (compatible with the old Pinch links). Nothing is uploaded: the recipe is in the part of the URL after `#`.
- **Backup.** Export and import your recipes as JSON (also reads old Pinch exports).
- **Light and dark mode**, and it works offline once opened.

## AI features (optional, free)

Photo to recipe, importing a recipe page, pasted-text import, AI vegan versions and price guesses use Google Gemini with **your own free key**:

1. Open Settings (the gear), follow the link to Google AI Studio and create a key.
2. Paste it in and press Save, then Test.

The key is stored only in your browser (`localStorage`). It is never in the code, so it is safe to keep this repo public. Photos and text you send go to Google; free-tier data may be used by Google to improve its products, so don't send anything private. The model name is editable in Settings in case Google renames or retires it.

AI output can be wrong. Check amounts, times and allergens before you serve it.

## Moving from Pinch

On first open, recipes saved in the old Pinch (same browser) are brought across automatically. The old data is left untouched. The old shopping list isn't carried over; use the Plan tab. If you use a different browser or device, export from `pinch-classic.html` and import the file in Settings.

## Tech

- A single `index.html` with plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
- `localStorage` for recipes, plans, prices and settings. `CompressionStream` for share links.
- `manifest.webmanifest` and `sw.js` make it installable and available offline. Bump `CACHE` in `sw.js` when you change files.
- Gemini is called straight from the browser with your key.

## Run it

Open `index.html`, or serve the folder (`python -m http.server 8000`) and visit `http://localhost:8000`. Install and offline need `https://` or `localhost`, which GitHub Pages provides.

## Licence

[MIT](LICENSE)
