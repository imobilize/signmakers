# The Sign Makers — Brand Guidelines

## Brand Identity

**Full Brand Name:** The Sign Makers by Design  
**Short Name:** The Sign Makers  
**Strapline:** —By Design—  
**Logomark:** SM (initials)

---

## Logo

### Primary Logo
- **With Strapline:** "THE SIGN MAKERS —BY DESIGN—" — use as the default full logo wherever space allows.
- **Without Strapline:** "THE SIGN MAKERS" — use when the strapline would be too small to read clearly.

### Logomark (SM badge)
A circular badge containing the letters "SM". Available in four variations:
- **Full colour** — Coral background (top half) + Faded Jade background (bottom half), Jagged Ice "SM" letters. Use as the primary favicon and social avatar.
- **Dark on white** — Dark outline circle, dark "SM" on white. Use on light backgrounds.
- **Teal on dark** — Faded Jade filled circle, Jagged Ice "SM". Use on dark/Coral backgrounds.
- **Light on light** — Jagged Ice filled circle, light "SM". Use as a subtle watermark or on Faded Jade backgrounds.

---

## Colour Palette

| Name | Hex | RGB | CMYK |
|------|-----|-----|------|
| **Coral** | `#F04F4F` | R240 G79 B79 | C0 M84 Y67 K0 |
| **Faded Jade** | `#407878` | R64 G120 B120 | C76 M37 Y50 K12 |
| **Jagged Ice** | `#C8E8E8` (approx.) | R200 G232 B232 | — |

### Usage Notes
- **Coral** (`#F04F4F`) — Primary brand accent. Use for hero backgrounds, section highlights, CTAs, and bold headings.
- **Faded Jade** (`#407878`) — Secondary brand colour. Use for borders, headings, UI elements, and contrast sections.
- **Jagged Ice** (`~#C8E8E8`) — Light teal/mint. Use for page backgrounds, pattern overlays, and as a highlight on dark surfaces.
- **Near-black** (`#1A2424`) — Use for all headings and body text. Dark teal-black that harmonizes with the Faded Jade family.
- **White** (`#FFFFFF`) — Use for text on Coral or Faded Jade backgrounds.

---

## Typography

Two complementary typefaces are used together to create a luxury, editorial feel.

### Heading Font — Playfair Display (Google Fonts)

| Weight | Use case |
|--------|----------|
| **Regular (400)** | H1, H2, hero text, section titles |

- Playfair Display conveys elegance and premium quality through its high-contrast serif letterforms.
- Always set in **Near-black `#1A2424`** on light backgrounds, or **White `#FFFFFF`** on dark/Coral backgrounds.
- Use in sentence case or title case — avoid all-caps for Playfair Display headings.
- Shopify font identifier: `playfair_display_n4`

### Body Font — Montserrat (Google Fonts)

| Weight | Use case |
|--------|----------|
| **Bold (700)** | Navigation labels, CTAs, subheadings, emphasis |
| **Medium (500)** | Card titles, labels, H3/H4 |
| **Regular (400)** | Body copy, descriptions, meta text |

- Shopify font identifier: `montserrat_n4`
- Body text uses **Montserrat Regular** or **Medium** in sentence case.
- CTAs and nav labels use **Montserrat Bold**, uppercase with generous letter-spacing (`letter-spacing: 0.05em`).

---

## Brand Patterns

A herringbone / basket-weave repeat pattern is the brand's signature background texture. Available in three colourways:

| Variant | Description |
|---------|-------------|
| **Coral pattern** | Coral lines on white — use on light sections for a warm, active feel |
| **Faded Jade pattern** | Jade lines on white — use on light sections for a professional, calm feel |
| **Jagged Ice pattern** | Very light teal lines on white — use as a subtle, near-neutral texture |

### Usage Notes
- Patterns are used at low opacity as background textures — never as a dominant foreground element.
- Always pair with solid-colour border/frame in the corresponding brand colour.
- Avoid placing the pattern behind small body text; use it behind large display text or in decorative panels only.

---

## Design System Summary

| Element | Specification |
|---------|--------------|
| Primary CTA background | Coral `#F04F4F` |
| Primary CTA text | White `#FFFFFF`, Montserrat Bold |
| Secondary CTA / border | Faded Jade `#407878` |
| Page/section backgrounds | White, Jagged Ice `#c8e8e8`, or patterned white |
| Heading colour (on white) | Faded Jade `#407878` |
| Heading colour (on Coral) | White `#FFFFFF` |
| Body text | Near-black (dark charcoal) |
| Accent / highlight | Coral `#F04F4F` |
| Font | Montserrat (Bold, Medium, Regular) |

---

*Brand Guidelines V1 — 2026. The Sign Makers by Design.*

---

## Implementation on thesignmakers.com (Hugo + Tailwind)

| Token | Tailwind class | Value |
|-------|----------------|-------|
| Coral | `primary` (`primary-50`…`primary-950`), `coral` | `#F04F4F` |
| Faded Jade | `secondary` (`secondary-50`…`secondary-950`), `jade` | `#407878` |
| Jagged Ice | `ice`, `ice-light`, `neutral` | `#C8E8E8` / `#EEF7F7` |
| Near-black | `ink` | `#1A2424` |

- Fonts: `font-sans` = Montserrat (default), `font-display` = Playfair Display. H1/H2 automatically use Playfair Display 400.
- CTAs: add `cta-label` (Montserrat Bold, uppercase, 0.05em tracking). Buttons use `rounded-lg` (8px, as on Shopify).
- Patterns: `bg-pattern-coral`, `bg-pattern-jade`, `bg-pattern-ice`, `bg-pattern-on-coral`, `bg-pattern-on-jade` (SVG tiles in `static/images/brand/`).
- Logo files: `static/images/brand/` (colour logo, logomarks). Favicons in `static/favicon/`.
- After changing classes, rebuild CSS: `npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css`.
